import type { LessonConfig } from '../../../../types/lesson.ts';
import { PARALLEL_NODES } from '../../../shared.ts';

export const lessonCh3_3_2: LessonConfig = {
  id: 'lesson-ch3-3-2',
  unitId: 'ch3-unit-3',
  title: 'Replicate the Parallel Circuit',
  description: 'Build your first parallel structure from scratch by copying a visible reference circuit.',
  stageLabel: 'Early Intermediate',
  prerequisites: ['lesson-ch3-3-1'],
  conceptsIntroduced: ['parallel replication', 'structural pattern recognition'],
  initialCircuit: [],
  initialNodes: PARALLEL_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'A reference parallel circuit is shown above the workspace. Your job is to recreate it from scratch using the empty node layout provided. You have a battery, two bulbs, a switch, and wires at your disposal.',
    },
    {
      id: 'step-2',
      text: 'Start by placing the battery between n1 and n6, then wire the top rail from n1 to n2 and on to n3. Place Bulb 1 between n2 and n5, and Bulb 2 between n3 and n4. Wire the bottom rail from n5 to n4 and add the switch between n6 and n5.',
    },
    {
      id: 'step-3',
      text: 'Once all components are placed and wired, close the switch to verify that both bulbs light up. If something is wrong, delete the misplaced component and try again.',
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Replicate the parallel circuit shown in the reference. Place all components so that two bulbs sit on separate branches between the same junctions.',
      type: 'build',
      evaluationCriteria: {
        circuitMustBeClosed: true,
        customCheck: 'has-parallel-bulbs',
      },
      availableComponents: ['battery', 'bulb', 'switch', 'wire'],
      hints: [
        'Place the battery between n1 and n6, then wire from n1 to n2.',
        'Bulb 1 goes between n2 and n5. Bulb 2 goes between n3 and n4. Wire n2 to n3 on top and n5 to n4 on the bottom.',
        'Do not forget the switch between n6 and n5 to complete the main loop.',
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Build the same parallel circuit again with fewer prompts. Use the node layout and your memory of the structure.',
      type: 'build',
      evaluationCriteria: {
        circuitMustBeClosed: true,
        customCheck: 'has-parallel-bulbs',
      },
      availableComponents: ['battery', 'bulb', 'switch', 'wire'],
      hints: [
        'Recall the pattern: battery on the left, two bulbs on separate vertical branches, wires on the top and bottom rails, switch on the bottom-left.',
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Building a parallel circuit',
      content: 'To build a parallel circuit, start with the source and main loop, then create branch points (junctions) where additional load paths split off and rejoin. Each branch must connect between the same two junctions so that every load receives the full source voltage.',
    },
  ],
  sandboxUnlocks: ['parallel-construction'],
  availableActions: ['toggle-switch', 'drag-to-place', 'connect-wire', 'delete-component'],
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
  theoryPageAdditions: [],
  quizzesUnlocked: ['quiz-ch3-branch-structure'],
};
