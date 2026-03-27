import type { LessonConfig } from '../../../../types/lesson.ts';
import { STANDARD_NODES } from '../../../shared.ts';
import type { CircuitComponent } from '../../../../types/circuit.ts';

const circuit: CircuitComponent[] = [
  { id: 'battery-1', type: 'battery', nodeA: 'n1', nodeB: 'n4', properties: { voltage: 9 }, name: 'Battery', position: { x: 100, y: 200 }, rotation: 0 },
  { id: 'wire-1', type: 'wire', nodeA: 'n1', nodeB: 'n2', properties: {}, name: 'Wire', position: { x: 300, y: 100 }, rotation: 0 },
  { id: 'bulb-1', type: 'bulb', nodeA: 'n2', nodeB: 'n3', properties: { resistance: 45 }, name: 'Bulb', position: { x: 500, y: 200 }, rotation: 0 },
  { id: 'switch-1', type: 'switch', nodeA: 'n4', nodeB: 'n3', properties: { isClosed: true }, name: 'Switch', position: { x: 300, y: 400 }, rotation: 0 },
];

export const lessonCh2_3_1: LessonConfig = {
  id: 'lesson-ch2-3-1',
  unitId: 'ch2-unit-3',
  title: 'What Power Describes',
  description: 'Understand that power describes how much electrical energy is being transferred or used in the circuit.',
  stageLabel: 'Early Intermediate',
  prerequisites: ['lesson-ch2-2-3'],
  conceptsIntroduced: ['power as quantity', 'power connected to bulb behavior', 'power as a reason circuit values matter'],
  initialCircuit: circuit,
  initialNodes: STANDARD_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'You can now calculate voltage, current, and resistance. But there is another quantity that matters: power. Power tells you how much electrical energy the load is actually using.',
      highlights: ['bulb-1'],
    },
    {
      id: 'step-2',
      text: 'Think of the bulb. When current flows through it, it lights up. Power describes how brightly it lights — how much energy it converts from electrical to light and heat every second.',
    },
    {
      id: 'step-3',
      text: 'Power is measured in watts (W) and its symbol in formulas is P. The formula is P = V \u00D7 I: power equals voltage times current.',
      theoryCheck: {
        question: 'What does power describe in a circuit?',
        choices: [
          { id: 'tc-a', label: 'How much electrical energy the load uses per second', isCorrect: true, explanation: 'Correct! Power is the rate of energy use or transfer in the circuit.' },
          { id: 'tc-b', label: 'How much resistance the load has', isCorrect: false, explanation: 'Resistance is a separate quantity measured in ohms. Power is about energy use.' },
          { id: 'tc-c', label: 'How fast the electrons move', isCorrect: false, explanation: 'The speed of electrons is related to current, not power directly. Power is about energy transfer.' },
        ],
        explanation: 'Power measures the rate at which electrical energy is used or transferred. A higher power means more energy is being converted every second.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Which quantity describes how much electrical energy the load uses?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-c' },
      hints: ['This quantity is measured in watts and tells you about energy use.'],
      choices: [
        { id: 'ch1-a', label: 'Voltage', isCorrect: false, explanation: 'Voltage is the push from the source, not the energy used by the load.' },
        { id: 'ch1-b', label: 'Resistance', isCorrect: false, explanation: 'Resistance is opposition to current flow, not energy use.' },
        { id: 'ch1-c', label: 'Power', isCorrect: true, explanation: 'Correct! Power (P) describes the rate of electrical energy use, measured in watts (W).' },
        { id: 'ch1-d', label: 'Current', isCorrect: false, explanation: 'Current is the flow of charge, not the energy consumed by the load.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'What symbol represents power in formulas, and what unit is it measured in?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-a' },
      hints: ['Power uses a single letter symbol and is measured in a unit named after James Watt.'],
      choices: [
        { id: 'ch2-a', label: 'P, measured in watts (W)', isCorrect: true, explanation: 'Correct! Power is represented by P and measured in watts (W).' },
        { id: 'ch2-b', label: 'W, measured in power (P)', isCorrect: false, explanation: 'W is the abbreviation for watts (the unit). The symbol in formulas is P.' },
        { id: 'ch2-c', label: 'I, measured in amperes (A)', isCorrect: false, explanation: 'I represents current, not power. Power is P in watts.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'What is power?',
      content: 'Power describes how much electrical energy is being used or transferred per second. When a bulb lights up, power tells you how much energy it converts. More power means a brighter bulb.',
    },
    {
      title: 'Units for power',
      content: 'Power is measured in watts (W). The symbol in formulas is P. The formula P = VI connects power to voltage and current.',
      formula: 'P = VI',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch', 'drag-to-place', 'connect-wire'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [
    {
      formula: 'V = IR',
      symbols: [
        { symbol: 'V', name: 'Voltage', unit: 'volts (V)' },
        { symbol: 'I', name: 'Current', unit: 'amperes (A)' },
        { symbol: 'R', name: 'Resistance', unit: 'ohms (\u03A9)' },
      ],
    },
    {
      formula: 'P = VI',
      symbols: [
        { symbol: 'P', name: 'Power', unit: 'watts (W)' },
        { symbol: 'V', name: 'Voltage', unit: 'volts (V)' },
        { symbol: 'I', name: 'Current', unit: 'amperes (A)' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-ch2-what-is-power',
      title: 'What is power?',
      content: 'Power describes how much electrical energy is being used or transferred per second. In a circuit, the load converts electrical energy into other forms (light, heat). The rate of that conversion is power. A 2-watt bulb uses twice as much energy per second as a 1-watt bulb. Power connects the abstract circuit values to real-world behavior you can observe.',
      sourceLesson: 'lesson-ch2-3-1',
    },
    {
      id: 'theory-ch2-power-units',
      title: 'Units for power',
      content: 'Power is measured in watts (W), named after James Watt. In formulas, P represents power. The formula P = VI tells you that power equals voltage times current. Knowing both the push (voltage) and the flow (current) lets you calculate how much energy the circuit transfers per second.',
      sourceLesson: 'lesson-ch2-3-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch2-power-basics'],
};
