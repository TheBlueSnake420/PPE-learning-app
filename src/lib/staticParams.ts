import { courses, getLevels, lessonsInTrack, TIERS } from '@/content';

// The web version is exported as static HTML (app.json web.output "static"). A dynamic route
// only gets a page for the params listed here; any other URL is "Not Found" when it is opened
// directly or reloaded. Each dynamic route re-exports one of these as generateStaticParams.

export function levelParams() {
  return getLevels().map((level) => ({ levelId: level.id }));
}

export function courseTierParams() {
  return getLevels().flatMap((level) => level.courses.map((course) => ({ courseId: course.id, tier: level.tier })));
}

export function lessonParams() {
  return courses.flatMap((course) =>
    TIERS.flatMap((tier) => lessonsInTrack(course, tier)).map((lesson) => ({ courseId: course.id, lessonId: lesson.id })),
  );
}

export function topicParams() {
  return courses.flatMap((course) => course.material.map((topic) => ({ courseId: course.id, topicId: topic.id })));
}

export function courseParams() {
  return courses.map((course) => ({ courseId: course.id }));
}
