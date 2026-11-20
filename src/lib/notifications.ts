import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';
import { AppState, Linking, Platform } from 'react-native';

import { perksFor } from '@/lib/ranks';
import { planReminders } from '@/lib/reminders';
import { totalXpOf, useProgress } from '@/store/progress';
import { colors } from '@/theme';

const CHANNEL_ID = 'streak-reminders';
const REMINDER_KIND = 'streak-reminder';

/** Local notifications only exist in the phone app, not in the web preview. */
export const remindersSupported = Platform.OS === 'android' || Platform.OS === 'ios';

export type ReminderPermission = { status: 'granted' | 'denied' | 'undetermined'; canAskAgain: boolean };

let setupPromise: Promise<void> | null = null;

/**
 * Creates the Android channel and the foreground handler. Android 13+ only shows the
 * permission prompt once a channel exists, so this runs before any permission request.
 */
function setup(): Promise<void> {
  setupPromise ??= (async () => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowBanner: true,
        shouldShowList: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
      }),
    });
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync(CHANNEL_ID, {
        name: 'Streak reminders',
        description: 'Reminders when your daily streak is at risk',
        importance: Notifications.AndroidImportance.HIGH,
        lightColor: colors.orange,
      });
    }
  })().catch((error) => {
    setupPromise = null;
    throw error;
  });
  return setupPromise;
}

export async function getReminderPermission(): Promise<ReminderPermission> {
  if (!remindersSupported) return { status: 'denied', canAskAgain: false };
  await setup();
  const p = await Notifications.getPermissionsAsync();
  return { status: p.granted ? 'granted' : p.status === 'undetermined' ? 'undetermined' : 'denied', canAskAgain: p.canAskAgain };
}

export async function requestReminderPermission(): Promise<boolean> {
  if (!remindersSupported) return false;
  await setup();
  return (await Notifications.requestPermissionsAsync()).granted;
}

export function openAppSettings(): void {
  Linking.openSettings().catch(() => {});
}

async function cancelStreakReminders(): Promise<void> {
  const scheduled = await Notifications.getAllScheduledNotificationsAsync();
  await Promise.all(
    scheduled
      .filter((n) => n.content.data?.kind === REMINDER_KIND)
      .map((n) => Notifications.cancelScheduledNotificationAsync(n.identifier)),
  );
}

let queue: Promise<void> = Promise.resolve();

/**
 * Rebuilds the scheduled streak reminders from the current progress and settings.
 * Calls are queued so that cancel-and-schedule rounds never interleave.
 */
export function syncReminders({ askPermission = false } = {}): Promise<void> {
  if (!remindersSupported) return Promise.resolve();
  queue = queue
    .then(async () => {
      await setup();
      await cancelStreakReminders();
      const progress = useProgress.getState();
      const { remindersEnabled, reminderTimes, streak, lastActiveDay, frozenDays } = progress;
      const { streakFreeze } = perksFor(totalXpOf(progress));
      if (!remindersEnabled || reminderTimes.length === 0) return;

      const permission = await Notifications.getPermissionsAsync();
      let granted = permission.granted;
      if (!granted && askPermission && permission.status === 'undetermined') {
        granted = (await Notifications.requestPermissionsAsync()).granted;
      }
      if (!granted) return;

      const plan = planReminders({ now: new Date(), streak, lastActiveDay, frozenDays, streakFreeze, times: reminderTimes });
      for (const reminder of plan) {
        await Notifications.scheduleNotificationAsync({
          content: { title: reminder.title, body: reminder.body, data: { kind: REMINDER_KIND } },
          trigger: { type: Notifications.SchedulableTriggerInputTypes.DATE, date: reminder.date, channelId: CHANNEL_ID },
        });
      }
    })
    .catch((error) => console.warn('Could not schedule streak reminders', error));
  return queue;
}

/** Sends a sample reminder after a few seconds, asking for permission if needed. */
export async function sendTestReminder(): Promise<boolean> {
  if (!remindersSupported) return false;
  await setup();
  const granted = (await Notifications.getPermissionsAsync()).granted || (await requestReminderPermission());
  if (!granted) return false;
  await Notifications.scheduleNotificationAsync({
    content: { title: 'Streak reminders are on', body: 'This is how your reminders will look.', data: { kind: 'test' } },
    trigger: { type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL, seconds: 5, channelId: CHANNEL_ID },
  });
  return true;
}

/**
 * Keeps scheduled reminders in line with progress: after a lesson today's remaining
 * reminders disappear, and each time the app comes to the foreground the plan is rebuilt.
 */
export function useReminderSync(active: boolean): void {
  const streak = useProgress((s) => s.streak);
  const lastActiveDay = useProgress((s) => s.lastActiveDay);
  const frozenDays = useProgress((s) => s.frozenDays);
  const streakFreeze = useProgress((s) => perksFor(totalXpOf(s)).streakFreeze);
  const remindersEnabled = useProgress((s) => s.remindersEnabled);
  const reminderTimes = useProgress((s) => s.reminderTimes);

  useEffect(() => {
    if (active) syncReminders({ askPermission: true });
  }, [active, streak, lastActiveDay, frozenDays, streakFreeze, remindersEnabled, reminderTimes]);

  useEffect(() => {
    if (!active) return;
    const sub = AppState.addEventListener('change', (state) => {
      if (state === 'active') syncReminders();
    });
    return () => sub.remove();
  }, [active]);
}
