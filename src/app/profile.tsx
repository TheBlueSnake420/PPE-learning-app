import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import type { ComponentProps } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { BoostCard } from '@/components/BoostCard';
import { ProfileFrame } from '@/components/ProfileFrame';
import { ProgressBar } from '@/components/ProgressBar';
import { RankBadge } from '@/components/RankBadge';
import { getCourse } from '@/content';
import { today } from '@/lib/dates';
import { nextRankImproving, RANK_TIERS, RANKS, rankFor, rankRewards, TIER_PERKS } from '@/lib/ranks';
import { useOnline } from '@/store/online';
import { currentFreezeStatus, currentStreak, totalXpOf, useProgress } from '@/store/progress';
import { colors, font, radius, space } from '@/theme';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function formatDay(key: string): string {
  const [y, m, d] = key.split('-').map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

export default function ProfileScreen() {
  const progress = useProgress();
  const online = useOnline((s) => s.profile);
  const account = useOnline((s) => s.account);
  const totalXp = totalXpOf(progress);
  const status = rankFor(totalXp);
  const { rank, next } = status;
  const perks = TIER_PERKS[rank.tier];
  const freeze = currentFreezeStatus(progress);
  const freezeUnlock = nextRankImproving(status.index, 'streakFreeze');
  const records = Object.values(progress.lessons);
  const completed = Object.entries(progress.completedCourses)
    .map(([id, day]) => ({ course: getCourse(id), day }))
    .filter((c) => c.course);

  return (
    <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
      <View style={styles.header}>
        {perks.profileFrame ? (
          <ProfileFrame size={88}>
            <RankBadge rank={rank} size={88} />
          </ProfileFrame>
        ) : (
          <RankBadge rank={rank} size={88} />
        )}
        {online ? (
          <Text style={styles.name}>{online.displayName}</Text>
        ) : (
          <TextInput
            value={progress.profileName}
            onChangeText={progress.setProfileName}
            onEndEditing={() => progress.setProfileName(progress.profileName.trim())}
            placeholder="Add your name"
            placeholderTextColor={colors.faint}
            maxLength={30}
            style={styles.name}
            accessibilityLabel="Your name"
          />
        )}
        <Text style={[styles.rankName, { color: RANK_TIERS[rank.tier].color }]}>{rank.name}</Text>
        <Text style={styles.muted}>{totalXp.toLocaleString('en-GB')} XP in total</Text>
      </View>

      <Pressable onPress={() => router.push('/account')} style={styles.accountCard}>
        <Ionicons
          name={online ? 'cloud-done' : 'cloud-outline'}
          size={24}
          color={online ? colors.green : colors.faint}
        />
        <View style={styles.flex}>
          <Text style={styles.cardTitle}>Online account</Text>
          <Text style={styles.small}>
            {!online
              ? 'Not on the leaderboards yet'
              : account?.isAnonymous
                ? 'Guest account on this device · add an email to keep it'
                : `Signed in as ${account?.email ?? online.displayName}`}
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color={colors.faint} />
      </Pressable>

      <View style={styles.card}>
        {next ? (
          <>
            <View style={styles.row}>
              <Text style={styles.cardTitle}>Next rank: {next.name}</Text>
              <RankBadge rank={next} size={32} dim />
            </View>
            <ProgressBar value={status.progress} color={RANK_TIERS[next.tier].color} />
            <Text style={styles.small}>
              {totalXp.toLocaleString('en-GB')} / {next.minXp.toLocaleString('en-GB')} XP ·{' '}
              {status.xpToNext.toLocaleString('en-GB')} to go
            </Text>
          </>
        ) : (
          <Text style={styles.cardTitle}>You reached the highest rank!</Text>
        )}
      </View>

      <BoostCard explainWhenInactive />

      <Text style={styles.heading}>Statistics</Text>
      <View style={styles.stats}>
        <Stat icon="flame" color={colors.orange} label="Current streak" value={`${currentStreak(progress)} days`} />
        <Stat icon="trending-up" color={colors.orange} label="Longest streak" value={`${progress.longestStreak} days`} />
        <Stat
          icon="snow"
          color={freeze === 'ready' ? colors.blue : colors.faint}
          label={freeze === 'locked' ? `Streak freeze · ${freezeUnlock?.name ?? 'locked'}` : 'Streak freeze this week'}
          value={freeze === 'locked' ? 'Locked' : freeze === 'ready' ? 'Ready' : 'Used'}
        />
        <Stat icon="flash" color={colors.gold} label="XP today" value={progress.xpByDay[today()] ?? 0} />
        <Stat icon="book" color={colors.green} label="Lessons completed" value={records.length} />
        <Stat icon="star" color={colors.gold} label="Perfect lessons" value={records.filter((r) => r.bestAccuracy === 1).length} />
        <Stat icon="repeat" color={colors.blue} label="Lessons played" value={records.reduce((n, r) => n + r.timesCompleted, 0)} />
        <Stat icon="barbell" color={colors.red} label="Mistakes saved" value={Object.keys(progress.reviews).length} />
        <Stat icon="school" color={colors.purple} label="Courses completed" value={completed.length} />
      </View>

      {completed.length > 0 && (
        <>
          <Text style={styles.heading}>Completed courses</Text>
          {completed.map(({ course, day }) => (
            <View key={course!.id} style={styles.courseRow}>
              <View style={[styles.courseDot, { backgroundColor: course!.color }]}>
                <Ionicons name="checkmark" size={18} color="#FFFFFF" />
              </View>
              <View style={styles.flex}>
                <Text style={styles.courseTitle}>{course!.title}</Text>
                <Text style={styles.small}>Completed {formatDay(day)}</Text>
              </View>
            </View>
          ))}
        </>
      )}

      <Text style={styles.heading}>Ranks</Text>
      <Text style={styles.muted}>
        Earn XP from lessons and reviews to climb the ranks. New ranks unlock rewards: XP boosts and a bonus for perfect
        lessons.
      </Text>
      <View style={styles.ranks}>
        {RANKS.map((r, i) => {
          const reached = i <= status.index;
          const current = i === status.index;
          const rewards = rankRewards(i);
          return (
            <View key={r.name} style={[styles.rankRow, current && styles.rankRowCurrent]}>
              <RankBadge rank={r} size={36} dim={!reached} />
              <View style={styles.flex}>
                <Text style={[styles.rankRowName, !reached && styles.faint]}>{r.name}</Text>
                {rewards.map((reward) => (
                  <View key={reward} style={styles.rewardRow}>
                    <Ionicons name="gift" size={13} color={reached ? colors.purple : colors.faint} />
                    <Text style={[styles.rewardText, !reached && styles.faint]}>{reward}</Text>
                  </View>
                ))}
              </View>
              {current && (
                <View style={styles.youPill}>
                  <Text style={styles.youText}>YOU</Text>
                </View>
              )}
              <Text style={[styles.rankRowXp, !reached && styles.faint]}>{r.minXp.toLocaleString('en-GB')} XP</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

function Stat({
  icon,
  color,
  label,
  value,
}: {
  icon: ComponentProps<typeof Ionicons>['name'];
  color: string;
  label: string;
  value: string | number;
}) {
  return (
    <View style={styles.stat}>
      <Ionicons name={icon} size={20} color={color} />
      <View style={styles.flex}>
        <Text style={styles.statValue}>{value}</Text>
        <Text style={styles.statLabel}>{label}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: { padding: space.lg, gap: space.md, paddingBottom: 64 },
  header: { alignItems: 'center', gap: space.xs, paddingVertical: space.md },
  name: {
    marginTop: space.sm,
    fontSize: font.hero,
    fontWeight: '800',
    color: colors.text,
    textAlign: 'center',
    minWidth: 200,
    paddingVertical: 4,
  },
  rankName: { fontSize: font.title, fontWeight: '900' },
  card: {
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: space.lg,
    gap: space.sm,
  },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  accountCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.md,
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: space.lg,
  },
  cardTitle: { fontSize: font.large, fontWeight: '800', color: colors.text },
  heading: { fontSize: font.title, fontWeight: '800', color: colors.text, marginTop: space.md },
  muted: { fontSize: font.body - 1, color: colors.muted, lineHeight: 20 },
  small: { fontSize: font.small, color: colors.muted, fontWeight: '600' },
  faint: { color: colors.faint },
  flex: { flex: 1 },
  stats: { flexDirection: 'row', flexWrap: 'wrap', gap: space.sm },
  stat: {
    width: '48%',
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.sm,
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: space.md,
  },
  statValue: { fontSize: font.title, fontWeight: '800', color: colors.text },
  statLabel: { fontSize: font.small, color: colors.muted, fontWeight: '600' },
  courseRow: { flexDirection: 'row', alignItems: 'center', gap: space.md },
  courseDot: { width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  courseTitle: { fontSize: font.body, fontWeight: '800', color: colors.text },
  ranks: { gap: 2 },
  rankRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.md,
    paddingVertical: 6,
    paddingHorizontal: space.sm,
    borderRadius: radius.md,
  },
  rankRowCurrent: { backgroundColor: colors.surface },
  rankRowName: { fontSize: font.body, fontWeight: '800', color: colors.text },
  rewardRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 1 },
  rewardText: { fontSize: font.small, fontWeight: '700', color: colors.purple },
  rankRowXp: { fontSize: font.body - 1, fontWeight: '700', color: colors.muted, fontVariant: ['tabular-nums'] },
  youPill: { backgroundColor: colors.blue, borderRadius: radius.pill, paddingHorizontal: 8, paddingVertical: 2 },
  youText: { color: '#FFFFFF', fontSize: 11, fontWeight: '900', letterSpacing: 0.5 },
});
