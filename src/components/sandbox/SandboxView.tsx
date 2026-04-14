import { useState, useCallback } from 'react';
import { useAppState, useAppDispatch } from '../../state/app-hooks.ts';
import { useCircuit } from '../../hooks/useCircuit.ts';
import { CircuitWorkspace } from '../workspace/CircuitWorkspace.tsx';
import { DragPalette } from '../workspace/DragPalette.tsx';
import { SandboxDomainsPanel } from './SandboxDomainsPanel.tsx';
import { describeCircuit } from '../../engine/description.ts';
import type { CircuitComponent, CircuitNode, ComponentType, Position } from '../../types/circuit.ts';
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
  const { unlockedComponents, unlockedActions, preferences } = useAppState();
  const dispatch = useAppDispatch();
  const circuit = useCircuit();
  const [showOverlay, setShowOverlay] = useState(false);
  const [description, setDescription] = useState<string | null>(null);
  const [selectedPlacementType, setSelectedPlacementType] = useState<ComponentType | null>(null);
  const [deletionMode, setDeletionMode] = useState(false);
  const [selectedMeter, setSelectedMeter] = useState<'voltmeter' | 'ammeter' | 'ohmmeter' | null>(null);
  const showAllTools = preferences.sandboxAllToolsView;

  const canDelete = unlockedActions.includes('delete-component');
  const canPlace = unlockedActions.includes('drag-to-place');

  const handlePlace = useCallback((position: Position) => {
    if (selectedPlacementType) {
      circuit.placeComponent(selectedPlacementType, position);
    }
  }, [selectedPlacementType, circuit]);

  const handleDeleteComponent = useCallback((componentId: string) => {
    circuit.deleteComponent(componentId);
  }, [circuit]);

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

  const groupedDomains = [
    {
      id: 'basics',
      title: 'Basics',
      items: unlockedComponents.filter(type => ['battery', 'bulb', 'switch', 'resistor', 'wire'].includes(type)),
    },
    {
      id: 'measurement',
      title: 'Measurement',
      items: showAllTools ? ['voltmeter', 'ammeter', 'ohmmeter'] : [],
    },
    {
      id: 'non-ideal',
      title: 'Non-Ideal',
      items: showAllTools ? ['source resistance', 'wire resistance'] : [],
    },
    {
      id: 'time',
      title: 'Time',
      items: showAllTools ? ['timeline', 'checkpoint'] : [],
    },
    {
      id: 'ac',
      title: 'AC/Conversion',
      items: showAllTools ? ['ac source', 'rectifier'] : [],
    },
    {
      id: 'active',
      title: 'Active',
      items: showAllTools ? ['diode', 'transistor'] : [],
    },
    {
      id: 'logic',
      title: 'Logic',
      items: showAllTools ? ['input toggle', 'truth table'] : [],
    },
  ];

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
          <button
            className={styles.actionButton}
            aria-pressed={showAllTools}
            onClick={() => dispatch({ type: 'TOGGLE_SANDBOX_VIEW_MODE' })}
          >
            {showAllTools ? 'Beginner View' : 'All Tools'}
          </button>
        </div>
      </div>
      <SandboxDomainsPanel
        groups={groupedDomains}
        onSelect={(item) => {
          if (item === 'voltmeter' || item === 'ammeter' || item === 'ohmmeter') {
            setSelectedMeter(item);
            circuit.startMeasurement(item);
            circuit.measureSelected(item);
            return;
          }

          if (unlockedComponents.includes(item)) {
            handleAddComponent(item);
          }
        }}
      />
      {canPlace && (
        <div className={styles.placementArea}>
          <DragPalette
            availableTypes={unlockedComponents.filter((t): t is ComponentType => t !== 'wire')}
            selectedType={selectedPlacementType}
            onSelect={(t) => { setSelectedPlacementType(t); if (t) setDeletionMode(false); }}
            deletionMode={deletionMode}
            onToggleDelete={() => { setDeletionMode(d => !d); setSelectedPlacementType(null); }}
            showDelete={canDelete}
            showMeters={showAllTools}
            selectedMeter={selectedMeter}
            onSelectMeter={(meter) => {
              setSelectedMeter(meter);
              circuit.startMeasurement(meter);
              circuit.measureSelected(meter);
            }}
          />
        </div>
      )}
      <div className={styles.workspaceArea}>
        <CircuitWorkspace
          circuit={circuit}
          showCurrentOverlay={showOverlay}
          reducedMotion={preferences.reducedMotion}
          interactive
          wiringMode
          placementMode={canPlace && !!selectedPlacementType}
          placementType={selectedPlacementType}
          onPlace={handlePlace}
          deletionMode={deletionMode}
          onDeleteComponent={handleDeleteComponent}
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
