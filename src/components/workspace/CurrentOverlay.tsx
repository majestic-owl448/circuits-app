import { useId } from 'react';
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
  reducedMotion?: boolean;
}

export function CurrentOverlay({ segments, current, reducedMotion = false }: Props) {
  const markerId = useId().replace(/:/g, '');

  if (current <= 0) return null;

  const speed = Math.min(8, 2 + current * 2);
  const strokeWidth = Math.min(3.5, 1.5 + current * 0.5);

  if (reducedMotion) {
    return (
      <g className={`${styles.overlay} ${styles.staticOverlay}`} aria-hidden="true">
        <defs>
          <marker
            id={markerId}
            markerWidth="8"
            markerHeight="8"
            refX="7"
            refY="4"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L8,4 L0,8 Z" className={styles.staticArrowHead} />
          </marker>
        </defs>
        {segments.map((seg, i) => (
          <line
            key={`current-static-${seg.id}-${i}`}
            x1={seg.from.x}
            y1={seg.from.y}
            x2={seg.to.x}
            y2={seg.to.y}
            className={styles.staticArrow}
            strokeWidth={strokeWidth}
            markerEnd={`url(#${markerId})`}
          />
        ))}
      </g>
    );
  }

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
