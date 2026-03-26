import type { CircuitComponent, CircuitNode } from '../types/circuit.ts';

export interface CircuitGraph {
  nodes: Map<string, CircuitNode>;
  components: Map<string, CircuitComponent>;
  adjacency: Map<string, { componentId: string; neighborNode: string }[]>;
}

export function buildGraph(
  nodes: CircuitNode[],
  components: CircuitComponent[],
): CircuitGraph {
  const nodeMap = new Map<string, CircuitNode>();
  for (const node of nodes) {
    nodeMap.set(node.id, node);
  }

  const compMap = new Map<string, CircuitComponent>();
  for (const comp of components) {
    compMap.set(comp.id, comp);
  }

  const adjacency = new Map<string, { componentId: string; neighborNode: string }[]>();
  for (const node of nodes) {
    adjacency.set(node.id, []);
  }

  for (const comp of components) {
    const listA = adjacency.get(comp.nodeA);
    if (listA) {
      listA.push({ componentId: comp.id, neighborNode: comp.nodeB });
    }
    const listB = adjacency.get(comp.nodeB);
    if (listB) {
      listB.push({ componentId: comp.id, neighborNode: comp.nodeA });
    }
  }

  return { nodes: nodeMap, components: compMap, adjacency };
}

export function findLoops(graph: CircuitGraph): string[][] {
  const batteries = [...graph.components.values()].filter(c => c.type === 'battery');
  const loops: string[][] = [];

  for (const battery of batteries) {
    const startNode = battery.nodeA;
    const visited = new Set<string>();
    const path: string[] = [];

    function dfs(currentNode: string, fromComponentId: string | null): boolean {
      if (visited.has(currentNode)) {
        if (currentNode === startNode && path.length > 1) {
          loops.push([...path]);
          return true;
        }
        return false;
      }

      visited.add(currentNode);

      const neighbors = graph.adjacency.get(currentNode) ?? [];
      for (const { componentId, neighborNode } of neighbors) {
        if (componentId === fromComponentId) continue;

        const comp = graph.components.get(componentId)!;
        if (comp.type === 'switch' && !comp.properties.isClosed) continue;

        path.push(componentId);
        const found = dfs(neighborNode, componentId);
        if (found) return true;
        path.pop();
      }

      visited.delete(currentNode);
      return false;
    }

    path.push(battery.id);
    dfs(battery.nodeB, battery.id);
  }

  return loops;
}
