import { useAppState, useAppDispatch } from '../../state/app-context.tsx';
import styles from './TopNav.module.css';

export function TopNav() {
  const { view, theoryEntriesSeen } = useAppState();
  const dispatch = useAppDispatch();

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <button
        className={styles.brand}
        onClick={() => dispatch({ type: 'NAVIGATE', view: 'home' })}
      >
        Circuit Lab
      </button>
      <div className={styles.links}>
        <button
          className={`${styles.link} ${view === 'home' ? styles.active : ''}`}
          onClick={() => dispatch({ type: 'NAVIGATE', view: 'home' })}
        >
          Lessons
        </button>
        {theoryEntriesSeen.length > 0 && (
          <button
            className={`${styles.link} ${view === 'theory' ? styles.active : ''}`}
            onClick={() => dispatch({ type: 'NAVIGATE_THEORY' })}
          >
            Theory
          </button>
        )}
        <button
          className={`${styles.link} ${view === 'sandbox' ? styles.active : ''}`}
          onClick={() => dispatch({ type: 'NAVIGATE', view: 'sandbox' })}
        >
          Sandbox
        </button>
      </div>
    </nav>
  );
}
