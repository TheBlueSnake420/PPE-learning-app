import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { colors, font, space } from '@/theme';
import { Button } from './Button';

/** Shown when a route points at content that no longer exists. */
export function NotFound({ message = 'This content could not be found.' }: { message?: string }) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.text}>{message}</Text>
      <Button title="Go home" onPress={() => router.replace('/')} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, alignItems: 'stretch', justifyContent: 'center', padding: space.xl, gap: space.lg },
  text: { fontSize: font.large, color: colors.muted, textAlign: 'center' },
});
