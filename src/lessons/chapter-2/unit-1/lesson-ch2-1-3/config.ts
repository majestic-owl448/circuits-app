import type { LessonConfig } from '../../../../types/lesson.ts';
import { STANDARD_NODES } from '../../../shared.ts';
import type { CircuitComponent } from '../../../../types/circuit.ts';

const circuit: CircuitComponent[] = [
  { id: 'battery-1', type: 'battery', nodeA: 'n1', nodeB: 'n4', properties: { voltage: 12 }, name: 'Battery', position: { x: 100, y: 200 }, rotation: 0 },
  { id: 'wire-1', type: 'wire', nodeA: 'n1', nodeB: 'n2', properties: {}, name: 'Wire', position: { x: 300, y: 100 }, rotation: 0 },
  { id: 'bulb-1', type: 'bulb', nodeA: 'n2', nodeB: 'n3', properties: { resistance: 60 }, name: 'Bulb', position: { x: 500, y: 200 }, rotation: 0 },
  { id: 'switch-1', type: 'switch', nodeA: 'n4', nodeB: 'n3', properties: { isClosed: false }, name: 'Switch', position: { x: 300, y: 400 }, rotation: 0 },
];

export const lessonCh2_1_3: LessonConfig = {
  id: 'lesson-ch2-1-3',
  unitId: 'ch2-unit-1',
  title: 'Reading a Simple Circuit With Numbers',
  description: 'Read a simple circuit and identify the known quantities before calculation starts.',
  stageLabel: 'Beginner to Early Intermediate',
  prerequisites: ['lesson-ch2-1-2'],
  conceptsIntroduced: ['known values versus unknown values', 'reading a circuit for information', 'preparing for calculation'],
  initialCircuit: circuit,
  initialNodes: STANDARD_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'Before you can calculate anything in a circuit, you need to read what information is already given. This circuit has a 12V battery and a 60Ω bulb. These are the known values.',
      highlights: ['battery-1', 'bulb-1'],
    },
    {
      id: 'step-2',
      text: 'The known values are: voltage (V = 12V) from the battery, and resistance (R = 60Ω) from the bulb. The unknown values are current (I) and power (P) — these must be calculated.',
    },
    {
      id: 'step-3',
      text: 'Close the switch. Current will flow, but we do not yet know exactly how much. In the next unit, you will learn to calculate the exact current using V = IR.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: true },
      highlights: ['switch-1'],
      showCurrentOverlay: true,
    },
    {
      id: 'step-4',
      text: 'Reading a circuit means: first identify what you know (the given values), then identify what you need to find (the unknowns). This is the starting point for every calculation.',
      theoryCheck: {
        question: 'In this circuit, which values are known (given) and which must be found?',
        choices: [
          { id: 'tc-a', label: 'Known: V = 12V, R = 60Ω. Unknown: I and P.', isCorrect: true, explanation: 'Correct! The battery gives voltage and the bulb gives resistance. Current and power must be calculated.' },
          { id: 'tc-b', label: 'Known: I and P. Unknown: V and R.', isCorrect: false, explanation: 'The circuit labels show V and R directly. Current and power are what you need to calculate.' },
        ],
        explanation: 'The battery shows its voltage (12V) and the bulb shows its resistance (60Ω). These are the known quantities. Current and power are the unknowns that you will learn to calculate.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'In a circuit with a 12V battery and a 60Ω bulb, which quantities are known?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-a' },
      hints: ['Known values are the ones displayed on the components.'],
      choices: [
        { id: 'ch1-a', label: 'Voltage (12V) and resistance (60Ω)', isCorrect: true, explanation: 'Correct! These values are given directly by the component labels.' },
        { id: 'ch1-b', label: 'Current and power', isCorrect: false, explanation: 'Current and power are the unknowns — they must be calculated from voltage and resistance.' },
        { id: 'ch1-c', label: 'Only voltage (12V)', isCorrect: false, explanation: 'The bulb also shows its resistance (60Ω). Both are known values.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Which formula could you use to find the unknown current from the known voltage and resistance?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: ['You know V and R. Which formula relates V, I, and R?'],
      choices: [
        { id: 'ch2-a', label: 'P = VI', isCorrect: false, explanation: 'P = VI requires knowing current (I), which is unknown. You need V = IR first.' },
        { id: 'ch2-b', label: 'V = IR (rearranged to I = V/R)', isCorrect: true, explanation: 'Correct! V = IR can be rearranged to I = V/R to find current from known voltage and resistance.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Known and unknown quantities',
      content: 'In any circuit problem, some values are given (known) and others must be found (unknown). The first step is always to identify which is which.',
    },
    {
      title: 'Reading a circuit before calculating',
      content: 'Before doing any math, read the circuit: note the voltage on the source, the resistance on the load, and determine what you need to find.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch', 'drag-to-place'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [
    {
      formula: 'V = IR',
      symbols: [
        { symbol: 'V', name: 'Voltage', unit: 'volts (V)' },
        { symbol: 'I', name: 'Current', unit: 'amperes (A)' },
        { symbol: 'R', name: 'Resistance', unit: 'ohms (Ω)' },
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
      id: 'theory-ch2-known-unknown',
      title: 'Known and unknown quantities',
      content: 'In any circuit problem, some values are given (known) and others must be found (unknown). The battery label tells you the voltage. The load label tells you the resistance. Current and power typically must be calculated. The first step in any circuit analysis is to clearly identify what you know and what you need to find.',
      sourceLesson: 'lesson-ch2-1-3',
    },
    {
      id: 'theory-ch2-reading-circuit',
      title: 'Reading a circuit before calculating',
      content: 'Before performing any calculation, read the circuit carefully. Note the voltage on the source, the resistance on the load, and whether the switch is open or closed. Identify the unknowns: typically current (I) and power (P). Choose the appropriate formula based on what you know and what you need to find. This systematic approach prevents mistakes and builds good habits.',
      sourceLesson: 'lesson-ch2-1-3',
    },
  ],
  quizzesUnlocked: ['quiz-ch2-circuit-reading'],
};
