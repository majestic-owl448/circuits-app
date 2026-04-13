import { useAppState, useAppDispatch } from '../../state/app-hooks.ts';
import { lessonRegistry } from '../../lessons/lesson-registry.ts';
import { unitRegistry } from '../../lessons/units.ts';
import { quizRegistry } from '../../quizzes/quiz-registry.ts';
import styles from './HomePage.module.css';

export function HomePage() {
  const state = useAppState();
  const { completedLessons, theoryEntriesSeen, completedQuizzes, quizBestScores } = state;
  const dispatch = useAppDispatch();

  function isLessonAvailable(lessonId: string): boolean {
    const lesson = lessonRegistry.find(l => l.id === lessonId);
    if (!lesson) return false;
    if (lesson.prerequisites.length === 0) return true;
    return lesson.prerequisites.every(prereq => completedLessons.includes(prereq));
  }

  // Collect all unlocked quiz IDs from completed lessons
  const unlockedQuizIds = new Set<string>();
  for (const lesson of lessonRegistry) {
    if (completedLessons.includes(lesson.id)) {
      for (const qId of lesson.quizzesUnlocked) {
        unlockedQuizIds.add(qId);
      }
    }
  }

  const availableQuizzes = quizRegistry.filter(q => unlockedQuizIds.has(q.id));

  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <h1>Circuit Lab</h1>
        <p className={styles.subtitle}>
          Learn electrical circuits by building, testing, and experimenting.
        </p>
      </header>

      {unitRegistry.map(unit => {
        const unitLessons = unit.lessons
          .map(lid => lessonRegistry.find(l => l.id === lid))
          .filter(Boolean) as typeof lessonRegistry;

        return (
          <section key={unit.id} className={styles.unit}>
            <div className={styles.unitHeader}>
              <h2 className={styles.unitTitle}>{unit.title}</h2>
              <span className={styles.unitStage}>{unit.stageLabel}</span>
            </div>
            <p className={styles.unitDesc}>{unit.description}</p>
            <ol className={styles.lessonList}>
              {unitLessons.map(lesson => {
                const available = isLessonAvailable(lesson.id);
                const completed = completedLessons.includes(lesson.id);
                const globalIndex = lessonRegistry.indexOf(lesson);
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
          <p>Test your understanding of circuit concepts.</p>
          <ul className={styles.quizList}>
            {availableQuizzes.map(quiz => {
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
    </div>
  );
}
