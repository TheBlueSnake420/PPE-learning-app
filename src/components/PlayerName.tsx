import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, Text, View, type StyleProp, type TextStyle } from 'react-native';

import { RANK_TIERS, type NameStyle } from '@/lib/ranks';

/** The lighter purple the Divine name shimmers towards. */
const DIVINE_LIGHT = '#D9A6FF';

/**
 * A player's name on the leaderboard in the style their rank gives: plain, red
 * (Immortal) or sparkling purple (Divine).
 */
export function PlayerName({ name, nameStyle, style }: { name: string; nameStyle: NameStyle; style?: StyleProp<TextStyle> }) {
  if (nameStyle === 'sparkle') return <SparklingName name={name} style={style} />;
  return (
    <Text style={[style, nameStyle === 'red' && { color: RANK_TIERS.immortal.color }]} numberOfLines={1}>
      {name}
    </Text>
  );
}

function SparklingName({ name, style }: { name: string; style?: StyleProp<TextStyle> }) {
  const shimmer = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const pulse = (toValue: number) =>
      Animated.timing(shimmer, { toValue, duration: 1100, easing: Easing.inOut(Easing.ease), useNativeDriver: false });
    const loop = Animated.loop(Animated.sequence([pulse(1), pulse(0)]));
    loop.start();
    return () => loop.stop();
  }, [shimmer]);

  const color = shimmer.interpolate({ inputRange: [0, 1], outputRange: [RANK_TIERS.divine.color, DIVINE_LIGHT] });
  const opacity = shimmer.interpolate({ inputRange: [0, 1], outputRange: [0.3, 1] });
  const scale = shimmer.interpolate({ inputRange: [0, 1], outputRange: [0.8, 1.1] });

  return (
    <View style={styles.row}>
      <Animated.Text style={[style, styles.shrink, { color }]} numberOfLines={1}>
        {name}
      </Animated.Text>
      <Animated.View style={{ opacity, transform: [{ scale }] }}>
        <Ionicons name="sparkles" size={14} color={RANK_TIERS.divine.color} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  shrink: { flexShrink: 1 },
});
