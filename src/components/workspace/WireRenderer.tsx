import type { Position } from '../../types/circuit.ts';

interface Props {
  from: Position;
  to: Position;
  isActive: boolean;
}

export function WireRenderer({ from, to, isActive }: Props) {
  return (
    <line
      x1={from.x}
      y1={from.y}
      x2={to.x}
      y2={to.y}
      stroke={isActive ? 'var(--color-text)' : 'var(--color-text-secondary)'}
      strokeWidth={isActive ? 2.5 : 2}
      strokeLinecap="round"
    />
  );
}
