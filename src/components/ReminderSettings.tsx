import { useCallback, useEffect, useState } from 'react';
import { AppState, Pressable, StyleSheet, Switch, Text, View } from 'react-native';

import { Button } from '@/components/Button';
import {
  getReminderPermission,
  openAppSettings,
  type ReminderPermission,
  remindersSupported,
  requestReminderPermission,
  sendTestReminder,
  syncReminders,
} from '@/lib/notifications';
import { REMINDER_TIMES } from '@/lib/reminders';
import { useProgress } from '@/store/progress';
import { colors, font, radius, space, tint } from '@/theme';

/** Settings block for streak reminder notifications. */
export function ReminderSettings() {
  const enabled = useProgress((s) => s.remindersEnabled);
  const times = useProgress((s) => s.reminderTimes);
  const setEnabled = useProgress((s) => s.setRemindersEnabled);
  const toggleTime = useProgress((s) => s.toggleReminderTime);
  const [permission, setPermission] = useState<ReminderPermission | null>(null);
  const [testState, setTestState] = useState<'idle' | 'sent' | 'blocked'>('idle');

  const refreshPermission = useCallback(() => {
    getReminderPermission()
      .then(setPermission)
      .catch(() => setPermission(null));
  }, []);

  // Re-check when returning from the system settings.
  useEffect(() => {
    if (!remindersSupported) return;
    refreshPermission();
    const sub = AppState.addEventListener('change', (state) => {
      if (state === 'active') refreshPermission();
    });
    return () => sub.remove();
  }, [refreshPermission]);

  if (!remindersSupported) {
    return <Text style={styles.muted}>Reminders work in the Android app, not in this web preview.</Text>;
  }

  const blocked = permission?.status === 'denied';

  const allow = async () => {
    if (permission?.canAskAgain) {
      await requestReminderPermission().catch(() => false);
      refreshPermission();
      syncReminders();
    } else {
      openAppSettings();
    }
  };

  return (
    <View style={styles.block}>
      <Text style={styles.muted}>
        A nudge at the times below while your streak is at risk. Finishing a lesson or a review cancels the rest of
        that day&apos;s reminders. Without a streak to keep, you get one reminder a day, at the earliest time.
      </Text>

      <View style={styles.row}>
        <Text style={styles.rowLabel}>Remind me</Text>
        <Switch
          value={enabled}
          onValueChange={setEnabled}
          trackColor={{ true: colors.green, false: colors.borderDark }}
          thumbColor="#FFFFFF"
        />
      </View>

      <View style={styles.times}>
        {REMINDER_TIMES.map((time) => {
          const on = enabled && times.includes(time);
          return (
            <Pressable
              key={time}
              onPress={() => toggleTime(time)}
              disabled={!enabled}
              accessibilityRole="checkbox"
              accessibilityState={{ checked: on, disabled: !enabled }}
              style={[styles.chip, on && styles.chipOn, !enabled && styles.chipDisabled]}
            >
              <Text style={[styles.chipText, on && styles.chipTextOn]}>{time}</Text>
            </Pressable>
          );
        })}
      </View>

      {enabled && times.length === 0 ? <Text style={styles.muted}>Pick at least one time to get reminders.</Text> : null}

      {enabled && blocked ? (
        <View style={styles.warning}>
          <Text style={styles.warningText}>Notifications are turned off for PPE Study, so reminders cannot appear.</Text>
          <Button title={permission?.canAskAgain ? 'Allow notifications' : 'Open settings'} variant="white" onPress={allow} />
        </View>
      ) : null}

      {enabled ? (
        <>
          <Button
            title="Send a test reminder"
            variant="white"
            onPress={async () => {
              const ok = await sendTestReminder().catch(() => false);
              setTestState(ok ? 'sent' : 'blocked');
              refreshPermission();
              if (ok) syncReminders();
            }}
          />
          {testState === 'sent' ? <Text style={styles.muted}>A test reminder arrives in about 5 seconds.</Text> : null}
          {testState === 'blocked' ? (
            <Text style={styles.muted}>Allow notifications for PPE Study first, then try again.</Text>
          ) : null}
        </>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  block: { gap: space.md },
  muted: { fontSize: font.body, color: colors.muted, lineHeight: 22 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  rowLabel: { fontSize: font.large, fontWeight: '700', color: colors.text },
  times: { flexDirection: 'row', flexWrap: 'wrap', gap: space.sm },
  chip: {
    paddingVertical: space.sm,
    paddingHorizontal: space.lg,
    borderRadius: radius.pill,
    borderWidth: 2,
    borderColor: colors.border,
    backgroundColor: '#FFFFFF',
  },
  chipOn: { borderColor: colors.orange, backgroundColor: tint(colors.orange, 0.85) },
  chipDisabled: { opacity: 0.5 },
  chipText: { fontSize: font.body, fontWeight: '700', color: colors.muted },
  chipTextOn: { color: colors.orange },
  warning: {
    gap: space.sm,
    padding: space.md,
    borderRadius: radius.md,
    backgroundColor: colors.redBg,
  },
  warningText: { fontSize: font.body, color: colors.redDark, fontWeight: '600', lineHeight: 22 },
});
