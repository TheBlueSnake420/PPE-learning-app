import Ionicons from '@expo/vector-icons/Ionicons';
import { router, useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { Pressable, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';

import { JoinForm } from '@/components/OnlineForms';
import { RankBadge } from '@/components/RankBadge';
import { RANK_TIERS, rankFor } from '@/lib/ranks';
import { fetchLeaderboard, friendlyError, syncNow, useOnline, type BoardRow, type Period } from '@/store/online';
import { colors, font, radius, space } from '@/theme';

const MEDALS = ['#F2B600', '#9AA6B2', '#C97B3D'];

export default function LeaderboardScreen() {
  const profile = useOnline((s) => s.profile);
  const [period, setPeriod] = useState<Period>('week');
  const [boards, setBoards] = useState<Partial<Record<Period, BoardRow[]>>>({});
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      await syncNow();
      const [week, all] = await Promise.all([fetchLeaderboard('week'), fetchLeaderboard('all')]);
      setBoards({ week, all });
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

  const rows = boards[period];
  const top = rows?.filter((r) => r.place <= 50) ?? [];
  const meBelow = rows?.find((r) => r.isMe && r.place > 50);

  return (
    <ScrollView
      contentContainerStyle={styles.content}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={load} />}
      keyboardShouldPersistTaps="handled"
    >
      {!profile && (
        <View style={styles.joinCard}>
          <Text style={styles.cardTitle}>Join the leaderboard</Text>
          <Text style={styles.muted}>
            Compete with other players on XP. Only your name and XP per day are shared; your lessons and mistakes stay on
            your phone.
          </Text>
          <JoinForm onJoined={load} />
          <Pressable onPress={() => router.push('/account')} hitSlop={8}>
            <Text style={styles.link}>Already have an account? Sign in with email</Text>
          </Pressable>
        </View>
      )}
      {profile?.banned && (
        <Text style={styles.error}>An admin has removed your account from the leaderboards.</Text>
      )}

      <View style={styles.tabs}>
        {(['week', 'all'] as Period[]).map((p) => (
          <Pressable
            key={p}
            onPress={() => setPeriod(p)}
            style={[styles.tab, period === p && styles.tabActive]}
            accessibilityRole="tab"
            accessibilityState={{ selected: period === p }}
          >
            <Text style={[styles.tabText, period === p && styles.tabTextActive]}>
              {p === 'week' ? 'This week' : 'All time'}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.small}>
        {period === 'week' ? 'XP earned since Monday. A new week starts every Monday.' : 'All XP ever earned.'}
      </Text>

      {error && (
        <View style={styles.errorBox}>
          <Ionicons name="cloud-offline" size={22} color={colors.muted} />
          <Text style={[styles.muted, styles.flex]}>{error}</Text>
        </View>
      )}
      {rows && rows.length === 0 && (
        <Text style={styles.empty}>
          {period === 'week' ? 'Nobody has earned XP this week yet. Be the first!' : 'No players yet.'}
        </Text>
      )}
      {top.map((row) => (
        <Row key={row.userId} row={row} period={period} />
      ))}
      {meBelow && (
        <>
          <Text style={styles.gap}>⋯</Text>
          <Row row={meBelow} period={period} />
        </>
      )}

      {profile && (
        <Pressable onPress={() => router.push('/account')} style={styles.accountLink} hitSlop={8}>
          <Ionicons name="person-circle-outline" size={20} color={colors.blue} />
          <Text style={styles.link}>Online account: {profile.displayName}</Text>
        </Pressable>
      )}
    </ScrollView>
  );
}

function Row({ row, period }: { row: BoardRow; period: Period }) {
  const { rank } = rankFor(row.totalXp);
  const medal = row.place <= 3 ? MEDALS[row.place - 1] : null;
  return (
    <View style={[styles.row, row.isMe && styles.rowMe]}>
      <View style={[styles.place, medal ? { backgroundColor: medal } : null]}>
        <Text style={[styles.placeText, medal ? styles.placeTextMedal : null]}>{row.place}</Text>
      </View>
      <RankBadge rank={rank} size={40} />
      <View style={styles.flex}>
        <Text style={styles.name} numberOfLines={1}>
          {row.name}
          {row.isMe ? ' (you)' : ''}
        </Text>
        <Text style={[styles.rankName, { color: RANK_TIERS[rank.tier].color }]}>{rank.name}</Text>
      </View>
      <View style={styles.xpBox}>
        <Text style={styles.xp}>{row.xp.toLocaleString('en-GB')}</Text>
        <Text style={styles.xpLabel}>{period === 'week' ? 'XP this week' : 'XP'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: { padding: space.lg, gap: space.sm, paddingBottom: 64 },
  joinCard: {
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: space.lg,
    gap: space.sm,
    marginBottom: space.md,
  },
  cardTitle: { fontSize: font.large, fontWeight: '800', color: colors.text },
  muted: { fontSize: font.body - 1, color: colors.muted, lineHeight: 20 },
  small: { fontSize: font.small, color: colors.muted, marginBottom: space.sm },
  link: { fontSize: font.body - 1, color: colors.blue, fontWeight: '700' },
  tabs: { flexDirection: 'row', backgroundColor: colors.surface, borderRadius: radius.md, padding: 4 },
  tab: { flex: 1, alignItems: 'center', paddingVertical: 10, borderRadius: radius.sm },
  tabActive: { backgroundColor: colors.bg, borderWidth: 2, borderColor: colors.border },
  tabText: { fontSize: font.body, fontWeight: '800', color: colors.faint },
  tabTextActive: { color: colors.text },
  errorBox: { flexDirection: 'row', alignItems: 'center', gap: space.sm, padding: space.md },
  error: { fontSize: font.body - 1, color: colors.redDark },
  empty: { textAlign: 'center', color: colors.muted, fontSize: font.body, paddingVertical: space.xl },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.md,
    paddingVertical: space.sm,
    paddingHorizontal: space.md,
    borderRadius: radius.md,
  },
  rowMe: { backgroundColor: colors.blueBg },
  place: { width: 30, height: 30, borderRadius: 15, alignItems: 'center', justifyContent: 'center' },
  placeText: { fontWeight: '900', fontSize: font.body, color: colors.muted },
  placeTextMedal: { color: '#FFFFFF' },
  flex: { flex: 1 },
  name: { fontSize: font.body, fontWeight: '800', color: colors.text },
  rankName: { fontSize: font.small, fontWeight: '800' },
  xpBox: { alignItems: 'flex-end' },
  xp: { fontSize: font.large, fontWeight: '800', color: colors.text, fontVariant: ['tabular-nums'] },
  xpLabel: { fontSize: 11, color: colors.muted, fontWeight: '600' },
  gap: { textAlign: 'center', color: colors.faint, fontSize: font.large },
  accountLink: { flexDirection: 'row', alignItems: 'center', gap: 6, alignSelf: 'center', marginTop: space.lg },
});
