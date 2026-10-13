import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { addDays, today } from '@/lib/dates';

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
  xpEarned: number;
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

  /** Record one answer. In a review session, correct answers promote the item. */
  recordAnswer: (courseId: string, exerciseId: string, correct: boolean, isReview: boolean) => void;
  completeLesson: (courseId: string, lessonId: string, accuracy: number) => SessionResult;
  completeReview: (correctCount: number) => SessionResult;
  setDailyGoal: (xp: number) => void;
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
};

export const lessonKey = (courseId: string, lessonId: string) => `${courseId}/${lessonId}`;
export const reviewKey = (courseId: string, exerciseId: string) => `${courseId}/${exerciseId}`;

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => {
      /** Adds XP and updates the streak; shared by lessons and reviews. */
      const finishSession = (xp: number): SessionResult => {
        const state = get();
        const day = today();
        let streak = state.streak;
        let streakExtended = false;
        if (state.lastActiveDay !== day) {
          streak = state.lastActiveDay === addDays(day, -1) ? state.streak + 1 : 1;
          streakExtended = true;
        }
        set({
          totalXp: state.totalXp + xp,
          xpByDay: { ...state.xpByDay, [day]: (state.xpByDay[day] ?? 0) + xp },
          streak,
          longestStreak: Math.max(state.longestStreak, streak),
          lastActiveDay: day,
        });
        return { xpEarned: xp, streak, streakExtended };
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
          return finishSession(XP_PER_LESSON + (accuracy === 1 ? XP_PERFECT_BONUS : 0));
        },

        completeReview: (correctCount) => finishSession(XP_PER_REVIEW_SESSION + correctCount),

        setDailyGoal: (xp) => set({ dailyGoal: xp }),

        resetProgress: () => set({ ...initialData, dailyGoal: get().dailyGoal }),

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
      partialize: ({ totalXp, xpByDay, dailyGoal, streak, longestStreak, lastActiveDay, lessons, reviews }) => ({
        totalXp,
        xpByDay,
        dailyGoal,
        streak,
        longestStreak,
        lastActiveDay,
        lessons,
        reviews,
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
