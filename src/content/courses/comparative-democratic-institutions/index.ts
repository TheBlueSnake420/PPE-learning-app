import { courseFromWeeks } from '../../build';
import { w2 } from './w2';
import { w3 } from './w3';
import { w4 } from './w4';
import { w6 } from './w6';

// Week 5 was pitch-presentation week (no lecture).
export const comparativeDemocraticInstitutions = courseFromWeeks(
  {
    id: 'comparative-democratic-institutions',
    title: 'Comparative Democratic Institutions',
    shortTitle: 'Democratic Institutions',
    year: 1,
    description: 'How democracies are built: states, governments, elections and parties.',
    color: '#14B8A6',
  },
  [w2, w3, w4, w6],
);
