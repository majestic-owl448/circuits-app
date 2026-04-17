import type { CircuitComponent, ComponentResult } from '../../types/circuit.ts';
import styles from './ComponentRenderer.module.css';

interface Props {
  component: CircuitComponent;
  result?: ComponentResult;
  rotation?: number;
  isHighlighted: boolean;
  isFocused: boolean;
  isCircuitComplete: boolean;
  isDeletable?: boolean;
  isMeterTarget?: boolean;
  showValues?: boolean;
  onClick: () => void;
  onInspect?: () => void;
  onFocus: () => void;
  onRename?: (componentId: string, newName: string) => void;
}

export function ComponentRenderer({
  component,
  result,
  rotation = 0,
  isHighlighted,
  isFocused,
  isCircuitComplete,
  isDeletable = false,
  isMeterTarget = false,
  showValues = true,
  onClick,
  onInspect,
  onFocus,
  onRename,
}: Props) {
  const { position, type, name, properties } = component;

  const isInteractive = type === 'switch';
  const bulbBrightness = type === 'bulb' && isCircuitComplete && result && !properties.isFailed
    ? Math.min(1, result.power / 1.8)
    : 0;
  const isFailed = properties.isFailed ?? false;

  // Warning state: 90% of operating limit
  let isOverLimit = false;
  if (result && properties.operatingLimit && !isFailed) {
    const metric = result[properties.operatingLimit.type];
    if (metric > properties.operatingLimit.max * 0.9) {
      isOverLimit = true;
    }
  }

  return (
    <g
      className={`${styles.component} ${isHighlighted ? styles.highlighted : ''} ${isFocused ? styles.focused : ''} ${isDeletable ? styles.deletable : ''} ${isMeterTarget ? styles.meterTarget : ''} ${isOverLimit ? styles.overLimit : ''}`}
      transform={`translate(${position.x}, ${position.y}) rotate(${rotation})`}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      onContextMenu={(e) => {
        if (onInspect) {
          e.preventDefault();
          onInspect();
        }
      }}
      onDoubleClick={() => {
        if (onRename) {
          const newName = window.prompt('Rename component:', name);
          if (newName !== null && newName.trim() !== '') {
            onRename(component.id, newName.trim());
          }
        }
      }}
      onFocus={onFocus}
      tabIndex={0}
      role={isInteractive ? 'button' : 'img'}
      aria-label={getAriaLabel(component, isCircuitComplete, result)}
      style={{ cursor: isDeletable ? 'pointer' : isInteractive ? 'pointer' : 'default' }}
    >
      {/* Highlight ring */}
      {isHighlighted && (
        <circle r="40" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeDasharray="4 2" opacity="0.6" />
      )}

      {/* Component body */}
      {type === 'battery' && <BatterySVG rotation={rotation} />}
      {type === 'bulb' && <BulbSVG brightness={bulbBrightness} />}
      {type === 'switch' && <SwitchSVG isClosed={properties.isClosed ?? false} />}
      {type === 'resistor' && <ResistorSVG />}

      {/* Label — counter-rotate to stay upright */}
      <text
        y={45}
        textAnchor="middle"
        className={styles.label}
        fontSize="11"
        fill="var(--color-text-secondary)"
        transform={`rotate(${-rotation})`}
      >
        {name}
      </text>

      {/* Numeric value display */}
      {showValues && type === 'battery' && properties.voltage !== undefined && (
        <text
          y={58}
          textAnchor="middle"
          fontSize="10"
          fontFamily="var(--font-mono)"
          fill="var(--color-emphasis)"
          transform={`rotate(${-rotation})`}
        >
          {properties.voltage}V
        </text>
      )}
      {showValues && (type === 'bulb' || type === 'resistor') && properties.resistance !== undefined && (
        <text
          y={58}
          textAnchor="middle"
          fontSize="10"
          fontFamily="var(--font-mono)"
          fill="var(--color-emphasis)"
          transform={`rotate(${-rotation})`}
        >
          {properties.resistance}Ω
        </text>
      )}
      {isOverLimit && !isFailed && (
        <text
          y={-30}
          textAnchor="middle"
          fontSize="10"
          fontWeight="bold"
          fill="var(--color-warning)"
          transform={`rotate(${-rotation})`}
        >
          WARNING
        </text>
      )}
      {isFailed && (
        <g>
          <line x1="-22" y1="-22" x2="22" y2="22" stroke="var(--color-error)" strokeWidth="2" />
          <line x1="22" y1="-22" x2="-22" y2="22" stroke="var(--color-error)" strokeWidth="2" />
          <text
            y={-30}
            textAnchor="middle"
            fontSize="10"
            fill="var(--color-error)"
            transform={`rotate(${-rotation})`}
          >
            FAILED
          </text>
        </g>
      )}
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

function BatterySVG({ rotation }: { rotation: number }) {
  return (
    <g>
      <line x1="-8" y1="-20" x2="-8" y2="20" stroke="var(--color-text)" strokeWidth="3" />
      <line x1="8" y1="-12" x2="8" y2="12" stroke="var(--color-text)" strokeWidth="1.5" />
      <text x="-8" y="-32" fontSize="12" textAnchor="middle" dominantBaseline="middle" fill="var(--color-text-secondary)" transform={`rotate(${-rotation}, -8, -32)`}>+</text>
      <text x="8" y="-32" fontSize="14" textAnchor="middle" dominantBaseline="middle" fontWeight="bold" fill="var(--color-text-secondary)" transform={`rotate(${-rotation}, 8, -32)`}>−</text>
    </g>
  );
}

function BulbSVG({ brightness }: { brightness: number }) {
  const glowColor = `rgba(255, 220, 50, ${brightness})`;
  const fillColor = brightness > 0 ? glowColor : 'var(--color-surface)';

  return (
    <g>
      {brightness > 0 && (
        <>
          <circle r="40" fill={`rgba(255, 220, 50, ${brightness * 0.15})`} />
          <circle r="30" fill={`rgba(255, 220, 50, ${brightness * 0.35})`} />
        </>
      )}
      <circle
        r="18"
        fill={fillColor}
        stroke={brightness > 0 ? 'rgba(200, 170, 0, 0.8)' : 'var(--color-text)'}
        strokeWidth="1.5"
      />
      <line x1="-8" y1="-8" x2="8" y2="8" stroke={brightness > 0 ? 'rgba(180, 150, 0, 0.6)' : 'var(--color-text)'} strokeWidth="1" />
      <line x1="8" y1="-8" x2="-8" y2="8" stroke={brightness > 0 ? 'rgba(180, 150, 0, 0.6)' : 'var(--color-text)'} strokeWidth="1" />
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
