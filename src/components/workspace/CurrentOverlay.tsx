import type { Position } from '../../types/circuit.ts';
import styles from './CurrentOverlay.module.css';

export interface WireSegment {
  id: string;
  from: Position;
  to: Position;
}

interface Props {
  segments: WireSegment[];
  current: number;
}

export function CurrentOverlay({ segments, current }: Props) {
  if (current <= 0) return null;

  const speed = Math.min(8, 2 + current * 2);

  return (
    <g className={styles.overlay} aria-hidden="true">
      {segments.map((seg, i) => (
        <g key={`current-${seg.id}-${i}`}>
          <circle r="4" fill="var(--color-primary)">
            <animateMotion
              dur={`${speed}s`}
              repeatCount="indefinite"
              path={`M${seg.from.x},${seg.from.y} L${seg.to.x},${seg.to.y}`}
            />
          </circle>
          <circle r="4" fill="var(--color-primary)">
            <animateMotion
              dur={`${speed}s`}
              repeatCount="indefinite"
              begin={`${speed / 2}s`}
              path={`M${seg.from.x},${seg.from.y} L${seg.to.x},${seg.to.y}`}
            />
          </circle>
        </g>
      ))}
    </g>
  );
}
