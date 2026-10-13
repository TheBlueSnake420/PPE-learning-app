import { courses } from '../src/content';
import { lengthCueWarnings, validateCourses } from '../src/content/validate';

const problems = validateCourses(courses);
const warnings = lengthCueWarnings(courses);

let lessons = 0;
let exercises = 0;
for (const course of courses) {
  for (const units of Object.values(course.tracks)) {
    for (const unit of units ?? []) {
      lessons += unit.lessons.length;
      exercises += unit.lessons.reduce((n, l) => n + l.exercises.length, 0);
    }
  }
}

if (warnings.length > 0) {
  console.warn(`${warnings.length} warning(s) - answer guessable by length:`);
  for (const w of warnings) console.warn(`  - ${w}`);
}

if (problems.length > 0) {
  console.error(`Found ${problems.length} content problem(s):`);
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}

console.log(`Content OK: ${courses.length} course(s), ${lessons} lessons, ${exercises} exercises.`);
