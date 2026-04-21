import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_7_METADATA, CH7_NODES } from '../../shared.ts';

export const lessonCh7_5_2: LessonConfig = {
  id: 'lesson-ch7-5-2',
  unitId: 'ch7-unit-5',
  title: 'Mixed-System Design Challenge',
  description: 'Apply what you have learned: fix an AC-to-DC mismatch by inserting the correct conversion stage, and articulate why conversion is a required design decision.',
  stageLabel: CHAPTER_7_METADATA.stageLabel,
  prerequisites: ['lesson-ch7-5-1'],
  conceptsIntroduced: [
    'system design with multiple electrical domains',
    'correct conversion path as the key design decision',
  ],
  initialNodes: CH7_NODES,
  initialCircuit: [
    {
      id: 'ac-1',
      type: 'ac-source',
      nodeA: 'n1',
      nodeB: 'n3',
      properties: { amplitude: 9, frequency: 60 },
      name: 'AC Source',
      position: { x: 150, y: 250 },
      rotation: 0,
    },
    {
      id: 'res-1',
      type: 'resistor',
      nodeA: 'n2',
      nodeB: 'n4',
      properties: { resistance: 100 },
      name: 'DC Load',
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
      text: 'The circuit has an AC source on the left and a DC load on the right. The AC source provides alternating current, but the DC load requires steady, one-directional current. This is a source-type mismatch — the current type the source provides does not match what the load needs. As it stands, the system cannot operate correctly.',
      highlights: ['ac-1', 'res-1'],
    },
    {
      id: 'step-2',
      text: 'To fix this mismatch, you need to add the correct conversion stage between the AC source and the DC load. An AC-to-DC converter will accept alternating current from the source and deliver steady direct current to the load. Add the converter to complete the system correctly.',
      theoryCheck: {
        question: 'This system has an AC source and a DC load with nothing in between. What must be added to fix the design?',
        choices: [
          { id: 'tc-a', label: 'A resistor in series to limit the AC current reaching the DC load', isCorrect: false, explanation: 'A series resistor limits current but does not change its type. The DC load still receives alternating current — the type mismatch remains.' },
          { id: 'tc-b', label: 'An AC-to-DC converter between the source and the load to convert the current type', isCorrect: true, explanation: 'Correct. An AC-to-DC converter transforms alternating current into direct current, resolving the type mismatch and allowing the DC load to operate correctly.' },
          { id: 'tc-c', label: 'A DC-to-AC converter after the DC load to convert the output back to AC', isCorrect: false, explanation: 'Placing a converter after the load does not fix the mismatch. The load receives current before the converter — it still gets the wrong type.' },
        ],
        explanation: 'When an AC source must drive a DC load, an AC-to-DC converter placed between them converts the current type so the load receives what it requires.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'This system has an AC source connected directly to a DC load. Fix it by adding the correct conversion stage.',
      type: 'fix',
      evaluationCriteria: { topologyCheck: 'complete' },
      hints: [
        'The AC source provides alternating current. The DC load requires direct current.',
        'Select the converter type that transforms AC input into DC output.',
      ],
      availableComponents: ['ac-dc-converter', 'wire'],
    },
    {
      id: 'challenge-2',
      prompt: 'Which statement best describes when a conversion stage is part of good system design rather than an optional extra?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-c' },
      hints: ['Think about when conversion is required versus when it is unnecessary.'],
      choices: [
        { id: 'ch2-a', label: 'Always — every system should include at least one conversion stage for safety', isCorrect: false, explanation: 'Conversion is not universally required. When source and load types already match, no conversion is needed.' },
        { id: 'ch2-b', label: 'Only when the system includes both capacitors and inductors', isCorrect: false, explanation: 'The need for conversion depends on source and load types, not on the presence of reactive components.' },
        { id: 'ch2-c', label: 'When the source and load types do not match, conversion is required for the system to work correctly', isCorrect: true, explanation: 'Correct. Conversion is a required design element whenever there is a source-load type mismatch. It is not optional in that scenario — without it the system cannot function correctly.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Fixing Source-Load Type Mismatches',
      content: 'When an AC source must drive a DC load, an AC-to-DC converter is required between them. The converter changes the current type from alternating to direct, allowing the load to operate correctly. Without it, the load receives the wrong type of current.',
    },
    {
      title: 'Conversion as a Design Decision',
      content: 'In mixed-domain systems, identifying the source type and the load type is the first step. If they match, no conversion is needed. If they differ, the correct converter must be placed between them. This is a fundamental system design decision, not an optimization.',
    },
  ],
  sandboxUnlocks: [],
  availableActions: ['inspect', 'drag-to-place', 'connect-wire', 'delete-component'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  usesTimeControls: false,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-ch7-mixed-systems',
      title: 'Designing Mixed AC/DC Systems at an Introductory Level',
      content: 'Mixed AC/DC systems require careful identification of each domain boundary. At every point where AC meets DC (or DC meets AC), a conversion stage must be present. Identify the source type, identify the load type, and insert the appropriate converter whenever they do not match.',
      sourceLesson: 'lesson-ch7-5-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch7-mixed-ac-dc-system-design-basics'],
};
