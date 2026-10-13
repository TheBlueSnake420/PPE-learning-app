import { useEffect, useMemo, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import type { MatchExercise } from '@/content';
import { feedback } from '@/lib/haptics';
import { shuffle } from '@/lib/shuffle';
import { colors, font } from '@/theme';
import type { Answer } from './answers';
import { OptionTile, type TileState } from './OptionTile';

interface Props {
  exercise: MatchExercise;
  locked: boolean;
  onAnswer: (answer: Answer | null) => void;
}

type Side = 'left' | 'right';

/**
 * Tap one item on each side. A correct pair turns green and greys out; a wrong
 * pair flashes red. The answer is ready once every pair is matched.
 */
export function MatchView({ exercise, locked, onAnswer }: Props) {
  const lefts = useMemo(() => shuffle(exercise.pairs.map((_, i) => i)), [exercise]);
  // Avoid placing a correct pair side by side in the same row, which would give it away.
  const rights = useMemo(() => {
    let best = shuffle(lefts);
    for (let attempt = 0; attempt < 20 && best.some((p, row) => p === lefts[row]); attempt++) {
      best = shuffle(lefts);
    }
    return best;
  }, [lefts]);

  const [selection, setSelection] = useState<{ side: Side; pair: number } | null>(null);
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [flash, setFlash] = useState<{ left: number; right: number; ok: boolean } | null>(null);
  const [mistakes, setMistakes] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const tap = (side: Side, pair: number) => {
    if (locked || matched.has(pair)) return;
    if (!selection || selection.side === side) {
      feedback('tap');
      setSelection(selection?.side === side && selection.pair === pair ? null : { side, pair });
      return;
    }
    const left = side === 'left' ? pair : selection.pair;
    const right = side === 'right' ? pair : selection.pair;
    const ok = left === right;
    setSelection(null);
    setFlash({ left, right, ok });
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setFlash(null), 450);

    if (ok) {
      feedback('success');
      const next = new Set(matched).add(left);
      setMatched(next);
      if (next.size === exercise.pairs.length) onAnswer({ type: 'match', mistakes });
    } else {
      feedback('error');
      setMistakes((m) => m + 1);
    }
  };

  const stateFor = (side: Side, pair: number): TileState => {
    if (flash && (side === 'left' ? flash.left : flash.right) === pair) {
      return flash.ok ? 'correct' : 'wrong';
    }
    if (matched.has(pair)) return 'faded';
    if (selection?.side === side && selection.pair === pair) return 'selected';
    return 'idle';
  };

  return (
    <View style={styles.wrap}>
      {exercise.prompt ? <Text style={styles.prompt}>{exercise.prompt}</Text> : null}
      {/* Rows (not columns) so both tiles in a row share a height and stay aligned. */}
      <View style={styles.rows}>
        {lefts.map((leftPair, row) => {
          const rightPair = rights[row];
          return (
            <View key={row} style={styles.row}>
              <OptionTile
                label={exercise.pairs[leftPair][0]}
                center
                state={stateFor('left', leftPair)}
                disabled={locked || matched.has(leftPair)}
                onPress={() => tap('left', leftPair)}
                style={styles.tile}
              />
              <OptionTile
                label={exercise.pairs[rightPair][1]}
                center
                state={stateFor('right', rightPair)}
                disabled={locked || matched.has(rightPair)}
                onPress={() => tap('right', rightPair)}
                style={styles.tile}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 20 },
  prompt: { fontSize: font.large, fontWeight: '600', color: colors.text },
  rows: { gap: 10 },
  row: { flexDirection: 'row', gap: 12, alignItems: 'stretch' },
  tile: { flex: 1, minHeight: 64, justifyContent: 'center' },
});
