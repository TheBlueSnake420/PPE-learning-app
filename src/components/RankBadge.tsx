import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View } from 'react-native';

import { RANK_TIERS, type Rank } from '@/lib/ranks';
import { darken } from '@/theme';

/** Roman numeral of a rank's division ("Silver II" -> "II"), if any. */
function division(rank: Rank): string {
  const last = rank.name.split(' ').pop() ?? '';
  return /^[IVX]+$/.test(last) ? last : '';
}

/** Round badge in the rank's tier colour, with its icon and division. `dim` fades a rank not reached yet. */
export function RankBadge({ rank, size = 48, dim = false }: { rank: Rank; size?: number; dim?: boolean }) {
  const { color, icon } = RANK_TIERS[rank.tier];
  const div = division(rank);
  return (
    <View
      style={[
        styles.badge,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: color,
          borderBottomWidth: Math.max(2, size / 14),
          borderBottomColor: darken(color, 0.2),
          opacity: dim ? 0.35 : 1,
        },
      ]}
    >
      <Ionicons name={icon} size={size * 0.5} color="#FFFFFF" />
      {div !== '' && size >= 40 && (
        <Text style={[styles.division, { fontSize: Math.max(9, size * 0.2), marginTop: -size * 0.04 }]}>{div}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  badge: { alignItems: 'center', justifyContent: 'center' },
  division: { color: '#FFFFFF', fontWeight: '900', letterSpacing: 0.5 },
});
