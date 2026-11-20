import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect, useRef, type ReactNode } from 'react';
import { Animated, Easing, Platform, StyleSheet, View } from 'react-native';

import { RANK_TIERS } from '@/lib/ranks';

const PURPLE = RANK_TIERS.divine.color;
const GOLD = '#F2C230';
const SPARKLES = 6;
// The native animation driver does not exist on web.
const useNativeDriver = Platform.OS !== 'web';

/**
 * The Divine profile frame: a gold and purple double ring around the badge
 * (`size` is the badge's size), with sparkles slowly circling it and twinkling.
 * Everything scales with the badge: on the profile (88) the frame is 128 wide,
 * on a leaderboard row (32) it is 46 wide.
 */
export function ProfileFrame({ size, children }: { size: number; children: ReactNode }) {
  const spin = useRef(new Animated.Value(0)).current;
  const twinkle = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const spinLoop = Animated.loop(
      Animated.timing(spin, { toValue: 1, duration: 18000, easing: Easing.linear, useNativeDriver }),
    );
    const pulse = (toValue: number) =>
      Animated.timing(twinkle, { toValue, duration: 900, easing: Easing.inOut(Easing.ease), useNativeDriver });
    const twinkleLoop = Animated.loop(Animated.sequence([pulse(1), pulse(0)]));
    spinLoop.start();
    twinkleLoop.start();
    return () => {
      spinLoop.stop();
      twinkleLoop.stop();
    };
  }, [spin, twinkle]);

  const outer = size + 2 * Math.round(size * 0.23);
  const ring = size + Math.round(size * 0.23);
  const inner = ring - Math.round(size * 0.14);
  const ringWidth = Math.max(2, Math.round(size / 22));
  const innerWidth = Math.max(1, Math.round(size / 44));
  const radius = outer / 2 - Math.round(size * 0.1);
  const bigSparkle = Math.max(8, Math.round(size * 0.2));
  const smallSparkle = Math.max(6, Math.round(size * 0.15));
  const rotate = spin.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] });
  const opacityA = twinkle.interpolate({ inputRange: [0, 1], outputRange: [1, 0.25] });
  const opacityB = twinkle.interpolate({ inputRange: [0, 1], outputRange: [0.25, 1] });

  return (
    <View style={{ width: outer, height: outer, alignItems: 'center', justifyContent: 'center' }}>
      <View style={[styles.ring, { width: ring, height: ring, borderRadius: ring / 2, borderWidth: ringWidth }]} />
      <View style={[styles.innerRing, { width: inner, height: inner, borderRadius: inner / 2, borderWidth: innerWidth }]} />
      <Animated.View style={[StyleSheet.absoluteFill, { transform: [{ rotate }] }]} pointerEvents="none">
        {Array.from({ length: SPARKLES }, (_, i) => {
          const angle = (i / SPARKLES) * 2 * Math.PI;
          const big = i % 2 === 0;
          const icon = big ? bigSparkle : smallSparkle;
          return (
            <Animated.View
              key={i}
              style={{
                position: 'absolute',
                left: outer / 2 + radius * Math.cos(angle) - icon / 2,
                top: outer / 2 + radius * Math.sin(angle) - icon / 2,
                opacity: big ? opacityA : opacityB,
              }}
            >
              <Ionicons name="sparkles" size={icon} color={big ? PURPLE : GOLD} />
            </Animated.View>
          );
        })}
      </Animated.View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  ring: { position: 'absolute', borderColor: GOLD },
  innerRing: { position: 'absolute', borderColor: PURPLE },
});
