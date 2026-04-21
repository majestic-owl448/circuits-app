import { useState, useCallback, useMemo } from 'react';
import type { CircuitComponent, CircuitNode, ComponentType, Position, SimulationResult } from '../types/circuit.ts';
import { solve } from '../engine/solver.ts';
import { estimateNodePair, measureCurrent, measureResistance, measureVoltage, type MeasurementResult } from '../engine/measurements.ts';
import { applyFailureStates } from '../engine/failure.ts';

const COMPONENT_DEFAULTS: Record<string, Omit<CircuitComponent, 'id' | 'name' | 'nodeA' | 'nodeB' | 'position'>> = {
  battery: { type: 'battery', properties: { voltage: 9 }, rotation: 0 },
  bulb: { type: 'bulb', properties: { resistance: 45 }, rotation: 0 },
  switch: { type: 'switch', properties: { isClosed: false }, rotation: 0 },
  resistor: { type: 'resistor', properties: { resistance: 100 }, rotation: 0 },
  capacitor: { type: 'capacitor', properties: { capacitance: 0.001 }, rotation: 0 },
  inductor: { type: 'inductor', properties: { inductance: 0.1 }, rotation: 0 },
};

function nodeOffset(type: ComponentType): number {
  switch (type) {
    case 'battery': return 40;
    case 'bulb': return 50;
    case 'switch': return 50;
    case 'resistor': return 50;
    case 'capacitor': return 40;
    case 'inductor': return 50;
    default: return 40;
  }
}

let placeCounter = 0;

export interface CircuitState {
  nodes: CircuitNode[];
  components: CircuitComponent[];
}

export type MeterMode = 'voltmeter' | 'ammeter' | 'ohmmeter';

export interface MeterState {
  mode: MeterMode;
  targetNodeAId?: string;
  targetNodeBId?: string;
  targetNodeALabel?: string;
  targetNodeBLabel?: string;
  targetComponentId?: string;
  pendingNodeId?: string;
  pendingNodeLabel?: string;
  result: MeasurementResult | null;
}

function nodeLabelFromIndex(index: number): string {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (index < alphabet.length) {
    return `Node ${alphabet[index]}`;
  }
  return `Node ${index + 1}`;
}

function buildNodeLabelMap(nodes: CircuitNode[]): Map<string, string> {
  const sorted = [...nodes].sort((a, b) => {
    if (a.position.y !== b.position.y) return a.position.y - b.position.y;
    if (a.position.x !== b.position.x) return a.position.x - b.position.x;
    return a.id.localeCompare(b.id);
  });
  const labels = new Map<string, string>();
  sorted.forEach((node, index) => {
    labels.set(node.id, nodeLabelFromIndex(index));
  });
  return labels;
}

export function useCircuit(initial?: { nodes?: CircuitNode[]; components?: CircuitComponent[] }) {
  const [nodes, setNodes] = useState<CircuitNode[]>(initial?.nodes ?? []);
  const [components, setComponents] = useState<CircuitComponent[]>(initial?.components ?? []);
  const [meterState, setMeterState] = useState<MeterState | null>(null);

  const simulation = useMemo(
    () => solve(nodes, components),
    [nodes, components],
  );

  const nodeLabels = useMemo(() => buildNodeLabelMap(nodes), [nodes]);

  const failedAwareComponents = useMemo(
    () => applyFailureStates(components, simulation),
    [components, simulation],
  );

  const toggleSwitch = useCallback((componentId: string) => {
    setComponents(prev =>
      prev.map(c =>
        c.id === componentId && c.type === 'switch'
          ? { ...c, properties: { ...c.properties, isClosed: !c.properties.isClosed } }
          : c,
      ),
    );
  }, []);

  const addComponent = useCallback((component: CircuitComponent) => {
    setComponents(prev => [...prev, component]);
  }, []);

  const removeComponent = useCallback((componentId: string) => {
    setComponents(prev => prev.filter(c => c.id !== componentId));
  }, []);

  const addWire = useCallback((fromNode: string, toNode: string) => {
    const wireId = `wire-${Date.now()}`;
    const fromN = nodes.find(n => n.id === fromNode);
    const toN = nodes.find(n => n.id === toNode);
    if (!fromN || !toN) return;

    const wire: CircuitComponent = {
      id: wireId,
      type: 'wire',
      nodeA: fromNode,
      nodeB: toNode,
      properties: { wireResistance: 0 },
      name: `Wire`,
      position: {
        x: (fromN.position.x + toN.position.x) / 2,
        y: (fromN.position.y + toN.position.y) / 2,
      },
      rotation: 0,
    };
    setComponents(prev => [...prev, wire]);
  }, [nodes]);

  const placeComponent = useCallback((type: ComponentType, position: Position) => {
    if (type === 'wire') return; // wires are placed via addWire
    const defaults = COMPONENT_DEFAULTS[type];
    if (!defaults) return;

    const stamp = ++placeCounter;
    const nodeAId = `n-${Date.now()}-${stamp}-a`;
    const nodeBId = `n-${Date.now()}-${stamp}-b`;
    const offset = nodeOffset(type);

    const nodeA: CircuitNode = { id: nodeAId, position: { x: position.x - offset, y: position.y } };
    const nodeB: CircuitNode = { id: nodeBId, position: { x: position.x + offset, y: position.y } };

    setNodes(prev => [...prev, nodeA, nodeB]);

    const comp: CircuitComponent = {
      ...defaults,
      id: `placed-${type}-${stamp}`,
      name: `${type.charAt(0).toUpperCase() + type.slice(1)}`,
      nodeA: nodeAId,
      nodeB: nodeBId,
      position,
    };

    setComponents(prev => [...prev, comp]);
  }, []);

  const deleteComponent = useCallback((componentId: string) => {
    setComponents(prev => {
      const comp = prev.find(c => c.id === componentId);
      if (!comp || comp.type === 'wire') return prev;

      const remaining = prev.filter(c => c.id !== componentId);

      // Find orphaned nodes: nodes that belonged to this component and are not used by any remaining component
      const usedNodes = new Set<string>();
      for (const c of remaining) {
        usedNodes.add(c.nodeA);
        usedNodes.add(c.nodeB);
      }

      const orphanedNodes = [comp.nodeA, comp.nodeB].filter(nId => !usedNodes.has(nId));
      if (orphanedNodes.length > 0) {
        const orphanSet = new Set(orphanedNodes);
        setNodes(prevNodes => prevNodes.filter(n => !orphanSet.has(n.id)));
      }

      return remaining;
    });
  }, []);

  const renameComponent = useCallback((componentId: string, newName: string) => {
    setComponents(prev =>
      prev.map(c =>
        c.id === componentId ? { ...c, name: newName } : c,
      ),
    );
  }, []);

  const updateComponentProperties = useCallback((componentId: string, properties: Partial<import('../types/circuit.ts').ComponentProperties>) => {
    setComponents(prev =>
      prev.map(c =>
        c.id === componentId
          ? { ...c, properties: { ...c.properties, ...properties } }
          : c,
      ),
    );
  }, []);

  const reset = useCallback((newNodes: CircuitNode[], newComponents: CircuitComponent[]) => {
    setNodes(newNodes);
    setComponents(newComponents);
    setMeterState(null);
  }, []);

  const startMeasurement = useCallback((mode: MeterMode) => {
    setMeterState({ mode, result: null });
  }, []);

  const selectMeasurementNode = useCallback((nodeId: string) => {
    setMeterState(prev => {
      if (!prev || prev.mode !== 'voltmeter') return prev;

      if (!prev.pendingNodeId) {
        const targetNodeALabel = nodeLabels.get(nodeId) ?? nodeId;
        return {
          ...prev,
          pendingNodeId: nodeId,
          pendingNodeLabel: targetNodeALabel,
          targetNodeAId: nodeId,
          targetNodeALabel,
          targetNodeBId: undefined,
          targetNodeBLabel: undefined,
          result: null,
        };
      }

      const targetNodeAId = prev.pendingNodeId;
      const targetNodeBId = nodeId;
      const result = measureVoltage(targetNodeAId, targetNodeBId, simulation);
      const targetNodeALabel = nodeLabels.get(targetNodeAId) ?? targetNodeAId;
      const targetNodeBLabel = nodeLabels.get(targetNodeBId) ?? targetNodeBId;

      return {
        ...prev,
        pendingNodeId: undefined,
        pendingNodeLabel: undefined,
        targetNodeAId,
        targetNodeBId,
        targetNodeALabel,
        targetNodeBLabel,
        result,
      };
    });
  }, [simulation, nodeLabels]);

  const clearMeasurement = useCallback(() => {
    setMeterState(null);
  }, []);

  const measureSelected = useCallback((mode: MeterMode, targetComponentId?: string) => {
    if (mode === 'voltmeter') {
      const pair = estimateNodePair(nodes);
      if (!pair) {
        setMeterState({ mode, result: { value: null, unit: 'V', valid: false, message: 'Add at least two nodes to measure voltage.' } });
        return;
      }
      const result = measureVoltage(pair.nodeAId, pair.nodeBId, simulation);
      setMeterState({
        mode,
        targetNodeAId: pair.nodeAId,
        targetNodeBId: pair.nodeBId,
        targetNodeALabel: nodeLabels.get(pair.nodeAId) ?? pair.nodeAId,
        targetNodeBLabel: nodeLabels.get(pair.nodeBId) ?? pair.nodeBId,
        result,
      });
      return;
    }

    const selectedId = targetComponentId
      ?? components.find(component => component.type === 'bulb' || component.type === 'resistor' || component.type === 'wire')?.id;

    if (!selectedId) {
      const unit = mode === 'ammeter' ? 'A' : 'ohm';
      setMeterState({ mode, result: { value: null, unit, valid: false, message: 'No measurable component is available.' } });
      return;
    }

    if (mode === 'ammeter') {
      const result = measureCurrent(selectedId, simulation);
      setMeterState({ mode, targetComponentId: selectedId, result });
      return;
    }

    const result = measureResistance(selectedId, components, simulation);
    setMeterState({ mode, targetComponentId: selectedId, result });
  }, [components, nodes, simulation, nodeLabels]);

  return {
    nodes,
    components: failedAwareComponents,
    simulation,
    toggleSwitch,
    addComponent,
    removeComponent,
    addWire,
    placeComponent,
    deleteComponent,
    renameComponent,
    updateComponentProperties,
    reset,
    setNodes,
    meterState,
    nodeLabels,
    startMeasurement,
    measureSelected,
    clearMeasurement,
    selectMeasurementNode,
  };
}

export type UseCircuitReturn = ReturnType<typeof useCircuit>;
export type { SimulationResult };
