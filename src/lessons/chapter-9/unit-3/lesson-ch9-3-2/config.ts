import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_9_METADATA, CH9_GATE_NODES } from '../../shared.ts';

export const lessonCh9_3_2: LessonConfig = {
  id: 'lesson-ch9-3-2',
  unitId: 'ch9-unit-3',
  title: 'Meet XOR',
  description: 'Discover the XOR gate — it detects when inputs DIFFER. Output is HIGH when inputs are different, LOW when they are the same.',
  stageLabel: CHAPTER_9_METADATA.stageLabel,
  prerequisites: ['lesson-ch9-3-1'],
  conceptsIntroduced: [
    'XOR gate',
    'same vs different input states',
    'some gate behaviors are about comparison not just counting active inputs',
  ],
  initialNodes: CH9_GATE_NODES,
  initialCircuit: [
    {
      id: 'xor-gate-1',
      type: 'xor-gate',
      nodeA: 'g1',
      nodeB: 'g2',
      properties: { inputA: false, inputB: true },
      name: 'XOR Gate — inputs differ',
      position: { x: 325, y: 250 },
      rotation: 0,
    },
  ],
  steps: [
    {
      id: 'step-1',
      text: 'Imagine you have two sensors. You want an alarm only when they DISAGREE — one is on, the other is off. AND fails: it requires both on. OR fails: it also triggers when both are on simultaneously. What you need is a gate that is HIGH when inputs DIFFER and LOW when inputs are the SAME. That is XOR.',
      highlights: ['xor-gate-1'],
    },
    {
      id: 'step-2',
      text: 'XOR truth table: A=LOW,B=LOW→LOW (same), A=HIGH,B=LOW→HIGH (different), A=LOW,B=HIGH→HIGH (different), A=HIGH,B=HIGH→LOW (same). Notice the pattern: the output is HIGH only when the inputs are different from each other. When both are the same state — both LOW or both HIGH — the output is LOW.',
      highlights: ['xor-gate-1'],
    },
    {
      id: 'step-3',
      text: 'XOR is useful whenever you need to detect disagreement, difference, or change. Scenarios: detecting when two sensors give conflicting readings, checking whether a value has changed from a reference, or computing parity in data transmission. XOR asks a fundamentally different question from AND or OR — not "how many are active" but "are they the same?"',
      highlights: ['xor-gate-1'],
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'An XOR gate has inputs A=HIGH, B=HIGH. What is the output?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: ['XOR is HIGH when inputs DIFFER, LOW when they are the SAME. Are A and B the same here?'],
      choices: [
        {
          id: 'ch1-a',
          label: 'HIGH — both inputs being HIGH should produce HIGH in any gate',
          isCorrect: false,
          explanation: 'XOR is not about counting active inputs. It detects difference. Both HIGH means the inputs are the same, so XOR output is LOW.',
        },
        {
          id: 'ch1-b',
          label: 'LOW — XOR is LOW when inputs are the SAME (both HIGH here)',
          isCorrect: true,
          explanation: 'Correct. XOR output is LOW when both inputs are the same state. Both HIGH → same → LOW.',
        },
        {
          id: 'ch1-c',
          label: 'The output is undefined when both inputs are HIGH',
          isCorrect: false,
          explanation: 'XOR has a defined output for every combination. Both inputs HIGH → inputs are the same → output is LOW.',
        },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Which scenario is best solved by an XOR gate?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: ['XOR is about detecting difference or disagreement between two inputs, not about counting how many are active.'],
      choices: [
        {
          id: 'ch2-a',
          label: 'Activate an alarm when both sensors detect a problem simultaneously',
          isCorrect: false,
          explanation: 'Requiring both sensors active simultaneously is the AND rule, not XOR.',
        },
        {
          id: 'ch2-b',
          label: 'Detect when exactly one of two sensors is active (but not when both are on or both are off)',
          isCorrect: true,
          explanation: 'Correct. XOR is HIGH when inputs differ — exactly one active and one inactive. This is precisely the "disagreement detection" use case.',
        },
        {
          id: 'ch2-c',
          label: 'Activate an output when at least one sensor is active',
          isCorrect: false,
          explanation: 'Activating when at least one input is HIGH is the OR rule. XOR differs from OR because it does not activate when both inputs are simultaneously HIGH.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'What is XOR?',
      content: 'XOR (exclusive OR) takes two inputs and produces one output. The output is HIGH when the inputs DIFFER — one HIGH and one LOW. The output is LOW when both inputs are the SAME state — both HIGH or both LOW. XOR asks a comparison question: "are these two inputs different from each other?" It is useful for change detection, disagreement detection, and parity checking.',
    },
    {
      title: 'XOR vs OR: The Key Difference',
      content: 'OR and XOR both produce HIGH when at least one input is HIGH — except in one case: both inputs HIGH. OR(HIGH, HIGH) = HIGH. XOR(HIGH, HIGH) = LOW. This single difference makes XOR the right choice when you specifically need to detect that exactly one (but not both) inputs are active.',
    },
  ],
  sandboxUnlocks: ['xor-gate'],
  availableActions: ['inspect'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  usesTimeControls: false,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-ch9-xor',
      title: 'What is XOR?',
      content: 'XOR (exclusive OR) output is HIGH when its two inputs are different (one HIGH, one LOW). Output is LOW when both inputs are the same (both HIGH or both LOW). XOR detects disagreement between inputs and differs from OR only when both inputs are HIGH: OR(1,1)=HIGH but XOR(1,1)=LOW.',
      sourceLesson: 'lesson-ch9-3-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch9-xor-basics'],
};
