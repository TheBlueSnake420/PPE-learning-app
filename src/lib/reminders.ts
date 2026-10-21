import { addDays, dateKey } from '@/lib/dates';

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

const NEW_STREAK = {
  title: 'Start a new streak today',
  body: 'One short lesson is all it takes.',
};

/**
 * Plans streak reminders for today and the coming days, assuming no further activity
 * after `now` (the plan is rebuilt after every lesson and whenever the app opens).
 * Days where a streak is at risk get every enabled time; days without a streak to
 * protect get a single, gentler reminder at the first enabled time still ahead.
 */
export function planReminders({ now, streak, lastActiveDay, times, daysAhead = REMINDER_DAYS_AHEAD }: PlanInput): PlannedReminder[] {
  const enabled = [...new Set(times)].sort();
  if (enabled.length === 0) return [];

  const todayKey = dateKey(now);
  const earliest = now.getTime() + 30_000;
  const plan: PlannedReminder[] = [];

  for (let k = 0; k < daysAhead; k++) {
    const day = addDays(todayKey, k);
    if (lastActiveDay === day) continue; // already studied that day

    // The streak that ends at midnight if nothing happens on `day`.
    const atRisk = lastActiveDay === addDays(day, -1) ? streak : 0;
    const upcoming = enabled.map((t) => atTime(day, t)).filter((d) => d.getTime() > earliest);

    if (atRisk > 0) {
      for (const date of upcoming) plan.push({ date, ...streakMessage(atRisk, date) });
    } else if (upcoming.length > 0) {
      plan.push({ date: upcoming[0], ...NEW_STREAK });
    }
  }
  return plan;
}
