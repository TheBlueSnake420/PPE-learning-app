/**
 * Content model for the app.
 *
 * Hierarchy: Year -> Level (year + tier) -> Course -> Unit -> Lesson -> Exercise.
 * A course can have a Basics track, an Advanced track, or both. Study material
 * (summaries, key terms) belongs to the course and is shared by both tracks.
 *
 * IDs are used as keys for saved progress, so never reuse or change an ID once
 * the app is in use - add a new one instead. Exercise IDs must be unique within
 * a course; lesson IDs must be unique within a course.
 */

export type Tier = 'basics' | 'advanced';

export interface Course {
  id: string;
  title: string;
  /** Short name for tight spaces, e.g. "Global Econ History". */
  shortTitle: string;
  year: 1 | 2 | 3;
  description: string;
  /** Accent colour used for this course's cards and lesson path. */
  color: string;
  /** Set while the course only contains placeholder content. */
  sample?: boolean;
  tracks: Partial<Record<Tier, Unit[]>>;
  material: StudyTopic[];
}

export interface Unit {
  id: string;
  title: string;
  description?: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  /** Study topic that covers this lesson, shown as "Read the summary". */
  topicId?: string;
  exercises: Exercise[];
}

interface ExerciseBase {
  id: string;
  /** Shown after answering, whether right or wrong. */
  explanation?: string;
}

/** Pick one option. `answer` is the index of the correct option. */
export interface ChoiceExercise extends ExerciseBase {
  type: 'choice';
  prompt: string;
  options: string[];
  answer: number;
}

export interface TrueFalseExercise extends ExerciseBase {
  type: 'truefalse';
  statement: string;
  answer: boolean;
}

/** Sentence with one blank written as "___", filled from a word bank. */
export interface FillExercise extends ExerciseBase {
  type: 'fill';
  text: string;
  options: string[];
  answer: string;
}

/** Match left items to right items. Pairs are listed correctly; the app shuffles. */
export interface MatchExercise extends ExerciseBase {
  type: 'match';
  prompt?: string;
  pairs: [string, string][];
}

/** Put items in order. Items are listed in the correct order; the app shuffles. */
export interface OrderExercise extends ExerciseBase {
  type: 'order';
  prompt: string;
  items: string[];
}

export type Exercise =
  | ChoiceExercise
  | TrueFalseExercise
  | FillExercise
  | MatchExercise
  | OrderExercise;

export interface StudyTopic {
  id: string;
  title: string;
  /** Lecture week, if the topic maps to one. */
  week?: number;
  /** One or two sentences shown in the overview list. */
  summary: string;
  sections?: { heading: string; paragraphs: string[] }[];
  keyPoints?: string[];
  keyTerms?: KeyTerm[];
  /** Literature for this topic, as short citations. */
  readings?: string[];
}

export interface KeyTerm {
  term: string;
  definition: string;
}

/**
 * Content for one lecture week: a study topic plus (optionally) one Basics and
 * one Advanced unit. Courses are assembled from a list of weeks.
 */
export interface WeekContent {
  topic: StudyTopic;
  basics?: Unit;
  advanced?: Unit;
}

export interface Level {
  id: string;
  year: number;
  tier: Tier;
  title: string;
  description: string;
  courses: Course[];
}
