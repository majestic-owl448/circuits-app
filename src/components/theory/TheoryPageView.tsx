import { useAppState, useAppDispatch } from '../../state/app-hooks.ts';
import { getTheoryEntries, getTopicsInOrder } from '../../theory/theory-registry.ts';
import styles from './TheoryPageView.module.css';

export function TheoryPageView() {
  const { theoryEntriesSeen } = useAppState();
  const dispatch = useAppDispatch();

  const entries = getTheoryEntries(theoryEntriesSeen);
  const topics = getTopicsInOrder(entries);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Theory Reference</h1>
        <p className={styles.subtitle}>
          Concepts you have encountered so far, organized by topic.
        </p>
        <button
          className={styles.backButton}
          onClick={() => dispatch({ type: 'NAVIGATE', view: 'home' })}
        >
          Back to Home
        </button>
      </header>

      {entries.length === 0 && (
        <p className={styles.empty}>
          No theory entries unlocked yet. Complete lessons to add entries here.
        </p>
      )}

      {topics.map(topic => {
        const topicEntries = entries.filter(e => e.topic === topic);
        return (
          <section key={topic} className={styles.topicSection}>
            <h2 className={styles.topicTitle}>{topic}</h2>
            <div className={styles.entries}>
              {topicEntries.map(entry => (
                <article key={entry.id} className={styles.entry}>
                  <h3 className={styles.entryTitle}>{entry.title}</h3>
                  <p className={styles.entryContent}>{entry.content}</p>
                  <span className={styles.entrySource}>
                    from {entry.sourceLesson.replace('lesson-', 'Lesson ')}
                  </span>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
