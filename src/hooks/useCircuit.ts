import { useState, useCallback, useMemo } from 'react';
import type { CircuitComponent, CircuitNode, ComponentType, Position, SimulationResult } from '../types/circuit.ts';
import { solve } from '../engine/solver.ts';

const COMPONENT_DEFAULTS: Record<string, Omit<CircuitComponent, 'id' | 'name' | 'nodeA' | 'nodeB' | 'position'>> = {
  battery: { type: 'battery', properties: { voltage: 9 }, rotation: 0 },
  bulb: { type: 'bulb', properties: { resistance: 45 }, rotation: 0 },
  switch: { type: 'switch', properties: { isClosed: false }, rotation: 0 },
  resistor: { type: 'resistor', properties: { resistance: 100 }, rotation: 0 },
};

function nodeOffset(type: ComponentType): number {
  switch (type) {
    case 'battery': return 40;
    case 'bulb': return 50;
    case 'switch': return 50;
    case 'resistor': return 50;
    default: return 40;
  }
}

let placeCounter = 0;

export interface CircuitState {
  nodes: CircuitNode[];
  components: CircuitComponent[];
}

export function useCircuit(initial?: { nodes?: CircuitNode[]; components?: CircuitComponent[] }) {
  const [nodes, setNodes] = useState<CircuitNode[]>(initial?.nodes ?? []);
  const [components, setComponents] = useState<CircuitComponent[]>(initial?.components ?? []);

  const simulation = useMemo(
    () => solve(nodes, components),
    [nodes, components],
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
      properties: {},
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

  const reset = useCallback((newNodes: CircuitNode[], newComponents: CircuitComponent[]) => {
    setNodes(newNodes);
    setComponents(newComponents);
  }, []);

  return {
    nodes,
    components,
    simulation,
    toggleSwitch,
    addComponent,
    removeComponent,
    addWire,
    placeComponent,
    deleteComponent,
    reset,
    setNodes,
  };
}

export type UseCircuitReturn = ReturnType<typeof useCircuit>;
export type { SimulationResult };
