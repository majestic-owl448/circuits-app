import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_6_METADATA, CH6_NODES } from '../../shared.ts';

export const lessonCh6_2_1: LessonConfig = {
  id: 'lesson-ch6-2-1',
  unitId: 'ch6-unit-2',
  title: 'Meet the Capacitor',
  description: 'Be introduced to the capacitor as a new component that stores energy and changes behavior over time.',
  stageLabel: CHAPTER_6_METADATA.stageLabel,
  prerequisites: ['lesson-ch6-1-2'],
  conceptsIntroduced: [
    'capacitor',
    'storing electrical energy in the simplified model',
    'capacitor behavior changes over time',
  ],
  initialNodes: CH6_NODES,
  initialCircuit: [
    {
      id: 'bat-1',
      type: 'battery',
      nodeA: 'n1',
      nodeB: 'n3',
      properties: { voltage: 9 },
      name: 'Battery',
      position: { x: 150, y: 250 },
      rotation: 0,
    },
    {
      id: 'cap-1',
      type: 'capacitor',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: { capacitance: 0.001 },
      name: 'Capacitor',
      position: { x: 325, y: 150 },
      rotation: 0,
    },
    {
      id: 'sw-1',
      type: 'switch',
      nodeA: 'n2',
      nodeB: 'n4',
      properties: { isClosed: false },
      name: 'Switch',
      position: { x: 500, y: 250 },
      rotation: 0,
    },
    {
      id: 'res-1',
      type: 'resistor',
      nodeA: 'n3',
      nodeB: 'n4',
      properties: { resistance: 100 },
      name: 'Resistor',
      position: { x: 325, y: 350 },
      rotation: 0,
    },
  ],
  steps: [
    {
      id: 'step-1',
      text: 'Meet the capacitor — the two parallel lines in the circuit above. A capacitor stores electrical energy in the simplified model used here. It can accept charge from a source, and it can release that charge later.',
      highlights: ['cap-1'],
    },
    {
      id: 'step-2',
      text: 'Unlike a resistor (which just limits current) or a battery (which provides voltage), the capacitor\'s behavior depends on time. Its voltage builds up gradually as it accepts charge, rather than appearing all at once.',
      highlights: ['cap-1', 'res-1'],
    },
    {
      id: 'step-3',
      text: 'Close the switch to connect the battery. Watch the time timeline below — the capacitor voltage rises gradually while the current gradually falls. This is the capacitor "charging." The simulation shows how values change moment by moment.',
      requiredAction: { type: 'toggle-switch', componentId: 'sw-1', targetState: true },
      highlights: ['sw-1'],
      theoryCheck: {
        question: 'What is the key difference between a capacitor and a resistor in terms of time?',
        choices: [
          { id: 'tc-a', label: 'A capacitor\'s behavior depends on time; a resistor responds instantly', isCorrect: true, explanation: 'Correct. Resistors respond instantly to voltage and current. Capacitors build up charge over time, making their behavior time-dependent.' },
          { id: 'tc-b', label: 'A resistor stores energy; a capacitor dissipates it', isCorrect: false, explanation: 'It is the other way around. Capacitors store energy; resistors dissipate it as heat.' },
          { id: 'tc-c', label: 'They behave identically in DC circuits', isCorrect: false, explanation: 'They behave very differently. A capacitor blocks DC once fully charged, while a resistor always allows current proportional to voltage.' },
        ],
        explanation: 'Capacitors are "time-aware" components. Their behavior unfolds over time rather than appearing instantly.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Which of the following best describes what a capacitor does in the simplified model used here?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: ['Think about what happens to its voltage over time when connected to a source.'],
      choices: [
        { id: 'ch1-a', label: 'It provides a fixed voltage like a battery', isCorrect: false, explanation: 'A battery actively provides voltage. A capacitor stores and releases charge — its voltage changes over time.' },
        { id: 'ch1-b', label: 'It gradually accepts charge from the source and stores it, with its voltage rising over time', isCorrect: true, explanation: 'Correct. A capacitor charges gradually, and its voltage rises as it accumulates charge.' },
        { id: 'ch1-c', label: 'It limits current like a resistor, but only at high voltages', isCorrect: false, explanation: 'A resistor limits current through opposition (V = IR). A capacitor\'s relationship with current is time-based, not voltage-threshold-based.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Which component in the circuit above is the capacitor?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-a' },
      hints: ['Look for the component with two parallel lines as its symbol.'],
      choices: [
        { id: 'ch2-a', label: 'The component labeled Capacitor with the parallel-line symbol at the top', isCorrect: true, explanation: 'Correct. The two parallel vertical lines are the standard capacitor symbol.' },
        { id: 'ch2-b', label: 'The component labeled Resistor at the bottom', isCorrect: false, explanation: 'The resistor uses a zigzag line symbol and limits current through opposition.' },
        { id: 'ch2-c', label: 'The component labeled Battery on the left', isCorrect: false, explanation: 'The battery provides voltage. The capacitor is the two-line symbol at the top of the circuit.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'What is a Capacitor?',
      content: 'A capacitor stores electrical energy in the simplified model. Unlike a resistor, its behavior is time-dependent: it accepts charge gradually when connected to a source, and its voltage rises as it charges.',
    },
  ],
  sandboxUnlocks: ['capacitor'],
  availableActions: ['toggle-switch'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  usesTimeControls: true,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-ch6-capacitor',
      title: 'What Is a Capacitor?',
      content: 'A capacitor stores electrical energy in the simplified model. Connected to a source, it accepts charge over time — its voltage gradually rises rather than appearing instantly. The symbol is two parallel lines.',
      sourceLesson: 'lesson-ch6-2-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch6-capacitor-basics'],
};
