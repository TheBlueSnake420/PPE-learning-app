import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { boostAfterLesson, boostMultiplier, type Boost } from '@/lib/boost';
import { addDays, today } from '@/lib/dates';
import { rankFor, type Rank } from '@/lib/ranks';
import { REMINDER_TIMES } from '@/lib/reminders';

export const XP_PER_LESSON = 10;
export const XP_PERFECT_BONUS = 5;
export const XP_PER_REVIEW_SESSION = 5;

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
  /** The boost running after this session; set when a lesson raised it. */
  newBoost: Boost | null;
  /** Set when this session moved the learner up to a new rank. */
  rankUp: Rank | null;
  streak: number;
  streakExtended: boolean;
}

interface ProgressState {
  totalXp: number;
  xpByDay: Record<string, number>;
  dailyGoal: number;
  streak: number;
  longestStreak: number;
  lastActiveDay: string | null;
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

  /** Record one answer. In a review session, correct answers promote the item. */
  recordAnswer: (courseId: string, exerciseId: string, correct: boolean, isReview: boolean) => void;
  completeLesson: (courseId: string, lessonId: string, accuracy: number) => SessionResult;
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
  lessons: {} as Record<string, LessonRecord>,
  reviews: {} as Record<string, ReviewItem>,
  remindersEnabled: true,
  reminderTimes: [...REMINDER_TIMES],
  boost: null as Boost | null,
  completedCourses: {} as Record<string, string>,
  profileName: '',
};

export const lessonKey = (courseId: string, lessonId: string) => `${courseId}/${lessonId}`;
export const reviewKey = (courseId: string, exerciseId: string) => `${courseId}/${exerciseId}`;

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => {
      /**
       * Adds XP (multiplied by any running boost) and updates the streak; shared by
       * lessons and reviews. Only lessons raise the boost.
       */
      const finishSession = (baseXp: number, raisesBoost: boolean): SessionResult => {
        const state = get();
        const now = Date.now();
        const day = today();
        const multiplier = boostMultiplier(state.boost, now);
        const xp = Math.round(baseXp * multiplier);
        const newBoost = raisesBoost ? boostAfterLesson(state.boost, now) : null;
        let streak = state.streak;
        let streakExtended = false;
        if (state.lastActiveDay !== day) {
          streak = state.lastActiveDay === addDays(day, -1) ? state.streak + 1 : 1;
          streakExtended = true;
        }
        const before = rankFor(state.totalXp);
        const after = rankFor(state.totalXp + xp);
        set({
          totalXp: state.totalXp + xp,
          xpByDay: { ...state.xpByDay, [day]: (state.xpByDay[day] ?? 0) + xp },
          streak,
          longestStreak: Math.max(state.longestStreak, streak),
          lastActiveDay: day,
          ...(newBoost ? { boost: newBoost } : {}),
        });
        return {
          xpEarned: xp,
          multiplier,
          newBoost,
          rankUp: after.index > before.index ? after.rank : null,
          streak,
          streakExtended,
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

        completeLesson: (courseId, lessonId, accuracy) => {
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
          return finishSession(XP_PER_LESSON + (accuracy === 1 ? XP_PERFECT_BONUS : 0), true);
        },

        completeReview: (correctCount) => finishSession(XP_PER_REVIEW_SESSION + correctCount, false),

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
        lessons,
        reviews,
        remindersEnabled,
        reminderTimes,
        boost,
        completedCourses,
        profileName,
      }) => ({
        totalXp,
        xpByDay,
        dailyGoal,
        streak,
        longestStreak,
        lastActiveDay,
        lessons,
        reviews,
        remindersEnabled,
        reminderTimes,
        boost,
        completedCourses,
        profileName,
      }),
    },
  ),
);

/** The streak as it stands today: it lapses if neither today nor yesterday had activity. */
export function currentStreak(state: Pick<ProgressState, 'streak' | 'lastActiveDay'>): number {
  const day = today();
  if (state.lastActiveDay === day || state.lastActiveDay === addDays(day, -1)) return state.streak;
  return 0;
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

/** True once saved progress has been loaded from storage. */
export function useHydrated(): boolean {
  const [hydrated, setHydrated] = useState(() => useProgress.persist.hasHydrated());
  useEffect(() => {
    if (hydrated) return;
    const unsub = useProgress.persist.onFinishHydration(() => setHydrated(true));
    if (useProgress.persist.hasHydrated()) setHydrated(true);
    return unsub;
  }, [hydrated]);
  return hydrated;
}
