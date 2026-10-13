import type { Exercise } from '@/content';

/** The learner's answer, in a shape that depends on the exercise type. */
export type Answer =
  | { type: 'choice'; index: number }
  | { type: 'truefalse'; value: boolean }
  | { type: 'fill'; word: string }
  | { type: 'order'; items: string[] }
  | { type: 'match'; mistakes: number }
  | { type: 'multi'; indices: number[] }
  | { type: 'open'; covered: number; total: number };

/** Share of key points an open answer must cover to count as correct. */
export const OPEN_PASS_SHARE = 0.6;

export function isCorrect(exercise: Exercise, answer: Answer): boolean {
  switch (exercise.type) {
    case 'choice':
      return answer.type === 'choice' && answer.index === exercise.answer;
    case 'truefalse':
      return answer.type === 'truefalse' && answer.value === exercise.answer;
    case 'fill':
      return answer.type === 'fill' && answer.word === exercise.answer;
    case 'order':
      return (
        answer.type === 'order' &&
        answer.items.length === exercise.items.length &&
        answer.items.every((item, i) => item === exercise.items[i])
      );
    case 'match':
      return answer.type === 'match' && answer.mistakes === 0;
    case 'multi':
      return (
        answer.type === 'multi' &&
        answer.indices.length === exercise.answers.length &&
        exercise.answers.every((i) => answer.indices.includes(i))
      );
    case 'open':
      return answer.type === 'open' && answer.covered >= Math.ceil(answer.total * OPEN_PASS_SHARE);
  }
}

/** Text shown under "Correct answer:" after a wrong answer, if useful. */
export function correctAnswerText(exercise: Exercise): string | null {
  switch (exercise.type) {
    case 'choice':
      return exercise.options[exercise.answer];
    case 'truefalse':
      return exercise.answer ? 'True' : 'False';
    case 'fill':
      return exercise.text.replace('___', exercise.answer);
    case 'order':
      return exercise.items.map((item, i) => `${i + 1}. ${item}`).join('\n');
    case 'multi':
      return exercise.answers.map((i) => `• ${exercise.options[i]}`).join('\n');
    case 'match':
    case 'open':
      return null;
  }
}

export function instruction(exercise: Exercise): string {
  switch (exercise.type) {
    case 'choice':
      return 'Choose the right answer';
    case 'truefalse':
      return 'True or false?';
    case 'fill':
      return 'Fill in the blank';
    case 'order':
      return 'Put these in the right order';
    case 'match':
      return 'Tap the matching pairs';
    case 'multi':
      return 'Select all that apply';
    case 'open':
      return 'Think it through';
  }
}
