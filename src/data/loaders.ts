import type { LessonConfig } from '../types/lesson.ts';
import type { QuizConfig } from '../types/quiz.ts';

const LESSON_LOADERS = new Map<number, () => Promise<{ default: LessonConfig[] }>>([
  [1, () => import('../lessons/registry/chapter-1.ts')],
  [2, () => import('../lessons/registry/chapter-2.ts')],
  [3, () => import('../lessons/registry/chapter-3.ts')],
  [4, () => import('../lessons/registry/chapter-4.ts')],
  [5, () => import('../lessons/registry/chapter-5.ts')],
  [6, () => import('../lessons/registry/chapter-6.ts')],
]);

const QUIZ_LOADERS = new Map<number, () => Promise<{ default: QuizConfig[] }>>([
  [1, () => import('../quizzes/registry/chapter-1.ts')],
  [2, () => import('../quizzes/registry/chapter-2.ts')],
  [3, () => import('../quizzes/registry/chapter-3.ts')],
  [4, () => import('../quizzes/registry/chapter-4.ts')],
  [5, () => import('../quizzes/registry/chapter-5.ts')],
  [6, () => import('../quizzes/registry/chapter-6.ts')],
]);

let lessonRegistryPromise: Promise<LessonConfig[]> | null = null;
let quizRegistryPromise: Promise<QuizConfig[]> | null = null;
const lessonsByChapterPromise = new Map<number, Promise<LessonConfig[]>>();
const quizzesByChapterPromise = new Map<number, Promise<QuizConfig[]>>();

export function loadLessonRegistry(): Promise<LessonConfig[]> {
  if (!lessonRegistryPromise) {
    const chapters = [...LESSON_LOADERS.keys()];
    lessonRegistryPromise = Promise.all(
      chapters.map(ch => loadLessonsForChapter(ch)),
    ).then(results => results.flat());
  }
  return lessonRegistryPromise;
}

export function loadLessonsForChapter(chapter: number): Promise<LessonConfig[]> {
  const existing = lessonsByChapterPromise.get(chapter);
  if (existing) return existing;

  const loader = LESSON_LOADERS.get(chapter);
  if (!loader) {
    console.warn(`loadLessonsForChapter: no loader for chapter ${chapter}`);
    return Promise.resolve([]);
  }

  const created = loader().then(module => module.default);
  lessonsByChapterPromise.set(chapter, created);
  return created;
}

export function loadQuizRegistry(): Promise<QuizConfig[]> {
  if (!quizRegistryPromise) {
    const chapters = [...QUIZ_LOADERS.keys()];
    quizRegistryPromise = Promise.all(
      chapters.map(ch => loadQuizzesForChapter(ch)),
    ).then(results => results.flat());
  }
  return quizRegistryPromise;
}

export function loadQuizzesForChapter(chapter: number): Promise<QuizConfig[]> {
  const existing = quizzesByChapterPromise.get(chapter);
  if (existing) return existing;

  const loader = QUIZ_LOADERS.get(chapter);
  if (!loader) {
    console.warn(`loadQuizzesForChapter: no loader for chapter ${chapter}`);
    return Promise.resolve([]);
  }

  const created = loader().then(module => module.default);
  quizzesByChapterPromise.set(chapter, created);
  return created;
}
