import type { CircuitNode } from '../../types/circuit.ts';
import styles from './NodeRenderer.module.css';

interface Props {
  node: CircuitNode;
  isSelected: boolean;
  onClick: () => void;
}

export function NodeRenderer({ node, isSelected, onClick }: Props) {
  return (
    <g
      className={styles.node}
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-label={`Connection point ${node.id}${isSelected ? ' (selected)' : ''}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <circle
        cx={node.position.x}
        cy={node.position.y}
        r={isSelected ? 10 : 7}
        fill={isSelected ? 'var(--color-primary)' : 'var(--color-border)'}
        stroke={isSelected ? 'var(--color-primary-hover)' : 'var(--color-text-secondary)'}
        strokeWidth="2"
        className={styles.circle}
      />
    </g>
  );
}
