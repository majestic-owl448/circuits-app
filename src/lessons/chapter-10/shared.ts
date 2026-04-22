import type { LessonAction } from '../../types/lesson.ts';

export const CHAPTER_10_METADATA = {
  stageLabel: 'Capstone / Mastery',
  chapterTitle: 'Mastery, Review, and Capstone Challenges',
  defaultActions: ['inspect'] as LessonAction[],
};

// Standard 4-node layout
export const CH10_NODES = [
  { id: 'n1', position: { x: 150, y: 150 } },
  { id: 'n2', position: { x: 500, y: 150 } },
  { id: 'n3', position: { x: 150, y: 350 } },
  { id: 'n4', position: { x: 500, y: 350 } },
];

// 6-node layout for mixed/review circuits
export const CH10_SIX_NODES = [
  { id: 'n1', position: { x: 120, y: 120 } },
  { id: 'n2', position: { x: 320, y: 120 } },
  { id: 'n3', position: { x: 520, y: 120 } },
  { id: 'n4', position: { x: 520, y: 340 } },
  { id: 'n5', position: { x: 320, y: 340 } },
  { id: 'n6', position: { x: 120, y: 340 } },
];

// 8-node layout for complex capstone circuits
export const CH10_EIGHT_NODES = [
  { id: 'n1', position: { x: 100, y: 120 } },
  { id: 'n2', position: { x: 250, y: 120 } },
  { id: 'n3', position: { x: 420, y: 120 } },
  { id: 'n4', position: { x: 580, y: 120 } },
  { id: 'n5', position: { x: 580, y: 340 } },
  { id: 'n6', position: { x: 420, y: 340 } },
  { id: 'n7', position: { x: 250, y: 340 } },
  { id: 'n8', position: { x: 100, y: 340 } },
];

// Gate-only node pair for standalone gate display
export const CH10_GATE_NODES = [
  { id: 'g1', position: { x: 200, y: 250 } },
  { id: 'g2', position: { x: 450, y: 250 } },
];
