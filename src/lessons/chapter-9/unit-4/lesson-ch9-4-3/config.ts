import type { LessonConfig } from '../../../../types/lesson.ts';
import { CH9_GATE_NODES } from '../../shared.ts';

export const lessonCh9_4_3: LessonConfig = {
  id: 'lesson-ch9-4-3',
  unitId: 'ch9-unit-4',
  title: 'Inputs, Outputs, and System Behavior',
  description: 'Practice system-level thinking: trace inputs all the way through a small logic circuit to its output, and learn to diagnose a wrong-gate error by exposing the behavioral difference.',
  stageLabel: 'Introductory System Design',
  prerequisites: ['lesson-ch9-4-2'],
  conceptsIntroduced: [
    'system-level logic behavior',
    'tracing inputs through a small design',
    'debugging logic paths',
  ],
  initialNodes: CH9_GATE_NODES,
  initialCircuit: [
    {
      id: 'or-1',
      type: 'or-gate',
      nodeA: 'g1',
      nodeB: 'g2',
      properties: { inputA: true, inputB: false },
      name: 'OR Gate',
      position: { x: 300, y: 250 },
      rotation: 0,
    },
  ],
  steps: [
    {
      id: 'step-1',
      text: 'System-level thinking means you do not inspect each gate in isolation. Instead, you trace inputs from their source all the way through every stage to the final output. For each stage, ask: given the inputs arriving here, what output does this gate produce? Then pass that output forward to the next stage. This tracing method works for any logic circuit, whether it has one gate or many.',
      highlights: ['or-1'],
    },
    {
      id: 'step-2',
      text: 'Consider this debugging scenario: a circuit is supposed to output HIGH only when both inputs are HIGH. But when tested, the circuit outputs HIGH whenever EITHER input is HIGH — even if only one is active. The circuit shown uses an OR gate. Tracing the behavior: OR outputs HIGH when at least one input is HIGH, which explains the wrong behavior. The selected gate does not match the required rule.',
      highlights: ['or-1'],
    },
    {
      id: 'step-3',
      text: 'Tracing the error confirms the diagnosis. The rule "output HIGH only when both are HIGH" maps to AND, not OR. The circuit currently uses OR, which outputs HIGH for any input being HIGH. Replacing OR with AND fixes the behavior: AND produces HIGH only when both inputs are HIGH, LOW otherwise. Changing the gate type is often the simplest fix for a wrong-gate bug.',
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'The circuit uses an OR gate but the rule requires output HIGH only when BOTH inputs are HIGH. Fix it by choosing the correct replacement gate.',
      type: 'fix',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: [
        'The current gate (OR) is too permissive — it outputs HIGH when any input is HIGH.',
        'You need a gate that is HIGH only when ALL inputs are HIGH.',
      ],
      choices: [
        {
          id: 'ch1-a',
          label: 'Replace OR with XOR — XOR only activates when inputs differ',
          isCorrect: false,
          explanation: 'XOR is HIGH when inputs differ (one HIGH, one LOW). When both inputs are HIGH, XOR outputs LOW — this does not match the required "both HIGH → output HIGH" rule.',
        },
        {
          id: 'ch1-b',
          label: 'Replace OR with AND — AND only activates when all inputs are HIGH',
          isCorrect: true,
          explanation: 'Correct. AND outputs HIGH exclusively when all inputs are HIGH, which is exactly the required rule. Replacing OR with AND fixes the behavioral mismatch.',
        },
        {
          id: 'ch1-c',
          label: 'Add a second OR gate in series — the combination of two OR gates produces AND-like behavior',
          isCorrect: false,
          explanation: 'Two OR gates in series do not produce AND behavior. The output of OR fed into another OR still follows OR logic. The correct fix is to replace the gate type, not add more of the same gate.',
        },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Which input combination would most clearly expose a wrong-gate bug in a system that uses OR instead of AND?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: [
        'Find a combination where OR and AND would produce different outputs.',
        'When both inputs are HIGH, OR and AND agree. When inputs differ, they may disagree.',
      ],
      choices: [
        {
          id: 'ch2-a',
          label: 'A=HIGH, B=HIGH — both OR and AND output HIGH, so no difference is visible',
          isCorrect: false,
          explanation: 'When both inputs are HIGH, OR and AND both output HIGH. This combination cannot expose the wrong-gate bug because the behavior appears identical.',
        },
        {
          id: 'ch2-b',
          label: 'A=HIGH, B=LOW — OR outputs HIGH but AND would output LOW, revealing the behavioral difference',
          isCorrect: true,
          explanation: 'Correct. With A=HIGH and B=LOW, OR outputs HIGH (at least one input is HIGH) but AND would output LOW (not all inputs are HIGH). This is the input combination that reveals the mismatch between the wrong gate (OR) and the required gate (AND).',
        },
        {
          id: 'ch2-c',
          label: 'A=LOW, B=LOW — both OR and AND output LOW, so no difference is visible',
          isCorrect: false,
          explanation: 'When both inputs are LOW, both OR and AND output LOW. This combination cannot expose the wrong-gate bug because the behavior appears identical.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'System-Level Logic Tracing',
      content: 'Reasoning about a small logic system means tracing the input states through every gate stage to the output. At each stage, apply the gate\'s rule to the inputs arriving at that stage. The result propagates to the next stage. This method exposes where a bug lives — the stage where the actual output diverges from the expected output.',
    },
    {
      title: 'Diagnosing Wrong-Gate Bugs',
      content: 'A wrong-gate bug occurs when the correct gate type was not selected for the design rule. The fix is usually straightforward: identify the rule, identify the gate that implements the rule, and replace the wrong gate with the correct one. Exposing the bug requires choosing a test input that produces different results for the wrong gate and the correct gate.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['inspect'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  usesTimeControls: false,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-ch9-small-logic-system',
      title: 'Reasoning about a small logic system',
      content: 'System-level thinking means tracing input states through each gate stage in sequence rather than inspecting gates in isolation. Each stage transforms the signal from the previous stage. When a system produces the wrong output, tracing the signal reveals exactly which stage contains the error. Choosing a test input that produces different results for the wrong gate versus the correct gate is the key technique for exposing wrong-gate bugs.',
      sourceLesson: 'lesson-ch9-4-3',
    },
  ],
  quizzesUnlocked: ['quiz-ch9-small-logic-system-basics'],
};
