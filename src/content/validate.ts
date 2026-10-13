import type { Course, Exercise } from './types';

/**
 * Checks content rules that the type system can't express: unique IDs, answers
 * that exist among the options, sensible pair/item counts and links between
 * lessons and study topics. Returns a list of human-readable problems.
 */
export function validateCourses(courses: Course[]): string[] {
  const problems: string[] = [];
  const courseIds = new Set<string>();

  for (const course of courses) {
    const where = (s: string) => `[${course.id}] ${s}`;
    if (courseIds.has(course.id)) problems.push(where('duplicate course id'));
    courseIds.add(course.id);

    const topicIds = new Set<string>();
    for (const topic of course.material) {
      if (topicIds.has(topic.id)) problems.push(where(`duplicate topic id "${topic.id}"`));
      topicIds.add(topic.id);
    }

    const unitIds = new Set<string>();
    const lessonIds = new Set<string>();
    const exerciseIds = new Set<string>();

    for (const units of Object.values(course.tracks)) {
      for (const unit of units ?? []) {
        if (unitIds.has(unit.id)) problems.push(where(`duplicate unit id "${unit.id}"`));
        unitIds.add(unit.id);
        if (unit.lessons.length === 0) problems.push(where(`unit "${unit.id}" has no lessons`));

        for (const lesson of unit.lessons) {
          if (lessonIds.has(lesson.id)) problems.push(where(`duplicate lesson id "${lesson.id}"`));
          lessonIds.add(lesson.id);
          if (lesson.topicId && !topicIds.has(lesson.topicId)) {
            problems.push(where(`lesson "${lesson.id}" links to unknown topic "${lesson.topicId}"`));
          }
          if (lesson.exercises.length === 0) {
            problems.push(where(`lesson "${lesson.id}" has no exercises`));
          }

          for (const ex of lesson.exercises) {
            if (exerciseIds.has(ex.id)) problems.push(where(`duplicate exercise id "${ex.id}"`));
            exerciseIds.add(ex.id);
            for (const p of checkExercise(ex)) problems.push(where(`exercise "${ex.id}": ${p}`));
          }
        }
      }
    }
  }
  return problems;
}

/**
 * Soft check: multiple-choice questions whose correct option is much longer
 * than every distractor can be guessed without knowing the answer.
 */
export function lengthCueWarnings(courses: Course[]): string[] {
  const warnings: string[] = [];
  for (const course of courses) {
    for (const units of Object.values(course.tracks)) {
      for (const unit of units ?? []) {
        for (const lesson of unit.lessons) {
          for (const ex of lesson.exercises) {
            if (ex.type !== 'choice') continue;
            const correct = ex.options[ex.answer].length;
            const longestOther = Math.max(...ex.options.filter((_, i) => i !== ex.answer).map((o) => o.length));
            if (correct >= 20 && correct > longestOther * 1.3) {
              warnings.push(`[${course.id}] exercise "${ex.id}": correct option is much longer than the others`);
            }
          }
        }
      }
    }
  }
  return warnings;
}

function checkExercise(ex: Exercise): string[] {
  const problems: string[] = [];
  switch (ex.type) {
    case 'choice':
      if (ex.options.length < 2) problems.push('needs at least 2 options');
      if (ex.answer < 0 || ex.answer >= ex.options.length) problems.push('answer index out of range');
      if (new Set(ex.options).size !== ex.options.length) problems.push('duplicate options');
      break;
    case 'fill':
      if ((ex.text.match(/___/g) ?? []).length !== 1) problems.push('text must contain exactly one ___');
      if (!ex.options.includes(ex.answer)) problems.push('answer is not among the options');
      if (new Set(ex.options).size !== ex.options.length) problems.push('duplicate options');
      break;
    case 'match': {
      if (ex.pairs.length < 2 || ex.pairs.length > 5) problems.push('needs 2-5 pairs');
      const lefts = ex.pairs.map((p) => p[0]);
      const rights = ex.pairs.map((p) => p[1]);
      if (new Set(lefts).size !== lefts.length || new Set(rights).size !== rights.length) {
        problems.push('duplicate items in pairs');
      }
      break;
    }
    case 'order':
      if (ex.items.length < 2 || ex.items.length > 6) problems.push('needs 2-6 items');
      if (new Set(ex.items).size !== ex.items.length) problems.push('duplicate items');
      break;
    case 'truefalse':
      break;
  }
  return problems;
}
