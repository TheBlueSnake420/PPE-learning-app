import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Button } from '@/components/Button';
import { OptionTile } from '@/components/exercises/OptionTile';
import { DAILY_GOALS, useProgress } from '@/store/progress';
import { colors, font, radius, space } from '@/theme';

export default function SettingsScreen() {
  const progress = useProgress();
  const [confirmReset, setConfirmReset] = useState(false);
  const lessonsDone = Object.keys(progress.lessons).length;
  const inReview = Object.keys(progress.reviews).length;

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Daily goal</Text>
      <View style={styles.goals}>
        {DAILY_GOALS.map((g) => (
          <OptionTile
            key={g.xp}
            label={`${g.label}  ·  ${g.xp} XP per day`}
            state={progress.dailyGoal === g.xp ? 'selected' : 'idle'}
            onPress={() => progress.setDailyGoal(g.xp)}
          />
        ))}
      </View>

      <Text style={styles.heading}>Statistics</Text>
      <View style={styles.stats}>
        <Stat label="Total XP" value={progress.totalXp} />
        <Stat label="Longest streak" value={`${progress.longestStreak} days`} />
        <Stat label="Lessons completed" value={lessonsDone} />
        <Stat label="Mistakes in review" value={inReview} />
      </View>

      <Text style={styles.heading}>About the content</Text>
      <Text style={styles.muted}>
        Lessons and summaries are generated from your lecture slides and readings. They can contain mistakes, so when
        something looks off, check it against the source material.
      </Text>

      <Text style={styles.heading}>Reset</Text>
      <Text style={styles.muted}>Deletes all XP, streaks, completed lessons and review items. Your daily goal stays.</Text>
      <Button
        title={confirmReset ? 'Tap again to confirm' : 'Reset progress'}
        variant={confirmReset ? 'red' : 'white'}
        onPress={() => {
          if (confirmReset) {
            progress.resetProgress();
            setConfirmReset(false);
          } else {
            setConfirmReset(true);
          }
        }}
      />
    </ScrollView>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: { padding: space.lg, gap: space.md, paddingBottom: 64 },
  heading: { fontSize: font.title, fontWeight: '800', color: colors.text, marginTop: space.md },
  goals: { gap: space.sm },
  stats: { flexDirection: 'row', flexWrap: 'wrap', gap: space.sm },
  stat: {
    width: '48%',
    flexGrow: 1,
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: space.md,
  },
  statValue: { fontSize: font.title, fontWeight: '800', color: colors.text },
  statLabel: { fontSize: font.small, color: colors.muted, fontWeight: '600' },
  muted: { fontSize: font.body, color: colors.muted, lineHeight: 22 },
});
