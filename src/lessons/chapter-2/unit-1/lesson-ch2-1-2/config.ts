import type { LessonConfig } from '../../../../types/lesson.ts';
import { STANDARD_NODES } from '../../../shared.ts';
import type { CircuitComponent } from '../../../../types/circuit.ts';

const circuit: CircuitComponent[] = [
  { id: 'battery-1', type: 'battery', nodeA: 'n1', nodeB: 'n4', properties: { voltage: 9 }, name: 'Battery', position: { x: 100, y: 200 }, rotation: 0 },
  { id: 'wire-1', type: 'wire', nodeA: 'n1', nodeB: 'n2', properties: {}, name: 'Wire', position: { x: 300, y: 100 }, rotation: 0 },
  { id: 'bulb-1', type: 'bulb', nodeA: 'n2', nodeB: 'n3', properties: { resistance: 45 }, name: 'Bulb', position: { x: 500, y: 200 }, rotation: 0 },
  { id: 'switch-1', type: 'switch', nodeA: 'n4', nodeB: 'n3', properties: { isClosed: false }, name: 'Switch', position: { x: 300, y: 400 }, rotation: 0 },
];

export const lessonCh2_1_2: LessonConfig = {
  id: 'lesson-ch2-1-2',
  unitId: 'ch2-unit-1',
  title: 'The Load Has a Resistance',
  description: 'See an explicit resistance value on the load and understand that the load can also be described numerically.',
  stageLabel: 'Beginner to Early Intermediate',
  prerequisites: ['lesson-ch2-1-1'],
  conceptsIntroduced: ['load resistance as a numeric value', 'units for resistance', 'source and load have different kinds of quantities'],
  initialCircuit: circuit,
  initialNodes: STANDARD_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'In the previous lesson, you saw the battery labeled with 9V. Now look at the bulb — it shows "45Ω" below its name. This is the bulb\'s resistance: 45 ohms.',
      highlights: ['bulb-1'],
    },
    {
      id: 'step-2',
      text: 'Resistance is measured in ohms (symbol: Ω). The bulb resists the flow of current. A higher resistance means less current flows for the same voltage. 45 ohms is the bulb\'s specific opposition to current.',
      highlights: ['bulb-1'],
    },
    {
      id: 'step-3',
      text: 'Notice that the battery shows a voltage value (9V) and the bulb shows a resistance value (45Ω). These are different kinds of quantities. The source provides voltage; the load has resistance.',
      highlights: ['battery-1', 'bulb-1'],
    },
    {
      id: 'step-4',
      text: 'Close the switch to see the circuit work. The 9-volt push drives current through the 45-ohm load.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: true },
      highlights: ['switch-1'],
      showCurrentOverlay: true,
      theoryCheck: {
        question: 'What unit is resistance measured in?',
        choices: [
          { id: 'tc-a', label: 'Volts', isCorrect: false, explanation: 'Volts measure voltage, not resistance.' },
          { id: 'tc-b', label: 'Ohms (Ω)', isCorrect: true, explanation: 'Correct! Resistance is measured in ohms, symbolized by the Greek letter omega (Ω).' },
          { id: 'tc-c', label: 'Amperes', isCorrect: false, explanation: 'Amperes measure current, not resistance.' },
        ],
        explanation: 'Resistance is measured in ohms (Ω). The "45Ω" label on the bulb means it has 45 ohms of resistance.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Which value belongs to the load (bulb) in this circuit?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: ['The load is the bulb. Look at the number displayed below its name.'],
      choices: [
        { id: 'ch1-a', label: '9V (voltage)', isCorrect: false, explanation: '9V is the voltage of the battery (source), not the bulb (load).' },
        { id: 'ch1-b', label: '45Ω (resistance)', isCorrect: true, explanation: 'Correct! The bulb has a resistance of 45 ohms. Resistance is the load\'s key quantity.' },
        { id: 'ch1-c', label: '0.2A (current)', isCorrect: false, explanation: 'Current flows through the entire circuit — it is not a property of the load alone.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Which quantity uses the symbol R and is measured in ohms?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-c' },
      hints: ['R stands for resistance. Ohms (Ω) is the unit for this quantity.'],
      choices: [
        { id: 'ch2-a', label: 'Voltage', isCorrect: false, explanation: 'Voltage uses the symbol V and is measured in volts.' },
        { id: 'ch2-b', label: 'Current', isCorrect: false, explanation: 'Current uses the symbol I and is measured in amperes.' },
        { id: 'ch2-c', label: 'Resistance', isCorrect: true, explanation: 'Correct! Resistance (R) is measured in ohms (Ω).' },
        { id: 'ch2-d', label: 'Power', isCorrect: false, explanation: 'Power uses the symbol P and is measured in watts.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Resistance as a measured quantity',
      content: 'Resistance tells you how much the load opposes the flow of current. When we write "45Ω" on a bulb, it means the bulb has exactly 45 ohms of resistance.',
    },
    {
      title: 'Units for resistance',
      content: 'Resistance is measured in ohms, symbolized by the Greek letter omega (Ω). The formula symbol is R.',
    },
  ],
  sandboxUnlocks: ['numeric-resistance-display'],
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
      id: 'theory-ch2-resistance-measured',
      title: 'Resistance as a measured quantity',
      content: 'Resistance tells you how much the load opposes the flow of current. When we write "45Ω" on a bulb, it means the bulb has exactly 45 ohms of resistance. A higher number means more opposition — less current will flow for the same voltage. Resistance is a fixed property of the component in our ideal model.',
      sourceLesson: 'lesson-ch2-1-2',
    },
    {
      id: 'theory-ch2-resistance-units',
      title: 'Units for resistance',
      content: 'Resistance is measured in ohms, symbolized by the Greek letter omega (Ω). Named after Georg Simon Ohm, the ohm is the standard unit for electrical resistance. In formulas, R represents resistance. When you see "45Ω" on a bulb, you know it opposes current with 45 ohms of resistance.',
      sourceLesson: 'lesson-ch2-1-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch2-resistance-values'],
};
