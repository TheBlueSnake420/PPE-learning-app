import { courseFromWeeks } from '../../build';
import { w1 } from './w1';
import { w2 } from './w2';
import { w3 } from './w3';
import { w4 } from './w4';
import { w5 } from './w5';
import { w6 } from './w6';
import { w7 } from './w7';

// Block 2. All weeks are built from the assigned readings and reading questions; no lecture
// slides are available yet. When they arrive, add lecture sections and lessons to each week.
export const ethicsPublicPolicy = courseFromWeeks(
  {
    id: 'ethics-public-policy',
    title: 'Ethics and Public Policy',
    shortTitle: 'Ethics & Public Policy',
    year: 1,
    description: 'Moral theories and their use in public policy: utilitarianism, Kant, virtue ethics, business, rights and markets.',
    color: '#2B70C9',
  },
  [w1, w2, w3, w4, w5, w6, w7],
);
