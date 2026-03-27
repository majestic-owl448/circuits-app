import type { LessonConfig } from '../../../../types/lesson.ts';
import { STANDARD_NODES } from '../../../shared.ts';
import type { CircuitComponent } from '../../../../types/circuit.ts';

const circuit: CircuitComponent[] = [
  { id: 'battery-1', type: 'battery', nodeA: 'n1', nodeB: 'n4', properties: { voltage: 9 }, name: 'Battery', position: { x: 100, y: 200 }, rotation: 0 },
  { id: 'wire-1', type: 'wire', nodeA: 'n1', nodeB: 'n2', properties: {}, name: 'Wire', position: { x: 300, y: 100 }, rotation: 0 },
  { id: 'bulb-1', type: 'bulb', nodeA: 'n2', nodeB: 'n3', properties: { resistance: 45 }, name: 'Bulb', position: { x: 500, y: 200 }, rotation: 0 },
  { id: 'switch-1', type: 'switch', nodeA: 'n4', nodeB: 'n3', properties: { isClosed: true }, name: 'Switch', position: { x: 300, y: 400 }, rotation: 0 },
];

export const lessonCh2_4_3: LessonConfig = {
  id: 'lesson-ch2-4-3',
  unitId: 'ch2-unit-4',
  title: 'Rename and Reason',
  description: 'See that the circuit\'s own component labels can be used in reasoning and evaluation.',
  stageLabel: 'Early Intermediate',
  prerequisites: ['lesson-ch2-4-2'],
  conceptsIntroduced: ['custom component naming in lessons', 'circuit-specific reasoning language'],
  initialCircuit: circuit,
  initialNodes: STANDARD_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'Components have names like "Battery" and "Bulb." But you can rename them. If you rename the bulb to "Desk Lamp," the evaluation and breakdown will say "Desk Lamp" instead of "Bulb."',
      highlights: ['bulb-1'],
    },
    {
      id: 'step-2',
      text: 'Try thinking of this circuit as a real scenario: a 9V battery powering a desk lamp with 45\u03A9 resistance. The calculation stays the same \u2014 I = 9/45 = 0.2A \u2014 but the labels make it easier to reason about.',
    },
    {
      id: 'step-3',
      text: 'When the evaluation says "Current through Desk Lamp = 0.2A" instead of "Current through Bulb = 0.2A," the reasoning feels more connected to the real scenario. Labels do not change the math, but they change how you think about it.',
      theoryCheck: {
        question: 'What happens to the evaluation when you rename a component?',
        choices: [
          { id: 'tc-a', label: 'The evaluation uses the new name, but the calculated values stay the same', isCorrect: true, explanation: 'Correct! Renaming changes labels only, not the underlying calculation.' },
          { id: 'tc-b', label: 'The calculated values change to match the new name', isCorrect: false, explanation: 'Names do not affect calculations. Only the values (voltage, resistance) determine the results.' },
        ],
        explanation: 'Renaming a component updates the labels in the evaluation and breakdown but does not change any calculated values. The math depends on the numbers, not the names.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'After renaming "Bulb" to "Desk Lamp," the evaluation says "Current through Desk Lamp = 0.2A." What does this tell you about renaming?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: ['Think about whether the name affects the number or just the label.'],
      choices: [
        { id: 'ch1-a', label: 'Renaming changed the current to 0.2A', isCorrect: false, explanation: 'The current was already 0.2A. Renaming only changed the label, not the value.' },
        { id: 'ch1-b', label: 'Renaming updated the label but the value stayed 0.2A', isCorrect: true, explanation: 'Correct! The name in the evaluation changed, but the calculated current remained the same.' },
        { id: 'ch1-c', label: 'Renaming broke the evaluation', isCorrect: false, explanation: 'Renaming does not break anything. The evaluation works the same with any valid name.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'A breakdown says "R = 45\u03A9 (from Desk Lamp)." Which component does this refer to?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-a' },
      hints: ['The label "Desk Lamp" is a custom name given to one of the components.'],
      choices: [
        { id: 'ch2-a', label: 'The bulb that was renamed to "Desk Lamp"', isCorrect: true, explanation: 'Correct! The breakdown uses the component\'s current name. "Desk Lamp" is the renamed bulb.' },
        { id: 'ch2-b', label: 'A new component called "Desk Lamp"', isCorrect: false, explanation: 'No new component was added. "Desk Lamp" is just the bulb with a custom name.' },
        { id: 'ch2-c', label: 'The battery', isCorrect: false, explanation: 'The battery provides voltage, not resistance. The 45\u03A9 resistance belongs to the load (the renamed bulb).' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Custom component naming',
      content: 'You can rename any component. The evaluation and detailed breakdown will use the new name, making it easier to connect calculations to real scenarios. The calculated values do not change.',
    },
  ],
  sandboxUnlocks: ['custom-naming-surfaced'],
  availableActions: ['toggle-switch', 'drag-to-place', 'connect-wire', 'delete-component', 'rename-component'],
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
  theoryPageAdditions: [],
  quizzesUnlocked: [],
};
