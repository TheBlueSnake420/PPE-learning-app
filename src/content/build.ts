import type { Course, Unit, WeekContent } from './types';

type CourseMeta = Omit<Course, 'tracks' | 'material'>;

/** Assemble a course from per-week files, keeping weeks in the given order. */
export function courseFromWeeks(meta: CourseMeta, weeks: WeekContent[]): Course {
  // A week marked as notes-based marks its topic and units too.
  const marked = weeks.map((w) =>
    w.fromNotes
      ? {
          topic: { ...w.topic, fromNotes: true },
          basics: w.basics && { ...w.basics, fromNotes: true },
          advanced: w.advanced && { ...w.advanced, fromNotes: true },
        }
      : w,
  );
  const basics = marked.map((w) => w.basics).filter((u): u is Unit => !!u);
  const advanced = marked.map((w) => w.advanced).filter((u): u is Unit => !!u);
  return {
    ...meta,
    tracks: {
      ...(basics.length ? { basics } : {}),
      ...(advanced.length ? { advanced } : {}),
    },
    material: marked.map((w) => w.topic),
  };
}
