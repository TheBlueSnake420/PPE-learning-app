import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect, useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import type { Exercise } from '@/content';
import { feedback } from '@/lib/haptics';
import { useProgress } from '@/store/progress';
import { colors, font, space } from '@/theme';
import { Button } from './Button';
import { type Answer, correctAnswerText, instruction, isCorrect } from './exercises/answers';
import { ChoiceView } from './exercises/ChoiceView';
import { FillView } from './exercises/FillView';
import { MatchView } from './exercises/MatchView';
import { OrderView } from './exercises/OrderView';
import { TrueFalseView } from './exercises/TrueFalseView';
import { ProgressBar } from './ProgressBar';

export interface QueueItem {
  courseId: string;
  exercise: Exercise;
}

export interface RunResult {
  total: number;
  correctFirstTry: number;
}

interface Props {
  items: QueueItem[];
  isReview: boolean;
  onClose: () => void;
  onFinish: (result: RunResult) => void;
  /** Optional line above the exercise, e.g. the course name in reviews. */
  label?: (item: QueueItem) => string | undefined;
}

type Status = 'answering' | 'correct' | 'wrong';

const PRAISE = ['Nice!', 'Great job!', 'Correct!', 'Well done!', 'Excellent!'];

/**
 * Runs a list of exercises Duolingo-style: answer, check, see feedback,
 * continue. Wrong answers come back at the end of the queue until answered
 * correctly (match exercises are not repeated; their mistakes go to review).
 */
export function LessonRunner({ items, isReview, onClose, onFinish, label }: Props) {
  const recordAnswer = useProgress((s) => s.recordAnswer);
  const [queue, setQueue] = useState<QueueItem[]>(items);
  const [pos, setPos] = useState(0);
  const [answer, setAnswer] = useState<Answer | null>(null);
  const [status, setStatus] = useState<Status>('answering');
  const [praise, setPraise] = useState(PRAISE[0]);
  const firstTry = useRef(new Map<string, boolean>());
  const done = useRef(new Set<string>());
  const scrollRef = useRef<ScrollView>(null);

  const current = queue[pos];
  const exercise = current.exercise;
  const key = `${current.courseId}/${exercise.id}`;

  const check = (given: Answer | null = answer) => {
    if (!given || status !== 'answering') return;
    const correct = isCorrect(exercise, given);
    feedback(correct ? 'success' : 'error');
    recordAnswer(current.courseId, exercise.id, correct, isReview);
    if (!firstTry.current.has(key)) firstTry.current.set(key, correct);
    if (correct || exercise.type === 'match') {
      done.current.add(key);
    } else {
      setQueue((q) => [...q, current]);
    }
    setPraise(PRAISE[Math.floor(Math.random() * PRAISE.length)]);
    setStatus(correct ? 'correct' : 'wrong');
  };

  // Matching completes itself once every pair is found; no Check button needed.
  useEffect(() => {
    if (answer?.type === 'match') check(answer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answer]);

  const next = () => {
    if (pos + 1 >= queue.length) {
      const results = [...firstTry.current.values()];
      onFinish({ total: results.length, correctFirstTry: results.filter(Boolean).length });
      return;
    }
    setPos(pos + 1);
    setAnswer(null);
    setStatus('answering');
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  };

  const total = new Set(items.map((i) => `${i.courseId}/${i.exercise.id}`)).size;
  const progress = done.current.size / total;
  const locked = status !== 'answering';
  const reveal = status === 'wrong' ? correctAnswerText(exercise) : null;
  const caption = label?.(current);

  const viewProps = { locked, onAnswer: setAnswer };
  let body;
  switch (exercise.type) {
    case 'choice':
      body = <ChoiceView exercise={exercise} {...viewProps} />;
      break;
    case 'truefalse':
      body = <TrueFalseView exercise={exercise} {...viewProps} />;
      break;
    case 'fill':
      body = <FillView exercise={exercise} {...viewProps} />;
      break;
    case 'order':
      body = <OrderView exercise={exercise} {...viewProps} />;
      break;
    case 'match':
      body = <MatchView exercise={exercise} {...viewProps} />;
      break;
  }

  return (
    <SafeAreaView style={styles.screen} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <Pressable onPress={onClose} hitSlop={12} accessibilityLabel="Close lesson">
          <Ionicons name="close" size={30} color={colors.faint} />
        </Pressable>
        <ProgressBar value={progress} />
      </View>

      <ScrollView ref={scrollRef} contentContainerStyle={styles.content}>
        {pos >= items.length && (
          <View style={styles.retryBadge}>
            <Ionicons name="refresh" size={14} color={colors.orange} />
            <Text style={styles.retryText}>PREVIOUS MISTAKE</Text>
          </View>
        )}
        {caption ? <Text style={styles.caption}>{caption}</Text> : null}
        <Text style={styles.instruction}>{instruction(exercise)}</Text>
        {/* Keyed by position so a repeated exercise starts fresh and reshuffles. */}
        <View key={`${pos}-${key}`}>{body}</View>
      </ScrollView>

      {status === 'answering' ? (
        <View style={styles.footer}>
          {exercise.type !== 'match' && <Button title="Check" onPress={() => check()} disabled={!answer} />}
        </View>
      ) : (
        <View style={[styles.footer, styles.sheet, status === 'correct' ? styles.sheetCorrect : styles.sheetWrong]}>
          <View style={styles.sheetTitleRow}>
            <Ionicons
              name={status === 'correct' ? 'checkmark-circle' : 'close-circle'}
              size={28}
              color={status === 'correct' ? colors.greenDark : colors.redDark}
            />
            <Text style={[styles.sheetTitle, { color: status === 'correct' ? colors.greenDark : colors.redDark }]}>
              {status === 'correct'
                ? praise
                : exercise.type === 'match'
                  ? 'Some mismatches - this one goes to review'
                  : 'Not quite'}
            </Text>
          </View>
          {reveal && (
            <View>
              <Text style={[styles.sheetLabel, { color: colors.redDark }]}>Correct answer:</Text>
              <Text style={[styles.sheetText, { color: colors.redDark }]}>{reveal}</Text>
            </View>
          )}
          {exercise.explanation && (
            <Text style={[styles.sheetText, { color: status === 'correct' ? colors.greenDark : colors.redDark }]}>
              {exercise.explanation}
            </Text>
          )}
          <Button title="Continue" variant={status === 'correct' ? 'green' : 'red'} onPress={next} />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.md,
    paddingHorizontal: space.lg,
    paddingTop: space.sm,
    paddingBottom: space.md,
  },
  content: { padding: space.lg, paddingBottom: space.xxl, gap: space.md },
  retryBadge: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  retryText: { color: colors.orange, fontWeight: '800', fontSize: font.small, letterSpacing: 0.5 },
  caption: { color: colors.muted, fontSize: font.small, fontWeight: '700', textTransform: 'uppercase' },
  instruction: { fontSize: font.title, fontWeight: '800', color: colors.text, marginBottom: space.sm },
  footer: {
    paddingHorizontal: space.lg,
    paddingTop: space.lg,
    paddingBottom: space.lg,
    borderTopWidth: 2,
    borderTopColor: colors.border,
    gap: space.md,
  },
  sheet: { borderTopWidth: 0 },
  sheetCorrect: { backgroundColor: colors.greenBg },
  sheetWrong: { backgroundColor: colors.redBg },
  sheetTitleRow: { flexDirection: 'row', alignItems: 'center', gap: space.sm },
  sheetTitle: { fontSize: font.title, fontWeight: '800', flexShrink: 1 },
  sheetLabel: { fontSize: font.body, fontWeight: '800', marginBottom: 2 },
  sheetText: { fontSize: font.body, lineHeight: 22 },
});
