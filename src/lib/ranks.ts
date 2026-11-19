import type Ionicons from '@expo/vector-icons/Ionicons';
import type { ComponentProps } from 'react';

/**
 * The levelling system: ranks earned by total XP. "Level" already means a
 * year and tier of courses in the app (e.g. Year 1 · Basics), so these are
 * called ranks. To change the system, edit RANKS: keep it sorted by minXp,
 * starting at 0. The rank is always worked out from total XP and never
 * stored, so a new table re-ranks everyone the next time the app loads.
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
