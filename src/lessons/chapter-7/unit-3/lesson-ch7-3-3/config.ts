import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_7_METADATA, CH7_NODES } from '../../shared.ts';

export const lessonCh7_3_3: LessonConfig = {
  id: 'lesson-ch7-3-3',
  unitId: 'ch7-unit-3',
  title: 'AC to DC Conversion',
  description: 'Follow the signal path through an AC-to-DC conversion stage and understand how an AC source can power a DC-only load.',
  stageLabel: CHAPTER_7_METADATA.stageLabel,
  prerequisites: ['lesson-ch7-3-2'],
  conceptsIntroduced: [
    'AC-to-DC conversion',
    'DC loads may require conversion when AC is the only source available',
  ],
  initialNodes: CH7_NODES,
  initialCircuit: [
    {
      id: 'ac-1',
      type: 'ac-source',
      nodeA: 'n1',
      nodeB: 'n3',
      properties: { amplitude: 9, frequency: 60 },
      name: 'AC Source (9V, 60Hz)',
      position: { x: 150, y: 250 },
      rotation: 0,
    },
    {
      id: 'conv-1',
      type: 'ac-dc-converter',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: {},
      name: 'AC-to-DC Converter',
      position: { x: 325, y: 150 },
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
      text: 'The AC source on the left continuously alternates its voltage and current. On its own, this source cannot power a DC-only device directly — the device would receive alternating current where it needs steady, one-directional current. Inspect the AC source to observe its alternating output.',
      highlights: ['ac-1'],
    },
    {
      id: 'step-2',
      text: 'The AC-to-DC converter in the middle accepts AC input and produces DC output. It rectifies the alternating signal into a steady unidirectional output suitable for DC loads. Like the DC-to-AC converter in the previous lesson, this block is treated as a system abstraction at this level — AC goes in, DC comes out.',
      highlights: ['conv-1'],
    },
    {
      id: 'step-3',
      text: 'The DC load on the right receives steady DC current from the converter output. The full system chain is: AC source → AC-to-DC converter → DC load. This is the same principle used in wall adapters and chargers: household AC power is converted to the DC that electronic devices require.',
      highlights: ['res-1'],
      theoryCheck: {
        question: 'What system configuration correctly supplies DC power to a device when only an AC source is available?',
        choices: [
          { id: 'tc-a', label: 'AC source → DC load (direct connection, no converter)', isCorrect: false, explanation: 'A direct connection between an AC source and a DC-only load produces alternating current where steady current is needed. A conversion stage is required.' },
          { id: 'tc-b', label: 'AC source → AC-to-DC converter → DC load', isCorrect: true, explanation: 'Correct. The AC-to-DC converter bridges the type mismatch: it accepts AC and provides the DC that the load requires.' },
          { id: 'tc-c', label: 'AC source → DC-to-AC converter → DC load', isCorrect: false, explanation: 'A DC-to-AC converter goes the wrong direction — it converts DC to AC, not AC to DC. To power a DC load from AC you need an AC-to-DC converter.' },
        ],
        explanation: 'To power a DC load from an AC source, an AC-to-DC converter is placed between them: AC source → AC-to-DC converter → DC load.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A device that requires DC power is available only from an AC source. What is needed?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: ['Which conversion direction bridges AC source to DC load?'],
      choices: [
        { id: 'ch1-a', label: 'A DC-to-AC conversion stage', isCorrect: false, explanation: 'A DC-to-AC converter goes the wrong direction. It takes DC and produces AC. You need AC to become DC, not the other way around.' },
        { id: 'ch1-b', label: 'An AC-to-DC conversion stage between the source and the load', isCorrect: true, explanation: 'Correct. An AC-to-DC converter accepts AC from the source and outputs DC for the load, resolving the type incompatibility.' },
        { id: 'ch1-c', label: 'No conversion is needed if the voltage amplitude matches', isCorrect: false, explanation: 'Matching amplitude is not sufficient. A DC device requires unidirectional current. An AC source must be converted regardless of voltage level.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Which system correctly connects an AC source to a DC load?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: ['Trace the signal path from AC source to DC load and identify which conversion direction is needed.'],
      choices: [
        { id: 'ch2-a', label: 'AC source → DC-to-AC converter → DC load', isCorrect: false, explanation: 'A DC-to-AC converter converts in the wrong direction. The load would receive AC output, not DC.' },
        { id: 'ch2-b', label: 'AC source → AC-to-DC converter → DC load', isCorrect: true, explanation: 'Correct. The AC-to-DC converter accepts the AC source and produces the DC that the load needs. This is the correct signal chain.' },
        { id: 'ch2-c', label: 'AC source → DC load (direct connection is always fine)', isCorrect: false, explanation: 'Direct connection between mismatched source and load types causes compatibility problems. A conversion stage is required.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'AC-to-DC Conversion',
      content: 'An AC-to-DC converter (also called a rectifier) accepts alternating current input and produces steady direct current output. This allows an AC source to power a DC-only device. It is the principle behind wall adapters and power supplies used for electronic devices.',
    },
    {
      title: 'DC Loads from AC Sources',
      content: 'When only an AC source is available but a DC load must be powered, an AC-to-DC conversion stage is inserted in the signal chain: AC source → AC-to-DC converter → DC load. The converter resolves the type incompatibility between the source and load.',
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
      id: 'theory-ch7-ac-to-dc',
      title: 'AC-to-DC Conversion',
      content: 'An AC-to-DC converter accepts AC input and produces DC output. This is the principle used in wall adapters that power phones, laptops, and other electronics from household AC. The converter is a system block: AC goes in, DC comes out.',
      sourceLesson: 'lesson-ch7-3-3',
    },
  ],
  quizzesUnlocked: ['quiz-ch7-ac-to-dc-basics'],
};
