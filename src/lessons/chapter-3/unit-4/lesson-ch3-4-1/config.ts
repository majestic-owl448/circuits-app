import type { LessonConfig } from '../../../../types/lesson.ts';
import { PARALLEL_NODES, PARALLEL_TWO_BULBS } from '../../../shared.ts';
import type { CircuitComponent } from '../../../../types/circuit.ts';

const circuit: CircuitComponent[] = PARALLEL_TWO_BULBS.map(c =>
  c.id === 'switch-1' ? { ...c, properties: { isClosed: true } } : c,
);

export const lessonCh3_4_1: LessonConfig = {
  id: 'lesson-ch3-4-1',
  unitId: 'ch3-unit-4',
  title: 'The Same Voltage Across Each Branch',
  description: 'Each parallel branch sees the full source voltage. Both bulbs receive the full 9V from the battery.',
  stageLabel: 'Early Intermediate',
  prerequisites: ['lesson-ch3-3-4'],
  conceptsIntroduced: ['branch voltage equality', 'same source voltage across each branch'],
  initialCircuit: circuit,
  initialNodes: PARALLEL_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'This parallel circuit has two branches, each containing a 45\u03A9 bulb. The switch is already closed, so current flows through both branches simultaneously.',
      highlights: ['bulb-1', 'bulb-2'],
      showCurrentOverlay: true,
    },
    {
      id: 'step-2',
      text: 'Look at how each branch is connected. Both branches connect directly between the same two junction nodes. This means each branch is wired straight across the battery terminals.',
      highlights: ['wire-1', 'wire-2', 'wire-3'],
    },
    {
      id: 'step-3',
      text: 'Because each branch connects directly to the source nodes, each branch sees the full battery voltage. The voltage across Bulb 1 is 9V, and the voltage across Bulb 2 is also 9V.',
      highlights: ['bulb-1', 'bulb-2', 'battery-1'],
      theoryCheck: {
        question: 'What is the voltage across each branch in this parallel circuit?',
        choices: [
          { id: 'tc-a', label: 'Each branch gets the full source voltage (9V)', isCorrect: true, explanation: 'Correct! In a parallel circuit, every branch connects across the same two nodes, so each sees the full battery voltage.' },
          { id: 'tc-b', label: 'The voltage is split equally between branches (4.5V each)', isCorrect: false, explanation: 'Voltage splitting happens in series circuits, not parallel. In parallel, each branch gets the full source voltage.' },
          { id: 'tc-c', label: 'Only the first branch gets voltage', isCorrect: false, explanation: 'Both branches are connected across the same nodes and both receive the full source voltage.' },
        ],
        explanation: 'In a parallel circuit, every branch is connected directly across the source terminals. This means each branch independently sees the full battery voltage.',
      },
    },
    {
      id: 'step-4',
      text: 'This is a key difference from series circuits. In series, the source voltage was divided among components. In parallel, every branch gets the full voltage. This has major implications for brightness and current, which we will explore next.',
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'The battery supplies 9V. What is the voltage across one parallel branch?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch-b' },
      hints: [
        'Each branch connects directly across the battery terminals.',
        'In parallel, branches share the same voltage.',
      ],
      choices: [
        { id: 'ch-a', label: '4.5V', isCorrect: false, explanation: '4.5V would result from splitting voltage in series. In parallel, each branch gets the full 9V.' },
        { id: 'ch-b', label: '9V', isCorrect: true, explanation: 'Correct! Each parallel branch sees the full source voltage of 9V.' },
        { id: 'ch-c', label: '18V', isCorrect: false, explanation: 'The voltage does not double. Each branch simply receives the full 9V from the battery.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Do the two parallel branches have the same or different voltage across them?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-a' },
      hints: [
        'Both branches connect between the same pair of junction nodes.',
        'Think about what it means to be directly across the same terminals.',
      ],
      choices: [
        { id: 'ch2-a', label: 'Same voltage', isCorrect: true, explanation: 'Correct! Both branches connect across the same two nodes, so they share the same voltage.' },
        { id: 'ch2-b', label: 'Different voltage', isCorrect: false, explanation: 'In a parallel circuit, all branches share the same two connection points and therefore have the same voltage across them.' },
        { id: 'ch2-c', label: 'It depends on the resistance', isCorrect: false, explanation: 'The voltage across parallel branches is always the same regardless of individual resistances. The voltage is set by the source.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Voltage in a parallel circuit',
      content: 'In a parallel circuit, every branch connects directly across the same two nodes (the source terminals). Because of this, each branch sees the full source voltage. For a 9V battery, every parallel branch has 9V across it, regardless of how many branches exist or what resistance each branch has.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch'],
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
    {
      formula: 'R_total = R\u2081 + R\u2082',
      symbols: [
        { symbol: 'R_total', name: 'Total resistance (series)', unit: 'ohms (\u03A9)' },
        { symbol: 'R\u2081', name: 'Resistance 1', unit: 'ohms (\u03A9)' },
        { symbol: 'R\u2082', name: 'Resistance 2', unit: 'ohms (\u03A9)' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-ch3-parallel-branch-voltage',
      title: 'Voltage in a parallel circuit',
      content: 'In a parallel circuit, every branch connects directly across the same two nodes. Because of this, each branch sees the full source voltage. For a 9V battery, every parallel branch has 9V across it, regardless of how many branches exist or what resistance each branch has. This contrasts with series circuits, where the voltage is divided among components.',
      sourceLesson: 'lesson-ch3-4-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch3-parallel-voltage'],
};
