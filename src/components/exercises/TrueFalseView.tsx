import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import type { TrueFalseExercise } from '@/content';
import { feedback } from '@/lib/haptics';
import { colors, font, radius } from '@/theme';
import type { Answer } from './answers';
import { OptionTile, type TileState } from './OptionTile';

interface Props {
  exercise: TrueFalseExercise;
  locked: boolean;
  onAnswer: (answer: Answer | null) => void;
}

export function TrueFalseView({ exercise, locked, onAnswer }: Props) {
  const [selected, setSelected] = useState<boolean | null>(null);

  const stateFor = (value: boolean): TileState => {
    if (!locked) return value === selected ? 'selected' : 'idle';
    if (value === exercise.answer) return 'correct';
    if (value === selected) return 'wrong';
    return 'faded';
  };

  return (
    <View style={styles.wrap}>
      <View style={styles.statement}>
        <Text style={styles.statementText}>{exercise.statement}</Text>
      </View>
      <View style={styles.row}>
        {[true, false].map((value) => (
          <OptionTile
            key={String(value)}
            label={value ? 'True' : 'False'}
            center
            state={stateFor(value)}
            disabled={locked}
            style={styles.half}
            onPress={() => {
              feedback('tap');
              setSelected(value);
              onAnswer({ type: 'truefalse', value });
            }}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 24 },
  statement: {
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: 18,
  },
  statementText: { fontSize: font.large, fontWeight: '600', color: colors.text, lineHeight: 26 },
  row: { flexDirection: 'row', gap: 12 },
  half: { flex: 1, paddingVertical: 18 },
});
