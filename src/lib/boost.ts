/**
 * Time-limited XP boosts, earned by completing lessons. Finishing a lesson
 * starts a boost (2x) that lasts BOOST_MINUTES. Each further lesson finished
 * while it runs raises it one step and restarts the timer, up to 10x. When
 * the timer runs out the boost is gone and the next lesson starts again at 2x.
 * The boost multiplies all XP earned while it runs (lessons and reviews), but
 * only lessons raise it.
 */
export const BOOST_MINUTES = 15;
export const BOOST_STEPS = [2, 3, 4, 5, 6, 7, 8, 9, 10];
export const MAX_BOOST = BOOST_STEPS[BOOST_STEPS.length - 1];

export interface Boost {
  multiplier: number;
  /** Epoch milliseconds. */
  expiresAt: number;
}

export function activeBoost(boost: Boost | null | undefined, now: number): Boost | null {
  return boost && boost.expiresAt > now ? boost : null;
}

export function boostMultiplier(boost: Boost | null | undefined, now: number): number {
  return activeBoost(boost, now)?.multiplier ?? 1;
}

/** The boost after completing a lesson at time `now`. */
export function boostAfterLesson(boost: Boost | null | undefined, now: number): Boost {
  const current = activeBoost(boost, now);
  const step = current ? BOOST_STEPS.findIndex((m) => m > current.multiplier) : 0;
  const multiplier = step === -1 ? MAX_BOOST : BOOST_STEPS[step];
  return { multiplier, expiresAt: now + BOOST_MINUTES * 60_000 };
}

/** "12:05" style countdown for the time left. */
export function formatTimeLeft(ms: number): string {
  const total = Math.max(0, Math.ceil(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}
