import type { ComponentType } from '../../types/circuit.ts';
import styles from './DragPalette.module.css';

const COMPONENT_LABELS: Record<ComponentType, string> = {
  battery: 'Battery',
  bulb: 'Bulb',
  switch: 'Switch',
  resistor: 'Resistor',
  wire: 'Wire',
};

interface Props {
  availableTypes: ComponentType[];
  selectedType: ComponentType | null;
  onSelect: (type: ComponentType | null) => void;
  deletionMode?: boolean;
  onToggleDelete?: () => void;
  showDelete?: boolean;
}

export function DragPalette({
  availableTypes,
  selectedType,
  onSelect,
  deletionMode = false,
  onToggleDelete,
  showDelete = false,
}: Props) {
  return (
    <div className={styles.palette}>
      <span className={styles.paletteLabel}>Place:</span>
      {availableTypes.map(type => (
        <button
          key={type}
          className={`${styles.item} ${selectedType === type ? styles.itemSelected : ''}`}
          onClick={() => onSelect(selectedType === type ? null : type)}
          aria-pressed={selectedType === type}
        >
          {COMPONENT_LABELS[type]}
        </button>
      ))}
      {showDelete && onToggleDelete && (
        <button
          className={`${styles.deleteToggle} ${deletionMode ? styles.deleteActive : ''}`}
          onClick={onToggleDelete}
          aria-pressed={deletionMode}
        >
          Delete
        </button>
      )}
    </div>
  );
}
