import { router, useLocalSearchParams } from 'expo-router';
import { useMemo, useState } from 'react';

import { CompleteView } from '@/components/CompleteView';
import { LessonRunner, type QueueItem, type RunResult } from '@/components/LessonRunner';
import { NotFound } from '@/components/NotFound';
import { findLesson, getCourse } from '@/content';
import { useProgress, type SessionResult } from '@/store/progress';

export default function LessonScreen() {
  const { courseId, lessonId } = useLocalSearchParams<{ courseId: string; lessonId: string }>();
  const course = getCourse(courseId);
  const location = course ? findLesson(course, lessonId) : undefined;
  const completeLesson = useProgress((s) => s.completeLesson);
  const [finished, setFinished] = useState<{ session: SessionResult; accuracy: number } | null>(null);

  const items = useMemo<QueueItem[]>(
    () => location?.lesson.exercises.map((exercise) => ({ courseId, exercise })) ?? [],
    [location, courseId],
  );

  if (!course || !location) return <NotFound />;

  if (finished) {
    return (
      <CompleteView
        title="Lesson complete!"
        result={finished.session}
        accuracy={finished.accuracy}
        onContinue={() => router.back()}
      />
    );
  }

  const onFinish = ({ total, correctFirstTry }: RunResult) => {
    const accuracy = total ? correctFirstTry / total : 1;
    setFinished({ session: completeLesson(course.id, location.lesson.id, accuracy), accuracy });
  };

  return <LessonRunner items={items} isReview={false} onClose={() => router.back()} onFinish={onFinish} />;
}
