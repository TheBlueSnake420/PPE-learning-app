import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { friendlyError, joinWithName, NAME_MAX } from '@/store/online';
import { useProgress } from '@/store/progress';
import { colors, font, space } from '@/theme';
import { Button } from './Button';
import { Field } from './Field';

/** Pick a display name and join the leaderboards (creates a guest account). */
export function JoinForm({ onJoined }: { onJoined?: () => void }) {
  const [name, setName] = useState(() => useProgress.getState().profileName);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const join = async () => {
    setBusy(true);
    setError(null);
    try {
      await joinWithName(name);
      onJoined?.();
    } catch (e) {
      setError(friendlyError(e));
    } finally {
      setBusy(false);
    }
  };

  return (
    <View style={styles.form}>
      <Field
        value={name}
        onChangeText={setName}
        placeholder="Your display name"
        maxLength={NAME_MAX}
        autoCorrect={false}
        accessibilityLabel="Display name"
        onSubmitEditing={join}
      />
      <Text style={styles.hint}>Other players see this name on the leaderboard.</Text>
      {error && <Text style={styles.error}>{error}</Text>}
      <Button title={busy ? 'Joining…' : 'Join the leaderboard'} onPress={join} disabled={busy || !name.trim()} />
    </View>
  );
}

/** Two steps: enter an email address and get a 6-digit code, then enter the code. */
export function EmailCodeForm({
  sendCode,
  verifyCode,
  sendLabel,
  verifyLabel,
  onDone,
}: {
  sendCode: (email: string) => Promise<void>;
  verifyCode: (email: string, code: string) => Promise<void>;
  sendLabel: string;
  verifyLabel: string;
  onDone?: () => void;
}) {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const run = async (action: () => Promise<void>) => {
    setBusy(true);
    setError(null);
    try {
      await action();
    } catch (e) {
      setError(friendlyError(e));
    } finally {
      setBusy(false);
    }
  };

  const send = () =>
    run(async () => {
      await sendCode(email);
      setSent(true);
    });
  const verify = () =>
    run(async () => {
      await verifyCode(email, code);
      onDone?.();
    });

  return (
    <View style={styles.form}>
      <Field
        value={email}
        onChangeText={setEmail}
        placeholder="Email address"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect={false}
        editable={!sent}
        accessibilityLabel="Email address"
      />
      {sent && (
        <>
          <Text style={styles.hint}>We sent a 6-digit code to {email.trim()}. It can take a minute to arrive.</Text>
          <Field
            value={code}
            onChangeText={(t) => setCode(t.replace(/\D/g, ''))}
            placeholder="6-digit code"
            keyboardType="number-pad"
            maxLength={6}
            accessibilityLabel="Code from the email"
            onSubmitEditing={verify}
          />
        </>
      )}
      {error && <Text style={styles.error}>{error}</Text>}
      {sent ? (
        <>
          <Button title={busy ? 'Checking…' : verifyLabel} onPress={verify} disabled={busy || code.length < 6} />
          <Button
            title="Use another address"
            variant="white"
            onPress={() => {
              setSent(false);
              setCode('');
              setError(null);
            }}
            disabled={busy}
          />
        </>
      ) : (
        <Button title={busy ? 'Sending…' : sendLabel} onPress={send} disabled={busy || !email.includes('@')} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  form: { gap: space.sm },
  hint: { fontSize: font.small, color: colors.muted, lineHeight: 18 },
  error: { fontSize: font.body - 1, color: colors.redDark, lineHeight: 20 },
});
