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

// Reserved for Chapter 5+ lesson authors: default tolerance fraction for
// evaluate-within-range challenges involving non-ideal component values.
export const NON_IDEAL_TOLERANCE = 0.05;
