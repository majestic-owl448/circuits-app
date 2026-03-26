import type { FormulaRef } from '../../types/lesson.ts';
import styles from './FormulaPanel.module.css';

interface Props {
  formulas: FormulaRef[];
  onClose: () => void;
}

export function FormulaPanel({ formulas, onClose }: Props) {
  return (
    <div className={styles.overlay}>
      <div className={styles.panel}>
        <div className={styles.header}>
          <h3 className={styles.title}>Formulas</h3>
          <button className={styles.closeButton} onClick={onClose} aria-label="Close formula panel">
            X
          </button>
        </div>
        <div className={styles.cards}>
          {formulas.map((f, i) => (
            <div key={i} className={styles.card}>
              <p className={styles.formula}>{f.formula}</p>
              <ul className={styles.symbols}>
                {f.symbols.map(s => (
                  <li key={s.symbol} className={styles.symbolItem}>
                    <span className={styles.symbolLetter}>{s.symbol}</span>
                    <span className={styles.symbolDesc}>
                      {s.name}
                      {s.unit && <span className={styles.symbolUnit}> ({s.unit})</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
