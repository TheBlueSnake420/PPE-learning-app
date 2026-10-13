import * as Haptics from 'expo-haptics';
import { Platform } from 'react-native';

export function feedback(kind: 'success' | 'error' | 'tap') {
  if (Platform.OS === 'web') return;
  const run =
    kind === 'tap'
      ? Haptics.selectionAsync()
      : Haptics.notificationAsync(
          kind === 'success'
            ? Haptics.NotificationFeedbackType.Success
            : Haptics.NotificationFeedbackType.Error,
        );
  run.catch(() => {});
}
