import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Button } from '@/components/Button';
import { Field } from '@/components/Field';
import { adminPlayers, adminRename, adminSetBanned, friendlyError, NAME_MAX, type AdminPlayer } from '@/store/online';
import { colors, font, radius, space } from '@/theme';

/** Admin tools: every player, with ban/unban and rename. The server checks admin rights. */
export default function AdminScreen() {
  const [players, setPlayers] = useState<AdminPlayer[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      setPlayers(await adminPlayers());
    } catch (e) {
      setError(friendlyError(e));
    } finally {
      setLoading(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      void load();
    }, [load]),
  );

  return (
    <ScrollView
      contentContainerStyle={styles.content}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={load} />}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.muted}>
        Banned players disappear from the leaderboards and can no longer upload XP. Admins can't be banned here.
      </Text>
      {error && <Text style={styles.error}>{error}</Text>}
      {players?.map((p) => (
        <PlayerCard key={p.userId} player={p} onChanged={load} />
      ))}
    </ScrollView>
  );
}

function PlayerCard({ player, onChanged }: { player: AdminPlayer; onChanged: () => void }) {
  const [renaming, setRenaming] = useState(false);
  const [name, setName] = useState(player.name);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const run = async (action: () => Promise<void>) => {
    setBusy(true);
    setError(null);
    try {
      await action();
      setRenaming(false);
      onChanged();
    } catch (e) {
      setError(friendlyError(e));
    } finally {
      setBusy(false);
    }
  };

  return (
    <View style={[styles.card, player.banned && styles.banned]}>
      <View style={styles.header}>
        <Text style={styles.name}>{player.name}</Text>
        {player.isAdmin && <Text style={styles.tag}>ADMIN</Text>}
        {player.banned && <Text style={[styles.tag, styles.tagBanned]}>BANNED</Text>}
      </View>
      <Text style={styles.muted}>
        {player.totalXp.toLocaleString('en-GB')} XP in total · {player.weekXp.toLocaleString('en-GB')} this week
      </Text>
      {renaming && <Field value={name} onChangeText={setName} maxLength={NAME_MAX} autoCorrect={false} />}
      {error && <Text style={styles.error}>{error}</Text>}
      <View style={styles.buttons}>
        {renaming ? (
          <>
            <Button title="Save" onPress={() => run(() => adminRename(player.userId, name))} disabled={busy} style={styles.flex} />
            <Button title="Cancel" variant="white" onPress={() => setRenaming(false)} disabled={busy} style={styles.flex} />
          </>
        ) : (
          <>
            <Button title="Rename" variant="white" onPress={() => setRenaming(true)} disabled={busy} style={styles.flex} />
            {!player.isAdmin && (
              <Button
                title={player.banned ? 'Unban' : 'Ban'}
                variant={player.banned ? 'white' : 'red'}
                onPress={() => run(() => adminSetBanned(player.userId, !player.banned))}
                disabled={busy}
                style={styles.flex}
              />
            )}
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: { padding: space.lg, gap: space.md, paddingBottom: 64 },
  muted: { fontSize: font.body - 1, color: colors.muted, lineHeight: 20 },
  error: { fontSize: font.body - 1, color: colors.redDark },
  card: {
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: space.lg,
    gap: space.sm,
  },
  banned: { backgroundColor: colors.redBg, borderColor: '#FFB2B2' },
  header: { flexDirection: 'row', alignItems: 'center', gap: space.sm, flexWrap: 'wrap' },
  name: { fontSize: font.large, fontWeight: '800', color: colors.text },
  tag: {
    fontSize: 11,
    fontWeight: '900',
    color: '#FFFFFF',
    backgroundColor: colors.purple,
    borderRadius: radius.pill,
    paddingHorizontal: 8,
    paddingVertical: 2,
    overflow: 'hidden',
  },
  tagBanned: { backgroundColor: colors.red },
  buttons: { flexDirection: 'row', gap: space.sm },
  flex: { flex: 1 },
});
