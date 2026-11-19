import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Session } from '@supabase/supabase-js';
import { useEffect } from 'react';
import { AppState } from 'react-native';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { supabase } from '@/lib/supabase';
import { uuidv4 } from '@/lib/uuid';
import { useProgress } from '@/store/progress';

/**
 * Online accounts and leaderboards (Supabase; database rules in supabase/schema.sql).
 *
 * Studying stays fully offline: lessons, XP, streaks and boosts live on the device. A player
 * who joins gets an account (anonymous at first, optionally linked to an email address), and
 * each device uploads its own XP per day. Uploads are idempotent daily totals, so they can be
 * retried and nothing is counted twice; the server sums them over the player's devices.
 */

export const NAME_MIN = 2;
export const NAME_MAX = 24;
/** Matches the per-day check in supabase/schema.sql. */
const MAX_XP_PER_DAY = 20000;

export interface OnlineProfile {
  id: string;
  displayName: string;
  isAdmin: boolean;
  banned: boolean;
}

export interface AccountInfo {
  userId: string;
  email: string | null;
  isAnonymous: boolean;
}

export type SyncStatus = 'idle' | 'syncing' | 'ok' | 'offline';

interface OnlineState {
  /** Random ID for this device, so each device's XP is stored separately. */
  deviceId: string;
  /** XP per day last uploaded from this device for the account `syncedFor`. */
  syncedDays: Record<string, number>;
  syncedFor: string | null;
  /** Progress was reset while offline: delete the account's server XP at the next sync. */
  pendingServerReset: boolean;
  profile: OnlineProfile | null;
  weekPlace: number | null;
  weekXp: number;
  // Not saved: restored from the Supabase session on launch.
  account: AccountInfo | null;
  status: SyncStatus;
}

export const useOnline = create<OnlineState>()(
  persist(
    (): OnlineState => ({
      deviceId: uuidv4(),
      syncedDays: {},
      syncedFor: null,
      pendingServerReset: false,
      profile: null,
      weekPlace: null,
      weekXp: 0,
      account: null,
      status: 'idle',
    }),
    {
      name: 'ppe-online',
      version: 1,
      storage: createJSONStorage(() => AsyncStorage),
      partialize: ({ deviceId, syncedDays, syncedFor, pendingServerReset, profile, weekPlace, weekXp }) => ({
        deviceId,
        syncedDays,
        syncedFor,
        pendingServerReset,
        profile,
        weekPlace,
        weekXp,
      }),
    },
  ),
);

function accountFrom(session: Session | null): AccountInfo | null {
  const user = session?.user;
  if (!user) return null;
  return { userId: user.id, email: user.email || null, isAnonymous: !!user.is_anonymous };
}

/** Forget the account on this device (local progress stays). */
function clearAccount() {
  useOnline.setState({
    account: null,
    profile: null,
    weekPlace: null,
    weekXp: 0,
    syncedDays: {},
    syncedFor: null,
    pendingServerReset: false,
    status: 'idle',
  });
  useProgress.setState({ otherDevicesXp: 0 });
}

// --- Errors ---------------------------------------------------------------------------------

/** A short message for the player, from a Supabase or network error. */
export function friendlyError(error: unknown): string {
  const e = error as { message?: string; code?: string; status?: number } | null;
  const msg = e?.message ?? String(error);
  if (e?.code === '23505') return 'That name is already taken. Try another one.';
  if (/could not find the (function|table)|schema cache/i.test(msg))
    return 'The leaderboard is not set up on the server yet.';
  if (e?.code === '23514') return `Names must be ${NAME_MIN} to ${NAME_MAX} characters.`;
  if (/anonymous sign-ins are disabled/i.test(msg))
    return 'Online accounts are not switched on yet (anonymous sign-ins are disabled in Supabase).';
  if (/manual linking is disabled/i.test(msg))
    return 'Adding an email is not switched on yet (manual linking is disabled in Supabase).';
  if (/email address not authorized/i.test(msg))
    return "The app can't send email to this address yet: its email service still needs to be set up.";
  if (/signups not allowed/i.test(msg)) return 'There is no account with this email address.';
  if (/expired|invalid/i.test(msg) && /otp|token|code/i.test(msg)) return 'That code is wrong or has expired.';
  if (/already (been )?registered|already in use|exists/i.test(msg))
    return 'This email address already belongs to another account.';
  if (/rate limit|too many|security purposes/i.test(msg)) return 'Too many attempts. Wait a minute and try again.';
  if (/network|fetch|timeout|failed to fetch/i.test(msg)) return "Can't reach the server. Check your connection.";
  return msg;
}

export function cleanName(name: string): string {
  return name.trim().replace(/\s+/g, ' ');
}

function checkName(name: string): string {
  const clean = cleanName(name);
  if (clean.length < NAME_MIN || clean.length > NAME_MAX) {
    throw new Error(`Names must be ${NAME_MIN} to ${NAME_MAX} characters.`);
  }
  return clean;
}

// --- Sync -----------------------------------------------------------------------------------

async function loadProfile(userId: string): Promise<OnlineProfile | null> {
  const { data, error } = await supabase
    .from('profiles')
    .select('id, display_name, is_admin, banned')
    .eq('id', userId)
    .maybeSingle();
  if (error) throw error;
  const profile = data
    ? { id: data.id, displayName: data.display_name, isAdmin: data.is_admin, banned: data.banned }
    : null;
  useOnline.setState({ profile });
  return profile;
}

/** Updates the account's XP from other devices and this week's place. */
async function refreshStanding() {
  const { deviceId } = useOnline.getState();
  const [mine, place] = await Promise.all([
    supabase.rpc('my_xp', { p_device: deviceId }),
    supabase.rpc('leaderboard', { p_period: 'week', p_limit: 0 }),
  ]);
  if (mine.error) throw mine.error;
  if (place.error) throw place.error;
  const row = (mine.data as { week_xp: number; other_devices_xp: number }[])[0];
  const me = (place.data as { place: number; is_me: boolean }[]).find((r) => r.is_me);
  useOnline.setState({ weekXp: Number(row?.week_xp ?? 0), weekPlace: me ? Number(me.place) : null });
  useProgress.setState({ otherDevicesXp: Number(row?.other_devices_xp ?? 0) });
}

async function doSync() {
  const { account, deviceId } = useOnline.getState();
  if (!account) return;
  useOnline.setState({ status: 'syncing' });
  try {
    const profile = await loadProfile(account.userId);
    if (!profile) {
      useOnline.setState({ status: 'idle' });
      return;
    }
    let { syncedDays } = useOnline.getState();
    if (useOnline.getState().syncedFor !== account.userId) syncedDays = {};

    if (useOnline.getState().pendingServerReset) {
      const { error } = await supabase.from('xp_days').delete().eq('user_id', account.userId);
      if (error) throw error;
      syncedDays = {};
      useOnline.setState({ pendingServerReset: false });
    }

    const rows = Object.entries(useProgress.getState().xpByDay)
      .map(([day, xp]) => ({ day, xp: Math.min(Math.round(xp), MAX_XP_PER_DAY) }))
      .filter(({ day, xp }) => xp > 0 && syncedDays[day] !== xp)
      .map(({ day, xp }) => ({ user_id: account.userId, device_id: deviceId, day, xp }));
    if (rows.length > 0 && !profile.banned) {
      const { error } = await supabase.from('xp_days').upsert(rows, { onConflict: 'user_id,device_id,day' });
      if (error) throw error;
      syncedDays = { ...syncedDays, ...Object.fromEntries(rows.map((r) => [r.day, r.xp])) };
    }
    useOnline.setState({ syncedDays, syncedFor: account.userId });
    await refreshStanding();
    useOnline.setState({ status: 'ok' });
  } catch (error) {
    console.warn('Sync failed', error);
    useOnline.setState({ status: 'offline' });
  }
}

let running: Promise<void> | null = null;

/** Uploads this device's XP and refreshes the standing. Safe to call often. */
export function syncNow(): Promise<void> {
  if (!running) running = doSync().finally(() => (running = null));
  return running;
}

function whenHydrated(): Promise<void> {
  if (useOnline.persist.hasHydrated()) return Promise.resolve();
  return new Promise((resolve) => {
    const unsub = useOnline.persist.onFinishHydration(() => {
      unsub();
      resolve();
    });
  });
}

/** Restores the login on launch and keeps XP synced (after lessons and when the app returns). */
export function useOnlineSync(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;
    let alive = true;
    let timer: ReturnType<typeof setTimeout> | undefined;

    whenHydrated()
      .then(() => supabase.auth.getSession())
      .then(({ data }) => {
        if (!alive) return;
        useOnline.setState({ account: accountFrom(data.session) });
        void syncNow();
      })
      .catch((error) => console.warn('Could not restore the online account', error));

    // Only store the session here: Supabase advises against awaiting its calls in this callback.
    const { data: auth } = supabase.auth.onAuthStateChange((_event, session) => {
      useOnline.setState({ account: accountFrom(session) });
    });
    const unsubProgress = useProgress.subscribe((state, prev) => {
      if (state.totalXp === prev.totalXp) return;
      clearTimeout(timer);
      timer = setTimeout(() => void syncNow(), 1500);
    });
    const appState = AppState.addEventListener('change', (state) => {
      if (state === 'active') void syncNow();
    });

    return () => {
      alive = false;
      clearTimeout(timer);
      auth.subscription.unsubscribe();
      unsubProgress();
      appState.remove();
    };
  }, [enabled]);
}

// --- Account actions (they throw; screens show friendlyError) ------------------------------

/** Join with a display name: creates an anonymous account if needed, then the profile. */
export async function joinWithName(rawName: string) {
  const name = checkName(rawName);
  let { account } = useOnline.getState();
  if (!account) {
    const { data, error } = await supabase.auth.signInAnonymously();
    if (error) throw error;
    account = accountFrom(data.session);
    useOnline.setState({ account });
  }
  if (!account) throw new Error('Could not create an account.');
  const { error } = await supabase.from('profiles').insert({ id: account.userId, display_name: name });
  if (error) throw error;
  useProgress.getState().setProfileName(name);
  await syncNow();
}

/** Step 1 of signing in to an existing account: email a 6-digit code. */
export async function sendSignInCode(email: string) {
  const { error } = await supabase.auth.signInWithOtp({
    email: email.trim(),
    options: { shouldCreateUser: false },
  });
  if (error) throw error;
}

/** Step 2: verify the code; this device then belongs to that account. */
export async function verifySignInCode(email: string, code: string) {
  const { data, error } = await supabase.auth.verifyOtp({ email: email.trim(), token: code.trim(), type: 'email' });
  if (error) throw error;
  useOnline.setState({ account: accountFrom(data.session), syncedDays: {}, syncedFor: null });
  await syncNow();
}

/** Step 1 of keeping a guest account: email a code to the new address. */
export async function sendAddEmailCode(email: string) {
  const { error } = await supabase.auth.updateUser({ email: email.trim() });
  if (error) throw error;
}

/** Step 2: confirm the address; the account is no longer tied to this device. */
export async function verifyAddEmailCode(email: string, code: string) {
  const { error } = await supabase.auth.verifyOtp({ email: email.trim(), token: code.trim(), type: 'email_change' });
  if (error) throw error;
  const { data } = await supabase.auth.getSession();
  useOnline.setState({ account: accountFrom(data.session) });
}

export async function renameProfile(rawName: string) {
  const name = checkName(rawName);
  const { account } = useOnline.getState();
  if (!account) throw new Error('Not signed in.');
  const { error } = await supabase.from('profiles').update({ display_name: name }).eq('id', account.userId);
  if (error) throw error;
  useProgress.getState().setProfileName(name);
  await loadProfile(account.userId);
}

/** Sign out of an email account on this device (it can sign in again with a code). */
export async function signOut() {
  await supabase.auth.signOut({ scope: 'local' });
  clearAccount();
}

/** Permanently deletes the online account and its XP; study progress on the device stays. */
export async function deleteAccount() {
  const { error } = await supabase.rpc('delete_my_account');
  if (error) throw error;
  await supabase.auth.signOut({ scope: 'local' });
  clearAccount();
}

/** After resetting progress: delete the account's server XP too (now, or at the next sync). */
export function resetOnlineXp() {
  if (!useOnline.getState().profile) return;
  useOnline.setState({ pendingServerReset: true, syncedDays: {} });
  void syncNow();
}

// --- Leaderboards -----------------------------------------------------------------------------

export type Period = 'week' | 'all';

export interface BoardRow {
  userId: string;
  name: string;
  xp: number;
  totalXp: number;
  place: number;
  isMe: boolean;
}

export async function fetchLeaderboard(period: Period, limit = 50): Promise<BoardRow[]> {
  const { data, error } = await supabase.rpc('leaderboard', { p_period: period, p_limit: limit });
  if (error) throw error;
  return (
    data as { user_id: string; display_name: string; xp: number; total_xp: number; place: number; is_me: boolean }[]
  ).map((r) => ({
    userId: r.user_id,
    name: r.display_name,
    xp: Number(r.xp),
    totalXp: Number(r.total_xp),
    place: Number(r.place),
    isMe: r.is_me,
  }));
}

// --- Admin ------------------------------------------------------------------------------------

export interface AdminPlayer {
  userId: string;
  name: string;
  totalXp: number;
  weekXp: number;
  banned: boolean;
  isAdmin: boolean;
}

export async function adminPlayers(): Promise<AdminPlayer[]> {
  const { data, error } = await supabase.rpc('admin_players');
  if (error) throw error;
  return (
    data as { user_id: string; display_name: string; total_xp: number; week_xp: number; banned: boolean; is_admin: boolean }[]
  ).map((r) => ({
    userId: r.user_id,
    name: r.display_name,
    totalXp: Number(r.total_xp),
    weekXp: Number(r.week_xp),
    banned: r.banned,
    isAdmin: r.is_admin,
  }));
}

export async function adminSetBanned(userId: string, banned: boolean) {
  const { error } = await supabase.rpc('admin_set_banned', { p_user: userId, p_banned: banned });
  if (error) throw error;
}

export async function adminRename(userId: string, rawName: string) {
  const { error } = await supabase.rpc('admin_rename', { p_user: userId, p_name: checkName(rawName) });
  if (error) throw error;
}
