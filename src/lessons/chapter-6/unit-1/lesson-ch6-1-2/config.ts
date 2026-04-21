import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_6_METADATA, CH6_NODES } from '../../shared.ts';

export const lessonCh6_1_2: LessonConfig = {
  id: 'lesson-ch6-1-2',
  unitId: 'ch6-unit-1',
  title: 'Initial State Versus Final State',
  description: 'Understand that some circuits must be described in terms of both what happens first and what happens later.',
  stageLabel: CHAPTER_6_METADATA.stageLabel,
  prerequisites: ['lesson-ch6-1-1'],
  conceptsIntroduced: [
    'initial state',
    'final state or steady-state condition',
    'same circuit can behave differently at different times',
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
      id: 'res-1',
      type: 'resistor',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: { resistance: 100 },
      name: 'Resistor',
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
      id: 'wire-1',
      type: 'wire',
      nodeA: 'n3',
      nodeB: 'n4',
      properties: { wireResistance: 0 },
      name: 'Wire',
      position: { x: 325, y: 350 },
      rotation: 0,
    },
  ],
  steps: [
    {
      id: 'step-1',
      text: 'Some circuits have two distinct stories to tell: what happens right after a switch is closed (the initial state) and what the circuit settles into after time passes (the final state, also called steady state).',
    },
    {
      id: 'step-2',
      text: 'For this resistive circuit, close the switch. The initial state and the final state are the same — both show exactly 90mA. Resistive circuits have no gap between "just after" and "long after."',
      requiredAction: { type: 'toggle-switch', componentId: 'sw-1', targetState: true },
      highlights: ['res-1'],
    },
    {
      id: 'step-3',
      text: 'When we add a capacitor or inductor in Unit 2, this will change. Right after the switch closes (initial state), values will be different from what they eventually become (final state). The circuit has a story that unfolds over time.',
      theoryCheck: {
        question: 'In a time-dependent circuit, when must you reason about both initial and final states?',
        choices: [
          { id: 'tc-a', label: 'Only when the circuit uses a battery', isCorrect: false, explanation: 'All circuits that store energy (with capacitors or inductors) require both initial and final state reasoning, not just those with batteries.' },
          { id: 'tc-b', label: 'Whenever the initial state differs from the final (steady) state', isCorrect: true, explanation: 'Correct. If a circuit has an energy-storage component, the initial and final states can differ and both matter.' },
          { id: 'tc-c', label: 'Never — only the final state matters for design', isCorrect: false, explanation: 'The initial state often matters just as much. For example, a design may need to limit the initial surge of current even if the final current is acceptable.' },
        ],
        explanation: 'Whenever a circuit changes over time, both the initial behavior and the final settled behavior are important to understand.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A circuit with a reactive component is switched on. The current is 300mA right after closing, then drops to 0mA after a long time. Which statement correctly identifies the initial and final states?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: ['The initial state is "right after switching." The final state is "after a long time."'],
      choices: [
        { id: 'ch1-a', label: 'Initial: 0mA. Final: 300mA.', isCorrect: false, explanation: 'The initial value is what occurs right after switching (300mA), not zero.' },
        { id: 'ch1-b', label: 'Initial: 300mA. Final: 0mA.', isCorrect: true, explanation: 'Correct. Right after switching the current is 300mA (initial state). After a long time it settles to 0mA (final state).' },
        { id: 'ch1-c', label: 'Initial and final are both 300mA.', isCorrect: false, explanation: 'If current drops to 0mA eventually, the initial and final states clearly differ.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Initial State vs Final State',
      content: 'In a time-dependent circuit, the initial state is what happens right after a switch changes. The final state (steady state) is what the circuit settles into after all transients have ended. Both states may have very different values.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['toggle-switch'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  usesTimeControls: true,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-ch6-initial-final',
      title: 'Initial vs Steady-State Reasoning',
      content: 'Time-dependent circuits require two snapshots: the initial state (right after a switch event) and the steady state (after all transients have ended). These can differ significantly in circuits with capacitors or inductors.',
      sourceLesson: 'lesson-ch6-1-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch6-initial-state-versus-final-state-reasoning'],
};
