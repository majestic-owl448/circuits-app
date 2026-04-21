import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_9_METADATA, CH9_COMPARISON_NODES } from '../../shared.ts';

export const lessonCh9_3_1: LessonConfig = {
  id: 'lesson-ch9-3-1',
  unitId: 'ch9-unit-3',
  title: 'Meet NAND and NOR',
  description: 'Discover NAND and NOR — the inverted counterparts of AND and OR. Inversion can be combined with multi-input logic.',
  stageLabel: CHAPTER_9_METADATA.stageLabel,
  prerequisites: ['lesson-ch9-2-5'],
  conceptsIntroduced: [
    'NAND gate',
    'NOR gate',
    'inversion can be combined with multi-input logic',
  ],
  initialNodes: CH9_COMPARISON_NODES,
  initialCircuit: [
    {
      id: 'nand-gate-1',
      type: 'nand-gate',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: { inputA: false, inputB: false },
      name: 'NAND',
      position: { x: 210, y: 200 },
      rotation: 0,
    },
    {
      id: 'nor-gate-1',
      type: 'nor-gate',
      nodeA: 'n3',
      nodeB: 'n4',
      properties: { inputA: false, inputB: false },
      name: 'NOR',
      position: { x: 590, y: 200 },
      rotation: 0,
    },
  ],
  steps: [
    {
      id: 'step-1',
      text: 'NAND is AND followed by NOT. Take the AND output and invert it. The NAND truth table: A=0,B=0→1 | A=1,B=0→1 | A=0,B=1→1 | A=1,B=1→0. Every AND output is flipped. Where AND was HIGH (only A=1,B=1), NAND is LOW. Where AND was LOW (all other combinations), NAND is HIGH.',
      highlights: ['nand-gate-1'],
    },
    {
      id: 'step-2',
      text: 'NOR is OR followed by NOT. Take the OR output and invert it. The NOR truth table: A=0,B=0→1 | A=1,B=0→0 | A=0,B=1→0 | A=1,B=1→0. Every OR output is flipped. Where OR was HIGH (any input HIGH), NOR is LOW. Where OR was LOW (all inputs LOW), NOR is HIGH.',
      highlights: ['nor-gate-1'],
    },
    {
      id: 'step-3',
      text: 'NAND and NOR are the "inverted" versions of AND and OR. Their truth tables are exact complements — every HIGH becomes LOW and every LOW becomes HIGH. This inversion is very useful in circuit design. In fact, NAND and NOR gates alone can implement any logic function — they are called universal gates.',
      highlights: ['nand-gate-1', 'nor-gate-1'],
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A NAND gate has inputs A=HIGH, B=HIGH. What is the output?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: ['NAND inverts AND. First determine what AND would produce, then invert it.'],
      choices: [
        {
          id: 'ch1-a',
          label: 'HIGH — NAND behaves the same as AND when both inputs are HIGH',
          isCorrect: false,
          explanation: 'NAND inverts AND. AND with both inputs HIGH produces HIGH, so NAND inverts that to LOW.',
        },
        {
          id: 'ch1-b',
          label: 'LOW — NAND inverts AND, so the only case where AND is HIGH becomes LOW in NAND',
          isCorrect: true,
          explanation: 'Correct. AND(HIGH, HIGH) = HIGH, then NOT(HIGH) = LOW. NAND output is LOW when both inputs are HIGH.',
        },
        {
          id: 'ch1-c',
          label: 'The output is the same as OR for this input combination',
          isCorrect: false,
          explanation: 'OR(HIGH, HIGH) = HIGH, which is the opposite of what NAND produces here. NAND output is LOW.',
        },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'A NOR gate has inputs A=LOW, B=LOW. What is the output?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: ['NOR inverts OR. First determine what OR would produce, then invert it.'],
      choices: [
        {
          id: 'ch2-a',
          label: 'LOW — NOR is always LOW when inputs are LOW',
          isCorrect: false,
          explanation: 'NOR inverts OR. OR(LOW, LOW) = LOW, then NOT(LOW) = HIGH. NOR output is HIGH when all inputs are LOW.',
        },
        {
          id: 'ch2-b',
          label: 'HIGH — NOR inverts OR, so the only case where OR is LOW (all inputs LOW) becomes HIGH in NOR',
          isCorrect: true,
          explanation: 'Correct. OR(LOW, LOW) = LOW, then NOT(LOW) = HIGH. NOR produces HIGH only when all inputs are LOW.',
        },
        {
          id: 'ch2-c',
          label: 'The output is the same as AND for this combination',
          isCorrect: false,
          explanation: 'AND(LOW, LOW) = LOW, but NOR(LOW, LOW) = HIGH. They differ for this combination.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'What are NAND and NOR?',
      content: 'NAND is AND with its output inverted. NOR is OR with its output inverted. Their truth tables are exact complements of AND and OR respectively — every output is flipped. NAND output is LOW only when all inputs are HIGH (where AND is HIGH). NOR output is HIGH only when all inputs are LOW (where OR is LOW). NAND and NOR are called universal gates because any logic function can be built from NAND gates alone, or from NOR gates alone.',
    },
  ],
  sandboxUnlocks: ['nand-gate', 'nor-gate'],
  availableActions: ['inspect'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  usesTimeControls: false,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-ch9-nand-nor',
      title: 'What are NAND and NOR?',
      content: 'NAND = AND + NOT (output inverted). NOR = OR + NOT (output inverted). NAND output is LOW only when all inputs are HIGH. NOR output is HIGH only when all inputs are LOW. Both are universal gates — any logic circuit can be built from only NAND gates or only NOR gates.',
      sourceLesson: 'lesson-ch9-3-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch9-nand-and-nor-basics'],
};
