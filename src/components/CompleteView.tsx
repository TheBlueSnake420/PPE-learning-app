import Ionicons from '@expo/vector-icons/Ionicons';
import type { ComponentProps } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import type { SessionResult } from '@/store/progress';
import { colors, font, radius, space } from '@/theme';
import { Button } from './Button';

interface Props {
  title: string;
  result: SessionResult;
  accuracy: number;
  onContinue: () => void;
}

export function CompleteView({ title, result, accuracy, onContinue }: Props) {
  const pct = Math.round(accuracy * 100);
  return (
    <SafeAreaView style={styles.screen} edges={['top', 'bottom']}>
      <View style={styles.body}>
        <View style={styles.trophy}>
          <Ionicons name={pct === 100 ? 'trophy' : 'ribbon'} size={72} color={colors.gold} />
        </View>
        <Text style={styles.title}>{title}</Text>
        {pct === 100 && <Text style={styles.subtitle}>Perfect score!</Text>}

        <View style={styles.tiles}>
          <Tile label="XP earned" value={`${result.xpEarned}`} icon="flash" color={colors.gold} />
          <Tile label="Accuracy" value={`${pct}%`} icon="locate" color={colors.green} />
          <Tile label="Day streak" value={`${result.streak}`} icon="flame" color={colors.orange} />
        </View>

        {result.streakExtended && (
          <Text style={styles.streakNote}>
            {result.streak === 1 ? 'You started a streak!' : `Streak extended to ${result.streak} days!`}
          </Text>
        )}
      </View>
      <View style={styles.footer}>
        <Button title="Continue" onPress={onContinue} />
      </View>
    </SafeAreaView>
  );
}

function Tile({
  label,
  value,
  icon,
  color,
}: {
  label: string;
  value: string;
  icon: ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return (
    <View style={[styles.tile, { borderColor: color }]}>
      <Text style={[styles.tileLabel, { backgroundColor: color }]}>{label}</Text>
      <View style={styles.tileValueRow}>
        <Ionicons name={icon} size={20} color={color} />
        <Text style={[styles.tileValue, { color }]}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  body: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: space.xl, gap: space.md },
  trophy: {
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: '#FFF4CC',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: space.md,
  },
  title: { fontSize: font.hero, fontWeight: '800', color: colors.gold, textAlign: 'center' },
  subtitle: { fontSize: font.large, color: colors.muted, fontWeight: '600' },
  tiles: { flexDirection: 'row', gap: space.sm, marginTop: space.xl, alignSelf: 'stretch' },
  tile: { flex: 1, borderWidth: 2, borderRadius: radius.md, overflow: 'hidden' },
  tileLabel: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 11,
    textAlign: 'center',
    paddingVertical: 4,
    textTransform: 'uppercase',
  },
  tileValueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingVertical: 12,
  },
  tileValue: { fontSize: font.title, fontWeight: '800' },
  streakNote: { marginTop: space.md, color: colors.orange, fontWeight: '700', fontSize: font.body },
  footer: { padding: space.lg },
});
