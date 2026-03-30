import type { LessonConfig } from '../../../../types/lesson.ts';
import { PARALLEL_NODES, PARALLEL_TWO_BULBS } from '../../../shared.ts';
import type { CircuitComponent } from '../../../../types/circuit.ts';

const parallelSwitchClosed: CircuitComponent[] = PARALLEL_TWO_BULBS.map(c =>
  c.id === 'switch-1' ? { ...c, properties: { isClosed: true } } : c
);

export const lessonCh3_3_3: LessonConfig = {
  id: 'lesson-ch3-3-3',
  unitId: 'ch3-unit-3',
  title: 'Current Splits, Then Rejoins',
  description: 'Observe how current splits at a junction, flows through separate branches, and rejoins before returning to the source.',
  stageLabel: 'Early Intermediate',
  prerequisites: ['lesson-ch3-3-2'],
  conceptsIntroduced: ['current splits at junction', 'current rejoins', 'multiple paths change behavior'],
  initialCircuit: parallelSwitchClosed,
  initialNodes: PARALLEL_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'This parallel circuit is already running. Turn on the current overlay to watch how current moves through the two branches.',
      showCurrentOverlay: true,
    },
    {
      id: 'step-2',
      text: 'At node n2, the current splits. Some flows down through Bulb 1 to n5, and some continues right through the wire to n3 and down through Bulb 2 to n4. The current divides between the two available paths.',
      highlights: ['bulb-1', 'bulb-2'],
      showCurrentOverlay: true,
    },
    {
      id: 'step-3',
      text: 'At node n5, the branch currents rejoin. The current that came through Bulb 1 and the current that came through Bulb 2 (via n4 and wire-3) merge back into a single stream that returns to the battery through the switch.',
      highlights: ['wire-3', 'switch-1'],
      showCurrentOverlay: true,
    },
    {
      id: 'step-4',
      text: 'This splitting and rejoining is the key behavior of a parallel circuit. The total current from the battery equals the sum of the branch currents. Each branch carries only a portion of the total.',
      showCurrentOverlay: true,
      theoryCheck: {
        question: 'What happens to the current at the splitting junction in a parallel circuit?',
        choices: [
          { id: 'tc-a', label: 'It divides among the available branches', isCorrect: true, explanation: 'Correct! At a junction, current splits so that each branch carries a portion of the total.' },
          { id: 'tc-b', label: 'It all flows through one branch and none through the other', isCorrect: false, explanation: 'If both branches are complete paths with finite resistance, current will flow through both. It does not choose only one.' },
          { id: 'tc-c', label: 'It doubles so each branch gets the full amount', isCorrect: false, explanation: 'Current is conserved. The total entering a junction equals the total leaving it. It cannot increase.' },
        ],
        explanation: 'At a junction in a parallel circuit, current divides among the branches. The amount each branch receives depends on its resistance. The total current entering the junction equals the sum of the branch currents leaving it.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Where does the current split in this parallel circuit?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: [
        'Follow the current from the battery along the top rail.',
        'The split happens at the node where two different paths lead downward.',
      ],
      choices: [
        { id: 'ch1-a', label: 'At the battery', isCorrect: false, explanation: 'The battery pushes current into the circuit, but the actual branching happens further along at the junction node.' },
        { id: 'ch1-b', label: 'At node n2, where current can go through Bulb 1 or continue to Bulb 2', isCorrect: true, explanation: 'Correct! Node n2 is the splitting junction where the single path divides into two branches.' },
        { id: 'ch1-c', label: 'At the switch', isCorrect: false, explanation: 'The switch is on the main return path. The splitting into branches happens at node n2.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Where does the current rejoin in this parallel circuit?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-a' },
      hints: [
        'Follow both branches downward and see where they meet.',
        'The rejoining junction is on the bottom rail.',
      ],
      choices: [
        { id: 'ch2-a', label: 'At node n5, where both branch currents merge before returning to the battery', isCorrect: true, explanation: 'Correct! Node n5 is the rejoining junction where the two branch currents combine back into one.' },
        { id: 'ch2-b', label: 'At the battery', isCorrect: false, explanation: 'Current does return to the battery, but the branches merge at node n5 first, before passing through the switch and back to the battery.' },
        { id: 'ch2-c', label: 'At node n4', isCorrect: false, explanation: 'Node n4 is the bottom of the Bulb 2 branch. The actual merging happens at n5, where both branch paths connect.' },
      ],
    },
    {
      id: 'challenge-3',
      prompt: 'Which best describes the current in the two branches of this parallel circuit?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch3-b' },
      hints: [
        'Think about what happens when current reaches a fork in the path.',
        'The total current is conserved \u2014 it does not increase at a junction.',
      ],
      choices: [
        { id: 'ch3-a', label: 'Each branch carries the full battery current', isCorrect: false, explanation: 'Current is conserved. The total splits between branches, so each branch carries only a portion.' },
        { id: 'ch3-b', label: 'The battery current splits so each branch carries a portion, and the portions add up to the total', isCorrect: true, explanation: 'Correct! The sum of all branch currents equals the total current from the battery. Current is conserved at every junction.' },
        { id: 'ch3-c', label: 'Only one branch carries current at a time', isCorrect: false, explanation: 'Both branches carry current simultaneously. That is the whole point of a parallel arrangement \u2014 multiple paths operating at once.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Current splitting and rejoining',
      content: 'In a parallel circuit, current from the source splits at the first junction and divides among the available branches. Each branch carries a portion of the total current determined by its resistance. At the rejoining junction, the branch currents add back together. The total current entering any junction always equals the total current leaving it.',
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
        { symbol: 'R_total', name: 'Total resistance', unit: 'ohms (\u03A9)' },
        { symbol: 'R\u2081', name: 'Resistance 1', unit: 'ohms (\u03A9)' },
        { symbol: 'R\u2082', name: 'Resistance 2', unit: 'ohms (\u03A9)' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-ch3-current-splitting',
      title: 'Current splitting and rejoining',
      content: 'In a parallel circuit, current splits at the first junction and divides among the available branches. Each branch carries a portion of the total current, determined by its resistance. At the rejoining junction the branch currents recombine. The total current entering any junction always equals the total current leaving it.',
      sourceLesson: 'lesson-ch3-3-3',
    },
  ],
  quizzesUnlocked: ['quiz-ch3-parallel-current'],
};
