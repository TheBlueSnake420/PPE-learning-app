import Ionicons from '@expo/vector-icons/Ionicons';
import type { ComponentProps } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors, font } from '@/theme';

interface Props {
  icon: ComponentProps<typeof Ionicons>['name'];
  value: string | number;
  color: string;
  dim?: boolean;
}

export function StatPill({ icon, value, color, dim }: Props) {
  const c = dim ? colors.faint : color;
  return (
    <View style={styles.pill}>
      <Ionicons name={icon} size={22} color={c} />
      <Text style={[styles.value, { color: c }]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  value: { fontSize: font.large, fontWeight: '800' },
});
