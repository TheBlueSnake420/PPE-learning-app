import type Ionicons from '@expo/vector-icons/Ionicons';
import type { ComponentProps } from 'react';

/**
 * The levelling system: ranks earned by total XP. "Level" already means a
 * year and tier of courses in the app (e.g. Year 1 · Basics), so these are
 * called ranks. To change the system, edit RANKS: keep it sorted by minXp,
 * starting at 0.
 */
export type RankTier = 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond' | 'champion';

export interface Rank {
  name: string;
  minXp: number;
  tier: RankTier;
}

export const RANKS: Rank[] = [
  { name: 'Bronze I', minXp: 0, tier: 'bronze' },
  { name: 'Bronze II', minXp: 120, tier: 'bronze' },
  { name: 'Bronze III', minXp: 200, tier: 'bronze' },
  { name: 'Silver I', minXp: 320, tier: 'silver' },
  { name: 'Silver II', minXp: 500, tier: 'silver' },
  { name: 'Silver III', minXp: 800, tier: 'silver' },
  { name: 'Gold I', minXp: 1200, tier: 'gold' },
  { name: 'Gold II', minXp: 2000, tier: 'gold' },
  { name: 'Gold III', minXp: 3200, tier: 'gold' },
  { name: 'Platinum I', minXp: 5000, tier: 'platinum' },
  { name: 'Platinum II', minXp: 8000, tier: 'platinum' },
  { name: 'Platinum III', minXp: 12000, tier: 'platinum' },
  { name: 'Diamond I', minXp: 20000, tier: 'diamond' },
  { name: 'Diamond II', minXp: 32000, tier: 'diamond' },
  { name: 'Diamond III', minXp: 50000, tier: 'diamond' },
  { name: 'Champion', minXp: 100000, tier: 'champion' },
];

type IconName = ComponentProps<typeof Ionicons>['name'];

export const RANK_TIERS: Record<RankTier, { color: string; icon: IconName }> = {
  bronze: { color: '#C97B3D', icon: 'shield' },
  silver: { color: '#9AA6B2', icon: 'shield' },
  gold: { color: '#F2B600', icon: 'shield' },
  platinum: { color: '#2FB5B0', icon: 'shield' },
  diamond: { color: '#6C7BFF', icon: 'diamond' },
  champion: { color: '#E8459A', icon: 'trophy' },
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
