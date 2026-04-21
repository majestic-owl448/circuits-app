import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_7_METADATA, CH7_NODES } from '../../shared.ts';

export const lessonCh7_1_3: LessonConfig = {
  id: 'lesson-ch7-1-3',
  unitId: 'ch7-unit-1',
  title: 'A First Introductory AC Wave View',
  description: 'See AC behavior represented as a wave and understand what the zero crossing means for current direction.',
  stageLabel: CHAPTER_7_METADATA.stageLabel,
  prerequisites: ['lesson-ch7-1-2'],
  conceptsIntroduced: [
    'AC as a wave representation',
    'changing electrical behavior shown as a wave over time',
    'direction change visible in wave view',
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
      id: 'wire-1',
      type: 'wire',
      nodeA: 'n2',
      nodeB: 'n4',
      properties: { wireResistance: 0 },
      name: 'Wire',
      position: { x: 500, y: 250 },
      rotation: 0,
    },
    {
      id: 'wire-2',
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
      text: 'The timeline panel can show AC behavior as a wave: a line that rises and falls repeatedly over time. This wave representation is a convenient way to visualize how voltage and current change continuously in an AC circuit. Open the timeline panel now and observe the wave for this AC circuit.',
      showCurrentOverlay: true,
    },
    {
      id: 'step-2',
      text: 'Watch the wave carefully. When the wave is above the center line (positive values), current flows in one direction. When the wave dips below the center line (negative values), current flows in the opposite direction. The wave crossing the zero line is the moment the current reverses.',
      highlights: ['ac-1', 'res-1'],
      showCurrentOverlay: true,
    },
    {
      id: 'step-3',
      text: 'Every time the wave crosses zero, the electrical behavior changes direction. Contrast this with a DC source: a DC timeline would be a perfectly flat horizontal line — no crossing, no reversal, just a constant value. The wave format makes the repeating, alternating nature of AC immediately visible.',
      theoryCheck: {
        question: 'In the wave view of an AC circuit, what does crossing the zero line represent?',
        choices: [
          { id: 'tc-a', label: 'The circuit has been switched off', isCorrect: false, explanation: 'Crossing zero is a normal part of AC operation. It does not mean the circuit is off.' },
          { id: 'tc-b', label: 'The moment the current changes direction', isCorrect: true, explanation: 'Correct. When the wave crosses the zero line, the current reverses direction. This is the defining characteristic of AC.' },
          { id: 'tc-c', label: 'The peak voltage has been reached', isCorrect: false, explanation: 'Peak voltage occurs when the wave is at its highest or lowest point, not at the zero crossing.' },
        ],
        explanation: 'The zero crossing in an AC wave view marks the moment the current reverses direction.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'In a wave view of AC, where does the electrical behavior change direction?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: ['Look at the wave and identify what happens at the center horizontal line.'],
      choices: [
        { id: 'ch1-a', label: 'At the peak (highest point) of the wave', isCorrect: false, explanation: 'The peak is where the voltage or current reaches its maximum value, not where it changes direction. Direction changes at the zero crossing.' },
        { id: 'ch1-b', label: 'Where the wave crosses the zero line', isCorrect: true, explanation: 'Correct. The zero crossing is the point where current reverses direction. Above zero it flows one way; below zero it flows the other way.' },
        { id: 'ch1-c', label: 'At regular time intervals unrelated to the wave shape', isCorrect: false, explanation: 'The direction change is directly tied to the wave shape — specifically where it crosses zero.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'A source produces a flat horizontal line in the timeline panel. Is this AC or DC?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-c' },
      hints: ['Think about what a flat timeline line means in terms of changing behavior.'],
      choices: [
        { id: 'ch2-a', label: 'AC, because AC sources always appear flat when viewed at a large timescale', isCorrect: false, explanation: 'AC always shows a repeating wave pattern in the timeline, regardless of timescale. A flat line cannot represent AC.' },
        { id: 'ch2-b', label: 'AC, because a flat line means the frequency is very low', isCorrect: false, explanation: 'Even at low frequencies, AC would still show a wave pattern. A completely flat line means no alternation.' },
        { id: 'ch2-c', label: 'DC — a flat line means constant behavior, not repeating alternation', isCorrect: true, explanation: 'Correct. A flat horizontal line in the timeline means the value is constant, which is the hallmark of DC behavior.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Introductory AC Wave View',
      content: 'AC behavior can be represented as a wave that rises and falls over time. When the wave is above the zero line, current flows in one direction. When below, current flows in the opposite direction. The zero crossing marks the moment of reversal.',
    },
  ],
  sandboxUnlocks: ['ac-waveform-view'],
  availableActions: ['inspect'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  usesTimeControls: true,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-ch7-introductory-wave',
      title: 'Introductory AC Wave View',
      content: 'The timeline panel can display AC as a wave: a line oscillating above and below a center (zero) line. Above the center means current flows in one direction; below means it flows in the opposite direction. Each zero crossing marks a direction reversal.',
      sourceLesson: 'lesson-ch7-1-3',
    },
  ],
  quizzesUnlocked: ['quiz-ch7-introductory-ac-wave-basics'],
};
