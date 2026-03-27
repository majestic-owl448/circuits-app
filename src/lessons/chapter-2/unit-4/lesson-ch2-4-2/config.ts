import type { LessonConfig } from '../../../../types/lesson.ts';
import { STANDARD_NODES } from '../../../shared.ts';
import type { CircuitComponent } from '../../../../types/circuit.ts';

const circuit: CircuitComponent[] = [
  { id: 'battery-1', type: 'battery', nodeA: 'n1', nodeB: 'n4', properties: { voltage: 12 }, name: 'Battery', position: { x: 100, y: 200 }, rotation: 0 },
  { id: 'wire-1', type: 'wire', nodeA: 'n1', nodeB: 'n2', properties: {}, name: 'Wire', position: { x: 300, y: 100 }, rotation: 0 },
  { id: 'bulb-1', type: 'bulb', nodeA: 'n2', nodeB: 'n3', properties: { resistance: 60 }, name: 'Bulb', position: { x: 500, y: 200 }, rotation: 0 },
  { id: 'switch-1', type: 'switch', nodeA: 'n4', nodeB: 'n3', properties: { isClosed: true }, name: 'Switch', position: { x: 300, y: 400 }, rotation: 0 },
];

export const lessonCh2_4_2: LessonConfig = {
  id: 'lesson-ch2-4-2',
  unitId: 'ch2-unit-4',
  title: 'Opening More Details',
  description: 'Use the optional detailed breakdown to understand how evaluated values are derived step by step.',
  stageLabel: 'Early Intermediate',
  prerequisites: ['lesson-ch2-4-1'],
  conceptsIntroduced: ['final values by default', 'optional detailed derivation', 'circuit-specific labels in the explanation'],
  initialCircuit: circuit,
  initialNodes: STANDARD_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'When you check a solution, you see the final values. But sometimes you want to know how those values were calculated. That is what the detailed breakdown shows.',
    },
    {
      id: 'step-2',
      text: 'The detailed breakdown lists each step: identifying known values, choosing the formula, substituting numbers, and arriving at the result. It uses the actual component labels from your circuit.',
      highlights: ['battery-1', 'bulb-1'],
    },
    {
      id: 'step-3',
      text: 'For this circuit with a 12V Battery and a 60\u03A9 Bulb, the breakdown would show: Step 1 \u2014 Known: V = 12V (from Battery), R = 60\u03A9 (from Bulb). Step 2 \u2014 I = V/R = 12/60 = 0.2A. Step 3 \u2014 P = VI = 12 \u00D7 0.2 = 2.4W.',
      theoryCheck: {
        question: 'What is the purpose of the detailed breakdown?',
        choices: [
          { id: 'tc-a', label: 'To show step-by-step how the evaluated values were calculated', isCorrect: true, explanation: 'Correct! The breakdown is a teaching aid that walks through the calculation.' },
          { id: 'tc-b', label: 'To change the circuit values', isCorrect: false, explanation: 'The breakdown only shows how values were derived. It does not change anything.' },
        ],
        explanation: 'The detailed breakdown is an optional teaching tool. It shows each calculation step using your circuit\'s actual component labels, helping you verify or learn the reasoning.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'In a detailed breakdown for a 12V battery and 60\u03A9 bulb, what is the first step?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-a' },
      hints: ['The breakdown starts by listing what you already know from the circuit.'],
      choices: [
        { id: 'ch1-a', label: 'Identify known values: V = 12V, R = 60\u03A9', isCorrect: true, explanation: 'Correct! The first step is always to identify the known values from the circuit components.' },
        { id: 'ch1-b', label: 'Calculate P = VI immediately', isCorrect: false, explanation: 'You cannot calculate power first because you do not yet know the current. The first step identifies known values.' },
        { id: 'ch1-c', label: 'Rearrange P = VI for I', isCorrect: false, explanation: 'That is not the first step. Start by identifying what is known from the circuit.' },
      ],
      detailedBreakdown: {
        steps: [
          { label: 'Identify known values', formula: 'V = 12V (Battery), R = 60\u03A9 (Bulb)', result: 'Known: V and R' },
          { label: 'Find current', formula: 'I = V / R = 12 / 60', result: 'I = 0.2A' },
          { label: 'Find power', formula: 'P = V \u00D7 I = 12 \u00D7 0.2', result: 'P = 2.4W' },
        ],
      },
    },
    {
      id: 'challenge-2',
      prompt: 'In the detailed breakdown, the calculation says "V = 12V (from Battery)" and "R = 60\u03A9 (from Bulb)." What do "Battery" and "Bulb" refer to?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: ['These are names shown on the circuit components.'],
      choices: [
        { id: 'ch2-a', label: 'Formula variables', isCorrect: false, explanation: 'Battery and Bulb are component labels, not formula variables. Variables are V, I, R, and P.' },
        { id: 'ch2-b', label: 'Circuit component labels', isCorrect: true, explanation: 'Correct! The breakdown uses the actual names of your circuit components to make the calculation specific and clear.' },
        { id: 'ch2-c', label: 'Unit abbreviations', isCorrect: false, explanation: 'Units are volts, amperes, ohms, and watts. Battery and Bulb are component labels.' },
      ],
      detailedBreakdown: {
        steps: [
          { label: 'Identify known values', formula: 'V = 12V (Battery), R = 60\u03A9 (Bulb)', result: 'Known: V and R' },
          { label: 'Find current', formula: 'I = V / R = 12 / 60', result: 'I = 0.2A' },
          { label: 'Find power', formula: 'P = V \u00D7 I = 12 \u00D7 0.2', result: 'P = 2.4W' },
        ],
      },
    },
  ],
  theoryContent: [
    {
      title: 'How to read a detailed circuit calculation',
      content: 'The detailed breakdown shows each step of the evaluation: identifying knowns, choosing the formula, substituting values, and computing the result. It uses your circuit\'s own component labels for clarity.',
    },
  ],
  sandboxUnlocks: ['detailed-breakdown'],
  availableActions: ['toggle-switch', 'drag-to-place', 'connect-wire', 'delete-component'],
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
      id: 'theory-ch2-detailed-calculation',
      title: 'How to read a detailed circuit calculation',
      content: 'The detailed breakdown is an optional view that walks through each step of a circuit evaluation. It starts by identifying the known values from the component labels, then shows the formula choice, substitution, and result for each quantity. The breakdown uses your circuit\'s own component names (like "Battery" or "Bulb") so you can connect each step to a specific part of the circuit.',
      sourceLesson: 'lesson-ch2-4-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch2-reading-worked-solutions'],
};
