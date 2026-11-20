import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View } from 'react-native';

import { activeBoost, BOOST_MINUTES, BOOST_STEPS, formatTimeLeft, MAX_BOOST } from '@/lib/boost';
import { useNow } from '@/lib/useNow';
import { useProgress } from '@/store/progress';
import { colors, font, radius, space } from '@/theme';

/**
 * The running XP boost with a countdown. Without a boost it renders nothing,
 * or (with `explainWhenInactive`) a short explanation of how to earn one.
 */
export function BoostCard({ explainWhenInactive = false }: { explainWhenInactive?: boolean }) {
  const boost = useProgress((s) => s.boost);
  const now = useNow(!!boost && boost.expiresAt > Date.now());
  const active = activeBoost(boost, now);

  if (!active) {
    if (!explainWhenInactive) return null;
    return (
      <View style={[styles.card, styles.inactive]}>
        <View style={[styles.icon, { backgroundColor: colors.border }]}>
          <Ionicons name="rocket" size={22} color="#FFFFFF" />
        </View>
        <View style={styles.flex}>
          <Text style={styles.title}>No XP boost running</Text>
          <Text style={styles.muted}>
            Finish a lesson or review to start a {BOOST_STEPS[0]}x boost for {BOOST_MINUTES} minutes. Every lesson or
            review you finish while it runs raises it, up to {MAX_BOOST}x.
          </Text>
        </View>
      </View>
    );
  }

  const next = BOOST_STEPS.find((m) => m > active.multiplier);
  return (
    <View style={[styles.card, styles.active]}>
      <View style={[styles.icon, { backgroundColor: colors.purple }]}>
        <Ionicons name="rocket" size={22} color="#FFFFFF" />
      </View>
      <View style={styles.flex}>
        <Text style={[styles.title, { color: colors.purple }]}>{active.multiplier}x XP boost</Text>
        <Text style={styles.muted}>
          {next ? `Finish a lesson or review to raise it to ${next}x` : 'Maximum boost: finish a lesson or review to keep it going'}
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
