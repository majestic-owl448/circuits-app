import type { LessonAction } from '../../types/lesson.ts';

export const CHAPTER_7_METADATA = {
  stageLabel: 'Late Intermediate',
  chapterTitle: 'AC Fundamentals and DC/AC Conversion',
  defaultActions: [
    'toggle-switch',
    'inspect',
  ] as LessonAction[],
};

export const CH7_NODES = [
  { id: 'n1', position: { x: 150, y: 150 } },
  { id: 'n2', position: { x: 500, y: 150 } },
  { id: 'n3', position: { x: 150, y: 350 } },
  { id: 'n4', position: { x: 500, y: 350 } },
];

// Extended node set for comparison layouts (DC vs AC side by side)
export const CH7_COMPARISON_NODES = [
  { id: 'n1', position: { x: 100, y: 150 } },
  { id: 'n2', position: { x: 350, y: 150 } },
  { id: 'n3', position: { x: 100, y: 350 } },
  { id: 'n4', position: { x: 350, y: 350 } },
  { id: 'n5', position: { x: 450, y: 150 } },
  { id: 'n6', position: { x: 700, y: 150 } },
  { id: 'n7', position: { x: 450, y: 350 } },
  { id: 'n8', position: { x: 700, y: 350 } },
];
