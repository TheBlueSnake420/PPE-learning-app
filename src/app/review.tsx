import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '@/components/Button';
import { CompleteView } from '@/components/CompleteView';
import { LessonRunner, type QueueItem, type RunResult } from '@/components/LessonRunner';
import { findExercise, getCourse } from '@/content';
import { shuffle } from '@/lib/shuffle';
import { dueReviews, useProgress, type SessionResult } from '@/store/progress';
import { colors, font, space } from '@/theme';

const MAX_REVIEW_ITEMS = 12;

export default function ReviewScreen() {
  const completeReview = useProgress((s) => s.completeReview);
  const [finished, setFinished] = useState<{ session: SessionResult; accuracy: number } | null>(null);

  // Build the queue once when the screen opens; answering changes the store.
  const [items] = useState<QueueItem[]>(() => {
    const due = dueReviews(useProgress.getState().reviews);
    const found: QueueItem[] = [];
    for (const r of shuffle(due)) {
      const course = getCourse(r.courseId);
      const exercise = course && findExercise(course, r.exerciseId);
      if (exercise) found.push({ courseId: r.courseId, exercise });
      if (found.length >= MAX_REVIEW_ITEMS) break;
    }
    return found;
  });

  if (finished) {
    return (
      <CompleteView
        title="Review complete!"
        result={finished.session}
        accuracy={finished.accuracy}
        onContinue={() => router.back()}
      />
    );
  }

  if (items.length === 0) {
    return (
      <SafeAreaView style={styles.empty}>
        <Ionicons name="checkmark-done-circle" size={80} color={colors.green} />
        <Text style={styles.title}>Nothing to review</Text>
        <Text style={styles.muted}>Mistakes you make in lessons show up here so you can practise them again.</Text>
        <Button title="Back" onPress={() => router.back()} style={styles.button} />
      </SafeAreaView>
    );
  }

  const onFinish = ({ total, correctFirstTry }: RunResult) => {
    setFinished({ session: completeReview(correctFirstTry), accuracy: total ? correctFirstTry / total : 1 });
  };

  return (
    <LessonRunner
      items={items}
      isReview
      onClose={() => router.back()}
      onFinish={onFinish}
      label={(item) => getCourse(item.courseId)?.shortTitle}
    />
  );
}

const styles = StyleSheet.create({
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: space.xl, gap: space.md },
  title: { fontSize: font.title, fontWeight: '800', color: colors.text },
  muted: { fontSize: font.body, color: colors.muted, textAlign: 'center', lineHeight: 22 },
  button: { alignSelf: 'stretch', marginTop: space.lg },
});
