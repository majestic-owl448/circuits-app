import { useState, useCallback, useMemo } from 'react';
import type { CircuitComponent, CircuitNode, SimulationResult } from '../types/circuit.ts';
import { solve } from '../engine/solver.ts';

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
    reset,
    setNodes,
  };
}

export type UseCircuitReturn = ReturnType<typeof useCircuit>;
export type { SimulationResult };
