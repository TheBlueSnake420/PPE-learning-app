import Ionicons from '@expo/vector-icons/Ionicons';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { NotFound } from '@/components/NotFound';
import { ProgressBar } from '@/components/ProgressBar';
import { getLevel, lessonsInTrack } from '@/content';
import { lessonKey, useProgress } from '@/store/progress';
import { colors, font, radius, space, tint } from '@/theme';

export default function LevelScreen() {
  const { levelId } = useLocalSearchParams<{ levelId: string }>();
  const level = getLevel(levelId);
  const completed = useProgress((s) => s.lessons);
  const completedCourses = useProgress((s) => s.completedCourses);
  if (!level) return <NotFound />;

  // Active courses first; completed ones move to their own section at the bottom.
  const active = level.courses.filter((c) => !completedCourses[c.id]);
  const finished = level.courses.filter((c) => completedCourses[c.id]);
  const ordered = [...active, ...finished];

  return (
    <>
      <Stack.Screen options={{ title: level.title }} />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.intro}>{level.description} Pick a course to study.</Text>
        {ordered.map((course, i) => {
          const lessons = lessonsInTrack(course, level.tier);
          const done = lessons.filter((l) => completed[lessonKey(course.id, l.id)]).length;
          const isFinished = !!completedCourses[course.id];
          const badge = isFinished ? 'COMPLETED' : course.sample ? 'SAMPLE CONTENT' : null;
          return (
            <View key={course.id} style={styles.cardWrap}>
              {isFinished && i === active.length && <Text style={styles.sectionTitle}>Completed courses</Text>}
              <Pressable
                onPress={() =>
                  router.push({
                    pathname: '/course/[courseId]/[tier]',
                    params: { courseId: course.id, tier: level.tier },
                  })
                }
                style={({ pressed }) => [styles.card, pressed && styles.pressed]}
              >
                <View style={[styles.banner, { backgroundColor: course.color }]}>
                  <Ionicons name={isFinished ? 'checkmark-circle' : 'library'} size={28} color="#FFFFFF" />
                  {badge && (
                    <View style={styles.sampleBadge}>
                      <Text style={styles.sampleText}>{badge}</Text>
                    </View>
                  )}
                </View>
                <View style={styles.body}>
                  <Text style={styles.title}>{course.title}</Text>
                  <Text style={styles.muted}>{course.description}</Text>
                  <View style={styles.progressRow}>
                    <ProgressBar value={lessons.length ? done / lessons.length : 0} color={course.color} height={10} />
                    <Text style={styles.small}>
                      {done}/{lessons.length} lessons
                    </Text>
                  </View>
                  <View style={[styles.materialHint, { backgroundColor: tint(course.color) }]}>
                    <Ionicons name="book-outline" size={14} color={course.color} />
                    <Text style={[styles.small, { color: course.color }]}>{course.material.length} study topics</Text>
                  </View>
                </View>
              </Pressable>
            </View>
          );
        })}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  content: { padding: space.lg, gap: space.lg, paddingBottom: space.xxl },
  intro: { fontSize: font.body, color: colors.muted, lineHeight: 22 },
  cardWrap: { gap: space.lg },
  sectionTitle: { fontSize: font.title, fontWeight: '800', color: colors.text, marginTop: space.md },
  card: {
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: colors.border,
    borderRadius: radius.lg,
    overflow: 'hidden',
  },
  pressed: { borderBottomWidth: 2, marginTop: 2 },
  banner: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: space.lg,
  },
  sampleBadge: { backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: 8, paddingHorizontal: 8, paddingVertical: 3 },
  sampleText: { color: '#FFFFFF', fontWeight: '800', fontSize: 11 },
  body: { padding: space.lg, gap: space.xs },
  title: { fontSize: font.large, fontWeight: '800', color: colors.text },
  muted: { fontSize: font.body - 1, color: colors.muted, lineHeight: 20 },
  small: { fontSize: font.small, color: colors.muted, fontWeight: '700' },
  progressRow: { flexDirection: 'row', alignItems: 'center', gap: space.sm, marginTop: space.sm },
  materialHint: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radius.pill,
    marginTop: space.sm,
  },
});

// Web export: pre-render a page for each of these (see src/lib/staticParams.ts).
export { levelParams as generateStaticParams } from '@/lib/staticParams';
