import Ionicons from '@expo/vector-icons/Ionicons';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '@/components/Button';
import { NotFound } from '@/components/NotFound';
import { getCourse, type KeyTerm } from '@/content';
import { feedback } from '@/lib/haptics';
import { shuffle } from '@/lib/shuffle';
import { colors, darken, font, radius, space, tint } from '@/theme';

export default function FlashcardsScreen() {
  const { courseId } = useLocalSearchParams<{ courseId: string }>();
  const course = getCourse(courseId);
  const [cards, setCards] = useState<KeyTerm[]>(() =>
    shuffle(course?.material.flatMap((t) => t.keyTerms ?? []) ?? []),
  );
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  if (!course || cards.length === 0) return <NotFound message="No flashcards for this course yet." />;

  const card = cards[index];
  const go = (next: number) => {
    setIndex((next + cards.length) % cards.length);
    setFlipped(false);
  };

  return (
    <SafeAreaView style={styles.screen} edges={['bottom']}>
      <Stack.Screen options={{ title: `Flashcards · ${course.shortTitle}` }} />
      <Text style={styles.counter}>
        {index + 1} / {cards.length}
      </Text>

      <Pressable
        onPress={() => {
          feedback('tap');
          setFlipped((f) => !f);
        }}
        style={[
          styles.card,
          flipped
            ? { backgroundColor: tint(course.color, 0.88), borderColor: course.color, borderBottomColor: darken(course.color) }
            : null,
        ]}
        accessibilityHint="Tap to flip"
      >
        <Text style={styles.side}>{flipped ? 'DEFINITION' : 'TERM'}</Text>
        <Text style={flipped ? styles.definition : styles.term}>{flipped ? card.definition : card.term}</Text>
        {!flipped && <Text style={styles.hint}>Tap to reveal</Text>}
      </Pressable>

      <View style={styles.controls}>
        <Pressable onPress={() => go(index - 1)} style={styles.iconButton} accessibilityLabel="Previous card">
          <Ionicons name="arrow-back" size={26} color={colors.muted} />
        </Pressable>
        <Button title="Next" onPress={() => go(index + 1)} color={course.color} style={styles.next} />
        <Pressable
          onPress={() => {
            setCards(shuffle(cards));
            setIndex(0);
            setFlipped(false);
          }}
          style={styles.iconButton}
          accessibilityLabel="Shuffle cards"
        >
          <Ionicons name="shuffle" size={26} color={colors.muted} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: space.lg, gap: space.lg, backgroundColor: colors.bg },
  counter: { textAlign: 'center', color: colors.muted, fontWeight: '700' },
  card: {
    flex: 1,
    borderWidth: 2,
    borderBottomWidth: 6,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: space.xl,
    alignItems: 'center',
    justifyContent: 'center',
    gap: space.lg,
  },
  side: { fontSize: font.small, fontWeight: '800', color: colors.faint, letterSpacing: 1 },
  term: { fontSize: font.hero, fontWeight: '800', color: colors.text, textAlign: 'center' },
  definition: { fontSize: font.large, color: colors.text, textAlign: 'center', lineHeight: 28 },
  hint: { color: colors.faint, fontWeight: '600' },
  controls: { flexDirection: 'row', alignItems: 'center', gap: space.md },
  iconButton: {
    width: 52,
    height: 52,
    borderRadius: radius.md,
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  next: { flex: 1 },
});
