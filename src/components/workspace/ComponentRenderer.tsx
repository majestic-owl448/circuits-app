import type { CircuitComponent, ComponentResult } from '../../types/circuit.ts';
import styles from './ComponentRenderer.module.css';

interface Props {
  component: CircuitComponent;
  result?: ComponentResult;
  isHighlighted: boolean;
  isFocused: boolean;
  isCircuitComplete: boolean;
  onClick: () => void;
  onFocus: () => void;
}

export function ComponentRenderer({
  component,
  result,
  isHighlighted,
  isFocused,
  isCircuitComplete,
  onClick,
  onFocus,
}: Props) {
  const { position, type, name, properties } = component;

  const isInteractive = type === 'switch';
  const bulbBrightness = type === 'bulb' && isCircuitComplete && result
    ? Math.min(1, result.power / 1.8)
    : 0;

  return (
    <g
      className={`${styles.component} ${isHighlighted ? styles.highlighted : ''} ${isFocused ? styles.focused : ''}`}
      transform={`translate(${position.x}, ${position.y})`}
      onClick={onClick}
      onFocus={onFocus}
      tabIndex={0}
      role={isInteractive ? 'button' : 'img'}
      aria-label={getAriaLabel(component, isCircuitComplete, result)}
      style={{ cursor: isInteractive ? 'pointer' : 'default' }}
    >
      {/* Highlight ring */}
      {isHighlighted && (
        <circle r="40" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeDasharray="4 2" opacity="0.6" />
      )}

      {/* Component body */}
      {type === 'battery' && <BatterySVG />}
      {type === 'bulb' && <BulbSVG brightness={bulbBrightness} />}
      {type === 'switch' && <SwitchSVG isClosed={properties.isClosed ?? false} />}
      {type === 'resistor' && <ResistorSVG />}

      {/* Label */}
      <text
        y={45}
        textAnchor="middle"
        className={styles.label}
        fontSize="11"
        fill="var(--color-text-secondary)"
      >
        {name}
      </text>
    </g>
  );
}

function getAriaLabel(comp: CircuitComponent, isActive: boolean, result?: ComponentResult): string {
  let label = `${comp.name} (${comp.type})`;
  if (comp.type === 'switch') {
    label += comp.properties.isClosed ? ', closed' : ', open';
    label += '. Press Enter to toggle.';
  }
  if (comp.type === 'battery') {
    label += `, ${comp.properties.voltage ?? 0} volts`;
  }
  if ((comp.type === 'bulb' || comp.type === 'resistor') && comp.properties.resistance) {
    label += `, ${comp.properties.resistance} ohms`;
  }
  if (isActive && result) {
    label += `, ${result.voltage.toFixed(1)}V, ${result.current.toFixed(3)}A`;
  }
  return label;
}

function BatterySVG() {
  return (
    <g>
      <line x1="-8" y1="-20" x2="-8" y2="20" stroke="var(--color-text)" strokeWidth="3" />
      <line x1="8" y1="-12" x2="8" y2="12" stroke="var(--color-text)" strokeWidth="1.5" />
      <text x="-14" y="-24" fontSize="9" fill="var(--color-text-secondary)">+</text>
      <text x="4" y="-16" fontSize="9" fill="var(--color-text-secondary)">-</text>
    </g>
  );
}

function BulbSVG({ brightness }: { brightness: number }) {
  const glowColor = `rgba(255, 220, 50, ${brightness})`;
  const fillColor = brightness > 0 ? glowColor : 'var(--color-surface)';

  return (
    <g>
      {brightness > 0 && (
        <circle r="28" fill={`rgba(255, 220, 50, ${brightness * 0.3})`} />
      )}
      <circle
        r="18"
        fill={fillColor}
        stroke="var(--color-text)"
        strokeWidth="1.5"
      />
      <line x1="-8" y1="-8" x2="8" y2="8" stroke="var(--color-text)" strokeWidth="1" />
      <line x1="8" y1="-8" x2="-8" y2="8" stroke="var(--color-text)" strokeWidth="1" />
    </g>
  );
}

function SwitchSVG({ isClosed }: { isClosed: boolean }) {
  return (
    <g>
      <circle cx="-16" cy="0" r="4" fill="var(--color-text)" />
      <circle cx="16" cy="0" r="4" fill="var(--color-text)" />
      <line
        x1="-16"
        y1="0"
        x2={isClosed ? '16' : '10'}
        y2={isClosed ? '0' : '-18'}
        stroke="var(--color-text)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </g>
  );
}

function ResistorSVG() {
  return (
    <polyline
      points="-20,0 -14,-8 -6,8 2,-8 10,8 14,-8 20,0"
      fill="none"
      stroke="var(--color-text)"
      strokeWidth="1.5"
    />
  );
}
