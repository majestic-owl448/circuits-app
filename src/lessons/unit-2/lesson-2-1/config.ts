import type { LessonConfig } from '../../../types/lesson.ts';
import { STANDARD_CIRCUIT, STANDARD_NODES } from '../../shared.ts';

/** Circuit with the bulb removed so the learner sees a circuit missing its load. */
const circuitMissingBulb = STANDARD_CIRCUIT.filter((c) => c.id !== 'bulb-1');

export const lesson2_1: LessonConfig = {
  id: 'lesson-2-1',
  unitId: 'unit-2',
  title: 'Meet the Load',
  description: 'Understand that the bulb is not just "the thing that lights" but a load that uses electrical energy.',
  stageLabel: 'Beginner',
  prerequisites: ['lesson-1-3'],
  conceptsIntroduced: ['load', 'energy use in the bulb', 'light and heat as outputs of a load'],
  initialCircuit: STANDARD_CIRCUIT,
  initialNodes: STANDARD_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'You already know that the battery is the source of energy in the circuit. But what about the bulb? The bulb is more than just "the thing that lights up." It is the load — the component that uses the electrical energy provided by the source.',
      highlights: ['bulb-1'],
    },
    {
      id: 'step-2',
      text: 'When the circuit is closed and electricity flows, the bulb converts electrical energy into light and heat. That conversion is what makes it a load: it consumes energy from the source.',
      highlights: ['bulb-1', 'battery-1'],
    },
    {
      id: 'step-3',
      text: 'Close the switch to see the load in action.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: true },
      highlights: ['switch-1'],
    },
    {
      id: 'step-4',
      text: 'The bulb glows. It is actively using the energy that the battery provides. Without a load, the energy from the source would have nowhere useful to go.',
      highlights: ['bulb-1'],
      theoryCheck: {
        question: 'Which component in this circuit is the load?',
        choices: [
          { id: 'tc-a', label: 'The battery', isCorrect: false, explanation: 'The battery is the source — it provides energy, not uses it.' },
          { id: 'tc-b', label: 'The switch', isCorrect: false, explanation: 'The switch is a control element. It does not use energy in a meaningful way.' },
          { id: 'tc-c', label: 'The bulb', isCorrect: true, explanation: 'Correct! The bulb is the load. It converts electrical energy into light and heat.' },
        ],
        explanation: 'The load is the component that uses electrical energy. In this circuit, the bulb is the load because it converts electricity into light and heat.',
      },
    },
    {
      id: 'step-5',
      text: 'Open the switch again. Without current flowing, the load has no energy to use, and it stops producing light.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: false },
      highlights: ['switch-1'],
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Which component in a simple circuit is the load?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-c' },
      hints: [
        'The load is the component that uses energy. Which component produces light?',
      ],
      choices: [
        { id: 'ch1-a', label: 'The battery', isCorrect: false, explanation: 'The battery provides energy — it is the source, not the load.' },
        { id: 'ch1-b', label: 'The wire', isCorrect: false, explanation: 'Wires carry electricity but do not meaningfully use energy in this simple model.' },
        { id: 'ch1-c', label: 'The bulb', isCorrect: true, explanation: 'Correct! The bulb uses electrical energy to produce light and heat.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'This circuit has no load — the bulb is missing from the loop. Fix the circuit by placing the bulb so it can light.',
      type: 'fix',
      initialCircuit: circuitMissingBulb,
      initialNodes: STANDARD_NODES,
      evaluationCriteria: { circuitMustBeClosed: true, customCheck: 'has-bulb-in-loop' },
      hints: [
        'The bulb belongs in the loop between two nodes so electricity flows through it.',
        'Place the bulb between nodes n2 and n3 to complete the circuit.',
      ],
    },
  ],
  theoryContent: [
    {
      title: 'What is a load?',
      content: 'A load is any component that uses electrical energy. It converts electricity into another form of energy, such as light, heat, sound, or motion.',
    },
    {
      title: 'What the bulb is doing in the circuit',
      content: 'The bulb is the load in our simple circuit. When electricity flows through it, it converts electrical energy into visible light and heat. Without a load, the circuit has no useful purpose.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch', 'drag-to-place'],
  currentOverlayAvailable: false,
  showFormulaPanel: false,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-what-is-a-load',
      title: 'What is a load?',
      content: 'A load is any component that uses electrical energy. It converts electricity into another form of energy, such as light, heat, sound, or motion.',
      sourceLesson: 'lesson-2-1',
    },
    {
      id: 'theory-bulb-in-circuit',
      title: 'What the bulb is doing in the circuit',
      content: 'The bulb is the load in our simple circuit. When electricity flows through it, it converts electrical energy into visible light and heat. Without a load, the circuit has no useful purpose.',
      sourceLesson: 'lesson-2-1',
    },
  ],
  quizzesUnlocked: ['quiz-source-vs-load'],
};
