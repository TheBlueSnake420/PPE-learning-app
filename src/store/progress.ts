import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { Tier } from '@/content/types';
import { boostAfterSession, boostMultiplier, type Boost } from '@/lib/boost';
import { addDays, today } from '@/lib/dates';
import { perkGains, perksFor, rankFor, type Rank } from '@/lib/ranks';
import { REMINDER_TIMES } from '@/lib/reminders';
import { freezeStatus, pruneFrozenDays, streakAfterActivity, streakOn, type FreezeStatus } from '@/lib/streak';

export const XP_PER_REVIEW_SESSION = 5;

/** Lesson XP at 99% first-try accuracy, per tier; the range starts at LESSON_XP_MIN. */
export const LESSON_XP_MAX: Record<Tier, number> = { basics: 20, advanced: 25 };
export const LESSON_XP_MIN = 10;

/**
 * XP for finishing a lesson, before any boost. It rises in a straight line
 * with first-try accuracy, from 10 XP at 0% to 20 XP (Basics) or 25 XP
 * (Advanced) at 99%. A perfect lesson earns the top amount plus
 * `perfectBonus`, which depends on the rank (TIER_PERKS in ranks.ts).
 */
export function lessonXp(accuracy: number, tier: Tier, perfectBonus: number): number {
  const max = LESSON_XP_MAX[tier];
  if (accuracy >= 1) return max + perfectBonus;
  return LESSON_XP_MIN + Math.round(Math.max(0, accuracy) * (max - LESSON_XP_MIN));
}

export const DAILY_GOALS = [
  { xp: 20, label: 'Casual' },
  { xp: 30, label: 'Regular' },
  { xp: 50, label: 'Serious' },
  { xp: 80, label: 'Intense' },
];

/**
 * Spaced repetition for mistakes (Leitner boxes). A wrong answer puts the
 * exercise in box 0, due today. Each correct review moves it up a box and
 * schedules it 1, 3, then 7 days out; one more correct review removes it.
 */
const REVIEW_INTERVALS_DAYS = [1, 3, 7];

export interface LessonRecord {
  /** Best first-try accuracy, 0-1. */
  bestAccuracy: number;
  timesCompleted: number;
  lastCompleted: string;
}

export interface ReviewItem {
  courseId: string;
  exerciseId: string;
  box: number;
  due: string;
}

export interface SessionResult {
  /** XP added, after the boost. */
  xpEarned: number;
  /** The boost multiplier applied to this session (1 if none). */
  multiplier: number;
  /** The boost running after this session, which it started or raised; null while boosts are locked. */
  newBoost: Boost | null;
  /** How long that boost lasts, in minutes. */
  boostMinutes: number;
  /** The perfect-lesson bonus included in the XP (before the boost), 0 if none. */
  perfectBonus: number;
  /** Set when this session moved the learner up to a new rank. */
  rankUp: Rank | null;
  /** Rewards the new rank unlocked, e.g. "XP boosts up to 7x". */
  rewards: string[];
  streak: number;
  streakExtended: boolean;
  /** Set when a streak freeze covered missed days to keep the streak going. */
  freezeUsed: boolean;
}

interface ProgressState {
  totalXp: number;
  xpByDay: Record<string, number>;
  dailyGoal: number;
  streak: number;
  longestStreak: number;
  lastActiveDay: string | null;
  /** Missed days covered by a streak freeze (recent ones only). */
  frozenDays: string[];
  /** Keyed by `${courseId}/${lessonId}`. */
  lessons: Record<string, LessonRecord>;
  /** Keyed by `${courseId}/${exerciseId}`. */
  reviews: Record<string, ReviewItem>;
  /** Streak reminder notifications. */
  remindersEnabled: boolean;
  /** Enabled reminder times ("HH:MM"), a subset of REMINDER_TIMES. */
  reminderTimes: string[];
  /** The XP boost earned from recent lessons; may have expired. */
  boost: Boost | null;
  /** Courses the learner has finished, with the day they were marked. */
  completedCourses: Record<string, string>;
  /** Display name on the profile. */
  profileName: string;
  /** XP the online account earned on other devices; counts towards the rank. */
  otherDevicesXp: number;

  /** Record one answer. In a review session, correct answers promote the item. */
  recordAnswer: (courseId: string, exerciseId: string, correct: boolean, isReview: boolean) => void;
  completeLesson: (courseId: string, lessonId: string, tier: Tier, accuracy: number) => SessionResult;
  completeReview: (correctCount: number) => SessionResult;
  setDailyGoal: (xp: number) => void;
  setRemindersEnabled: (enabled: boolean) => void;
  toggleReminderTime: (time: string) => void;
  setCourseCompleted: (courseId: string, completed: boolean) => void;
  setProfileName: (name: string) => void;
  /** Resets learning progress; settings, name and completed courses stay. */
  resetProgress: () => void;
  /** Drop saved lessons and review items whose content no longer exists. */
  pruneOrphans: (validLessons: Set<string>, validExercises: Set<string>) => void;
}

const initialData = {
  totalXp: 0,
  xpByDay: {} as Record<string, number>,
  dailyGoal: 30,
  streak: 0,
  longestStreak: 0,
  lastActiveDay: null as string | null,
  frozenDays: [] as string[],
  lessons: {} as Record<string, LessonRecord>,
  reviews: {} as Record<string, ReviewItem>,
  remindersEnabled: true,
  reminderTimes: [...REMINDER_TIMES],
  boost: null as Boost | null,
  completedCourses: {} as Record<string, string>,
  profileName: '',
  otherDevicesXp: 0,
};

export const lessonKey = (courseId: string, lessonId: string) => `${courseId}/${lessonId}`;
export const reviewKey = (courseId: string, exerciseId: string) => `${courseId}/${exerciseId}`;

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => {
      /**
       * Adds XP (multiplied by any running boost), starts or raises the boost and
       * updates the streak; shared by lessons and reviews. The running boost and
       * the streak freeze follow the rank before the session; the new boost
       * follows the rank after it, so a session that unlocks better boosts can
       * already use them.
       */
      const finishSession = (baseXp: number, perfectBonus: number): SessionResult => {
        const state = get();
        const now = Date.now();
        const day = today();
        const perksBefore = perksFor(totalXpOf(state));
        const multiplier = boostMultiplier(state.boost, now, perksBefore);
        const xp = Math.round(baseXp * multiplier);
        const perksAfter = perksFor(totalXpOf(state) + xp);
        const newBoost = boostAfterSession(state.boost, now, perksAfter);
        const { streak, frozen } = streakAfterActivity(state, day, perksBefore.streakFreeze);
        const before = rankFor(totalXpOf(state));
        const after = rankFor(totalXpOf(state) + xp);
        set({
          totalXp: state.totalXp + xp,
          xpByDay: { ...state.xpByDay, [day]: (state.xpByDay[day] ?? 0) + xp },
          streak,
          longestStreak: Math.max(state.longestStreak, streak),
          lastActiveDay: day,
          frozenDays: frozen.length > 0 ? pruneFrozenDays([...state.frozenDays, ...frozen], day) : state.frozenDays,
          boost: newBoost,
        });
        return {
          xpEarned: xp,
          multiplier,
          newBoost,
          boostMinutes: perksAfter.boostMinutes,
          perfectBonus,
          rankUp: after.index > before.index ? after.rank : null,
          rewards: perkGains(perksBefore, perksAfter),
          streak,
          streakExtended: state.lastActiveDay !== day,
          freezeUsed: frozen.length > 0,
        };
      };

      return {
        ...initialData,

        recordAnswer: (courseId, exerciseId, correct, isReview) => {
          const key = reviewKey(courseId, exerciseId);
          const reviews = { ...get().reviews };
          const existing = reviews[key];
          if (!correct) {
            reviews[key] = { courseId, exerciseId, box: 0, due: today() };
          } else if (existing && isReview) {
            const box = existing.box + 1;
            if (box > REVIEW_INTERVALS_DAYS.length) {
              delete reviews[key];
            } else {
              reviews[key] = { ...existing, box, due: addDays(today(), REVIEW_INTERVALS_DAYS[box - 1]) };
            }
          } else {
            return;
          }
          set({ reviews });
        },

        completeLesson: (courseId, lessonId, tier, accuracy) => {
          const key = lessonKey(courseId, lessonId);
          const prev = get().lessons[key];
          set({
            lessons: {
              ...get().lessons,
              [key]: {
                bestAccuracy: Math.max(prev?.bestAccuracy ?? 0, accuracy),
                timesCompleted: (prev?.timesCompleted ?? 0) + 1,
                lastCompleted: today(),
              },
            },
          });
          const { perfectBonus } = perksFor(totalXpOf(get()));
          return finishSession(lessonXp(accuracy, tier, perfectBonus), accuracy >= 1 ? perfectBonus : 0);
        },

        completeReview: (correctCount) => finishSession(XP_PER_REVIEW_SESSION + correctCount, 0),

        setDailyGoal: (xp) => set({ dailyGoal: xp }),

        setRemindersEnabled: (enabled) => set({ remindersEnabled: enabled }),

        toggleReminderTime: (time) => {
          const times = get().reminderTimes;
          set({ reminderTimes: times.includes(time) ? times.filter((t) => t !== time) : [...times, time].sort() });
        },

        setCourseCompleted: (courseId, completed) => {
          const completedCourses = { ...get().completedCourses };
          if (completed) completedCourses[courseId] = today();
          else delete completedCourses[courseId];
          set({ completedCourses });
        },

        setProfileName: (name) => set({ profileName: name }),

        resetProgress: () => {
          const { dailyGoal, remindersEnabled, reminderTimes, completedCourses, profileName } = get();
          set({ ...initialData, dailyGoal, remindersEnabled, reminderTimes, completedCourses, profileName });
        },

        pruneOrphans: (validLessons, validExercises) => {
          const { lessons, reviews } = get();
          const keptLessons = Object.fromEntries(Object.entries(lessons).filter(([k]) => validLessons.has(k)));
          const keptReviews = Object.fromEntries(Object.entries(reviews).filter(([k]) => validExercises.has(k)));
          if (
            Object.keys(keptLessons).length !== Object.keys(lessons).length ||
            Object.keys(keptReviews).length !== Object.keys(reviews).length
          ) {
            set({ lessons: keptLessons, reviews: keptReviews });
          }
        },
      };
    },
    {
      name: 'ppe-progress',
      version: 1,
      storage: createJSONStorage(() => AsyncStorage),
      partialize: ({
        totalXp,
        xpByDay,
        dailyGoal,
        streak,
        longestStreak,
        lastActiveDay,
        frozenDays,
        lessons,
        reviews,
        remindersEnabled,
        reminderTimes,
        boost,
        completedCourses,
        profileName,
        otherDevicesXp,
      }) => ({
        totalXp,
        xpByDay,
        dailyGoal,
        streak,
        longestStreak,
        lastActiveDay,
        frozenDays,
        lessons,
        reviews,
        remindersEnabled,
        reminderTimes,
        boost,
        completedCourses,
        profileName,
        otherDevicesXp,
      }),
    },
  ),
);

/** XP for the rank: this device's XP plus what the online account earned on other devices. */
export function totalXpOf(state: Pick<ProgressState, 'totalXp' | 'otherDevicesXp'>): number {
  return state.totalXp + state.otherDevicesXp;
}

type StreakFields = Pick<ProgressState, 'streak' | 'lastActiveDay' | 'frozenDays' | 'totalXp' | 'otherDevicesXp'>;

/**
 * The streak as it stands today: it lapses once a lesson today could no longer
 * continue it (a day was missed and no streak freeze can cover it).
 */
export function currentStreak(state: StreakFields): number {
  return streakOn(state, today(), perksFor(totalXpOf(state)).streakFreeze);
}

/** This week's streak freeze: locked below the rank that unlocks it, ready, or used. */
export function currentFreezeStatus(state: StreakFields): FreezeStatus {
  return freezeStatus(state, today(), perksFor(totalXpOf(state)).streakFreeze);
}

export function dueReviews(reviews: Record<string, ReviewItem>): ReviewItem[] {
  const day = today();
  return Object.values(reviews).filter((r) => r.due <= day);
}

/** Due review items, leaving out courses marked as completed. */
export function dueActiveReviews(
  reviews: Record<string, ReviewItem>,
  completedCourses: Record<string, string>,
): ReviewItem[] {
  return dueReviews(reviews).filter((r) => !completedCourses[r.courseId]);
}

export interface CourseReviewCount {
  courseId: string;
  due: number;
  total: number;
}

/** Review items per course: how many are due today and how many are saved in total. */
export function reviewCountsByCourse(reviews: Record<string, ReviewItem>): Record<string, CourseReviewCount> {
  const day = today();
  const counts: Record<string, CourseReviewCount> = {};
  for (const r of Object.values(reviews)) {
    const c = (counts[r.courseId] ??= { courseId: r.courseId, due: 0, total: 0 });
    c.total++;
    if (r.due <= day) c.due++;
  }
  return counts;
}

/**
 * True once saved progress has been loaded from storage. On the web every page is pre-rendered
 * without saved progress, so the first render there must also say false (or React reports a
 * hydration mismatch); the effect below switches to true right after.
 */
export function useHydrated(): boolean {
  const [hydrated, setHydrated] = useState(() => Platform.OS !== 'web' && useProgress.persist.hasHydrated());
  useEffect(() => {
    if (hydrated) return;
    const unsub = useProgress.persist.onFinishHydration(() => setHydrated(true));
    if (useProgress.persist.hasHydrated()) setHydrated(true);
    return unsub;
  }, [hydrated]);
  return hydrated;
}
