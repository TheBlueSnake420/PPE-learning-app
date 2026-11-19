import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Button } from '@/components/Button';
import { courses, type Course } from '@/content';
import { dueActiveReviews, reviewCountsByCourse, useProgress, type CourseReviewCount } from '@/store/progress';
import { colors, darken, font, radius, space, tint } from '@/theme';

/** Pick which mistakes to review: all active courses at once, or one course. */
export default function MistakesScreen() {
  const reviews = useProgress((s) => s.reviews);
  const completedCourses = useProgress((s) => s.completedCourses);
  const counts = reviewCountsByCourse(reviews);
  const activeDue = dueActiveReviews(reviews, completedCourses).length;
  // Courses with mistakes due first; otherwise keep the usual course order.
  const withItems = courses
    .filter((c) => counts[c.id])
    .sort((a, b) => Number(counts[b.id].due > 0) - Number(counts[a.id].due > 0));
  const active = withItems.filter((c) => !completedCourses[c.id]);
  const finished = withItems.filter((c) => completedCourses[c.id]);

  if (withItems.length === 0) {
    return (
      <View style={styles.empty}>
        <Ionicons name="checkmark-done-circle" size={80} color={colors.green} />
        <Text style={styles.emptyTitle}>No mistakes saved</Text>
        <Text style={styles.muted}>Mistakes you make in lessons show up here so you can practise them again.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.intro}>
        Mistakes come back after 1, 3 and 7 days until you get them right. Review everything that is due, or pick a
        course to focus on.
      </Text>

      {active.length > 0 && (
        <Button
          title={activeDue > 0 ? `Review all due (${activeDue})` : 'Nothing due today'}
          variant="red"
          disabled={activeDue === 0}
          onPress={() => router.push('/review')}
        />
      )}

      {active.length > 0 && <Text style={styles.heading}>By course</Text>}
      {active.map((course) => (
        <CourseRow key={course.id} course={course} count={counts[course.id]} />
      ))}

      {finished.length > 0 && (
        <>
          <Text style={styles.heading}>Completed courses</Text>
          <Text style={styles.muted}>Not included in "Review all", but you can still review them here.</Text>
          {finished.map((course) => (
            <CourseRow key={course.id} course={course} count={counts[course.id]} />
          ))}
        </>
      )}
    </ScrollView>
  );
}

function CourseRow({ course, count }: { course: Course; count: CourseReviewCount }) {
  const due = count.due > 0;
  return (
    <Pressable
      onPress={() => router.push({ pathname: '/review', params: { courseId: course.id } })}
      accessibilityLabel={`Review ${course.title}`}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <View style={[styles.courseIcon, { backgroundColor: course.color, borderBottomColor: darken(course.color) }]}>
        <Ionicons name="library" size={22} color="#FFFFFF" />
      </View>
      <View style={styles.flex}>
        <Text style={styles.title}>{course.title}</Text>
        <Text style={styles.muted}>
          {due ? `${count.due} due · ` : ''}
          {count.total} saved
        </Text>
      </View>
      <View style={[styles.pill, { backgroundColor: due ? colors.redBg : tint(course.color) }]}>
        <Text style={[styles.pillText, { color: due ? colors.redDark : darken(course.color, 0.3) }]}>
          {due ? 'Review' : 'Practise early'}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  content: { padding: space.lg, gap: space.md, paddingBottom: space.xxl },
  intro: { fontSize: font.body, color: colors.muted, lineHeight: 22 },
  heading: { fontSize: font.title, fontWeight: '800', color: colors.text, marginTop: space.md },
  card: {
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
  courseIcon: {
    width: 44,
    height: 44,
    borderRadius: 13,
    borderBottomWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex: { flex: 1, gap: 2 },
  title: { fontSize: font.large, fontWeight: '800', color: colors.text },
  muted: { fontSize: font.body - 1, color: colors.muted, lineHeight: 20 },
  pill: { borderRadius: radius.pill, paddingHorizontal: 12, paddingVertical: 6 },
  pillText: { fontWeight: '800', fontSize: font.small },
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: space.xl, gap: space.md },
  emptyTitle: { fontSize: font.title, fontWeight: '800', color: colors.text },
});
