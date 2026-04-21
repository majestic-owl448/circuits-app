import type { LessonAction } from '../../types/lesson.ts';

export const CHAPTER_8_METADATA = {
  stageLabel: 'Late Intermediate - Active Components',
  chapterTitle: 'Diodes, Transistors, Rectification, and Switching',
  defaultActions: ['inspect'] as LessonAction[],
};

export const CH8_NODES = [
  { id: 'n1', position: { x: 150, y: 150 } },
  { id: 'n2', position: { x: 500, y: 150 } },
  { id: 'n3', position: { x: 150, y: 350 } },
  { id: 'n4', position: { x: 500, y: 350 } },
];

export const CH8_COMPARISON_NODES = [
  { id: 'n1', position: { x: 100, y: 150 } },
  { id: 'n2', position: { x: 350, y: 150 } },
  { id: 'n3', position: { x: 100, y: 350 } },
  { id: 'n4', position: { x: 350, y: 350 } },
  { id: 'n5', position: { x: 450, y: 150 } },
  { id: 'n6', position: { x: 700, y: 150 } },
  { id: 'n7', position: { x: 450, y: 350 } },
  { id: 'n8', position: { x: 700, y: 350 } },
];
