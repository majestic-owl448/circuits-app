import type { LessonConfig } from '../types/lesson.ts';
import type { QuizConfig } from '../types/quiz.ts';

let lessonRegistryPromise: Promise<LessonConfig[]> | null = null;
let quizRegistryPromise: Promise<QuizConfig[]> | null = null;
const lessonsByChapterPromise = new Map<number, Promise<LessonConfig[]>>();
const quizzesByChapterPromise = new Map<number, Promise<QuizConfig[]>>();

export function loadLessonRegistry(): Promise<LessonConfig[]> {
  if (!lessonRegistryPromise) {
    lessonRegistryPromise = Promise.all([
      loadLessonsForChapter(1),
      loadLessonsForChapter(2),
      loadLessonsForChapter(3),
    ]).then(chapters => chapters.flat());
  }
  return lessonRegistryPromise;
}

export function loadLessonsForChapter(chapter: number): Promise<LessonConfig[]> {
  const existing = lessonsByChapterPromise.get(chapter);
  if (existing) return existing;

  const created = (async () => {
    if (chapter === 1) {
      const module = await import('../lessons/registry/chapter-1.ts');
      return module.lessonRegistryChapter1;
    }
    if (chapter === 2) {
      const module = await import('../lessons/registry/chapter-2.ts');
      return module.lessonRegistryChapter2;
    }
    if (chapter === 3) {
      const module = await import('../lessons/registry/chapter-3.ts');
      return module.lessonRegistryChapter3;
    }
    return [];
  })();

  lessonsByChapterPromise.set(chapter, created);
  return created;
}

export function loadQuizRegistry(): Promise<QuizConfig[]> {
  if (!quizRegistryPromise) {
    quizRegistryPromise = Promise.all([
      loadQuizzesForChapter(1),
      loadQuizzesForChapter(2),
      loadQuizzesForChapter(3),
    ]).then(chapters => chapters.flat());
  }
  return quizRegistryPromise;
}

export function loadQuizzesForChapter(chapter: number): Promise<QuizConfig[]> {
  const existing = quizzesByChapterPromise.get(chapter);
  if (existing) return existing;

  const created = (async () => {
    if (chapter === 1) {
      const module = await import('../quizzes/registry/chapter-1.ts');
      return module.quizRegistryChapter1;
    }
    if (chapter === 2) {
      const module = await import('../quizzes/registry/chapter-2.ts');
      return module.quizRegistryChapter2;
    }
    if (chapter === 3) {
      const module = await import('../quizzes/registry/chapter-3.ts');
      return module.quizRegistryChapter3;
    }
    return [];
  })();

  quizzesByChapterPromise.set(chapter, created);
  return created;
}
