import type { QuizConfig } from '../types/quiz.ts';
import { quizRegistryChapter1 } from './registry/chapter-1.ts';
import { quizRegistryChapter2 } from './registry/chapter-2.ts';
import { quizRegistryChapter3 } from './registry/chapter-3.ts';

export const quizRegistry: QuizConfig[] = [
  ...quizRegistryChapter1,
  ...quizRegistryChapter2,
  ...quizRegistryChapter3,
];
