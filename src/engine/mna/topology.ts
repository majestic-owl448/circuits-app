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
  const internalNodes: string[] = [];

  for (const component of activeComponents) {
    if (component.type === 'wire') {
      const resistance = component.properties.wireResistance ?? IDEAL_LINK_RESISTANCE;
      elements.push({
        id: component.id,
        type: 'resistor',
        nodeA: component.nodeA,
        nodeB: component.nodeB,
        value: Math.max(resistance, IDEAL_LINK_RESISTANCE),
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
      const internalR = component.properties.internalResistance ?? 0;
      if (internalR > 0) {
        const internalNodeId = `_int_${component.id}`;
        internalNodes.push(internalNodeId);
        
        // Voltage source from A to internal node
        elements.push({
          id: `src-${component.id}`,
          type: 'voltage-source',
          nodeA: component.nodeA,
          nodeB: internalNodeId,
          value: component.properties.voltage ?? 0,
          sourceComponentId: component.id,
        });

        // Internal resistor from internal node to B
        elements.push({
          id: `r-int-${component.id}`,
          type: 'resistor',
          nodeA: internalNodeId,
          nodeB: component.nodeB,
          value: internalR,
        });
      } else {
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
  
  // Include both original nodes and generated internal nodes
  const allNodeIds = [...nodes.map(n => n.id), ...internalNodes];
  const nodeIds = allNodeIds.filter(nodeId => nodeId !== groundNodeId);
  const nodeIndex = new Map(nodeIds.map((nodeId, index) => [nodeId, index]));

  return {
    activeComponents,
    elements,
    groundNodeId,
    nodeIds,
    nodeIndex,
  };
}
