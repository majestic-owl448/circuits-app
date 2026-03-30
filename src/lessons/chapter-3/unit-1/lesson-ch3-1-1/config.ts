import type { LessonConfig } from '../../../../types/lesson.ts';
import { SERIES_NODES, SERIES_TWO_BULBS } from '../../../shared.ts';

export const lessonCh3_1_1: LessonConfig = {
  id: 'lesson-ch3-1-1',
  unitId: 'ch3-unit-1',
  title: 'Add a Second Bulb',
  description: 'See that a second identical bulb can be added to the same path, creating a series circuit.',
  stageLabel: 'Early Intermediate',
  prerequisites: ['lesson-ch2-5-2'],
  conceptsIntroduced: ['multiple loads in one path', 'series as one continuous route', 'one-path structure'],
  initialCircuit: SERIES_TWO_BULBS,
  initialNodes: SERIES_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'Until now, every circuit had one battery and one bulb. But what happens when you add a second bulb to the same path? That is exactly what this circuit shows.',
      highlights: ['bulb-1', 'bulb-2'],
    },
    {
      id: 'step-2',
      text: 'Notice that the battery, both bulbs, and the switch are all connected in a single loop. There is only one path for current to follow. This arrangement is called a series circuit.',
    },
    {
      id: 'step-3',
      text: 'Close the switch to complete the circuit. Watch both bulbs \u2014 they should both light up because current can flow through the entire loop.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: true },
      highlights: ['switch-1'],
      showCurrentOverlay: true,
    },
    {
      id: 'step-4',
      text: 'Both bulbs are lit. Current leaves the battery, passes through Bulb 1, then through Bulb 2, through the switch, and back to the battery. One continuous path.',
      highlights: ['bulb-1', 'bulb-2'],
      showCurrentOverlay: true,
      theoryCheck: {
        question: 'What makes this circuit a series circuit?',
        choices: [
          { id: 'tc-a', label: 'All components are connected in a single loop with one path for current', isCorrect: true, explanation: 'Correct! In a series circuit, every component shares the same single path.' },
          { id: 'tc-b', label: 'The bulbs are placed next to each other', isCorrect: false, explanation: 'Physical placement does not determine the circuit type. What matters is whether the components share one path or have separate branches.' },
          { id: 'tc-c', label: 'The circuit has more than one bulb', isCorrect: false, explanation: 'Having multiple bulbs does not automatically make a circuit series. The bulbs could be on separate branches (parallel). Series means one shared path.' },
        ],
        explanation: 'A series circuit has all components connected end-to-end in a single loop. There is only one path for current to take, so it must flow through every component in order.',
      },
    },
    {
      id: 'step-5',
      text: 'You have just built your first series circuit. The key idea: one path, multiple loads. Every component in the loop must carry the same current. We will explore the consequences of this in the next lessons.',
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Which of the following describes a series circuit?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: [
        'Think about how many paths current can take.',
        'In a series circuit, there is only one loop.',
      ],
      choices: [
        { id: 'ch1-a', label: 'A circuit where each bulb has its own separate path from the battery', isCorrect: false, explanation: 'That describes a parallel circuit, not a series circuit.' },
        { id: 'ch1-b', label: 'A circuit where all components are connected in one single loop', isCorrect: true, explanation: 'Correct! Series means one path. Every component sits on the same loop.' },
        { id: 'ch1-c', label: 'A circuit that can only have one bulb', isCorrect: false, explanation: 'A series circuit can have multiple bulbs. The defining feature is one shared path, not the number of components.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'In this series circuit, what path does current take through both bulbs?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: [
        'Trace the path from the battery through each component.',
        'Current flows through one bulb and then the other in sequence.',
      ],
      choices: [
        { id: 'ch2-a', label: 'Current splits and goes through both bulbs at the same time', isCorrect: false, explanation: 'That would be a parallel circuit. In series, current does not split.' },
        { id: 'ch2-b', label: 'Current flows through Bulb 1 first, then through Bulb 2 in sequence', isCorrect: true, explanation: 'Correct! In a series circuit, current passes through each component one after the other along a single path.' },
        { id: 'ch2-c', label: 'Current only flows through Bulb 1 and skips Bulb 2', isCorrect: false, explanation: 'In a series circuit, current must pass through every component in the loop. It cannot skip any.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'What is a series circuit?',
      content: 'A series circuit connects all components end-to-end in a single loop. There is only one path for current to follow, so it must pass through every component in order. If any component is removed or the path is broken, the entire circuit stops working.',
    },
    {
      title: 'One path through multiple loads',
      content: 'When two or more loads (like bulbs) are placed in series, they share the same current path. The current that flows through the first bulb is the same current that flows through the second. This single-path structure is the defining feature of a series arrangement.',
    },
  ],
  sandboxUnlocks: ['second-bulb'],
  availableActions: ['toggle-switch', 'drag-to-place'],
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
      id: 'theory-ch3-series-intro',
      title: 'What is a series circuit?',
      content: 'A series circuit connects all components end-to-end in a single loop. There is only one path for current to follow, so it must pass through every component in order. If any component is removed or disconnected, the entire circuit stops working because the single path is broken.',
      sourceLesson: 'lesson-ch3-1-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch3-series-identification'],
};
