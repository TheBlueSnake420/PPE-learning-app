import type Ionicons from '@expo/vector-icons/Ionicons';
import type { ComponentProps } from 'react';

/**
 * The levelling system: ranks earned by total XP. "Level" already means a
 * year and tier of courses in the app (e.g. Year 1 · Basics), so these are
 * called ranks. To change the system, edit RANKS: keep it sorted by minXp,
 * starting at 0. The rank is always worked out from total XP and never
 * stored, so a new table re-ranks everyone the next time the app loads.
 * Ranks also unlock rewards: see TIER_PERKS below.
 */
export type RankTier =
  | 'unranked'
  | 'iron'
  | 'bronze'
  | 'silver'
  | 'gold'
  | 'platinum'
  | 'diamond'
  | 'champion'
  | 'ascendant'
  | 'immortal'
  | 'divine';

export interface Rank {
  name: string;
  minXp: number;
  tier: RankTier;
}

/** Three divisions (I-III) per tier, from Iron to Immortal, then Divine. */
export const RANKS: Rank[] = [
  { name: 'Unranked', minXp: 0, tier: 'unranked' },
  { name: 'Iron I', minXp: 10, tier: 'iron' },
  { name: 'Iron II', minXp: 30, tier: 'iron' },
  { name: 'Iron III', minXp: 50, tier: 'iron' },
  { name: 'Bronze I', minXp: 70, tier: 'bronze' },
  { name: 'Bronze II', minXp: 100, tier: 'bronze' },
  { name: 'Bronze III', minXp: 140, tier: 'bronze' },
  { name: 'Silver I', minXp: 200, tier: 'silver' },
  { name: 'Silver II', minXp: 270, tier: 'silver' },
  { name: 'Silver III', minXp: 370, tier: 'silver' },
  { name: 'Gold I', minXp: 500, tier: 'gold' },
  { name: 'Gold II', minXp: 700, tier: 'gold' },
  { name: 'Gold III', minXp: 1000, tier: 'gold' },
  { name: 'Platinum I', minXp: 1400, tier: 'platinum' },
  { name: 'Platinum II', minXp: 2000, tier: 'platinum' },
  { name: 'Platinum III', minXp: 2700, tier: 'platinum' },
  { name: 'Diamond I', minXp: 3700, tier: 'diamond' },
  { name: 'Diamond II', minXp: 5000, tier: 'diamond' },
  { name: 'Diamond III', minXp: 7000, tier: 'diamond' },
  { name: 'Champion I', minXp: 10000, tier: 'champion' },
  { name: 'Champion II', minXp: 14000, tier: 'champion' },
  { name: 'Champion III', minXp: 20000, tier: 'champion' },
  { name: 'Ascendant I', minXp: 27000, tier: 'ascendant' },
  { name: 'Ascendant II', minXp: 37000, tier: 'ascendant' },
  { name: 'Ascendant III', minXp: 50000, tier: 'ascendant' },
  { name: 'Immortal I', minXp: 70000, tier: 'immortal' },
  { name: 'Immortal II', minXp: 100000, tier: 'immortal' },
  { name: 'Immortal III', minXp: 140000, tier: 'immortal' },
  { name: 'Divine', minXp: 200000, tier: 'divine' },
];

type IconName = ComponentProps<typeof Ionicons>['name'];

export const RANK_TIERS: Record<RankTier, { color: string; icon: IconName }> = {
  unranked: { color: '#BCC4CC', icon: 'shield-outline' },
  iron: { color: '#5F6670', icon: 'shield' },
  bronze: { color: '#C97B3D', icon: 'shield' },
  silver: { color: '#9AA6B2', icon: 'shield' },
  gold: { color: '#F2B600', icon: 'shield' },
  platinum: { color: '#2FB5B0', icon: 'shield' },
  diamond: { color: '#6C7BFF', icon: 'diamond' },
  champion: { color: '#E8459A', icon: 'trophy' },
  ascendant: { color: '#22A45D', icon: 'rocket' },
  immortal: { color: '#C62F3E', icon: 'flame' },
  divine: { color: '#9C3FE0', icon: 'sparkles' },
};

export interface RankStatus {
  rank: Rank;
  index: number;
  next?: Rank;
  /** Share of the way from this rank to the next, 0-1 (1 at the top rank). */
  progress: number;
  /** XP still needed for the next rank (0 at the top rank). */
  xpToNext: number;
}

export function rankIndex(xp: number): number {
  let index = 0;
  for (let i = 0; i < RANKS.length; i++) if (xp >= RANKS[i].minXp) index = i;
  return index;
}

export function rankFor(xp: number): RankStatus {
  const index = rankIndex(xp);
  const rank = RANKS[index];
  const next = RANKS[index + 1];
  if (!next) return { rank, index, progress: 1, xpToNext: 0 };
  return {
    rank,
    index,
    next,
    progress: (xp - rank.minXp) / (next.minXp - rank.minXp),
    xpToNext: next.minXp - xp,
  };
}

/**
 * Rewards per rank tier. XP boosts and the perfect-lesson bonus are locked at
 * first and improve as the learner climbs; a tier keeps what the tier below
 * it had unless the table improves it.
 */
export interface RankPerks {
  /** Highest XP boost multiplier; 1 means boosts are still locked. */
  maxBoost: number;
  /** Extra XP (before any boost) for a lesson with 100% first-try accuracy. */
  perfectBonus: number;
}

export const TIER_PERKS: Record<RankTier, RankPerks> = {
  unranked: { maxBoost: 1, perfectBonus: 0 },
  iron: { maxBoost: 4, perfectBonus: 0 },
  bronze: { maxBoost: 4, perfectBonus: 5 },
  silver: { maxBoost: 4, perfectBonus: 5 },
  gold: { maxBoost: 7, perfectBonus: 5 },
  platinum: { maxBoost: 7, perfectBonus: 10 },
  diamond: { maxBoost: 7, perfectBonus: 10 },
  champion: { maxBoost: 10, perfectBonus: 10 },
  ascendant: { maxBoost: 10, perfectBonus: 15 },
  immortal: { maxBoost: 10, perfectBonus: 15 },
  divine: { maxBoost: 10, perfectBonus: 15 },
};

export function perksFor(xp: number): RankPerks {
  return TIER_PERKS[RANKS[rankIndex(xp)].tier];
}

/** Short descriptions of the rewards gained going from `before` to `after`. */
export function perkGains(before: RankPerks, after: RankPerks): string[] {
  const gains: string[] = [];
  if (after.maxBoost > before.maxBoost) gains.push(`XP boosts up to ${after.maxBoost}x`);
  if (after.perfectBonus > before.perfectBonus) gains.push(`+${after.perfectBonus} XP for a perfect lesson`);
  return gains;
}

/** The rewards that reaching RANKS[index] unlocks, compared with the rank below it. */
export function rankRewards(index: number): string[] {
  if (index <= 0) return [];
  return perkGains(TIER_PERKS[RANKS[index - 1].tier], TIER_PERKS[RANKS[index].tier]);
}

/** The next rank above RANKS[index] that raises the given reward, if any. */
export function nextRankImproving(index: number, perk: keyof RankPerks): Rank | undefined {
  const current = TIER_PERKS[RANKS[index].tier][perk];
  return RANKS.slice(index + 1).find((r) => TIER_PERKS[r.tier][perk] > current);
}
