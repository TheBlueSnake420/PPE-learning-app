import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { AppState, Platform } from 'react-native';

/**
 * The online backend (leaderboards and accounts). The URL and publishable key are public by
 * design and safe to ship in the app and a public repo: row level security in
 * supabase/schema.sql decides what each player may read and write. Never put the database
 * password or a secret key here.
 */
const SUPABASE_URL = 'https://bimlpzcorczqitmrrfuz.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_vq7Cco0kU8-ViuzNy5XR5A_SJVhL08t';

// On phones, AsyncStorage keeps the login between launches. It is already part of the app's
// native code, so this works with an over-the-air update (the Expo guide's expo-sqlite would need
// a new APK). On the web, Supabase's default storage is used: the browser's localStorage, or
// memory while the web export pre-renders pages in Node, where there is no window.
export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    ...(Platform.OS !== 'web' ? { storage: AsyncStorage } : {}),
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// On phones, only refresh the login token while the app is in the foreground.
if (Platform.OS !== 'web') {
  AppState.addEventListener('change', (state) => {
    if (state === 'active') supabase.auth.startAutoRefresh();
    else supabase.auth.stopAutoRefresh();
  });
}
