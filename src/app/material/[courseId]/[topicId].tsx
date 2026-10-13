import { Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { NotFound } from '@/components/NotFound';
import { getCourse } from '@/content';
import { colors, font, radius, space, tint } from '@/theme';

export default function TopicScreen() {
  const { courseId, topicId } = useLocalSearchParams<{ courseId: string; topicId: string }>();
  const course = getCourse(courseId);
  const topic = course?.material.find((t) => t.id === topicId);
  if (!course || !topic) return <NotFound />;

  return (
    <>
      <Stack.Screen options={{ title: course.shortTitle }} />
      <ScrollView contentContainerStyle={styles.content}>
        {topic.week != null && <Text style={[styles.week, { color: course.color }]}>WEEK {topic.week}</Text>}
        <Text style={styles.title}>{topic.title}</Text>
        <Text style={styles.summary}>{topic.summary}</Text>

        {topic.keyPoints && topic.keyPoints.length > 0 && (
          <View style={[styles.box, { backgroundColor: tint(course.color, 0.88), borderColor: tint(course.color, 0.6) }]}>
            <Text style={styles.boxTitle}>Key points</Text>
            {topic.keyPoints.map((point) => (
              <View key={point} style={styles.bulletRow}>
                <View style={[styles.bullet, { backgroundColor: course.color }]} />
                <Text style={styles.paragraph}>{point}</Text>
              </View>
            ))}
          </View>
        )}

        {topic.sections?.map((section) => (
          <View key={section.heading} style={styles.section}>
            <Text style={styles.heading}>{section.heading}</Text>
            {section.paragraphs.map((p, i) => (
              <Text key={i} style={styles.paragraph}>
                {p}
              </Text>
            ))}
          </View>
        ))}

        {topic.keyTerms && topic.keyTerms.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.heading}>Key terms</Text>
            {topic.keyTerms.map((kt) => (
              <View key={kt.term} style={styles.term}>
                <Text style={styles.termName}>{kt.term}</Text>
                <Text style={styles.paragraph}>{kt.definition}</Text>
              </View>
            ))}
          </View>
        )}

        {topic.readings && topic.readings.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.heading}>Readings</Text>
            {topic.readings.map((r) => (
              <Text key={r} style={styles.reading}>
                {r}
              </Text>
            ))}
          </View>
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  content: { padding: space.lg, gap: space.lg, paddingBottom: 64 },
  week: { fontSize: font.small, fontWeight: '800', letterSpacing: 0.5 },
  title: { fontSize: font.hero, fontWeight: '800', color: colors.text, marginTop: -space.sm },
  summary: { fontSize: font.large, color: colors.muted, lineHeight: 26 },
  box: { borderWidth: 2, borderRadius: radius.lg, padding: space.lg, gap: space.sm },
  boxTitle: { fontSize: font.large, fontWeight: '800', color: colors.text },
  bulletRow: { flexDirection: 'row', gap: space.sm, alignItems: 'flex-start' },
  bullet: { width: 8, height: 8, borderRadius: 4, marginTop: 8 },
  section: { gap: space.sm },
  heading: { fontSize: font.title, fontWeight: '800', color: colors.text },
  paragraph: { fontSize: font.body, color: colors.text, lineHeight: 24, flexShrink: 1 },
  term: { borderLeftWidth: 4, borderLeftColor: colors.border, paddingLeft: space.md, gap: 2 },
  termName: { fontSize: font.body, fontWeight: '800', color: colors.text },
  reading: { fontSize: font.body - 1, color: colors.muted, lineHeight: 22, fontStyle: 'italic' },
});
