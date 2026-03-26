import type { CircuitNode, CircuitComponent } from '../../types/circuit.ts';
import styles from './CurrentOverlay.module.css';

interface Props {
  nodes: CircuitNode[];
  components: CircuitComponent[];
  current: number;
}

export function CurrentOverlay({ nodes, components, current }: Props) {
  if (current <= 0) return null;

  // Draw animated dots along each wire segment
  const wires = components.filter(c => c.type === 'wire');
  const speed = Math.min(8, 2 + current * 2);

  return (
    <g className={styles.overlay} aria-hidden="true">
      {wires.map(wire => {
        const nodeA = nodes.find(n => n.id === wire.nodeA);
        const nodeB = nodes.find(n => n.id === wire.nodeB);
        if (!nodeA || !nodeB) return null;

        return (
          <g key={`current-${wire.id}`}>
            <circle r="4" fill="var(--color-primary)">
              <animateMotion
                dur={`${speed}s`}
                repeatCount="indefinite"
                path={`M${nodeA.position.x},${nodeA.position.y} L${nodeB.position.x},${nodeB.position.y}`}
              />
            </circle>
            <circle r="4" fill="var(--color-primary)">
              <animateMotion
                dur={`${speed}s`}
                repeatCount="indefinite"
                begin={`${speed / 2}s`}
                path={`M${nodeA.position.x},${nodeA.position.y} L${nodeB.position.x},${nodeB.position.y}`}
              />
            </circle>
          </g>
        );
      })}

      {/* Dots along component connections */}
      {components.filter(c => c.type !== 'wire').map(comp => {
        const nodeA = nodes.find(n => n.id === comp.nodeA);
        const nodeB = nodes.find(n => n.id === comp.nodeB);
        if (!nodeA || !nodeB) return null;

        return (
          <circle key={`current-${comp.id}`} r="3" fill="var(--color-primary)" opacity="0.6">
            <animateMotion
              dur={`${speed}s`}
              repeatCount="indefinite"
              path={`M${nodeA.position.x},${nodeA.position.y} L${nodeB.position.x},${nodeB.position.y}`}
            />
          </circle>
        );
      })}
    </g>
  );
}
