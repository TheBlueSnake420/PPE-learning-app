import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View } from 'react-native';

import { activeBoost, BOOST_MINUTES, BOOST_STEPS, formatTimeLeft, nextBoostStep } from '@/lib/boost';
import { nextRankImproving, rankIndex, RANKS, TIER_PERKS } from '@/lib/ranks';
import { useNow } from '@/lib/useNow';
import { totalXpOf, useProgress } from '@/store/progress';
import { colors, font, radius, space } from '@/theme';

/**
 * The running XP boost with a countdown. Without a boost it renders nothing,
 * or (with `explainWhenInactive`) a short explanation of how to earn one, or
 * which rank unlocks boosts. How high a boost goes depends on the rank.
 */
export function BoostCard({ explainWhenInactive = false }: { explainWhenInactive?: boolean }) {
  const boost = useProgress((s) => s.boost);
  const totalXp = useProgress(totalXpOf);
  const now = useNow(!!boost && boost.expiresAt > Date.now());
  const index = rankIndex(totalXp);
  const { maxBoost } = TIER_PERKS[RANKS[index].tier];
  const unlock = nextRankImproving(index, 'maxBoost');
  const active = activeBoost(boost, now, maxBoost);

  if (!active) {
    if (!explainWhenInactive) return null;
    const locked = maxBoost < BOOST_STEPS[0];
    return (
      <View style={[styles.card, styles.inactive]}>
        <View style={[styles.icon, { backgroundColor: colors.border }]}>
          <Ionicons name={locked ? 'lock-closed' : 'rocket'} size={22} color="#FFFFFF" />
        </View>
        <View style={styles.flex}>
          <Text style={styles.title}>{locked ? 'XP boosts locked' : 'No XP boost running'}</Text>
          <Text style={styles.muted}>
            {locked
              ? `Reach ${unlock?.name ?? 'a higher rank'} to unlock XP boosts.`
              : `Finish a lesson or review to start a ${BOOST_STEPS[0]}x boost for ${BOOST_MINUTES} minutes. Every lesson or review you finish while it runs raises it, up to ${maxBoost}x at your rank.`}
          </Text>
        </View>
      </View>
    );
  }

  const next = nextBoostStep(active.multiplier, maxBoost);
  const atCap = unlock
    ? `Highest boost for your rank: reach ${unlock.name} to go up to ${TIER_PERKS[unlock.tier].maxBoost}x`
    : 'Maximum boost: finish a lesson or review to keep it going';
  return (
    <View style={[styles.card, styles.active]}>
      <View style={[styles.icon, { backgroundColor: colors.purple }]}>
        <Ionicons name="rocket" size={22} color="#FFFFFF" />
      </View>
      <View style={styles.flex}>
        <Text style={[styles.title, { color: colors.purple }]}>{active.multiplier}x XP boost</Text>
        <Text style={styles.muted}>
          {next ? `Finish a lesson or review to raise it to ${next}x` : atCap}
        </Text>
      </View>
      <View style={styles.timer}>
        <Ionicons name="time-outline" size={16} color={colors.purple} />
        <Text style={styles.timerText}>{formatTimeLeft(active.expiresAt - now)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.md,
    borderWidth: 2,
    borderBottomWidth: 4,
    borderRadius: radius.lg,
    padding: space.lg,
  },
  active: { borderColor: '#DCC1F6', backgroundColor: colors.purpleBg },
  inactive: { borderColor: colors.border },
  icon: { width: 44, height: 44, borderRadius: 13, alignItems: 'center', justifyContent: 'center' },
  flex: { flex: 1, gap: 2 },
  title: { fontSize: font.large, fontWeight: '800', color: colors.text },
  muted: { fontSize: font.body - 1, color: colors.muted, lineHeight: 20 },
  timer: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  timerText: { fontSize: font.body, fontWeight: '800', color: colors.purple, fontVariant: ['tabular-nums'] },
});
