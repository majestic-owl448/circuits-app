import type { LessonAction } from '../../types/lesson.ts';

export const CHAPTER_5_METADATA = {
  stageLabel: 'Intermediate',
  chapterTitle: 'Non-Ideal Behavior and Operating Limits',
  defaultActions: [
    'toggle-switch',
    'drag-to-place',
    'connect-wire',
    'delete-component',
    'rename-component',
  ] as LessonAction[],
};

export const NON_IDEAL_TOLERANCE = 0.05; // 5% default for non-ideal lessons
