import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ProgressBar } from '@/components/ProgressBar';
import { StatPill } from '@/components/StatPill';
import { getLevels, lessonsInTrack, type Level } from '@/content';
import { today } from '@/lib/dates';
import { currentStreak, dueReviews, lessonKey, useProgress } from '@/store/progress';
import { colors, font, radius, space } from '@/theme';

export default function Home() {
  const progress = useProgress();
  const streak = currentStreak(progress);
  const xpToday = progress.xpByDay[today()] ?? 0;
  const due = dueReviews(progress.reviews).length;
  const goalMet = xpToday >= progress.dailyGoal;
  const levels = getLevels();

  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <View style={styles.topBar}>
        <Text style={styles.appName}>PPE Study</Text>
        <View style={styles.stats}>
          <StatPill icon="flame" value={streak} color={colors.orange} dim={streak === 0} />
          <StatPill icon="flash" value={progress.totalXp} color={colors.gold} dim={progress.totalXp === 0} />
          <Pressable onPress={() => router.push('/settings')} hitSlop={10} accessibilityLabel="Settings">
            <Ionicons name="settings-outline" size={24} color={colors.muted} />
          </Pressable>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.card}>
          <View style={styles.goalHeader}>
            <Text style={styles.cardTitle}>{goalMet ? 'Daily goal reached!' : 'Daily goal'}</Text>
            <Text style={styles.goalNumbers}>
              {xpToday} / {progress.dailyGoal} XP
            </Text>
          </View>
          <ProgressBar value={xpToday / progress.dailyGoal} color={colors.gold} />
        </View>

        <Pressable
          onPress={() => router.push('/review')}
          disabled={due === 0}
          style={({ pressed }) => [styles.card, styles.reviewCard, due > 0 && styles.reviewActive, pressed && styles.pressed]}
        >
          <View style={[styles.reviewIcon, { backgroundColor: due > 0 ? colors.red : colors.border }]}>
            <Ionicons name="barbell" size={24} color="#FFFFFF" />
          </View>
          <View style={styles.flex}>
            <Text style={styles.cardTitle}>Review mistakes</Text>
            <Text style={styles.muted}>
              {due > 0 ? `${due} exercise${due === 1 ? '' : 's'} ready to review` : 'All caught up - no mistakes due'}
            </Text>
          </View>
          {due > 0 && <Ionicons name="chevron-forward" size={22} color={colors.faint} />}
        </Pressable>

        <Text style={styles.sectionTitle}>Choose a level</Text>
        {levels.map((level) => (
          <LevelCard key={level.id} level={level} completed={progress.lessons} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

function LevelCard({ level, completed }: { level: Level; completed: Record<string, unknown> }) {
  let total = 0;
  let done = 0;
  for (const course of level.courses) {
    for (const lesson of lessonsInTrack(course, level.tier)) {
      total++;
      if (completed[lessonKey(course.id, lesson.id)]) done++;
    }
  }
  const color = level.tier === 'basics' ? colors.green : colors.blue;

  return (
    <Pressable
      onPress={() => router.push({ pathname: '/level/[levelId]', params: { levelId: level.id } })}
      style={({ pressed }) => [styles.card, styles.levelCard, pressed && styles.pressed]}
    >
      <View style={[styles.levelBadge, { backgroundColor: color }]}>
        <Text style={styles.levelBadgeYear}>Y{level.year}</Text>
      </View>
      <View style={styles.flex}>
        <Text style={styles.cardTitle}>{level.title}</Text>
        <Text style={styles.muted}>{level.description}</Text>
        <View style={styles.levelProgress}>
          <ProgressBar value={total ? done / total : 0} color={color} height={10} />
          <Text style={styles.small}>
            {done}/{total}
          </Text>
        </View>
        <Text style={styles.small}>
          {level.courses.length} course{level.courses.length === 1 ? '' : 's'}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: space.lg,
    paddingVertical: space.md,
    borderBottomWidth: 2,
    borderBottomColor: colors.border,
  },
  appName: { fontSize: font.title, fontWeight: '900', color: colors.green },
  stats: { flexDirection: 'row', alignItems: 'center', gap: space.lg },
  content: { padding: space.lg, gap: space.md, paddingBottom: space.xxl },
  card: {
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: space.lg,
    gap: space.sm,
    backgroundColor: colors.bg,
  },
  pressed: { borderBottomWidth: 2, marginTop: 2 },
  cardTitle: { fontSize: font.large, fontWeight: '800', color: colors.text },
  goalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' },
  goalNumbers: { fontSize: font.body, fontWeight: '700', color: colors.muted },
  reviewCard: { flexDirection: 'row', alignItems: 'center', gap: space.md },
  reviewActive: { borderColor: '#FFB2B2' },
  reviewIcon: { width: 48, height: 48, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  flex: { flex: 1, gap: 2 },
  muted: { fontSize: font.body - 1, color: colors.muted, lineHeight: 20 },
  small: { fontSize: font.small, color: colors.muted, fontWeight: '600' },
  sectionTitle: { fontSize: font.title, fontWeight: '800', color: colors.text, marginTop: space.md },
  levelCard: { flexDirection: 'row', gap: space.lg, alignItems: 'center' },
  levelBadge: { width: 56, height: 56, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  levelBadgeYear: { color: '#FFFFFF', fontSize: font.title, fontWeight: '900' },
  levelProgress: { flexDirection: 'row', alignItems: 'center', gap: space.sm, marginTop: space.sm },
});
