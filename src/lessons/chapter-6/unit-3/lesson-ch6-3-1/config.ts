import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_6_METADATA, CH6_NODES } from '../../shared.ts';

export const lessonCh6_3_1: LessonConfig = {
  id: 'lesson-ch6-3-1',
  unitId: 'ch6-unit-3',
  title: 'Meet the Inductor',
  description: 'Be introduced to the inductor as a new component that stores energy in a magnetic field and resists sudden changes in current.',
  stageLabel: CHAPTER_6_METADATA.stageLabel,
  prerequisites: ['lesson-ch6-2-4'],
  conceptsIntroduced: [
    'inductor',
    'inductor behavior changes over time',
    'inductor resists sudden changes in current',
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
      id: 'ind-1',
      type: 'inductor',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: { inductance: 1 },
      name: 'Inductor',
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
      text: 'Meet the inductor — the coil symbol in this circuit. An inductor stores energy in the simplified model used here. Unlike a capacitor (which stores voltage), an inductor stores energy by building up current through a magnetic field.',
      highlights: ['ind-1'],
    },
    {
      id: 'step-2',
      text: 'The key difference between an inductor and a resistor: the inductor resists sudden changes in current. When a switch first closes, an inductor opposes the immediate rush of current — it acts like an open circuit for that first instant.',
      highlights: ['ind-1', 'res-1'],
    },
    {
      id: 'step-3',
      text: 'Close the switch to connect the battery. Watch the time timeline below — the current rises gradually from zero while the inductor voltage falls. This is the inductor "building up" current. The simulation shows how values change moment by moment.',
      requiredAction: { type: 'toggle-switch', componentId: 'sw-1', targetState: true },
      highlights: ['sw-1'],
      theoryCheck: {
        question: 'What is the key difference between an inductor and a capacitor in terms of what changes over time?',
        choices: [
          { id: 'tc-a', label: 'A capacitor builds up voltage over time; an inductor builds up current over time', isCorrect: true, explanation: 'Correct. In an RC circuit, capacitor voltage rises gradually. In an RL circuit, current rises gradually. Both take time, but the quantity that changes is different.' },
          { id: 'tc-b', label: 'Both components build up the same quantity — they are interchangeable', isCorrect: false, explanation: 'Capacitors and inductors are not interchangeable. A capacitor stores voltage (opposes voltage change); an inductor stores current (opposes current change).' },
          { id: 'tc-c', label: 'An inductor responds instantly; a capacitor takes time', isCorrect: false, explanation: 'Both take time to respond. The inductor specifically resists sudden changes in current, causing current to rise gradually, not instantly.' },
        ],
        explanation: 'Inductors oppose sudden current changes — current builds gradually. Capacitors oppose sudden voltage changes — voltage builds gradually. Both are time-aware, but in different ways.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Which of the following best describes what an inductor does in the simplified model used here?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: ['Think about what quantity the inductor resists changing suddenly.'],
      choices: [
        { id: 'ch1-a', label: 'It stores charge and its voltage builds up gradually like a capacitor', isCorrect: false, explanation: 'That describes a capacitor. An inductor stores energy through current buildup, not voltage buildup.' },
        { id: 'ch1-b', label: 'It resists sudden changes in current — current builds up gradually after the switch closes', isCorrect: true, explanation: 'Correct. An inductor opposes abrupt current changes. Current rises from zero to its final value over time.' },
        { id: 'ch1-c', label: 'It limits current like a resistor but only for the first millisecond', isCorrect: false, explanation: 'An inductor is not just a time-limited resistor. Its behavior is fundamentally different: it stores energy and the time to reach steady state depends on L/R, not just on its value alone.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Right after a switch closes in an RL circuit, how does the inductor behave?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-c' },
      hints: ['The inductor opposes sudden current changes — what does that mean for current at t=0?'],
      choices: [
        { id: 'ch2-a', label: 'It acts like a short circuit, allowing maximum current immediately', isCorrect: false, explanation: 'That is how a capacitor behaves at t=0. An inductor does the opposite: it opposes the sudden rush of current.' },
        { id: 'ch2-b', label: 'It acts like a resistor, allowing current proportional to voltage', isCorrect: false, explanation: 'A resistor responds instantly. An inductor blocks the initial current surge and allows current to build gradually.' },
        { id: 'ch2-c', label: 'It acts like an open circuit, holding current at zero for that first instant', isCorrect: true, explanation: 'Correct. At t=0, the inductor appears as an open circuit — it holds current at zero and only lets it rise gradually.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'What is an Inductor?',
      content: 'An inductor stores energy in the simplified model. Unlike a capacitor (which stores voltage), an inductor stores energy through current. When first connected to a source, the inductor opposes sudden current changes — it acts as an open circuit at t=0 and allows current to rise gradually.',
    },
  ],
  sandboxUnlocks: ['inductor'],
  availableActions: ['toggle-switch'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  usesTimeControls: true,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-ch6-inductor',
      title: 'What Is an Inductor?',
      content: 'An inductor stores energy in the simplified model. It opposes sudden changes in current — at the moment of switch-on it acts as an open circuit (zero current), then current builds gradually. The symbol is a coil.',
      sourceLesson: 'lesson-ch6-3-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch6-inductor-basics'],
};
