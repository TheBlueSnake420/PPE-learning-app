import Ionicons from '@expo/vector-icons/Ionicons';
import { useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import type { MultiExercise } from '@/content';
import { feedback } from '@/lib/haptics';
import { shuffle } from '@/lib/shuffle';
import { colors, font } from '@/theme';
import type { Answer } from './answers';
import { OptionTile, type TileState } from './OptionTile';

interface Props {
  exercise: MultiExercise;
  locked: boolean;
  onAnswer: (answer: Answer | null) => void;
}

/** Select-all-that-apply: tiles toggle on and off, with checkbox badges. */
export function MultiView({ exercise, locked, onAnswer }: Props) {
  const order = useMemo(() => shuffle(exercise.options.map((_, i) => i)), [exercise]);
  const [selected, setSelected] = useState<number[]>([]);

  const toggle = (index: number) => {
    feedback('tap');
    const next = selected.includes(index) ? selected.filter((i) => i !== index) : [...selected, index];
    setSelected(next);
    onAnswer(next.length ? { type: 'multi', indices: next } : null);
  };

  const stateFor = (index: number): TileState => {
    const isSelected = selected.includes(index);
    if (!locked) return isSelected ? 'selected' : 'idle';
    if (exercise.answers.includes(index)) return 'correct';
    return isSelected ? 'wrong' : 'faded';
  };

  return (
    <View style={styles.wrap}>
      <Text style={styles.prompt}>{exercise.prompt}</Text>
      <View style={styles.options}>
        {order.map((index) => {
          const isSelected = selected.includes(index);
          const state = stateFor(index);
          const iconColor =
            state === 'correct' ? colors.greenDark : state === 'wrong' ? colors.redDark : state === 'selected' ? colors.blueDark : colors.faint;
          return (
            <OptionTile
              key={index}
              label={exercise.options[index]}
              badge={<Ionicons name={isSelected ? 'checkbox' : 'square-outline'} size={20} color={iconColor} />}
              state={state}
              disabled={locked}
              onPress={() => toggle(index)}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 24 },
  prompt: { fontSize: font.large, fontWeight: '600', color: colors.text, lineHeight: 26 },
  options: { gap: 10 },
});
