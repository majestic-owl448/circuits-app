import type { LessonConfig } from '../types/lesson.ts';
import { lesson1 } from './lesson-1/config.ts';
import { lesson2 } from './lesson-2/config.ts';
import { lesson3 } from './lesson-3/config.ts';

export const lessonRegistry: LessonConfig[] = [lesson1, lesson2, lesson3];
