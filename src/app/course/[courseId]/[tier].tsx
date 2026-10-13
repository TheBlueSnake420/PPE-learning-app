import Ionicons from '@expo/vector-icons/Ionicons';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { NotFound } from '@/components/NotFound';
import { getCourse, isTier, lessonsInTrack, tierLabel, type Course, type Lesson } from '@/content';
import { lessonKey, useProgress, type LessonRecord } from '@/store/progress';
import { colors, darken, font, radius, space, tint } from '@/theme';

type Tab = 'lessons' | 'material';

/** Horizontal offsets that give the lesson path its Duolingo-style zig-zag. */
const PATH_OFFSETS = [0, 44, 66, 44, 0, -44, -66, -44];

export default function CourseScreen() {
  const { courseId, tier } = useLocalSearchParams<{ courseId: string; tier: string }>();
  const course = getCourse(courseId);
  const [tab, setTab] = useState<Tab>('lessons');
  const completed = useProgress((s) => s.lessons);
  if (!course || !isTier(tier) || !course.tracks[tier]) return <NotFound />;

  const units = course.tracks[tier] ?? [];
  const nextLesson = lessonsInTrack(course, tier).find((l) => !completed[lessonKey(course.id, l.id)]);

  return (
    <>
      <Stack.Screen options={{ title: `${course.shortTitle} · ${tierLabel(tier)}` }} />
      <View style={styles.tabs}>
        {(['lessons', 'material'] as Tab[]).map((t) => (
          <Pressable
            key={t}
            onPress={() => setTab(t)}
            style={[styles.tab, tab === t && { borderBottomColor: course.color }]}
          >
            <Text style={[styles.tabText, tab === t && { color: course.color }]}>
              {t === 'lessons' ? 'Lessons' : 'Study material'}
            </Text>
          </Pressable>
        ))}
      </View>

      {tab === 'lessons' ? (
        <ScrollView contentContainerStyle={styles.content}>
          {units.map((unit, unitIndex) => (
            <View key={unit.id} style={styles.unit}>
              <View style={[styles.unitBanner, { backgroundColor: course.color, borderBottomColor: darken(course.color) }]}>
                <Text style={styles.unitLabel}>UNIT {unitIndex + 1}</Text>
                <Text style={styles.unitTitle}>{unit.title}</Text>
                {unit.description ? <Text style={styles.unitDescription}>{unit.description}</Text> : null}
              </View>
              <View style={styles.path}>
                {unit.lessons.map((lesson, i) => (
                  <LessonNode
                    key={lesson.id}
                    course={course}
                    lesson={lesson}
                    offset={PATH_OFFSETS[i % PATH_OFFSETS.length]}
                    record={completed[lessonKey(course.id, lesson.id)]}
                    isNext={lesson.id === nextLesson?.id}
                  />
                ))}
              </View>
            </View>
          ))}
          {!nextLesson && (
            <Text style={styles.allDone}>You've completed every lesson in this track. Keep reviewing to stay sharp!</Text>
          )}
        </ScrollView>
      ) : (
        <MaterialList course={course} />
      )}
    </>
  );
}

function LessonNode({
  course,
  lesson,
  offset,
  record,
  isNext,
}: {
  course: Course;
  lesson: Lesson;
  offset: number;
  record?: LessonRecord;
  isNext: boolean;
}) {
  const done = !!record;
  const bg = done ? colors.gold : course.color;
  const edge = done ? colors.goldDark : darken(course.color);
  const open = () =>
    router.push({ pathname: '/lesson/[courseId]/[lessonId]', params: { courseId: course.id, lessonId: lesson.id } });

  return (
    <View style={[styles.nodeWrap, { transform: [{ translateX: offset }] }]}>
      {isNext && (
        <View style={[styles.startBubble, { borderColor: colors.border }]}>
          <Text style={[styles.startText, { color: course.color }]}>START</Text>
        </View>
      )}
      <Pressable
        onPress={open}
        accessibilityLabel={`Lesson: ${lesson.title}`}
        style={({ pressed }) => [
          styles.node,
          { backgroundColor: bg, borderBottomColor: edge },
          isNext && styles.nodeNext,
          pressed && styles.nodePressed,
        ]}
      >
        <Ionicons name={done ? 'checkmark' : isNext ? 'star' : 'book'} size={32} color="#FFFFFF" />
      </Pressable>
      <Text style={styles.nodeTitle}>{lesson.title}</Text>
      {record && record.bestAccuracy < 1 && (
        <Text style={styles.nodeMeta}>Best: {Math.round(record.bestAccuracy * 100)}%</Text>
      )}
    </View>
  );
}

function MaterialList({ course }: { course: Course }) {
  const termCount = course.material.reduce((n, t) => n + (t.keyTerms?.length ?? 0), 0);
  return (
    <ScrollView contentContainerStyle={styles.content}>
      {termCount > 0 && (
        <Pressable
          onPress={() => router.push({ pathname: '/flashcards/[courseId]', params: { courseId: course.id } })}
          style={({ pressed }) => [
            styles.flashcards,
            { backgroundColor: tint(course.color), borderColor: course.color, borderBottomColor: darken(course.color) },
            pressed && styles.pressed,
          ]}
        >
          <Ionicons name="albums" size={26} color={darken(course.color, 0.3)} />
          <View style={styles.flex}>
            <Text style={[styles.topicTitle, { color: darken(course.color, 0.4) }]}>Flashcards</Text>
            <Text style={styles.muted}>{termCount} key terms from all topics</Text>
          </View>
          <Ionicons name="chevron-forward" size={22} color={darken(course.color, 0.3)} />
        </Pressable>
      )}
      {course.material.map((topic) => (
        <Pressable
          key={topic.id}
          onPress={() =>
            router.push({
              pathname: '/material/[courseId]/[topicId]',
              params: { courseId: course.id, topicId: topic.id },
            })
          }
          style={({ pressed }) => [styles.topicCard, pressed && styles.pressed]}
        >
          <View style={styles.flex}>
            {topic.week != null && <Text style={[styles.week, { color: course.color }]}>WEEK {topic.week}</Text>}
            <Text style={styles.topicTitle}>{topic.title}</Text>
            <Text style={styles.muted}>{topic.summary}</Text>
          </View>
          <Ionicons name="chevron-forward" size={22} color={colors.faint} />
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tabs: { flexDirection: 'row', borderBottomWidth: 2, borderBottomColor: colors.border, backgroundColor: colors.bg },
  tab: { flex: 1, alignItems: 'center', paddingVertical: 12, borderBottomWidth: 3, borderBottomColor: 'transparent', marginBottom: -2 },
  tabText: { fontSize: font.body, fontWeight: '800', color: colors.faint },
  content: { padding: space.lg, gap: space.lg, paddingBottom: 64 },
  unit: { gap: space.xl },
  unitBanner: { borderRadius: radius.lg, padding: space.lg, borderBottomWidth: 4, gap: 2 },
  unitLabel: { color: 'rgba(255,255,255,0.85)', fontWeight: '800', fontSize: font.small, letterSpacing: 1 },
  unitTitle: { color: '#FFFFFF', fontWeight: '800', fontSize: font.title },
  unitDescription: { color: 'rgba(255,255,255,0.9)', fontSize: font.body },
  path: { alignItems: 'center', gap: space.xl, paddingBottom: space.lg },
  nodeWrap: { alignItems: 'center', width: 160 },
  node: {
    width: 76,
    height: 70,
    borderRadius: 38,
    borderBottomWidth: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nodeNext: { width: 84, height: 78, borderRadius: 42 },
  nodePressed: { borderBottomWidth: 2, marginTop: 5 },
  nodeTitle: { marginTop: space.sm, fontWeight: '700', color: colors.text, textAlign: 'center', fontSize: font.body - 1 },
  nodeMeta: { fontSize: font.small, color: colors.muted },
  startBubble: {
    borderWidth: 2,
    borderRadius: radius.sm,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 8,
    backgroundColor: colors.bg,
  },
  startText: { fontWeight: '900', letterSpacing: 1 },
  allDone: { textAlign: 'center', color: colors.muted, fontSize: font.body, fontWeight: '600' },
  flashcards: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.md,
    borderWidth: 2,
    borderBottomWidth: 4,
    borderRadius: radius.lg,
    padding: space.lg,
  },
  topicCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.md,
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: space.lg,
  },
  pressed: { borderBottomWidth: 2, marginTop: 2 },
  flex: { flex: 1, gap: 2 },
  week: { fontSize: font.small, fontWeight: '800', letterSpacing: 0.5 },
  topicTitle: { fontSize: font.large, fontWeight: '800', color: colors.text },
  muted: { fontSize: font.body - 1, color: colors.muted, lineHeight: 20 },
});
