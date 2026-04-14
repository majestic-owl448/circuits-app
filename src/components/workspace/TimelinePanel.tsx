import styles from './TimelinePanel.module.css';

interface Props {
  sliderValue: number;
}

export function TimelinePanel({ sliderValue }: Props) {
  return (
    <div className={styles.panel} aria-label="Timeline panel">
      <div className={styles.legend}>
        <span className={styles.lineSolid}>Voltage</span>
        <span className={styles.lineDashed}>Current</span>
      </div>
      <div className={styles.plot}>
        <div className={styles.marker} style={{ left: `${sliderValue}%` }} aria-hidden="true" />
      </div>
      <div className={styles.labels}>
        <span>t0</span>
        <span>t_mid</span>
        <span>t_final</span>
      </div>
    </div>
  );
}
