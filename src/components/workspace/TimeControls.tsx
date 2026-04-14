import styles from './TimeControls.module.css';

interface Props {
  sliderValue: number;
  isPlaying: boolean;
  speed: 'normal' | 'slow';
  onSliderChange: (value: number) => void;
  onTogglePlay: () => void;
  onToggleSpeed: () => void;
  onReset: () => void;
}

export function TimeControls({
  sliderValue,
  isPlaying,
  speed,
  onSliderChange,
  onTogglePlay,
  onToggleSpeed,
  onReset,
}: Props) {
  return (
    <div className={styles.controls}>
      <input
        className={styles.slider}
        type="range"
        min={0}
        max={100}
        value={sliderValue}
        onChange={(event) => onSliderChange(Number(event.target.value))}
        aria-label="Time scrubber"
      />
      <div className={styles.buttons}>
        <button className={styles.button} onClick={onTogglePlay}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button className={styles.button} onClick={onToggleSpeed}>
          Speed: {speed}
        </button>
        <button className={styles.button} onClick={onReset}>Reset</button>
      </div>
    </div>
  );
}
