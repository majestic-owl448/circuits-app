import type { LessonConfig } from '../../types/lesson.ts';

export const lesson2: LessonConfig = {
  id: 'lesson-2',
  title: 'What Makes It Flow?',
  description: 'Discover voltage, current, and resistance — the three pillars of circuit behavior.',
  initialNodes: [
    { id: 'n1', position: { x: 200, y: 100 } },
    { id: 'n2', position: { x: 400, y: 100 } },
    { id: 'n3', position: { x: 400, y: 300 } },
    { id: 'n4', position: { x: 200, y: 300 } },
  ],
  initialCircuit: [
    {
      id: 'battery-1',
      type: 'battery',
      nodeA: 'n1',
      nodeB: 'n4',
      properties: { voltage: 9 },
      name: 'Battery 1',
      position: { x: 100, y: 200 },
      rotation: 0,
    },
    {
      id: 'wire-1',
      type: 'wire',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: {},
      name: 'Wire 1',
      position: { x: 300, y: 100 },
      rotation: 0,
    },
    {
      id: 'bulb-1',
      type: 'bulb',
      nodeA: 'n2',
      nodeB: 'n3',
      properties: { resistance: 45 },
      name: 'Bulb 1',
      position: { x: 500, y: 200 },
      rotation: 0,
    },
    {
      id: 'switch-1',
      type: 'switch',
      nodeA: 'n4',
      nodeB: 'n3',
      properties: { isClosed: false },
      name: 'Switch 1',
      position: { x: 300, y: 400 },
      rotation: 0,
    },
  ],
  steps: [
    {
      id: 'step-1',
      text: 'This is the same circuit from Lesson 1. Let\'s look deeper at **why** the bulb lights up.',
    },
    {
      id: 'step-2',
      text: '**Voltage (V)** is the electrical "push" provided by the battery. Think of it like water pressure in a pipe. This battery provides **9 volts**.',
    },
    {
      id: 'step-3',
      text: '**Current (I)** is the flow of electricity through the circuit. It\'s measured in **amperes** (amps). Current only flows when the circuit is closed.',
    },
    {
      id: 'step-4',
      text: '**Resistance (R)** opposes the flow of current. The bulb has resistance — that\'s what makes it glow instead of letting current pass freely. Resistance is measured in **ohms (Ω)**.',
    },
    {
      id: 'step-5',
      text: 'These three quantities are related by **Ohm\'s Law**: **V = I × R**. Close the switch and enable the current overlay to see current flowing.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: true },
      highlights: ['switch-1'],
      showCurrentOverlay: true,
    },
    {
      id: 'step-6',
      text: 'The battery also delivers **power (P)** to the bulb, which is what makes it glow. Power is calculated as: **P = V × I**. These formulas will become important later.',
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Which component provides the electrical "push" (voltage) in this circuit?',
      type: 'choose',
      choices: [
        { id: 'battery', label: 'Battery', isCorrect: true },
        { id: 'bulb', label: 'Bulb', isCorrect: false },
        { id: 'switch', label: 'Switch', isCorrect: false },
        { id: 'wire', label: 'Wire', isCorrect: false },
      ],
      evaluationCriteria: {},
      hints: [
        'Think about which component is the energy source.',
        'The battery converts chemical energy into electrical energy, providing voltage.',
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Which component acts as the load — the part that uses electrical energy?',
      type: 'choose',
      choices: [
        { id: 'bulb', label: 'Bulb', isCorrect: true },
        { id: 'battery', label: 'Battery', isCorrect: false },
        { id: 'switch', label: 'Switch', isCorrect: false },
        { id: 'wire', label: 'Wire', isCorrect: false },
      ],
      evaluationCriteria: {},
      hints: [
        'The load is the component that converts electrical energy into another form (like light).',
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Voltage (V)',
      content: 'Voltage is the electrical "push" or potential difference provided by a source. Measured in volts (V).',
      formula: 'V = I × R',
    },
    {
      title: 'Current (I)',
      content: 'Current is the flow of electric charge through a circuit. Measured in amperes (A).',
    },
    {
      title: 'Resistance (R)',
      content: 'Resistance opposes the flow of current. Measured in ohms (Ω).',
    },
    {
      title: 'Power (P)',
      content: 'Power is the rate at which electrical energy is used. Measured in watts (W).',
      formula: 'P = V × I',
    },
  ],
  sandboxUnlocks: [],
};
