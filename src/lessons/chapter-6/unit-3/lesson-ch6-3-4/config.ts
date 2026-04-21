import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_6_METADATA, CH6_NODES } from '../../shared.ts';

export const lessonCh6_3_4: LessonConfig = {
  id: 'lesson-ch6-3-4',
  unitId: 'ch6-unit-3',
  title: 'Inductor Energy Release',
  description: 'Understand that an inductor can release stored energy when the circuit changes, mirroring the capacitor discharge behavior from Lesson 2.4.',
  stageLabel: CHAPTER_6_METADATA.stageLabel,
  prerequisites: ['lesson-ch6-3-3'],
  conceptsIntroduced: [
    'inductor energy release in the simplified model',
    'inductor resists sudden current interruption',
    'comparison to capacitor discharge: both components release stored energy differently',
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
      properties: { isClosed: true },
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
      text: 'Move the time slider to "Late." The inductor is fully energized — current is at maximum (90mA) and the inductor voltage is zero. The inductor is holding its magnetic field, which represents stored energy.',
      highlights: ['ind-1'],
    },
    {
      id: 'step-2',
      text: 'Open the switch to interrupt the circuit. The inductor cannot let current stop instantly — it tries to maintain the current flow. When interrupted abruptly, the inductor attempts to push that current through any available path, producing a brief voltage spike.',
      requiredAction: { type: 'toggle-switch', componentId: 'sw-1', targetState: false },
      highlights: ['ind-1', 'sw-1'],
    },
    {
      id: 'step-3',
      text: 'Compare this to capacitor discharge from Lesson 2.4: both components release stored energy when the circuit changes. The key difference is what is stored — a capacitor stores voltage and releases it as falling voltage drives current. An inductor stores current and releases it as a collapsing magnetic field tries to maintain current flow.',
      theoryCheck: {
        question: 'How does inductor energy release differ from capacitor discharge?',
        choices: [
          { id: 'tc-a', label: 'A capacitor releases stored voltage; an inductor tries to maintain stored current', isCorrect: true, explanation: 'Correct. A capacitor holds voltage and drives current as that voltage falls. An inductor holds current in its magnetic field and tries to maintain that current when the circuit changes.' },
          { id: 'tc-b', label: 'They are identical \u2014 both release voltage in the same way', isCorrect: false, explanation: 'They both release energy, but the mechanisms differ. A capacitor releases stored voltage; an inductor tries to maintain stored current.' },
          { id: 'tc-c', label: 'Inductors do not release energy \u2014 only capacitors can do this', isCorrect: false, explanation: 'Inductors also store and release energy. They store it in a magnetic field (as current) rather than in an electric field (as voltage).' },
        ],
        explanation: 'Both capacitors and inductors store and release energy, but what is stored differs: capacitors store voltage (electric field), inductors store current (magnetic field).',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'What happens to an inductor when the current through it is suddenly interrupted (switch opens)?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: ['An inductor opposes sudden changes in current \u2014 what happens when you try to force a sudden stop?'],
      choices: [
        { id: 'ch1-a', label: 'Current immediately falls to zero and the inductor stops functioning', isCorrect: false, explanation: 'An inductor cannot let current stop instantly. It fights the change, creating a voltage spike to try to maintain current through any available path.' },
        { id: 'ch1-b', label: 'The inductor produces a voltage spike as it tries to maintain the interrupted current', isCorrect: true, explanation: 'Correct. When current is suddenly interrupted, the inductor fights the change by generating a voltage spike. This is why inductive circuits can be dangerous to switch off abruptly.' },
        { id: 'ch1-c', label: 'The inductor charges up like a capacitor and stores the voltage', isCorrect: false, explanation: 'Inductors do not charge up voltage like capacitors. They try to maintain current flow, which can cause a voltage spike but the mechanisms are different.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Which statement correctly describes the parallel between capacitor discharge and inductor energy release?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-a' },
      hints: ['Think about what each component stores and what it fights against when that stored quantity tries to change.'],
      choices: [
        { id: 'ch2-a', label: 'A capacitor fights sudden voltage changes (stores charge); an inductor fights sudden current changes (stores magnetic energy)', isCorrect: true, explanation: 'Correct. Both are energy-storage components, but they store different quantities and resist different types of sudden change.' },
        { id: 'ch2-b', label: 'Both components store voltage and release it as current when disconnected', isCorrect: false, explanation: 'Capacitors store voltage; inductors store current (in a magnetic field). They are fundamentally different in what they store and how they release it.' },
        { id: 'ch2-c', label: 'Only capacitors can be used to store and release energy; inductors only limit current', isCorrect: false, explanation: 'Inductors also store and release energy. Their energy release (trying to maintain current) can produce high-voltage spikes.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Inductor Energy Release in the Simplified Model',
      content: 'When a circuit carrying inductor current is suddenly interrupted, the inductor tries to maintain the current by generating a voltage spike. Both capacitors and inductors store and release energy, but what they store differs: capacitors store voltage; inductors store current.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  usesTimeControls: true,
  formulasShown: [
    {
      formula: '\u03c4 = L / R',
      symbols: [
        { symbol: '\u03c4', name: 'Time constant', unit: 's' },
        { symbol: 'L', name: 'Inductance', unit: 'H' },
        { symbol: 'R', name: 'Resistance', unit: '\u03a9' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-ch6-inductor-energy-release',
      title: 'Inductor Energy Release in the Simplified Model',
      content: 'When current in an inductor is suddenly interrupted, the collapsing magnetic field tries to maintain current flow, generating a voltage spike. Both capacitors and inductors are energy-storage components but store different quantities: capacitors store voltage, inductors store current.',
      sourceLesson: 'lesson-ch6-3-4',
    },
  ],
  quizzesUnlocked: ['quiz-ch6-inductor-energy-release-basics'],
};
