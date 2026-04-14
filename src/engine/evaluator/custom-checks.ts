import type { CircuitComponent } from '../../types/circuit.ts';

function hasType(components: CircuitComponent[], type: CircuitComponent['type']): boolean {
  return components.some(component => component.type === type);
}

function hasClosedSwitch(components: CircuitComponent[]): boolean {
  return components.some(component => component.type === 'switch' && (component.properties.isClosed ?? false));
}

function isConnectedPair(
  components: CircuitComponent[],
  nodeA: string,
  nodeB: string,
  allowedTypes?: CircuitComponent['type'][],
): boolean {
  return components.some(component =>
    (allowedTypes ? allowedTypes.includes(component.type) : true)
    && (
    (component.nodeA === nodeA && component.nodeB === nodeB)
    || (component.nodeA === nodeB && component.nodeB === nodeA)
    )
  );
}

function hasParallelBulbs(components: CircuitComponent[]): boolean {
  const bulbs = components.filter(component => component.type === 'bulb');
  if (bulbs.length < 2) return false;

  for (let i = 0; i < bulbs.length; i++) {
    for (let j = i + 1; j < bulbs.length; j++) {
      const a = bulbs[i];
      const b = bulbs[j];
      const sameNodes =
        (a.nodeA === b.nodeA && a.nodeB === b.nodeB)
        || (a.nodeA === b.nodeB && a.nodeB === b.nodeA);
      if (sameNodes) return true;
    }
  }

  return false;
}

export function evaluateCustomCheck(
  checkId: string,
  components: CircuitComponent[],
): { passed: boolean; message: string } {
  switch (checkId) {
    case 'has-switch-and-bulb': {
      const passed = hasType(components, 'switch') && hasType(components, 'bulb');
      return {
        passed,
        message: passed
          ? 'Required switch and bulb are present.'
          : 'Add both a switch and a bulb to complete the required setup.',
      };
    }
    case 'has-bulb-in-loop': {
      const passed = hasType(components, 'bulb');
      return {
        passed,
        message: passed
          ? 'Bulb is present in the circuit.'
          : 'Place a bulb in the loop before checking solution.',
      };
    }
    case 'correct-loop-path': {
      const passed = isConnectedPair(components, 'n1', 'n2', ['wire'])
        && hasType(components, 'bulb')
        && hasType(components, 'switch');
      return {
        passed,
        message: passed
          ? 'Loop path includes expected corrective connection.'
          : 'Fix the wiring path so the intended loop nodes are connected and the bulb remains in-loop.',
      };
    }
    case 'series-path-complete': {
      const passed = isConnectedPair(components, 'n3', 'n4', ['wire']);
      return {
        passed,
        message: passed
          ? 'Series path connection is complete.'
          : 'Connect n3 to n4 to restore the missing series link.',
      };
    }
    case 'has-parallel-bulbs': {
      const passed = hasParallelBulbs(components);
      return {
        passed,
        message: passed
          ? 'Parallel bulb structure detected.'
          : 'Build two bulb branches that connect across the same pair of junctions.',
      };
    }
    case 'classify': {
      return {
        passed: true,
        message: 'Classify check configuration accepted.',
      };
    }
    case 'diagnose': {
      return {
        passed: true,
        message: 'Diagnose check configuration accepted.',
      };
    }
    default:
      return {
        passed: false,
        message: `Unsupported custom check: ${checkId}`,
      };
  }
}

export function hasClosedSwitchInCircuit(components: CircuitComponent[]): boolean {
  return hasClosedSwitch(components);
}
