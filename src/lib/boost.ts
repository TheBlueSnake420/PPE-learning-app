/**
 * Time-limited XP boosts, earned by finishing lessons and review sessions.
 * Finishing one starts a boost (2x) for the rank's boost duration. Each further
 * lesson or review finished while it runs raises it one step and restarts the
 * timer. When the timer runs out the boost is gone and the next session starts
 * again at 2x. The boost multiplies all XP earned while it runs.
 *
 * The rank sets the rules (see TIER_PERKS in ranks.ts): how high a boost can go
 * (below 2 boosts are locked), how long it lasts, and whether it decays: then a
 * boost that runs out drops one step and runs for BOOST_DECAY_MINUTES more,
 * until a 2x boost runs out.
 */
export const BOOST_MINUTES = 15;
export const BOOST_DECAY_MINUTES = 5;
export const BOOST_STEPS = [2, 3, 4, 5, 6, 7, 8, 9, 10];
export const MAX_BOOST = BOOST_STEPS[BOOST_STEPS.length - 1];

export interface Boost {
  multiplier: number;
  /** Epoch milliseconds. */
  expiresAt: number;
}

/** The boost rules a rank gives. */
export interface BoostRules {
  /** Highest multiplier; below 2 boosts are locked. */
  maxBoost: number;
  /** How long a new or raised boost lasts. */
  boostMinutes: number;
  /** Whether a boost that runs out steps down instead of ending. */
  boostDecay: boolean;
}

/** The boost step below `multiplier`, if any. */
function lowerStep(multiplier: number): number | undefined {
  return [...BOOST_STEPS].reverse().find((m) => m < multiplier);
}

/**
 * The boost in effect at `now` under the rank's rules: capped at its highest
 * boost and, with decay, stepped down for each BOOST_DECAY_MINUTES past the
 * stored expiry. `expiresAt` is when the current step ends. Null if no boost
 * runs or boosts are locked.
 */
export function activeBoost(boost: Boost | null | undefined, now: number, rules: BoostRules): Boost | null {
  if (!boost || rules.maxBoost < BOOST_STEPS[0]) return null;
  let multiplier = Math.min(boost.multiplier, rules.maxBoost);
  let expiresAt = boost.expiresAt;
  if (rules.boostDecay) {
    while (expiresAt <= now) {
      const lower = lowerStep(multiplier);
      if (lower === undefined) break;
      multiplier = lower;
      expiresAt += BOOST_DECAY_MINUTES * 60_000;
    }
  }
  return expiresAt > now ? { multiplier, expiresAt } : null;
}

export function boostMultiplier(boost: Boost | null | undefined, now: number, rules: BoostRules): number {
  return activeBoost(boost, now, rules)?.multiplier ?? 1;
}

/** The step a decaying boost drops to when its timer runs out, if any. */
export function decayStep(multiplier: number, rules: BoostRules): number | undefined {
  return rules.boostDecay ? lowerStep(multiplier) : undefined;
}

/** The next boost step above `multiplier` within the rank's highest boost, if any. */
export function nextBoostStep(multiplier: number, max: number): number | undefined {
  return BOOST_STEPS.find((m) => m > multiplier && m <= max);
}

/**
 * The boost after finishing a lesson or review session at time `now`: a new
 * 2x boost, or the running one a step higher (at most the rank's highest) with
 * a fresh timer. Null while boosts are locked.
 */
export function boostAfterSession(boost: Boost | null | undefined, now: number, rules: BoostRules): Boost | null {
  if (rules.maxBoost < BOOST_STEPS[0]) return null;
  const current = activeBoost(boost, now, rules);
  const multiplier = current ? (nextBoostStep(current.multiplier, rules.maxBoost) ?? current.multiplier) : BOOST_STEPS[0];
  return { multiplier, expiresAt: now + rules.boostMinutes * 60_000 };
}

/** "12:05" style countdown for the time left. */
export function formatTimeLeft(ms: number): string {
  const total = Math.max(0, Math.ceil(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}
