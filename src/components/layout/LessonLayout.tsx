import type { ReactNode } from 'react';
import styles from './LessonLayout.module.css';

interface Props {
  leftPanel: ReactNode;
  workspace: ReactNode;
  rightPanel?: ReactNode;
  showRightPanel: boolean;
}

export function LessonLayout({ leftPanel, workspace, rightPanel, showRightPanel }: Props) {
  return (
    <div className={`${styles.layout} ${showRightPanel ? styles.threePanel : ''}`}>
      <aside className={styles.left} aria-label="Lesson instructions">
        {leftPanel}
      </aside>
      <section className={styles.center}>
        {workspace}
      </section>
      {showRightPanel && rightPanel && (
        <aside className={styles.right} aria-label="Theory reference">
          {rightPanel}
        </aside>
      )}
    </div>
  );
}
