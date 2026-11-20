/**
 * Time-limited XP boosts, earned by finishing lessons and review sessions.
 * Finishing one starts a boost (2x) that lasts BOOST_MINUTES. Each further
 * lesson or review finished while it runs raises it one step and restarts the
 * timer. When the timer runs out the boost is gone and the next session starts
 * again at 2x. The boost multiplies all XP earned while it runs.
 *
 * How high a boost can go depends on the rank (maxBoost in TIER_PERKS in
 * ranks.ts): below 2 boosts are locked, and MAX_BOOST is the overall ceiling.
 */
export const BOOST_MINUTES = 15;
export const BOOST_STEPS = [2, 3, 4, 5, 6, 7, 8, 9, 10];
export const MAX_BOOST = BOOST_STEPS[BOOST_STEPS.length - 1];

export interface Boost {
  multiplier: number;
  /** Epoch milliseconds. */
  expiresAt: number;
}

/** The running boost, capped at the rank's highest boost `max`; null if none runs or boosts are locked. */
export function activeBoost(boost: Boost | null | undefined, now: number, max: number): Boost | null {
  if (!boost || boost.expiresAt <= now || max < BOOST_STEPS[0]) return null;
  return boost.multiplier > max ? { ...boost, multiplier: max } : boost;
}

export function boostMultiplier(boost: Boost | null | undefined, now: number, max: number): number {
  return activeBoost(boost, now, max)?.multiplier ?? 1;
}

/** The next boost step above `multiplier` within the rank's highest boost `max`, if any. */
export function nextBoostStep(multiplier: number, max: number): number | undefined {
  return BOOST_STEPS.find((m) => m > multiplier && m <= max);
}

/**
 * The boost after finishing a lesson or review session at time `now`: a new
 * 2x boost, or the running one a step higher (at most `max`) with a fresh
 * timer. Null while boosts are locked.
 */
export function boostAfterSession(boost: Boost | null | undefined, now: number, max: number): Boost | null {
  if (max < BOOST_STEPS[0]) return null;
  const current = activeBoost(boost, now, max);
  const multiplier = current ? (nextBoostStep(current.multiplier, max) ?? current.multiplier) : BOOST_STEPS[0];
  return { multiplier, expiresAt: now + BOOST_MINUTES * 60_000 };
}

/** "12:05" style countdown for the time left. */
export function formatTimeLeft(ms: number): string {
  const total = Math.max(0, Math.ceil(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}
