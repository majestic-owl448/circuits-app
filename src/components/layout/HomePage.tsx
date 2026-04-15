import { useEffect, useMemo, useState } from 'react';
import { useAppState, useAppDispatch } from '../../state/app-hooks.ts';
import { unitRegistry } from '../../lessons/units.ts';
import { loadLessonRegistry, loadQuizRegistry } from '../../data/loaders.ts';
import type { LessonConfig } from '../../types/lesson.ts';
import type { QuizConfig } from '../../types/quiz.ts';
import styles from './HomePage.module.css';

// Chapter 1 uses legacy lesson-N-N IDs; all other chapters use lesson-chN-U-L.
function chapterFromLessonId(lessonId: string): number {
  const match = lessonId.match(/^lesson-ch(\d+)-/);
  return match ? Number(match[1]) : 1;
}

function chapterLabel(chapter: number): string {
  return `Chapter ${chapter}`;
}

export function HomePage() {
  const state = useAppState();
  const { completedLessons, theoryEntriesSeen, completedQuizzes, quizBestScores } = state;
  const dispatch = useAppDispatch();
  const [selectedChapter, setSelectedChapter] = useState<number | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [collapsedChapters, setCollapsedChapters] = useState<Record<number, boolean>>({});
  const [lessonRegistry, setLessonRegistry] = useState<LessonConfig[] | null>(null);
  const [quizRegistry, setQuizRegistry] = useState<QuizConfig[] | null>(null);
  const resolvedLessonRegistry = useMemo(() => lessonRegistry ?? [], [lessonRegistry]);
  const resolvedQuizRegistry = useMemo(() => quizRegistry ?? [], [quizRegistry]);

  const normalizedSearch = searchTerm.trim().toLowerCase();

  useEffect(() => {
    let mounted = true;
    loadLessonRegistry().then(lessons => {
      if (mounted) setLessonRegistry(lessons);
    });
    loadQuizRegistry().then(quizzes => {
      if (mounted) setQuizRegistry(quizzes);
    });
    return () => {
      mounted = false;
    };
  }, []);

  function isLessonAvailable(lessonId: string): boolean {
    const lesson = resolvedLessonRegistry.find(l => l.id === lessonId);
    if (!lesson) return false;
    if (lesson.prerequisites.length === 0) return true;
    return lesson.prerequisites.every(prereq => completedLessons.includes(prereq));
  }

  const chapterOrder = useMemo(() => {
    const order = new Set<number>();
    for (const lesson of resolvedLessonRegistry) {
      order.add(chapterFromLessonId(lesson.id));
    }
    return [...order].sort((a, b) => a - b);
  }, [resolvedLessonRegistry]);

  const chapterUnits = useMemo(() => {
    const groups = new Map<number, typeof unitRegistry>();
    for (const unit of unitRegistry) {
      const firstLessonId = unit.lessons[0];
      if (!firstLessonId) continue;
      const chapter = chapterFromLessonId(firstLessonId);
      const existing = groups.get(chapter) ?? [];
      existing.push(unit);
      groups.set(chapter, existing);
    }
    return groups;
  }, []);

  // Collect all unlocked quiz IDs from completed lessons.
  const unlockedQuizIds = new Set<string>();
  for (const lesson of resolvedLessonRegistry) {
    if (completedLessons.includes(lesson.id)) {
      for (const qId of lesson.quizzesUnlocked) {
        unlockedQuizIds.add(qId);
      }
    }
  }

  const availableQuizzes = resolvedQuizRegistry.filter(q => unlockedQuizIds.has(q.id));

  const groupedQuizzes = useMemo(() => {
    const grouped = new Map<number, typeof availableQuizzes>();
    for (const quiz of availableQuizzes) {
      const chapter = chapterFromLessonId(quiz.unlockedBy);
      if (selectedChapter !== 'all' && chapter !== selectedChapter) {
        continue;
      }
      if (normalizedSearch) {
        const searchable = `${quiz.title} ${quiz.id}`.toLowerCase();
        if (!searchable.includes(normalizedSearch)) {
          continue;
        }
      }

      const existing = grouped.get(chapter) ?? [];
      existing.push(quiz);
      grouped.set(chapter, existing);
    }
    return grouped;
  }, [availableQuizzes, normalizedSearch, selectedChapter]);

  const toggleChapter = (chapter: number) => {
    setCollapsedChapters(prev => ({ ...prev, [chapter]: !prev[chapter] }));
  };

  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <h1>Circuit Lab</h1>
        <p className={styles.subtitle}>
          Learn electrical circuits by building, testing, and experimenting.
        </p>

        <div className={styles.filters}>
          <label className={styles.filterLabel}>
            Chapter
            <select
              className={styles.filterSelect}
              value={selectedChapter}
              onChange={(e) => {
                const value = e.target.value;
                setSelectedChapter(value === 'all' ? 'all' : Number(value));
              }}
            >
              <option value="all">All chapters</option>
              {chapterOrder.map(chapter => (
                <option key={chapter} value={chapter}>{chapterLabel(chapter)}</option>
              ))}
            </select>
          </label>
          <label className={styles.filterLabel}>
            Search
            <input
              type="search"
              className={styles.filterInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Lesson or quiz topic"
            />
          </label>
        </div>
      </header>

      {chapterOrder
        .filter(chapter => selectedChapter === 'all' || chapter === selectedChapter)
        .map(chapter => {
          const units = chapterUnits.get(chapter) ?? [];
          const isCollapsed = collapsedChapters[chapter] ?? false;

          const unitsWithLessons = units.map(unit => {
            const unitLessons = unit.lessons
              .map(lid => resolvedLessonRegistry.find(l => l.id === lid))
              .filter(Boolean)
              .filter(lesson => {
                if (!normalizedSearch) return true;
                const searchable = `${lesson!.title} ${lesson!.description} ${lesson!.id}`.toLowerCase();
                return searchable.includes(normalizedSearch);
              }) as LessonConfig[];
            return { unit, unitLessons };
          }).filter(entry => entry.unitLessons.length > 0 || !normalizedSearch);

          if (unitsWithLessons.length === 0) {
            return null;
          }

          return (
            <section key={`chapter-${chapter}`} className={styles.chapter}>
              <button
                className={styles.chapterHeader}
                onClick={() => toggleChapter(chapter)}
                aria-expanded={!isCollapsed}
              >
                <h2 className={styles.chapterTitle}>{chapterLabel(chapter)}</h2>
                <span className={styles.chapterToggle}>{isCollapsed ? 'Show' : 'Hide'}</span>
              </button>

              {!isCollapsed && unitsWithLessons.map(({ unit, unitLessons }) => (
                <div key={unit.id} className={styles.unit}>
                  <div className={styles.unitHeader}>
                    <h3 className={styles.unitTitle}>{unit.title}</h3>
                    <span className={styles.unitStage}>{unit.stageLabel}</span>
                  </div>
                  <p className={styles.unitDesc}>{unit.description}</p>
                  <ol className={styles.lessonList}>
                    {unitLessons.map(lesson => {
                      const available = isLessonAvailable(lesson.id);
                      const completed = completedLessons.includes(lesson.id);
                      const globalIndex = resolvedLessonRegistry.indexOf(lesson);
                      return (
                        <li key={lesson.id} className={styles.lessonItem}>
                          <button
                            className={`${styles.lessonButton} ${completed ? styles.completed : ''} ${!available ? styles.locked : ''}`}
                            disabled={!available}
                            onClick={() => dispatch({ type: 'START_LESSON', lessonId: lesson.id })}
                            aria-label={`${lesson.title}${completed ? ' (completed)' : ''}${!available ? ' (locked)' : ''}`}
                          >
                            <span className={styles.lessonNumber}>{globalIndex + 1}</span>
                            <span className={styles.lessonInfo}>
                              <span className={styles.lessonTitle}>{lesson.title}</span>
                              <span className={styles.lessonDesc}>{lesson.description}</span>
                            </span>
                            <span className={styles.lessonStatus}>
                              {completed && '\u2713'}
                              {!available && !completed && '\uD83D\uDD12'}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              ))}
            </section>
          );
        })}

      {theoryEntriesSeen.length > 0 && (
        <section className={styles.theorySection}>
          <h2>Theory Reference</h2>
          <p>Review concepts you have learned across all lessons.</p>
          <button
            className={styles.ctaButton}
            onClick={() => dispatch({ type: 'NAVIGATE_THEORY' })}
          >
            Open Theory
          </button>
        </section>
      )}

      {availableQuizzes.length > 0 && (
        <section className={styles.quizSection}>
          <h2>Quizzes</h2>
          <p>Test your understanding with chapter-grouped quizzes.</p>
          {chapterOrder
            .filter(chapter => groupedQuizzes.has(chapter))
            .map(chapter => {
              const quizzes = groupedQuizzes.get(chapter) ?? [];
              return (
                <div key={`quiz-chapter-${chapter}`} className={styles.quizChapter}>
                  <h3 className={styles.quizChapterTitle}>{chapterLabel(chapter)}</h3>
                  <ul className={styles.quizList}>
                    {quizzes.map(quiz => {
                      const isCompleted = completedQuizzes.includes(quiz.id);
                      const bestScore = quizBestScores[quiz.id];
                      return (
                        <li key={quiz.id} className={styles.quizItem}>
                          <button
                            className={`${styles.quizButton} ${isCompleted ? styles.quizCompleted : ''}`}
                            onClick={() => dispatch({ type: 'START_QUIZ', quizId: quiz.id })}
                          >
                            <span className={styles.quizInfo}>
                              <span className={styles.quizTitle}>{quiz.title}</span>
                              <span className={styles.quizMeta}>
                                {quiz.questions.length} questions
                                {isCompleted && bestScore != null && ` \u00B7 Best: ${bestScore}%`}
                              </span>
                            </span>
                            <span className={styles.quizStatus}>
                              {isCompleted ? '\u2713' : 'Start'}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
        </section>
      )}

      <section className={styles.sandbox}>
        <h2>Sandbox</h2>
        <p>Build freely with components you have unlocked.</p>
        <button
          className={styles.ctaButton}
          onClick={() => dispatch({ type: 'NAVIGATE', view: 'sandbox' })}
          disabled={completedLessons.length === 0}
        >
          {completedLessons.length === 0
            ? 'Complete Lesson 1 to unlock'
            : 'Open Sandbox'}
        </button>
      </section>

      {(!lessonRegistry || !quizRegistry) && (
        <section className={styles.loadingSection}>
          Loading lesson map...
        </section>
      )}
    </div>
  );
}
