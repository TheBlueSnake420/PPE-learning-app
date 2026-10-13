import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { FillExercise } from '@/content';
import { feedback } from '@/lib/haptics';
import { shuffle } from '@/lib/shuffle';
import { colors, font, radius } from '@/theme';
import type { Answer } from './answers';
import { OptionTile } from './OptionTile';

interface Props {
  exercise: FillExercise;
  locked: boolean;
  onAnswer: (answer: Answer | null) => void;
}

export function FillView({ exercise, locked, onAnswer }: Props) {
  const options = useMemo(() => shuffle(exercise.options), [exercise]);
  const [word, setWord] = useState<string | null>(null);
  const [before, after] = exercise.text.split('___');

  const choose = (next: string | null) => {
    feedback('tap');
    setWord(next);
    onAnswer(next ? { type: 'fill', word: next } : null);
  };

  const blankStyle = !locked
    ? word
      ? styles.blankFilled
      : styles.blankEmpty
    : word === exercise.answer
      ? styles.blankCorrect
      : styles.blankWrong;

  return (
    <View style={styles.wrap}>
      <Text style={styles.sentence}>
        {before}
        <Text onPress={locked || !word ? undefined : () => choose(null)} style={[styles.blank, blankStyle]}>
          {word ? ` ${word} ` : ' '.repeat(12)}
        </Text>
        {after}
      </Text>
      <View style={styles.bank}>
        {options.map((option) =>
          option === word ? (
            <View key={option} style={styles.placeholder}>
              <Text style={[styles.placeholderText]}>{option}</Text>
            </View>
          ) : (
            <OptionTile key={option} label={option} disabled={locked} onPress={() => choose(option)} />
          ),
        )}
      </View>
      {!locked && word && (
        <Pressable onPress={() => choose(null)}>
          <Text style={styles.hint}>Tap the word in the sentence to remove it</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 28 },
  sentence: { fontSize: font.large + 1, fontWeight: '600', color: colors.text, lineHeight: 34 },
  blank: { fontWeight: '800', borderRadius: 6 },
  blankEmpty: { textDecorationLine: 'underline', color: colors.faint },
  blankFilled: { color: colors.blueDark, backgroundColor: colors.blueBg },
  blankCorrect: { color: colors.greenDark, backgroundColor: colors.greenBg },
  blankWrong: { color: colors.redDark, backgroundColor: colors.redBg },
  bank: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  placeholder: {
    borderRadius: radius.md,
    backgroundColor: colors.border,
    paddingVertical: 14,
    paddingHorizontal: 14,
  },
  placeholderText: { fontSize: font.body, fontWeight: '600', color: colors.border },
  hint: { fontSize: font.small, color: colors.muted, textAlign: 'center' },
});
