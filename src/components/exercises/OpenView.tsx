import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import type { OpenExercise } from '@/content';
import { feedback } from '@/lib/haptics';
import { colors, font, radius } from '@/theme';
import { Button } from '../Button';
import { OPEN_PASS_SHARE, type Answer } from './answers';
import { OptionTile, type TileState } from './OptionTile';

interface Props {
  exercise: OpenExercise;
  locked: boolean;
  onAnswer: (answer: Answer | null) => void;
}

/**
 * Open question: write (or think through) an answer, reveal the model answer,
 * then tick the key points you covered. The runner's Check button grades it.
 */
export function OpenView({ exercise, locked, onAnswer }: Props) {
  const [text, setText] = useState('');
  const [revealed, setRevealed] = useState(false);
  const [ticked, setTicked] = useState<number[]>([]);
  const total = exercise.keyPoints.length;
  const needed = Math.ceil(total * OPEN_PASS_SHARE);

  const report = (next: number[]) => onAnswer({ type: 'open', covered: next.length, total });

  const reveal = () => {
    feedback('tap');
    setRevealed(true);
    report([]);
  };

  const toggle = (index: number) => {
    feedback('tap');
    const next = ticked.includes(index) ? ticked.filter((i) => i !== index) : [...ticked, index];
    setTicked(next);
    report(next);
  };

  return (
    <View style={styles.wrap}>
      <Text style={styles.prompt}>{exercise.prompt}</Text>

      {!revealed ? (
        <View style={styles.gap}>
          <TextInput
            value={text}
            onChangeText={setText}
            multiline
            placeholder="Write your answer here, or think it through in your head first."
            placeholderTextColor={colors.faint}
            style={styles.input}
            textAlignVertical="top"
          />
          <Button title="Reveal model answer" variant="blue" onPress={reveal} />
          <Text style={styles.hint}>Next, you'll tick the key points your answer covered.</Text>
        </View>
      ) : (
        <View style={styles.gap}>
          {text.trim() ? (
            <View style={[styles.box, styles.yours]}>
              <Text style={styles.boxLabel}>YOUR ANSWER</Text>
              <Text style={styles.boxText}>{text.trim()}</Text>
            </View>
          ) : null}
          {exercise.modelAnswer ? (
            <View style={[styles.box, styles.model]}>
              <Text style={[styles.boxLabel, { color: colors.blueDark }]}>MODEL ANSWER</Text>
              <Text style={styles.boxText}>{exercise.modelAnswer}</Text>
            </View>
          ) : null}

          <Text style={styles.label}>{locked ? 'Key points' : 'Tick the key points you covered'}</Text>
          <View style={styles.points}>
            {exercise.keyPoints.map((point, i) => {
              const on = ticked.includes(i);
              const state: TileState = locked ? (on ? 'correct' : 'wrong') : on ? 'selected' : 'idle';
              const iconColor = locked ? (on ? colors.greenDark : colors.redDark) : on ? colors.blueDark : colors.faint;
              return (
                <OptionTile
                  key={i}
                  label={point}
                  badge={<Ionicons name={on ? 'checkbox' : 'square-outline'} size={20} color={iconColor} />}
                  state={state}
                  disabled={locked}
                  onPress={() => toggle(i)}
                />
              );
            })}
          </View>
          {!locked && (
            <Text style={styles.hint}>
              Be honest: cover at least {needed} of {total} points to pass. Then tap Check.
            </Text>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 20 },
  gap: { gap: 12 },
  prompt: { fontSize: font.large, fontWeight: '600', color: colors.text, lineHeight: 26 },
  input: {
    minHeight: 140,
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    padding: 12,
    fontSize: font.body,
    lineHeight: 22,
    color: colors.text,
  },
  hint: { fontSize: font.small, color: colors.muted, textAlign: 'center', lineHeight: 18 },
  box: { borderRadius: radius.md, padding: 14, gap: 6, borderWidth: 2 },
  yours: { backgroundColor: colors.surface, borderColor: colors.border },
  model: { backgroundColor: colors.blueBg, borderColor: '#84D8FF' },
  boxLabel: { fontSize: 12, fontWeight: '800', letterSpacing: 0.8, color: colors.muted },
  boxText: { fontSize: font.body, lineHeight: 23, color: colors.text },
  label: { fontSize: font.body, fontWeight: '800', color: colors.text, marginTop: 4 },
  points: { gap: 8 },
});
