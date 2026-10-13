import { Pressable, StyleSheet, Text, type StyleProp, type ViewStyle } from 'react-native';

import { colors, darken, font, radius } from '@/theme';

type Variant = 'green' | 'blue' | 'red' | 'white';

interface Look {
  bg: string;
  edge: string;
  text: string;
  border?: string;
}

const VARIANTS: Record<Variant, Look> = {
  green: { bg: colors.green, edge: colors.greenDark, text: '#FFFFFF' },
  blue: { bg: colors.blue, edge: colors.blueDark, text: '#FFFFFF' },
  red: { bg: colors.red, edge: colors.redDark, text: '#FFFFFF' },
  white: { bg: '#FFFFFF', edge: colors.border, text: colors.blue, border: colors.border },
};

interface Props {
  title: string;
  onPress: () => void;
  variant?: Variant;
  /** Custom background colour; overrides the variant colours. */
  color?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

/** Chunky button with a darker bottom edge that "presses in". */
export function Button({ title, onPress, variant = 'green', color, disabled, style }: Props) {
  const v: Look = color ? { bg: color, edge: darken(color), text: '#FFFFFF' } : VARIANTS[variant];
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.base,
        disabled
          ? { backgroundColor: colors.border, borderColor: colors.border, borderBottomColor: colors.borderDark }
          : {
              backgroundColor: v.bg,
              borderBottomColor: v.edge,
              borderColor: v.border ?? v.bg,
            },
        pressed && !disabled && styles.pressed,
        style,
      ]}
    >
      <Text style={[styles.text, { color: disabled ? colors.faint : v.text }]}>{title.toUpperCase()}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: radius.md,
    borderWidth: 2,
    borderBottomWidth: 5,
    paddingVertical: 13,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    borderBottomWidth: 2,
    marginTop: 3,
  },
  text: {
    fontSize: font.body,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
});
