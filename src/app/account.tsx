import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { useState, type ReactNode } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Button } from '@/components/Button';
import { ConfirmTwice } from '@/components/ConfirmTwice';
import { Field } from '@/components/Field';
import { EmailCodeForm, JoinForm } from '@/components/OnlineForms';
import {
  deleteAccount,
  friendlyError,
  NAME_MAX,
  renameProfile,
  sendAddEmailCode,
  sendSignInCode,
  signOut,
  useOnline,
  verifyAddEmailCode,
  verifySignInCode,
} from '@/store/online';
import { colors, font, radius, space } from '@/theme';

export default function AccountScreen() {
  const account = useOnline((s) => s.account);
  const profile = useOnline((s) => s.profile);
  const status = useOnline((s) => s.status);

  if (!account || !profile) {
    return (
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <Text style={styles.intro}>
          An online account puts you on the leaderboards. Your lessons and mistakes stay on this device; only your name
          and XP per day are uploaded.
        </Text>
        <Section title="New here?">
          <JoinForm />
        </Section>
        <Section title="Sign in with email">
          <Text style={styles.muted}>
            Already added an email address to an account, on another phone or the web version? Sign in to it here.
          </Text>
          <EmailCodeForm
            sendCode={sendSignInCode}
            verifyCode={verifySignInCode}
            sendLabel="Email me a code"
            verifyLabel="Sign in"
          />
        </Section>
      </ScrollView>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
      <Section title="Display name">
        <RenameForm current={profile.displayName} />
      </Section>

      <Section title="Email">
        {account.isAnonymous ? (
          <>
            <Text style={styles.muted}>
              This is a guest account that only exists on this device. Add an email address to keep it if you get a new
              phone, and to use it in the web version.
            </Text>
            <EmailCodeForm
              sendCode={sendAddEmailCode}
              verifyCode={verifyAddEmailCode}
              sendLabel="Email me a code"
              verifyLabel="Add email address"
            />
          </>
        ) : (
          <>
            <View style={styles.emailRow}>
              <Ionicons name="mail" size={20} color={colors.green} />
              <Text style={styles.email}>{account.email}</Text>
            </View>
            <Text style={styles.muted}>Sign in with this address on another device to use the same account.</Text>
            <Button title="Sign out on this device" variant="white" onPress={() => void signOut()} />
          </>
        )}
      </Section>

      {status === 'offline' && (
        <Text style={styles.muted}>Can't reach the server right now. Your XP will sync when you're back online.</Text>
      )}

      {profile.isAdmin && (
        <Pressable onPress={() => router.push('/admin')} style={styles.adminLink}>
          <Ionicons name="shield-checkmark" size={22} color={colors.purple} />
          <Text style={styles.adminText}>Admin tools</Text>
          <Ionicons name="chevron-forward" size={20} color={colors.faint} />
        </Pressable>
      )}

      <Section title="Delete account">
        <Text style={styles.muted}>
          Removes you from the leaderboards and deletes your online account and its XP. Your lessons and progress on this
          device stay.
        </Text>
        <ConfirmTwice
          title="Delete online account"
          steps={[
            {
              title: 'Delete your account?',
              message: `${profile.displayName} will disappear from the leaderboards and all XP stored online is deleted.`,
              confirm: 'Yes, continue',
            },
            {
              title: 'This cannot be undone',
              message: 'The account cannot be recovered, not even with your email address. Delete it permanently?',
              confirm: 'Delete permanently',
            },
          ]}
          onConfirm={async () => {
            try {
              await deleteAccount();
            } catch (e) {
              throw new Error(friendlyError(e));
            }
          }}
        />
      </Section>
    </ScrollView>
  );
}

function RenameForm({ current }: { current: string }) {
  const [name, setName] = useState(current);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<{ text: string; ok: boolean } | null>(null);

  const save = async () => {
    setBusy(true);
    setMessage(null);
    try {
      await renameProfile(name);
      setMessage({ text: 'Name saved.', ok: true });
    } catch (e) {
      setMessage({ text: friendlyError(e), ok: false });
    } finally {
      setBusy(false);
    }
  };

  return (
    <View style={styles.form}>
      <Field value={name} onChangeText={setName} maxLength={NAME_MAX} autoCorrect={false} accessibilityLabel="Display name" />
      {message && <Text style={message.ok ? styles.ok : styles.error}>{message.text}</Text>}
      {name.trim() !== current && (
        <Button title={busy ? 'Saving…' : 'Save name'} onPress={save} disabled={busy} />
      )}
    </View>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <View style={styles.section}>
      <Text style={styles.heading}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  content: { padding: space.lg, gap: space.lg, paddingBottom: 64 },
  intro: { fontSize: font.body, color: colors.muted, lineHeight: 22 },
  section: { gap: space.sm },
  heading: { fontSize: font.title, fontWeight: '800', color: colors.text },
  muted: { fontSize: font.body - 1, color: colors.muted, lineHeight: 20 },
  form: { gap: space.sm },
  ok: { fontSize: font.body - 1, color: colors.greenDark },
  error: { fontSize: font.body - 1, color: colors.redDark },
  emailRow: { flexDirection: 'row', alignItems: 'center', gap: space.sm },
  email: { fontSize: font.large, fontWeight: '700', color: colors.text },
  adminLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.md,
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: space.lg,
  },
  adminText: { flex: 1, fontSize: font.large, fontWeight: '800', color: colors.text },
});
