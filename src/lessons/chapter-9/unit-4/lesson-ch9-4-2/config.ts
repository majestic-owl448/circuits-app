import type { LessonConfig } from '../../../../types/lesson.ts';

const CH9_CHAIN_NODES = [
  { id: 'g1', position: { x: 150, y: 250 } },
  { id: 'g2', position: { x: 350, y: 250 } },
  { id: 'g3', position: { x: 550, y: 250 } },
];

export const lessonCh9_4_2: LessonConfig = {
  id: 'lesson-ch9-4-2',
  unitId: 'ch9-unit-4',
  title: 'Combine Two Gates',
  description: 'Discover how connecting the output of one gate to the input of another builds more complex logic behavior from simple pieces.',
  stageLabel: 'Introductory System Design',
  prerequisites: ['lesson-ch9-4-1'],
  conceptsIntroduced: [
    'gate composition',
    'output of one stage feeds another stage',
    'larger logic from smaller pieces',
  ],
  initialNodes: CH9_CHAIN_NODES,
  initialCircuit: [
    {
      id: 'and-1',
      type: 'and-gate',
      nodeA: 'g1',
      nodeB: 'g2',
      properties: { inputA: false, inputB: false },
      name: 'AND (Stage 1)',
      position: { x: 220, y: 250 },
      rotation: 0,
    },
    {
      id: 'not-1',
      type: 'not-gate',
      nodeA: 'g2',
      nodeB: 'g3',
      properties: { inputA: false },
      name: 'NOT (Stage 2)',
      position: { x: 420, y: 250 },
      rotation: 0,
    },
  ],
  steps: [
    {
      id: 'step-1',
      text: 'Gates do not have to work in isolation. The output of one gate can become the input of the next. This chaining — called gate composition — lets you build more complex logic behavior from simple building blocks. The circuit shown here has two stages: an AND gate (Stage 1) followed by a NOT gate (Stage 2). The output of the AND feeds directly into the NOT.',
      highlights: ['and-1', 'not-1'],
    },
    {
      id: 'step-2',
      text: 'Trace the behavior through both stages. AND (Stage 1) produces HIGH only when both of its inputs are HIGH. NOT (Stage 2) inverts whatever it receives from Stage 1. So the combined output is HIGH when the AND stage produces LOW (i.e., when at least one input is LOW), and LOW only when the AND stage produces HIGH (i.e., when both inputs are HIGH). This combined AND → NOT behavior is exactly what a NAND gate does.',
      highlights: ['and-1', 'not-1'],
    },
    {
      id: 'step-3',
      text: 'Gate composition gives designers flexibility. Instead of requiring a NAND gate as a single built-in component, a designer can construct the same behavior from an AND gate and a NOT gate. This also generalizes: any compound behavior can be decomposed into a chain of primitive gates, and any chain of primitive gates implements a compound behavior. Understanding the composition principle is foundational to reading and designing logic diagrams.',
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Connect an AND gate followed by a NOT gate to create NAND-like behavior. Both gates must be present and the output of the AND must feed into the NOT.',
      type: 'build',
      evaluationCriteria: { topologyCheck: 'complete' },
      hints: [
        'Place the AND gate first — its output node connects to the NOT gate\'s input node.',
        'The NOT gate\'s output is the final output of the combined system.',
        'Both components must be connected in series for NAND-like behavior.',
      ],
      availableComponents: ['and-gate', 'not-gate', 'wire'],
    },
    {
      id: 'challenge-2',
      prompt: 'Why is a single AND gate insufficient for a design rule that requires "all inputs HIGH → output LOW"?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: [
        'Think about what AND produces when all inputs are HIGH.',
        'The design rule requires the output to be LOW in that case — not HIGH.',
      ],
      choices: [
        {
          id: 'ch2-a',
          label: 'AND gates cannot accept more than one input, so the rule cannot be expressed at all',
          isCorrect: false,
          explanation: 'AND gates accept two (or more) inputs. The limitation is not the number of inputs — it is that AND produces HIGH when all inputs are HIGH, which is the opposite of the required output.',
        },
        {
          id: 'ch2-b',
          label: 'AND produces HIGH when all inputs are HIGH, but the rule requires LOW in that case — an AND+NOT combination (or NAND) is needed to invert the result',
          isCorrect: true,
          explanation: 'Correct. AND alone is insufficient because it outputs HIGH when all inputs are HIGH, which is the exact condition where the rule requires LOW. Adding a NOT stage (or using a NAND gate directly) inverts the AND result to match the rule.',
        },
        {
          id: 'ch2-c',
          label: 'AND gates are only suitable for analog circuits — a different gate family is needed for this digital rule',
          isCorrect: false,
          explanation: 'AND gates are fully applicable in digital-style circuits. The issue is simply that AND alone produces the wrong output for this rule. Composing AND with NOT fixes the behavior.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Gate Composition',
      content: 'The output of one gate can feed directly into the input of the next. This creates a chain where each stage transforms the signal from the previous stage. The final output reflects the combined transformation of all stages. This composability is a fundamental property of logic gates — complex behavior can always be built from simpler gates.',
    },
    {
      title: 'AND + NOT Equals NAND Behavior',
      content: 'Connecting an AND gate to a NOT gate in series produces the same truth table as a NAND gate: the output is LOW only when all inputs are HIGH, and HIGH otherwise. This demonstrates that built-in compound gates (like NAND) are not strictly necessary — they can always be constructed from primitive gates using composition.',
    },
  ],
  sandboxUnlocks: ['multi-gate-design'],
  availableActions: ['inspect', 'drag-to-place', 'connect-wire'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  usesTimeControls: false,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-ch9-combining-gates',
      title: 'Combining gates into larger logic behavior',
      content: 'Gates can be chained so that the output of one stage becomes the input of the next. This gate composition principle means complex logic behavior is always buildable from simpler pieces. AND followed by NOT produces NAND behavior; OR followed by NOT produces NOR behavior. Any compound gate can be decomposed into a composition of primitive gates.',
      sourceLesson: 'lesson-ch9-4-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch9-multi-gate-basics'],
};
