import type { TheoryItem } from '../../types/lesson.ts';
import styles from './TheoryPanel.module.css';

interface Props {
  items: TheoryItem[];
  onClose: () => void;
}

export function TheoryPanel({ items, onClose }: Props) {
  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <h3>Theory</h3>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close theory panel"
        >
          &times;
        </button>
      </div>
      <div className={styles.content}>
        {items.map((item, i) => (
          <div key={i} className={styles.item}>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
            {item.formula && (
              <code className={styles.formula}>{item.formula}</code>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
