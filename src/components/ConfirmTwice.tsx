import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';

import { colors, font, radius, space } from '@/theme';
import { Button } from './Button';

export interface ConfirmStep {
  title: string;
  message: string;
  confirm: string;
}

interface Props {
  /** Label of the button that starts it. */
  title: string;
  /** Two warnings; the action only runs after confirming both. */
  steps: [ConfirmStep, ConfirmStep];
  /** May throw: the error is shown and nothing closes. */
  onConfirm: () => void | Promise<void>;
  disabled?: boolean;
}

/** A destructive button guarded by two warnings in a row, so a misclick can't trigger it. */
export function ConfirmTwice({ title, steps, onConfirm, disabled }: Props) {
  const [step, setStep] = useState<number | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const close = () => {
    setStep(null);
    setError(null);
  };

  const confirm = async () => {
    if (step === 0) {
      setStep(1);
      return;
    }
    setBusy(true);
    setError(null);
    try {
      await onConfirm();
      close();
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(false);
    }
  };

  const current = step === null ? null : steps[step];
  return (
    <>
      <Button title={title} variant="white" onPress={() => setStep(0)} disabled={disabled} />
      <Modal visible={current !== null} transparent animationType="fade" onRequestClose={close}>
        <View style={styles.backdrop}>
          {current && (
            <View style={styles.card}>
              <Ionicons name="warning" size={40} color={colors.red} />
              <Text style={styles.stepLabel}>Warning {step! + 1} of 2</Text>
              <Text style={styles.title}>{current.title}</Text>
              <Text style={styles.message}>{current.message}</Text>
              {error && <Text style={styles.error}>{error}</Text>}
              <View style={styles.buttons}>
                <Button title={busy ? 'Working…' : current.confirm} variant="red" onPress={confirm} disabled={busy} />
                <Button title="Cancel" variant="white" onPress={close} disabled={busy} />
              </View>
            </View>
          )}
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: space.lg,
  },
  card: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: colors.bg,
    borderRadius: radius.lg,
    padding: space.xl,
    alignItems: 'center',
    gap: space.sm,
  },
  stepLabel: { fontSize: font.small, fontWeight: '800', color: colors.red, letterSpacing: 0.5 },
  title: { fontSize: font.title, fontWeight: '800', color: colors.text, textAlign: 'center' },
  message: { fontSize: font.body, color: colors.muted, textAlign: 'center', lineHeight: 22 },
  error: { fontSize: font.body - 1, color: colors.redDark, textAlign: 'center' },
  buttons: { alignSelf: 'stretch', gap: space.sm, marginTop: space.md },
});
