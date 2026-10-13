import { useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import type { ChoiceExercise } from '@/content';
import { feedback } from '@/lib/haptics';
import { shuffle } from '@/lib/shuffle';
import { colors, font } from '@/theme';
import type { Answer } from './answers';
import { OptionTile, type TileState } from './OptionTile';

interface Props {
  exercise: ChoiceExercise;
  locked: boolean;
  onAnswer: (answer: Answer | null) => void;
}

export function ChoiceView({ exercise, locked, onAnswer }: Props) {
  // Shuffle option positions once per mount; keep track of each option's original index.
  const order = useMemo(() => shuffle(exercise.options.map((_, i) => i)), [exercise]);
  const [selected, setSelected] = useState<number | null>(null);

  const stateFor = (index: number): TileState => {
    if (!locked) return index === selected ? 'selected' : 'idle';
    if (index === exercise.answer) return 'correct';
    if (index === selected) return 'wrong';
    return 'faded';
  };

  return (
    <View style={styles.wrap}>
      <Text style={styles.prompt}>{exercise.prompt}</Text>
      <View style={styles.options}>
        {order.map((index, position) => (
          <OptionTile
            key={index}
            label={exercise.options[index]}
            badge={position + 1}
            state={stateFor(index)}
            disabled={locked}
            onPress={() => {
              feedback('tap');
              setSelected(index);
              onAnswer({ type: 'choice', index });
            }}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 24 },
  prompt: { fontSize: font.large, fontWeight: '600', color: colors.text, lineHeight: 26 },
  options: { gap: 10 },
});
