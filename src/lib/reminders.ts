import { addDays, dateKey } from '@/lib/dates';
import { freezesNeeded, streakOn } from '@/lib/streak';

/** Times of day (24h, local) at which streak reminders can be sent. */
export const REMINDER_TIMES = ['16:00', '20:00', '22:00', '23:45'];

/** How many days ahead reminders are scheduled; the plan is rebuilt whenever the app opens. */
export const REMINDER_DAYS_AHEAD = 7;

export interface PlannedReminder {
  date: Date;
  title: string;
  body: string;
}

interface PlanInput {
  now: Date;
  /** Stored streak, counted up to `lastActiveDay`. */
  streak: number;
  lastActiveDay: string | null;
  /** Missed days already covered by a streak freeze. */
  frozenDays: string[];
  /** Whether the rank gives a weekly streak freeze. */
  streakFreeze: boolean;
  /** Enabled reminder times as "HH:MM". */
  times: string[];
  daysAhead?: number;
}

function atTime(day: string, time: string): Date {
  const [y, m, d] = day.split('-').map(Number);
  const [hh, mm] = time.split(':').map(Number);
  return new Date(y, m - 1, d, hh, mm, 0, 0);
}

function streakMessage(streak: number, date: Date): Pick<PlannedReminder, 'title' | 'body'> {
  const midnight = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
  const minutesLeft = Math.round((midnight.getTime() - date.getTime()) / 60000);
  const days = `${streak}-day streak`;
  if (minutesLeft <= 60) {
    return { title: `Only ${minutesLeft} minutes left!`, body: `Do one lesson now to save your ${days}.` };
  }
  if (minutesLeft <= 180) {
    const hours = Math.round(minutesLeft / 60);
    return {
      title: `${hours} hours left to keep your streak`,
      body: `Your ${days} ends at midnight. One short lesson is enough.`,
    };
  }
  return { title: `Keep your ${days} going`, body: 'A short lesson or a mistake review keeps it alive today.' };
}

function freezeMessage(streak: number): Pick<PlannedReminder, 'title' | 'body'> {
  return {
    title: `Keep your ${streak}-day streak going`,
    body: 'Your streak freeze would cover today, but a short lesson saves it for later.',
  };
}

const NEW_STREAK = {
  title: 'Start a new streak today',
  body: 'One short lesson is all it takes.',
};

/**
 * Plans streak reminders for today and the coming days, assuming no further activity
 * after `now` (the plan is rebuilt after every lesson and whenever the app opens).
 * Days where a streak is at risk get every enabled time. Days where a streak
 * freeze would cover a skipped day, and days without a streak to protect, get a
 * single, gentler reminder at the first enabled time still ahead.
 */
export function planReminders({
  now,
  streak,
  lastActiveDay,
  frozenDays,
  streakFreeze,
  times,
  daysAhead = REMINDER_DAYS_AHEAD,
}: PlanInput): PlannedReminder[] {
  const enabled = [...new Set(times)].sort();
  if (enabled.length === 0) return [];

  const todayKey = dateKey(now);
  const earliest = now.getTime() + 30_000;
  const plan: PlannedReminder[] = [];

  for (let k = 0; k < daysAhead; k++) {
    const day = addDays(todayKey, k);
    if (lastActiveDay === day) continue; // already studied that day

    // The streak still alive on `day`, and whether it survives the day without activity.
    const state = { streak, lastActiveDay, frozenDays };
    const alive = streakOn(state, day, streakFreeze);
    const survivesSkip = alive > 0 && freezesNeeded(state, addDays(day, 1), streakFreeze) !== null;
    const upcoming = enabled.map((t) => atTime(day, t)).filter((d) => d.getTime() > earliest);

    if (alive > 0 && !survivesSkip) {
      for (const date of upcoming) plan.push({ date, ...streakMessage(alive, date) });
    } else if (upcoming.length > 0) {
      plan.push({ date: upcoming[0], ...(alive > 0 ? freezeMessage(alive) : NEW_STREAK) });
    }
  }
  return plan;
}
