import { useAppState, useAppDispatch } from '../../state/app-context.tsx';
import { lessonRegistry } from '../../lessons/lesson-registry.ts';
import styles from './HomePage.module.css';

export function HomePage() {
  const { completedLessons } = useAppState();
  const dispatch = useAppDispatch();

  function isLessonAvailable(index: number): boolean {
    if (index === 0) return true;
    return completedLessons.includes(lessonRegistry[index - 1].id);
  }

  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <h1>Circuit Lab</h1>
        <p className={styles.subtitle}>
          Learn electrical circuits by building, testing, and experimenting.
        </p>
      </header>

      <section className={styles.lessons}>
        <h2>Lessons</h2>
        <ol className={styles.lessonList}>
          {lessonRegistry.map((lesson, i) => {
            const available = isLessonAvailable(i);
            const completed = completedLessons.includes(lesson.id);
            return (
              <li key={lesson.id} className={styles.lessonItem}>
                <button
                  className={`${styles.lessonButton} ${completed ? styles.completed : ''} ${!available ? styles.locked : ''}`}
                  disabled={!available}
                  onClick={() => dispatch({ type: 'START_LESSON', lessonId: lesson.id })}
                  aria-label={`${lesson.title}${completed ? ' (completed)' : ''}${!available ? ' (locked)' : ''}`}
                >
                  <span className={styles.lessonNumber}>{i + 1}</span>
                  <span className={styles.lessonInfo}>
                    <span className={styles.lessonTitle}>{lesson.title}</span>
                    <span className={styles.lessonDesc}>{lesson.description}</span>
                  </span>
                  <span className={styles.lessonStatus}>
                    {completed && '✓'}
                    {!available && !completed && '🔒'}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </section>

      <section className={styles.sandbox}>
        <h2>Sandbox</h2>
        <p>Build freely with components you've unlocked.</p>
        <button
          className={styles.sandboxButton}
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
