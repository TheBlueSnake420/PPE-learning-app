import type Ionicons from '@expo/vector-icons/Ionicons';
import type { ComponentProps } from 'react';

import { BOOST_DECAY_MINUTES, BOOST_MINUTES, type BoostRules } from '@/lib/boost';

/**
 * The levelling system: ranks earned by total XP. "Level" already means a
 * year and tier of courses in the app (e.g. Year 1 · Basics), so these are
 * called ranks. To change the system, edit RANKS: keep it sorted by minXp,
 * starting at 0. The rank is always worked out from total XP and never
 * stored, so a new table re-ranks everyone the next time the app loads.
 * Ranks also unlock rewards: see TIER_UNLOCKS below.
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

/** How a player's name looks on the leaderboard. */
export type NameStyle = 'plain' | 'red' | 'sparkle';
const NAME_STYLE_ORDER: NameStyle[] = ['plain', 'red', 'sparkle'];

/** The rewards a rank gives. */
export interface RankPerks extends BoostRules {
  /** Extra XP (before any boost) for a lesson with 100% first-try accuracy. */
  perfectBonus: number;
  /** One missed day per week does not break the streak (see streak.ts). */
  streakFreeze: boolean;
  nameStyle: NameStyle;
  /** A decorated frame around the badge on the profile. */
  profileFrame: boolean;
}

/** Before any rewards: no boosts, no perfect bonus, no freeze. */
const BASE_PERKS: RankPerks = {
  maxBoost: 1,
  boostMinutes: BOOST_MINUTES,
  boostDecay: false,
  perfectBonus: 0,
  streakFreeze: false,
  nameStyle: 'plain',
  profileFrame: false,
};

/**
 * What reaching each tier unlocks or improves. Every tier keeps the rewards of
 * the tiers below it, so each entry only lists what changes.
 */
export const TIER_UNLOCKS: Record<RankTier, Partial<RankPerks>> = {
  unranked: {},
  iron: { maxBoost: 4 },
  bronze: { perfectBonus: 5 },
  silver: { streakFreeze: true },
  gold: { maxBoost: 7 },
  platinum: { perfectBonus: 10 },
  diamond: { boostDecay: true },
  champion: { maxBoost: 10 },
  ascendant: { perfectBonus: 15 },
  immortal: { boostMinutes: 25, nameStyle: 'red' },
  divine: { nameStyle: 'sparkle', profileFrame: true },
};

/** The full rewards per tier, built up from TIER_UNLOCKS in rank order. */
export const TIER_PERKS = (() => {
  const perks = {} as Record<RankTier, RankPerks>;
  let current = BASE_PERKS;
  for (const tier of [...new Set(RANKS.map((r) => r.tier))]) {
    current = { ...current, ...TIER_UNLOCKS[tier] };
    perks[tier] = current;
  }
  return perks;
})();

export function perksFor(xp: number): RankPerks {
  return TIER_PERKS[RANKS[rankIndex(xp)].tier];
}

/** Short descriptions of the rewards gained going from `before` to `after`. */
export function perkGains(before: RankPerks, after: RankPerks): string[] {
  const gains: string[] = [];
  if (after.maxBoost > before.maxBoost) gains.push(`XP boosts up to ${after.maxBoost}x`);
  if (after.perfectBonus > before.perfectBonus) gains.push(`+${after.perfectBonus} XP for a perfect lesson`);
  if (after.streakFreeze && !before.streakFreeze) gains.push('A streak freeze every week');
  if (after.boostDecay && !before.boostDecay) gains.push(`Boosts drop a step every ${BOOST_DECAY_MINUTES} minutes instead of ending`);
  if (after.boostMinutes > before.boostMinutes) gains.push(`Boosts last ${after.boostMinutes} minutes`);
  if (NAME_STYLE_ORDER.indexOf(after.nameStyle) > NAME_STYLE_ORDER.indexOf(before.nameStyle)) {
    gains.push(after.nameStyle === 'sparkle' ? 'Sparkling purple name on the leaderboard' : 'Red name on the leaderboard');
  }
  if (after.profileFrame && !before.profileFrame) gains.push('A special profile frame');
  return gains;
}

/** The rewards that reaching RANKS[index] unlocks, compared with the rank below it. */
export function rankRewards(index: number): string[] {
  if (index <= 0) return [];
  return perkGains(TIER_PERKS[RANKS[index - 1].tier], TIER_PERKS[RANKS[index].tier]);
}

/** The first rank above RANKS[index] that improves the given reward, if any. */
export function nextRankImproving(index: number, perk: 'maxBoost' | 'perfectBonus' | 'boostMinutes' | 'streakFreeze'): Rank | undefined {
  const current = Number(TIER_PERKS[RANKS[index].tier][perk]);
  return RANKS.slice(index + 1).find((r) => Number(TIER_PERKS[r.tier][perk]) > current);
}
