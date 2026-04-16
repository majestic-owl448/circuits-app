import type { CircuitComponent, ComponentProperties } from '../../types/circuit.ts';
import styles from './PropertyInspector.module.css';

interface Props {
  component: CircuitComponent;
  onUpdate: (id: string, properties: Partial<ComponentProperties>) => void;
  onClose: () => void;
}

export function PropertyInspector({ component, onUpdate, onClose }: Props) {
  const { id, type, name, properties } = component;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type: inputType } = e.target;
    let parsedValue: string | number | boolean = value;
    
    if (inputType === 'number') {
      parsedValue = parseFloat(value);
      if (isNaN(parsedValue)) return;
    } else if (inputType === 'checkbox') {
      parsedValue = e.target.checked;
    }

    onUpdate(id, { [name]: parsedValue });
  };

  return (
    <div className={styles.inspector} role="dialog" aria-label="Component properties">
      <div className={styles.header}>
        <h3 className={styles.title}>{name} Properties</h3>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close">×</button>
      </div>
      
      <div className={styles.content}>
        {type === 'battery' && (
          <div className={styles.field}>
            <label htmlFor="voltage">Voltage (V)</label>
            <input
              id="voltage"
              type="number"
              name="voltage"
              value={properties.voltage ?? 0}
              onChange={handleChange}
              step="0.1"
            />
          </div>
        )}

        {(type === 'resistor' || type === 'bulb') && (
          <div className={styles.field}>
            <label htmlFor="resistance">Resistance (Ω)</label>
            <input
              id="resistance"
              type="number"
              name="resistance"
              value={properties.resistance ?? 0}
              onChange={handleChange}
              step="1"
            />
          </div>
        )}

        {/* Non-ideal properties (Chapter 5) */}
        {type === 'battery' && properties.internalResistance !== undefined && (
          <div className={styles.field}>
            <label htmlFor="internalResistance">Internal Resistance (Ω)</label>
            <input
              id="internalResistance"
              type="number"
              name="internalResistance"
              value={properties.internalResistance ?? 0}
              onChange={handleChange}
              step="0.1"
            />
          </div>
        )}

        {type === 'wire' && properties.wireResistance !== undefined && (
          <div className={styles.field}>
            <label htmlFor="wireResistance">Wire Resistance (Ω)</label>
            <input
              id="wireResistance"
              type="number"
              name="wireResistance"
              value={properties.wireResistance ?? 0}
              onChange={handleChange}
              step="0.01"
            />
          </div>
        )}

        {properties.tolerance !== undefined && (
          <div className={styles.field}>
            <label htmlFor="tolerance">Tolerance (±%)</label>
            <input
              id="tolerance"
              type="number"
              name="tolerance"
              value={(properties.tolerance ?? 0) * 100}
              onChange={(e) => {
                const val = parseFloat(e.target.value) / 100;
                if (!isNaN(val)) onUpdate(id, { tolerance: val });
              }}
              step="1"
            />
          </div>
        )}
      </div>
    </div>
  );
}
