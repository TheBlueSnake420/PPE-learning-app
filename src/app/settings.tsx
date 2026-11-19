import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { ConfirmTwice } from '@/components/ConfirmTwice';
import { OptionTile } from '@/components/exercises/OptionTile';
import { ReminderSettings } from '@/components/ReminderSettings';
import { resetOnlineXp } from '@/store/online';
import { DAILY_GOALS, useProgress } from '@/store/progress';
import { colors, font, space } from '@/theme';

export default function SettingsScreen() {
  const progress = useProgress();

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

      <Text style={styles.heading}>Streak reminders</Text>
      <ReminderSettings />

      <Text style={styles.heading}>About the content</Text>
      <Text style={styles.muted}>
        Lessons and summaries are generated from your lecture slides and readings. They can contain mistakes, so when
        something looks off, check it against the source material.
      </Text>

      <Text style={styles.heading}>Reset</Text>
      <Text style={styles.muted}>
        Deletes all XP (and with it your rank), streaks, boosts, completed lessons and review items. If you have an
        online account, its XP on the leaderboards is deleted too. Your daily goal, reminders, name and completed courses
        stay.
      </Text>
      <ConfirmTwice
        title="Reset progress"
        steps={[
          {
            title: 'Reset all progress?',
            message: 'Your XP, rank, streaks, completed lessons and saved mistakes will be deleted.',
            confirm: 'Yes, continue',
          },
          {
            title: 'This cannot be undone',
            message: 'All progress is gone for good, including your XP on the leaderboards. Reset everything?',
            confirm: 'Reset everything',
          },
        ]}
        onConfirm={() => {
          progress.resetProgress();
          resetOnlineXp();
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: space.lg, gap: space.md, paddingBottom: 64 },
  heading: { fontSize: font.title, fontWeight: '800', color: colors.text, marginTop: space.md },
  goals: { gap: space.sm },
  muted: { fontSize: font.body, color: colors.muted, lineHeight: 22 },
});
