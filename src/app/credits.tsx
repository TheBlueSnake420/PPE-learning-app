import Constants from 'expo-constants';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { colors, font, radius, space } from '@/theme';

const icon = require('../../assets/icon.png');

export default function CreditsScreen() {
  const version = Constants.expoConfig?.version;
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Image source={icon} style={styles.icon} accessibilityIgnoresInvertColors />
      <Text style={styles.appName}>PPE Study</Text>
      {version ? <Text style={styles.muted}>Version {version}</Text> : null}

      <View style={styles.card}>
        <Text style={styles.label}>Made by</Text>
        <Text style={styles.name}>Ruben van Beek</Text>
      </View>

      <Text style={styles.small}>Built with Expo and React Native. The online leaderboards run on Supabase.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: space.xl, gap: space.md, alignItems: 'center', paddingBottom: 64 },
  icon: { width: 112, height: 112, borderRadius: 26, marginTop: space.lg },
  appName: { fontSize: font.hero, fontWeight: '900', color: colors.text, marginTop: space.sm },
  muted: { fontSize: font.body, color: colors.muted },
  card: {
    alignSelf: 'stretch',
    alignItems: 'center',
    gap: space.xs,
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: space.xl,
    marginTop: space.lg,
  },
  label: { fontSize: font.small, fontWeight: '800', color: colors.faint, textTransform: 'uppercase', letterSpacing: 1 },
  name: { fontSize: font.title, fontWeight: '900', color: colors.text },
  small: { fontSize: font.small, color: colors.muted, textAlign: 'center', lineHeight: 19, marginTop: space.md },
});
