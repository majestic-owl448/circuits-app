import type { CircuitComponent, SimulationResult } from '../types/circuit.ts';

export function describeCircuit(
  components: CircuitComponent[],
  simulation: SimulationResult,
): string {
  if (components.length === 0) {
    return 'The workspace is empty. No components have been placed.';
  }

  const lines: string[] = [];

  // List components
  const grouped = new Map<string, CircuitComponent[]>();
  for (const comp of components) {
    const list = grouped.get(comp.type) ?? [];
    list.push(comp);
    grouped.set(comp.type, list);
  }

  lines.push('Components:');
  for (const [type, comps] of grouped) {
    const names = comps.map(c => c.name).join(', ');
    lines.push(`  ${type}: ${names}`);
  }

  // Switch states
  const switches = components.filter(c => c.type === 'switch');
  if (switches.length > 0) {
    lines.push('');
    lines.push('Switch states:');
    for (const sw of switches) {
      lines.push(`  ${sw.name}: ${sw.properties.isClosed ? 'closed' : 'open'}`);
    }
  }

  // Circuit status
  lines.push('');
  if (simulation.isShortCircuit) {
    lines.push('Status: SHORT CIRCUIT — a path with no resistance exists across the source.');
  } else if (simulation.isComplete) {
    lines.push('Status: Circuit is closed. Current is flowing.');
    lines.push(`  Total current: ${simulation.totalCurrent.toFixed(3)} A`);
    lines.push(`  Total resistance: ${simulation.totalResistance.toFixed(1)} Ω`);
  } else {
    lines.push('Status: Circuit is open. No current is flowing.');
  }

  // Per-component results
  if (simulation.isComplete && !simulation.isShortCircuit) {
    const loads = components.filter(c => c.type === 'bulb' || c.type === 'resistor');
    if (loads.length > 0) {
      lines.push('');
      lines.push('Component details:');
      for (const load of loads) {
        const result = simulation.componentResults.get(load.id);
        if (result) {
          lines.push(`  ${load.name}: ${result.voltage.toFixed(2)} V, ${result.current.toFixed(3)} A, ${result.power.toFixed(2)} W`);
        }
      }
    }
  }

  return lines.join('\n');
}
