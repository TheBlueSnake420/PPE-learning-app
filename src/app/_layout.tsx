import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { View } from 'react-native';

import { contentKeys } from '@/content';
import { useReminderSync } from '@/lib/notifications';
import { useOnlineSync } from '@/store/online';
import { useHydrated, useProgress } from '@/store/progress';
import { colors } from '@/theme';

export default function RootLayout() {
  // Wait for saved progress before rendering so screens never flash empty stats.
  const hydrated = useHydrated();

  // Streak reminders follow saved progress, so they start once it has loaded.
  useReminderSync(hydrated);

  // Online account and leaderboard XP sync (no-op until the player joins).
  useOnlineSync(hydrated);

  // Content updates can remove lessons or exercises; forget progress that points at them.
  useEffect(() => {
    if (!hydrated) return;
    const { lessons, exercises } = contentKeys();
    useProgress.getState().pruneOrphans(lessons, exercises);
  }, [hydrated]);

  if (!hydrated) return <View style={{ flex: 1, backgroundColor: colors.bg }} />;

  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShadowVisible: false,
          headerTintColor: colors.text,
          headerTitleStyle: { fontWeight: '800' },
          contentStyle: { backgroundColor: colors.bg },
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="lesson/[courseId]/[lessonId]"
          options={{ headerShown: false, presentation: 'fullScreenModal', gestureEnabled: false }}
        />
        <Stack.Screen name="review" options={{ headerShown: false, presentation: 'fullScreenModal' }} />
        <Stack.Screen name="settings" options={{ title: 'Settings' }} />
        <Stack.Screen name="profile" options={{ title: 'Profile' }} />
        <Stack.Screen name="mistakes" options={{ title: 'Review mistakes' }} />
        <Stack.Screen name="leaderboard" options={{ title: 'Leaderboard' }} />
        <Stack.Screen name="account" options={{ title: 'Online account' }} />
        <Stack.Screen name="admin" options={{ title: 'Admin' }} />
        <Stack.Screen name="credits" options={{ title: 'Credits' }} />
      </Stack>
    </>
  );
}
