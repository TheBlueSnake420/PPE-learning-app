import { addDays } from '@/lib/dates';

/**
 * Daily streaks with weekly streak freezes (a rank reward, see TIER_PERKS in
 * ranks.ts). A freeze covers one missed day. There is one per calendar week
 * (Monday to Sunday, like the weekly leaderboard), counted in the week of the
 * missed day. A freeze is used when the learner comes back: if every day
 * missed since the last active day can be covered, the streak carries on.
 * Pure functions; days are local "YYYY-MM-DD" keys.
 */

export interface StreakState {
  /** Streak counted up to `lastActiveDay`. */
  streak: number;
  lastActiveDay: string | null;
  /** Missed days that a streak freeze covered. */
  frozenDays: string[];
}

/** Monday of the week that contains `day`. */
export function weekOf(day: string): string {
  const [y, m, d] = day.split('-').map(Number);
  const weekday = (new Date(y, m - 1, d).getDay() + 6) % 7; // Monday = 0
  return addDays(day, -weekday);
}

/** The days strictly between the last active day and `day`, if there are at most `limit`. */
function missedDays(lastActiveDay: string, day: string, limit: number): string[] | null {
  const missed: string[] = [];
  for (let d = addDays(lastActiveDay, 1); d < day; d = addDays(d, 1)) {
    if (missed.length === limit) return null;
    missed.push(d);
  }
  return missed;
}

/**
 * The missed days that freezes would have to cover for activity on `day` to
 * continue the streak: [] if no day was missed, null if the streak cannot be
 * continued (no streak, freezes locked, or not enough freezes left).
 */
export function freezesNeeded(state: StreakState, day: string, freezeUnlocked: boolean): string[] | null {
  if (!state.lastActiveDay || state.streak === 0 || state.lastActiveDay >= day) return null;
  // One freeze per week means at most two missed days in a row (a Sunday and a Monday).
  const missed = missedDays(state.lastActiveDay, day, 2);
  if (missed === null) return null;
  if (missed.length === 0) return [];
  if (!freezeUnlocked) return null;
  const usedWeeks = new Set(state.frozenDays.map(weekOf));
  for (const d of missed) {
    const week = weekOf(d);
    if (usedWeeks.has(week)) return null;
    usedWeeks.add(week);
  }
  return missed;
}

/** The streak after activity on `day`, and the missed days a freeze covered. */
export function streakAfterActivity(
  state: StreakState,
  day: string,
  freezeUnlocked: boolean,
): { streak: number; frozen: string[] } {
  if (state.lastActiveDay === day) return { streak: state.streak, frozen: [] };
  const frozen = freezesNeeded(state, day, freezeUnlocked);
  return frozen === null ? { streak: 1, frozen: [] } : { streak: state.streak + 1, frozen };
}

/** The streak as it stands on `day`: still shown while activity that day would continue it. */
export function streakOn(state: StreakState, day: string, freezeUnlocked: boolean): number {
  if (state.lastActiveDay === day) return state.streak;
  return freezesNeeded(state, day, freezeUnlocked) !== null ? state.streak : 0;
}

export type FreezeStatus = 'locked' | 'ready' | 'used';

/**
 * This week's freeze on `day`: used once it covered a day this week, or when
 * activity today would need it for a day missed this week.
 */
export function freezeStatus(state: StreakState, day: string, freezeUnlocked: boolean): FreezeStatus {
  if (!freezeUnlocked) return 'locked';
  const week = weekOf(day);
  const pending = freezesNeeded(state, day, true) ?? [];
  return [...state.frozenDays, ...pending].some((d) => weekOf(d) === week) ? 'used' : 'ready';
}

/** Frozen days worth keeping: anything older than two weeks can no longer matter. */
export function pruneFrozenDays(days: string[], today: string): string[] {
  const cutoff = addDays(today, -14);
  return [...new Set(days)].filter((d) => d >= cutoff).sort();
}
