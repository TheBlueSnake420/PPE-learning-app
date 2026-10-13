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
  if (!level) return <NotFound />;

  return (
    <>
      <Stack.Screen options={{ title: level.title }} />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.intro}>{level.description} Pick a course to study.</Text>
        {level.courses.map((course) => {
          const lessons = lessonsInTrack(course, level.tier);
          const done = lessons.filter((l) => completed[lessonKey(course.id, l.id)]).length;
          return (
            <Pressable
              key={course.id}
              onPress={() =>
                router.push({
                  pathname: '/course/[courseId]/[tier]',
                  params: { courseId: course.id, tier: level.tier },
                })
              }
              style={({ pressed }) => [styles.card, pressed && styles.pressed]}
            >
              <View style={[styles.banner, { backgroundColor: course.color }]}>
                <Ionicons name="library" size={28} color="#FFFFFF" />
                {course.sample && (
                  <View style={styles.sampleBadge}>
                    <Text style={styles.sampleText}>SAMPLE CONTENT</Text>
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
                  <Text style={[styles.small, { color: course.color }]}>
                    {course.material.length} study topics
                  </Text>
                </View>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  content: { padding: space.lg, gap: space.lg, paddingBottom: space.xxl },
  intro: { fontSize: font.body, color: colors.muted, lineHeight: 22 },
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
