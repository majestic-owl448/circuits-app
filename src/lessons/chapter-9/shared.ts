import type { LessonAction } from '../../types/lesson.ts';

export const CHAPTER_9_METADATA = {
  stageLabel: 'Early Digital Logic',
  chapterTitle: 'Logic Gates and Digital-Style Behavior',
  defaultActions: ['inspect'] as LessonAction[],
};

// Standard 4-node layout
export const CH9_NODES = [
  { id: 'n1', position: { x: 150, y: 150 } },
  { id: 'n2', position: { x: 500, y: 150 } },
  { id: 'n3', position: { x: 150, y: 350 } },
  { id: 'n4', position: { x: 500, y: 350 } },
];

// Gate display uses a single node pair (gate is standalone component)
export const CH9_GATE_NODES = [
  { id: 'g1', position: { x: 200, y: 250 } },
  { id: 'g2', position: { x: 450, y: 250 } },
];

// Comparison layout for two gate circuits side by side
export const CH9_COMPARISON_NODES = [
  { id: 'n1', position: { x: 100, y: 200 } },
  { id: 'n2', position: { x: 320, y: 200 } },
  { id: 'n3', position: { x: 480, y: 200 } },
  { id: 'n4', position: { x: 700, y: 200 } },
];
