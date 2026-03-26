import { useState, useCallback } from 'react';
import { useAppState } from '../../state/app-context.tsx';
import { useCircuit } from '../../hooks/useCircuit.ts';
import { CircuitWorkspace } from '../workspace/CircuitWorkspace.tsx';
import { describeCircuit } from '../../engine/description.ts';
import type { CircuitComponent, CircuitNode } from '../../types/circuit.ts';
import styles from './SandboxView.module.css';

const COMPONENT_DEFAULTS: Record<string, Omit<CircuitComponent, 'id' | 'name' | 'nodeA' | 'nodeB' | 'position'>> = {
  battery: { type: 'battery', properties: { voltage: 9 }, rotation: 0 },
  bulb: { type: 'bulb', properties: { resistance: 45 }, rotation: 0 },
  switch: { type: 'switch', properties: { isClosed: false }, rotation: 0 },
  resistor: { type: 'resistor', properties: { resistance: 100 }, rotation: 0 },
};

let nodeCounter = 0;
let compCounter = 0;

function nextNodeId() {
  return `sn-${++nodeCounter}`;
}

export function SandboxView() {
  const { unlockedComponents } = useAppState();
  const circuit = useCircuit();
  const [showOverlay, setShowOverlay] = useState(false);
  const [description, setDescription] = useState<string | null>(null);

  const handleAddComponent = useCallback((type: string) => {
    const defaults = COMPONENT_DEFAULTS[type];
    if (!defaults) return;

    const nodeAId = nextNodeId();
    const nodeBId = nextNodeId();

    // Place new component in center area with some randomness
    const baseX = 250 + (compCounter % 3) * 120;
    const baseY = 150 + Math.floor(compCounter / 3) * 120;

    const nodeA: CircuitNode = { id: nodeAId, position: { x: baseX - 50, y: baseY } };
    const nodeB: CircuitNode = { id: nodeBId, position: { x: baseX + 50, y: baseY } };

    circuit.setNodes(prev => [...prev, nodeA, nodeB]);

    const comp: CircuitComponent = {
      ...defaults,
      id: `sandbox-${type}-${++compCounter}`,
      name: `${type.charAt(0).toUpperCase() + type.slice(1)} ${compCounter}`,
      nodeA: nodeAId,
      nodeB: nodeBId,
      position: { x: baseX, y: baseY },
    };

    circuit.addComponent(comp);
  }, [circuit]);

  const handleDescribe = useCallback(() => {
    const desc = describeCircuit(circuit.components, circuit.simulation);
    setDescription(desc);
  }, [circuit.components, circuit.simulation]);

  return (
    <div className={styles.sandbox}>
      <div className={styles.toolbar}>
        <h2 className={styles.title}>Sandbox</h2>
        <div className={styles.palette}>
          {unlockedComponents.map(type => (
            <button
              key={type}
              className={styles.paletteButton}
              onClick={() => handleAddComponent(type)}
            >
              + {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
        <div className={styles.actions}>
          <button
            className={styles.actionButton}
            onClick={() => setShowOverlay(!showOverlay)}
            aria-pressed={showOverlay}
          >
            {showOverlay ? 'Hide' : 'Show'} Current
          </button>
          <button className={styles.actionButton} onClick={handleDescribe}>
            Describe Circuit
          </button>
          <button
            className={styles.actionButton}
            onClick={() => {
              circuit.reset([], []);
              nodeCounter = 0;
              compCounter = 0;
              setDescription(null);
            }}
          >
            Clear All
          </button>
        </div>
      </div>
      <div className={styles.workspaceArea}>
        <CircuitWorkspace
          circuit={circuit}
          showCurrentOverlay={showOverlay}
          interactive
          wiringMode
        />
      </div>
      {description && (
        <div className={styles.description} role="status" aria-live="polite">
          <pre>{description}</pre>
          <button
            className={styles.closeDesc}
            onClick={() => setDescription(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
