import type { Course, Unit, WeekContent } from './types';

type CourseMeta = Omit<Course, 'tracks' | 'material'>;

/** Assemble a course from per-week files, keeping weeks in the given order. */
export function courseFromWeeks(meta: CourseMeta, weeks: WeekContent[]): Course {
  const basics = weeks.map((w) => w.basics).filter((u): u is Unit => !!u);
  const advanced = weeks.map((w) => w.advanced).filter((u): u is Unit => !!u);
  return {
    ...meta,
    tracks: {
      ...(basics.length ? { basics } : {}),
      ...(advanced.length ? { advanced } : {}),
    },
    material: weeks.map((w) => w.topic),
  };
}
