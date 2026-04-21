import type { ComponentType } from '../types/circuit.ts';

const GATE_TYPES = new Set<ComponentType>(['not-gate', 'and-gate', 'or-gate', 'nand-gate', 'nor-gate', 'xor-gate']);

export function isGateType(type: ComponentType): boolean {
  return GATE_TYPES.has(type);
}

export function computeGateOutput(type: ComponentType, inputA: boolean, inputB: boolean): boolean {
  switch (type) {
    case 'not-gate':  return !inputA;
    case 'and-gate':  return inputA && inputB;
    case 'or-gate':   return inputA || inputB;
    case 'nand-gate': return !(inputA && inputB);
    case 'nor-gate':  return !(inputA || inputB);
    case 'xor-gate':  return inputA !== inputB;
    default:          return false;
  }
}
