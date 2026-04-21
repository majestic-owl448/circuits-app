import type { ComponentType } from '../../types/circuit.ts';
import styles from './DragPalette.module.css';

const COMPONENT_LABELS: Record<ComponentType, string> = {
  battery: 'Battery',
  bulb: 'Bulb',
  switch: 'Switch',
  resistor: 'Resistor',
  wire: 'Wire',
  capacitor: 'Capacitor',
  inductor: 'Inductor',
  'ac-source': 'AC Source',
  'dc-ac-converter': 'DC-to-AC Converter',
  'ac-dc-converter': 'AC-to-DC Converter',
  diode: 'Diode',
  transistor: 'Transistor',
};

interface Props {
  availableTypes: ComponentType[];
  selectedType: ComponentType | null;
  onSelect: (type: ComponentType | null) => void;
  deletionMode?: boolean;
  onToggleDelete?: () => void;
  showDelete?: boolean;
  showMeters?: boolean;
  selectedMeter?: 'voltmeter' | 'ammeter' | 'ohmmeter' | null;
  onSelectMeter?: (meter: 'voltmeter' | 'ammeter' | 'ohmmeter') => void;
}

export function DragPalette({
  availableTypes,
  selectedType,
  onSelect,
  deletionMode = false,
  onToggleDelete,
  showDelete = false,
  showMeters = false,
  selectedMeter = null,
  onSelectMeter,
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
      {showMeters && onSelectMeter && (
        <>
          <button
            className={`${styles.meterButton} ${selectedMeter === 'voltmeter' ? styles.itemSelected : ''}`}
            onClick={() => onSelectMeter('voltmeter')}
            aria-pressed={selectedMeter === 'voltmeter'}
          >
            Voltmeter
          </button>
          <button
            className={`${styles.meterButton} ${selectedMeter === 'ammeter' ? styles.itemSelected : ''}`}
            onClick={() => onSelectMeter('ammeter')}
            aria-pressed={selectedMeter === 'ammeter'}
          >
            Ammeter
          </button>
          <button
            className={`${styles.meterButton} ${selectedMeter === 'ohmmeter' ? styles.itemSelected : ''}`}
            onClick={() => onSelectMeter('ohmmeter')}
            aria-pressed={selectedMeter === 'ohmmeter'}
          >
            Ohmmeter
          </button>
        </>
      )}
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
