import type { LessonAction } from '../../types/lesson.ts';

export const CHAPTER_6_METADATA = {
  stageLabel: 'Intermediate to Late Intermediate',
  chapterTitle: 'Capacitors, Inductors, and Time-Dependent Behavior',
  defaultActions: [
    'toggle-switch',
    'drag-to-place',
    'connect-wire',
    'delete-component',
    'rename-component',
  ] as LessonAction[],
};

// Standard 4-node rectangular layout used by most Chapter 6 lesson circuits.
export const CH6_NODES = [
  { id: 'n1', position: { x: 150, y: 150 } },
  { id: 'n2', position: { x: 500, y: 150 } },
  { id: 'n3', position: { x: 150, y: 350 } },
  { id: 'n4', position: { x: 500, y: 350 } },
];
