import type { LessonConfig } from '../../../../types/lesson.ts';
import { PARALLEL_NODES, PARALLEL_TWO_BULBS } from '../../../shared.ts';
import type { CircuitComponent } from '../../../../types/circuit.ts';

const parallelSwitchClosed: CircuitComponent[] = PARALLEL_TWO_BULBS.map(c =>
  c.id === 'switch-1' ? { ...c, properties: { isClosed: true } } : c
);

const parallelOneBranchBroken: CircuitComponent[] = parallelSwitchClosed.filter(
  c => c.id !== 'bulb-2'
);

export const lessonCh3_3_4: LessonConfig = {
  id: 'lesson-ch3-3-4',
  unitId: 'ch3-unit-3',
  title: 'If One Breaks, the Other Can Stay On',
  description: 'Discover that parallel branches function independently \u2014 removing one bulb does not stop the other from working.',
  stageLabel: 'Early Intermediate',
  prerequisites: ['lesson-ch3-3-3'],
  conceptsIntroduced: ['separate branches independent', 'one failed bulb does not stop the other'],
  initialCircuit: parallelSwitchClosed,
  initialNodes: PARALLEL_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'Both bulbs are lit in this parallel circuit. Each bulb sits on its own branch between the same two junctions. Let\u2019s explore what happens when one branch breaks.',
      highlights: ['bulb-1', 'bulb-2'],
      showCurrentOverlay: true,
    },
    {
      id: 'step-2',
      text: 'Imagine that Bulb 2 burns out or is removed. In a series circuit, that would break the only path and stop all current. But in a parallel circuit, Bulb 1 has its own complete path from n2 down to n5. It does not depend on Bulb 2 at all.',
      highlights: ['bulb-2'],
    },
    {
      id: 'step-3',
      text: 'With Bulb 2 gone, current still flows from the battery through n1, n2, Bulb 1, n5, the switch, n6, and back to the battery. Bulb 1 stays lit because its branch is still a complete circuit.',
      highlights: ['bulb-1'],
      showCurrentOverlay: true,
    },
    {
      id: 'step-4',
      text: 'This is one of the most important advantages of a parallel circuit: each branch operates independently. A failure in one branch does not affect the others. This is why household wiring uses parallel circuits \u2014 one light burning out does not turn off the rest.',
      theoryCheck: {
        question: 'Why does Bulb 1 stay lit when Bulb 2 is removed from a parallel circuit?',
        choices: [
          { id: 'tc-a', label: 'Bulb 1 has its own complete path through the battery, so it does not need Bulb 2', isCorrect: true, explanation: 'Correct! Each branch in a parallel circuit is a complete path. Removing one branch leaves the others intact.' },
          { id: 'tc-b', label: 'The battery increases its voltage to compensate', isCorrect: false, explanation: 'The battery voltage stays the same. Bulb 1 stays lit because its own path is still complete, not because of any voltage change.' },
          { id: 'tc-c', label: 'Current from Bulb 2 redirects into Bulb 1', isCorrect: false, explanation: 'While the total current from the battery does change, Bulb 1 stays lit because its branch is independently complete. It would work even if Bulb 2 had never been there.' },
        ],
        explanation: 'In a parallel circuit, each branch forms its own complete loop through the source. Removing one branch breaks only that path. The other branches remain fully functional because they do not depend on the removed one.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'What happens when one branch of a parallel circuit is opened (broken)?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: [
        'Think about whether the other branch still has a complete path.',
        'Each branch connects independently between the same junctions.',
      ],
      choices: [
        { id: 'ch1-a', label: 'The entire circuit stops working', isCorrect: false, explanation: 'That would happen in a series circuit. In parallel, the other branches still have their own complete paths.' },
        { id: 'ch1-b', label: 'The other bulb stays lit because it has its own complete path', isCorrect: true, explanation: 'Correct! Each parallel branch is independent. Breaking one does not affect the others.' },
        { id: 'ch1-c', label: 'Both bulbs get brighter', isCorrect: false, explanation: 'The remaining bulb stays at essentially the same brightness. It does not get brighter just because the other branch is broken.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Why can the second bulb remain on when the first bulb is removed?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: [
        'Consider what each branch needs to function.',
        'Does the second bulb\'s path depend on the first bulb in any way?',
      ],
      choices: [
        { id: 'ch2-a', label: 'The battery sends more current to compensate', isCorrect: false, explanation: 'The battery does not actively compensate. The second bulb stays on because its own branch is a complete circuit regardless of the first branch.' },
        { id: 'ch2-b', label: 'It has its own complete path through the battery that does not include the first bulb', isCorrect: true, explanation: 'Correct! In parallel, each branch is a self-contained path. The second bulb\'s path goes through n3, n4, the bottom rail, the switch, and the battery \u2014 none of which involves the first bulb.' },
        { id: 'ch2-c', label: 'The switch reroutes current to the working branch', isCorrect: false, explanation: 'The switch does not reroute anything. The second bulb\'s branch simply remains intact because it was never connected through the first bulb.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Parallel fault behavior',
      content: 'In a parallel circuit, each branch is an independent path through the source. If one branch is broken \u2014 by a burnt-out bulb, a disconnected wire, or an open switch \u2014 the other branches continue to operate normally. This independence is a key advantage of parallel wiring and the reason it is used in most household and industrial electrical systems.',
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
      id: 'theory-ch3-parallel-fault',
      title: 'Parallel fault behavior',
      content: 'In a parallel circuit, each branch is an independent path through the source. If one branch is broken \u2014 by a burnt-out bulb, a disconnected wire, or an open switch \u2014 the other branches continue to operate normally. This independence is a key advantage of parallel wiring and the reason it is used in most household and industrial electrical systems.',
      sourceLesson: 'lesson-ch3-3-4',
    },
  ],
  quizzesUnlocked: ['quiz-ch3-parallel-fault'],
};
