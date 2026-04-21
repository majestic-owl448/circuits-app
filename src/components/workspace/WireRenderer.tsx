import type { Position } from '../../types/circuit.ts';

interface Props {
  from: Position;
  to: Position;
  isActive: boolean;
  onClick?: () => void;
  isInspected?: boolean;
}

export function WireRenderer({ from, to, isActive, onClick, isInspected }: Props) {
  const stroke = isInspected
    ? 'var(--color-primary)'
    : isActive ? 'var(--color-text)' : 'var(--color-text-secondary)';

  return (
    <g style={onClick ? { cursor: 'pointer' } : undefined}>
      <line
        x1={from.x}
        y1={from.y}
        x2={to.x}
        y2={to.y}
        stroke={stroke}
        strokeWidth={isInspected ? 3 : isActive ? 2.5 : 2}
        strokeLinecap="round"
        strokeDasharray={isInspected ? '6 3' : undefined}
        pointerEvents="none"
      />
      {onClick && (
        <line
          x1={from.x}
          y1={from.y}
          x2={to.x}
          y2={to.y}
          stroke="transparent"
          strokeWidth={12}
          strokeLinecap="round"
          onClick={(e) => { e.stopPropagation(); onClick(); }}
        />
      )}
    </g>
  );
}
