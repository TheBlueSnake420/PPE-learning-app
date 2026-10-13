import { comparativeDemocraticInstitutions } from './courses/comparative-democratic-institutions';
import { globalEconomicHistory } from './courses/global-economic-history';
import type { Course, Exercise, Lesson, Level, Tier, Unit } from './types';

export * from './types';

/** All courses in the app. To add a course, create its folder and list it here. */
export const courses: Course[] = [globalEconomicHistory, comparativeDemocraticInstitutions];

export const TIERS: Tier[] = ['basics', 'advanced'];

const TIER_INFO: Record<Tier, { label: string; description: string }> = {
  basics: {
    label: 'Basics',
    description: 'Key concepts, definitions and who argued what.',
  },
  advanced: {
    label: 'Advanced',
    description: 'Arguments, debates and applying theory.',
  },
};

export function tierLabel(tier: Tier): string {
  return TIER_INFO[tier].label;
}

export function levelId(year: number, tier: Tier): string {
  return `y${year}-${tier}`;
}

export function getLevels(): Level[] {
  const years = [...new Set(courses.map((c) => c.year))].sort();
  const levels: Level[] = [];
  for (const year of years) {
    for (const tier of TIERS) {
      const levelCourses = courses.filter((c) => c.year === year && c.tracks[tier]?.length);
      if (levelCourses.length === 0) continue;
      levels.push({
        id: levelId(year, tier),
        year,
        tier,
        title: `Year ${year} · ${tierLabel(tier)}`,
        description: TIER_INFO[tier].description,
        courses: levelCourses,
      });
    }
  }
  return levels;
}

export function getLevel(id: string): Level | undefined {
  return getLevels().find((l) => l.id === id);
}

export function getCourse(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}

export function isTier(value: string): value is Tier {
  return (TIERS as string[]).includes(value);
}

export function lessonsInTrack(course: Course, tier: Tier): Lesson[] {
  return (course.tracks[tier] ?? []).flatMap((u) => u.lessons);
}

export interface LessonLocation {
  lesson: Lesson;
  unit: Unit;
  tier: Tier;
}

export function findLesson(course: Course, lessonId: string): LessonLocation | undefined {
  for (const tier of TIERS) {
    for (const unit of course.tracks[tier] ?? []) {
      const lesson = unit.lessons.find((l) => l.id === lessonId);
      if (lesson) return { lesson, unit, tier };
    }
  }
  return undefined;
}

/** Keys of every lesson and exercise in the app, as used by saved progress. */
export function contentKeys(): { lessons: Set<string>; exercises: Set<string> } {
  const lessons = new Set<string>();
  const exercises = new Set<string>();
  for (const course of courses) {
    for (const tier of TIERS) {
      for (const lesson of lessonsInTrack(course, tier)) {
        lessons.add(`${course.id}/${lesson.id}`);
        for (const ex of lesson.exercises) exercises.add(`${course.id}/${ex.id}`);
      }
    }
  }
  return { lessons, exercises };
}

export function findExercise(course: Course, exerciseId: string): Exercise | undefined {
  for (const tier of TIERS) {
    for (const unit of course.tracks[tier] ?? []) {
      for (const lesson of unit.lessons) {
        const exercise = lesson.exercises.find((e) => e.id === exerciseId);
        if (exercise) return exercise;
      }
    }
  }
  return undefined;
}
