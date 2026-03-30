import type { LessonConfig } from '../../../../types/lesson.ts';
import { PARALLEL_NODES, PARALLEL_TWO_BULBS } from '../../../shared.ts';

export const lessonCh3_3_1: LessonConfig = {
  id: 'lesson-ch3-3-1',
  unitId: 'ch3-unit-3',
  title: 'See a Parallel Structure',
  description: 'Encounter your first explicit parallel circuit and recognize how it differs from a series arrangement.',
  stageLabel: 'Early Intermediate',
  prerequisites: ['lesson-ch3-2-4'],
  conceptsIntroduced: ['parallel means multiple paths', 'branch structure', 'same source with separate routes'],
  initialCircuit: PARALLEL_TWO_BULBS,
  initialNodes: PARALLEL_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'This circuit looks different from the series circuits you have been building. Instead of one continuous loop, you can see two separate branches running between the top and bottom rails. This is a parallel circuit.',
      highlights: ['bulb-1', 'bulb-2'],
    },
    {
      id: 'step-2',
      text: 'Look at node n2 on the top rail. This is where the path splits: current coming from the battery can go down through Bulb 1 or continue right to n3 and down through Bulb 2. The branches rejoin at node n5 on the bottom rail.',
      highlights: ['wire-1', 'wire-2', 'wire-3'],
    },
    {
      id: 'step-3',
      text: 'Close the switch to complete the circuit and let current flow through both branches.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: true },
      highlights: ['switch-1'],
    },
    {
      id: 'step-4',
      text: 'Both bulbs light up. Each bulb has its own path from the top rail to the bottom rail. Unlike a series circuit, the current does not have to pass through one bulb to reach the other.',
      highlights: ['bulb-1', 'bulb-2'],
      showCurrentOverlay: true,
    },
    {
      id: 'step-5',
      text: 'Compare this mentally to the series circuit you saw earlier. In series, there was one path and every component sat on it. Here, the two bulbs are on separate branches that share the same battery. That is the defining feature of a parallel circuit.',
      theoryCheck: {
        question: 'What makes this circuit parallel rather than series?',
        choices: [
          { id: 'tc-a', label: 'The two bulbs are on separate branches that share the same source', isCorrect: true, explanation: 'Correct! Parallel means multiple paths between the same two junctions, each carrying its own portion of the current.' },
          { id: 'tc-b', label: 'The circuit has two bulbs instead of one', isCorrect: false, explanation: 'Having two bulbs does not determine the type. Two bulbs in a single loop would be series. What matters is whether they are on separate branches.' },
          { id: 'tc-c', label: 'The switch is at the bottom of the circuit', isCorrect: false, explanation: 'Switch placement does not determine whether a circuit is series or parallel. The key is whether components share one path or have separate branches.' },
        ],
        explanation: 'A parallel circuit provides multiple paths between two junctions. Each branch can carry current independently, so the bulbs do not depend on each other to complete the circuit.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Which of the following circuits is a parallel arrangement?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: [
        'Look for a circuit where the path splits into separate branches.',
        'In parallel, each load has its own route from one rail to the other.',
      ],
      choices: [
        { id: 'ch1-a', label: 'Two bulbs connected end-to-end in a single loop', isCorrect: false, explanation: 'That describes a series circuit. Both bulbs share one path.' },
        { id: 'ch1-b', label: 'Two bulbs on separate branches that split from and rejoin the same junctions', isCorrect: true, explanation: 'Correct! Separate branches between common junctions is the hallmark of a parallel circuit.' },
        { id: 'ch1-c', label: 'Two batteries powering one bulb', isCorrect: false, explanation: 'Multiple batteries with one load is a different configuration. Parallel refers to multiple load paths, not multiple sources.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'In this parallel circuit, where does the current path split and where does it rejoin?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-a' },
      hints: [
        'Trace the path from the battery along the top rail.',
        'The split happens where one node connects to two different branches heading toward the bottom rail.',
      ],
      choices: [
        { id: 'ch2-a', label: 'It splits at node n2 and rejoins at node n5', isCorrect: true, explanation: 'Correct! At n2 the current can go through Bulb 1 or continue to n3 and through Bulb 2. Both paths meet again at n5.' },
        { id: 'ch2-b', label: 'It splits at the battery and rejoins at the switch', isCorrect: false, explanation: 'The battery and switch are part of the main loop. The branching happens at the junction nodes where the two bulb paths diverge and converge.' },
        { id: 'ch2-c', label: 'It splits at n1 and rejoins at n6', isCorrect: false, explanation: 'Nodes n1 and n6 connect the battery to the rails. The actual branching into separate bulb paths happens at n2 (split) and n5 (rejoin).' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'What is a parallel circuit?',
      content: 'A parallel circuit provides two or more separate paths for current between the same pair of junctions. Each branch operates alongside the others, sharing the same voltage source but carrying its own portion of the total current.',
    },
    {
      title: 'Branching and junctions',
      content: 'In a parallel circuit, junctions are the nodes where the current path splits or rejoins. At the splitting junction, current divides among the available branches. At the rejoining junction, the branch currents combine back into a single path before returning to the source.',
    },
  ],
  sandboxUnlocks: ['parallel-branching'],
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
      id: 'theory-ch3-parallel-intro',
      title: 'What is a parallel circuit?',
      content: 'A parallel circuit provides two or more separate paths for current between the same pair of junctions. Each branch operates alongside the others, sharing the same voltage source but carrying its own portion of the total current. Unlike series circuits, removing one branch does not break the others.',
      sourceLesson: 'lesson-ch3-3-1',
    },
    {
      id: 'theory-ch3-branching-junctions',
      title: 'Branching and junctions',
      content: 'Junctions are the nodes in a parallel circuit where current splits or recombines. At the splitting junction, current divides among available branches based on their resistances. At the rejoining junction, branch currents merge back into a single path before returning to the source.',
      sourceLesson: 'lesson-ch3-3-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch3-parallel-identification'],
};
