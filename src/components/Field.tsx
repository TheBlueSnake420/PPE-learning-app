import { StyleSheet, TextInput, type TextInputProps } from 'react-native';

import { colors, font, radius, space } from '@/theme';

/** Single-line text input in the app's style. */
export function Field(props: TextInputProps) {
  return <TextInput placeholderTextColor={colors.faint} {...props} style={[styles.input, props.style]} />;
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    paddingHorizontal: space.md,
    paddingVertical: 12,
    fontSize: font.large,
    color: colors.text,
  },
});
