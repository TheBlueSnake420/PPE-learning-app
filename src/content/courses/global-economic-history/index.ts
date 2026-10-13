import { courseFromWeeks } from '../../build';
import { w2 } from './w2';
import { w3 } from './w3';
import { w4 } from './w4';
import { w5 } from './w5';
import { w6 } from './w6';

export const globalEconomicHistory = courseFromWeeks(
  {
    id: 'global-economic-history',
    title: 'Major Debates in Global Economic History',
    shortTitle: 'Global Economic History',
    year: 1,
    description: 'Why some parts of the world became rich, and when.',
    color: '#CE82FF',
  },
  [w2, w3, w4, w5, w6],
);
