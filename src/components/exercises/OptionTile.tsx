import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';

import { colors, font, radius } from '@/theme';

export type TileState = 'idle' | 'selected' | 'correct' | 'wrong' | 'faded';

const LOOK: Record<TileState, { bg: string; border: string; edge: string; text: string }> = {
  idle: { bg: '#FFFFFF', border: colors.border, edge: colors.border, text: colors.text },
  selected: { bg: colors.blueBg, border: '#84D8FF', edge: '#84D8FF', text: colors.blueDark },
  correct: { bg: colors.greenBg, border: '#A5ED6E', edge: '#A5ED6E', text: colors.greenDark },
  wrong: { bg: colors.redBg, border: '#FFB2B2', edge: '#FFB2B2', text: colors.redDark },
  faded: { bg: '#FFFFFF', border: colors.border, edge: colors.border, text: colors.faint },
};

interface Props {
  label: string;
  state?: TileState;
  onPress?: () => void;
  disabled?: boolean;
  /** Small badge on the left, e.g. an option number. */
  badge?: ReactNode;
  center?: boolean;
  style?: StyleProp<ViewStyle>;
}

export function OptionTile({ label, state = 'idle', onPress, disabled, badge, center, style }: Props) {
  const look = LOOK[state];
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ selected: state === 'selected', disabled }}
      style={({ pressed }) => [
        styles.tile,
        { backgroundColor: look.bg, borderColor: look.border, borderBottomColor: look.edge },
        pressed && !disabled && styles.pressed,
        style,
      ]}
    >
      <View style={[styles.row, center && styles.center]}>
        {badge != null && (
          <View style={[styles.badge, { borderColor: look.border }]}>
            {typeof badge === 'string' || typeof badge === 'number' ? (
              <Text style={[styles.badgeText, { color: look.text }]}>{badge}</Text>
            ) : (
              badge
            )}
          </View>
        )}
        <Text style={[styles.label, { color: look.text }, center && styles.labelCenter]}>{label}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tile: {
    borderWidth: 2,
    borderBottomWidth: 4,
    borderRadius: radius.md,
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
  pressed: {
    borderBottomWidth: 2,
    marginTop: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  center: {
    justifyContent: 'center',
  },
  badge: {
    width: 28,
    height: 28,
    borderRadius: 8,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: font.small,
    fontWeight: '700',
  },
  label: {
    flexShrink: 1,
    fontSize: font.body,
    fontWeight: '600',
    lineHeight: 22,
  },
  labelCenter: {
    textAlign: 'center',
  },
});
