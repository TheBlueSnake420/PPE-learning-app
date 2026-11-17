import { courseFromWeeks } from '../../build';
import { w1 } from './w1';
import { w2 } from './w2';
import { w3 } from './w3';
import { w4 } from './w4';
import { w5 } from './w5';
import { w6 } from './w6';

// Block 2. Built from the textbook (The Economy 2.0: Microeconomics, CORE Econ) and the
// syllabus; no lecture slides yet. Weeks follow the syllabus: week 1 = Unit 2, week 2 = Unit 3,
// week 3 = Units 4-5, week 4 = Unit 7, week 5 = Unit 8, week 6 = Unit 10 + Unit 6 (6.1-6.3, 6.6).
export const microeconomics = courseFromWeeks(
  {
    id: 'microeconomics',
    title: 'Microeconomics',
    shortTitle: 'Microeconomics',
    year: 1,
    description: 'How people, firms and governments make choices and interact: incentives, games, firms, markets and market failures.',
    color: '#E8590C',
  },
  [w1, w2, w3, w4, w5, w6],
);
