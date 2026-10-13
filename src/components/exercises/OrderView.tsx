import { useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import type { OrderExercise } from '@/content';
import { feedback } from '@/lib/haptics';
import { shuffleChanged } from '@/lib/shuffle';
import { colors, font, radius } from '@/theme';
import type { Answer } from './answers';
import { OptionTile } from './OptionTile';

interface Props {
  exercise: OrderExercise;
  locked: boolean;
  onAnswer: (answer: Answer | null) => void;
}

export function OrderView({ exercise, locked, onAnswer }: Props) {
  const bank = useMemo(() => shuffleChanged(exercise.items), [exercise]);
  const [picked, setPicked] = useState<string[]>([]);

  const update = (next: string[]) => {
    feedback('tap');
    setPicked(next);
    onAnswer(next.length === exercise.items.length ? { type: 'order', items: next } : null);
  };

  return (
    <View style={styles.wrap}>
      <Text style={styles.prompt}>{exercise.prompt}</Text>

      <View style={styles.slots}>
        {exercise.items.map((_, i) => {
          const item = picked[i];
          if (!item) {
            return (
              <View key={`slot-${i}`} style={styles.emptySlot}>
                <Text style={styles.slotNumber}>{i + 1}</Text>
              </View>
            );
          }
          const state = locked ? (item === exercise.items[i] ? 'correct' : 'wrong') : 'selected';
          return (
            <OptionTile
              key={item}
              label={item}
              badge={i + 1}
              state={state}
              disabled={locked}
              onPress={() => update(picked.filter((p) => p !== item))}
            />
          );
        })}
      </View>

      {!locked && (
        <View style={styles.bank}>
          {bank
            .filter((item) => !picked.includes(item))
            .map((item) => (
              <OptionTile key={item} label={item} onPress={() => update([...picked, item])} />
            ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 20 },
  prompt: { fontSize: font.large, fontWeight: '600', color: colors.text, lineHeight: 26 },
  slots: { gap: 8 },
  emptySlot: {
    height: 52,
    borderRadius: radius.md,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: colors.border,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  slotNumber: { color: colors.faint, fontWeight: '700' },
  bank: {
    gap: 8,
    paddingTop: 16,
    borderTopWidth: 2,
    borderTopColor: colors.border,
  },
});
