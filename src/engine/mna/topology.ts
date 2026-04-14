import type { CircuitComponent, CircuitNode } from '../../types/circuit.ts';

const IDEAL_LINK_RESISTANCE = 1e-6;

export interface MnaElement {
  id: string;
  type: 'resistor' | 'voltage-source';
  nodeA: string;
  nodeB: string;
  value: number;
  sourceComponentId?: string;
}

export interface MnaTopology {
  activeComponents: CircuitComponent[];
  elements: MnaElement[];
  groundNodeId: string;
  nodeIds: string[];
  nodeIndex: Map<string, number>;
}

export function buildMnaTopology(nodes: CircuitNode[], components: CircuitComponent[]): MnaTopology {
  const activeComponents = components.filter(component =>
    component.type !== 'switch' || (component.properties.isClosed ?? false),
  );

  if (nodes.length === 0) {
    return {
      activeComponents,
      elements: [],
      groundNodeId: '',
      nodeIds: [],
      nodeIndex: new Map(),
    };
  }

  const elements: MnaElement[] = [];
  for (const component of activeComponents) {
    if (component.type === 'wire') {
      elements.push({
        id: component.id,
        type: 'resistor',
        nodeA: component.nodeA,
        nodeB: component.nodeB,
        value: IDEAL_LINK_RESISTANCE,
      });
      continue;
    }

    if (component.type === 'switch') {
      elements.push({
        id: component.id,
        type: 'resistor',
        nodeA: component.nodeA,
        nodeB: component.nodeB,
        value: IDEAL_LINK_RESISTANCE,
      });
      continue;
    }

    if (component.type === 'bulb' || component.type === 'resistor') {
      elements.push({
        id: component.id,
        type: 'resistor',
        nodeA: component.nodeA,
        nodeB: component.nodeB,
        value: component.properties.resistance ?? 0,
      });
      continue;
    }

    if (component.type === 'battery') {
      elements.push({
        id: `src-${component.id}`,
        type: 'voltage-source',
        nodeA: component.nodeA,
        nodeB: component.nodeB,
        value: component.properties.voltage ?? 0,
        sourceComponentId: component.id,
      });
    }
  }

  const batteryNodes = new Set<string>();
  for (const component of activeComponents) {
    if (component.type === 'battery') {
      batteryNodes.add(component.nodeA);
      batteryNodes.add(component.nodeB);
    }
  }

  const candidates = nodes.map(node => node.id).filter(nodeId => batteryNodes.has(nodeId));
  const groundNodeId = (candidates[0] ?? nodes[0].id);
  const nodeIds = nodes.map(node => node.id).filter(nodeId => nodeId !== groundNodeId);
  const nodeIndex = new Map(nodeIds.map((nodeId, index) => [nodeId, index]));

  return {
    activeComponents,
    elements,
    groundNodeId,
    nodeIds,
    nodeIndex,
  };
}
