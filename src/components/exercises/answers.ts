import type { Exercise } from '@/content';

/** The learner's answer, in a shape that depends on the exercise type. */
export type Answer =
  | { type: 'choice'; index: number }
  | { type: 'truefalse'; value: boolean }
  | { type: 'fill'; word: string }
  | { type: 'order'; items: string[] }
  | { type: 'match'; mistakes: number };

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
    case 'match':
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
  }
}
