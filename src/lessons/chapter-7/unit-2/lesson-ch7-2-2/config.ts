import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_7_METADATA, CH7_NODES } from '../../shared.ts';

export const lessonCh7_2_2: LessonConfig = {
  id: 'lesson-ch7-2-2',
  unitId: 'ch7-unit-2',
  title: 'Resistive Loads Under AC',
  description: 'Observe how a resistive load responds to an AC source and see how current follows the alternating voltage.',
  stageLabel: CHAPTER_7_METADATA.stageLabel,
  prerequisites: ['lesson-ch7-2-1'],
  conceptsIntroduced: [
    'resistive load response under AC',
    'AC behavior can be reasoned about in simple resistive cases',
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
      name: 'Resistor (100Ω)',
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
      text: 'A resistor connected to an AC source responds to the alternating voltage by producing alternating current. When the source voltage swings positive, current flows in one direction through the resistor. When the source voltage swings negative, current flows in the opposite direction. The resistor simply follows whatever voltage is applied.',
      highlights: ['ac-1', 'res-1'],
      showCurrentOverlay: true,
    },
    {
      id: 'step-2',
      text: 'Open the timeline panel and observe the current through the resistor. The current waveform rises and falls in the same pattern as the source voltage. For a purely resistive load, current and voltage are perfectly synchronized — they peak, cross zero, and reverse together.',
      highlights: ['res-1'],
      showCurrentOverlay: true,
    },
    {
      id: 'step-3',
      text: 'This is an important property of resistive loads: current always follows voltage. When voltage is high, current is proportionally high. When voltage is zero (zero crossing), current is also zero. Resistors do not store energy, so they respond immediately and directly to the applied voltage at every instant.',
      theoryCheck: {
        question: 'For a resistor connected to an AC source, how does current relate to the source voltage over time?',
        choices: [
          { id: 'tc-a', label: 'Current lags behind voltage by a fixed delay', isCorrect: false, explanation: 'Lagging behavior is characteristic of inductors, not resistors. For a pure resistor, current and voltage are synchronized.' },
          { id: 'tc-b', label: 'Current follows voltage in the same pattern — they peak, cross zero, and reverse together', isCorrect: true, explanation: 'Correct. A resistive load responds immediately to voltage. Current and voltage are perfectly synchronized for a pure resistor.' },
          { id: 'tc-c', label: 'Current stays constant while voltage alternates', isCorrect: false, explanation: 'If voltage alternates, current through the resistor also alternates proportionally. A resistor cannot produce constant current from an alternating voltage.' },
        ],
        explanation: 'For a purely resistive load, current and voltage are synchronized. Current follows voltage immediately at every instant.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A resistor is connected to an AC source. How does the current through the resistor behave?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: ['Think about what you observed in the timeline panel for this circuit.'],
      choices: [
        { id: 'ch1-a', label: 'It stays constant regardless of the AC source', isCorrect: false, explanation: 'A resistor does not store energy or smooth out AC. Its current follows the applied voltage directly.' },
        { id: 'ch1-b', label: 'It alternates in the same pattern as the source voltage', isCorrect: true, explanation: 'Correct. A resistive load immediately follows the applied AC voltage — current alternates in the same waveform pattern.' },
        { id: 'ch1-c', label: 'It alternates but out of step with the voltage', isCorrect: false, explanation: 'Out-of-step (phase-shifted) behavior is associated with capacitors and inductors, not resistors. A pure resistor has current and voltage in step.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Compared to a DC source, an AC source driving the same resistor produces current that:',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-c' },
      hints: ['Compare the timeline panel of a DC-driven resistor versus an AC-driven resistor.'],
      choices: [
        { id: 'ch2-a', label: 'Is always smaller in magnitude', isCorrect: false, explanation: 'The magnitude of current depends on voltage and resistance, not on the AC vs DC distinction.' },
        { id: 'ch2-b', label: 'Takes longer to reach its peak value', isCorrect: false, explanation: 'A resistor responds instantly to applied voltage. There is no delay or gradual build-up for a purely resistive load.' },
        { id: 'ch2-c', label: 'Changes direction repeatedly, following the alternating voltage', isCorrect: true, explanation: 'Correct. An AC source causes the current through a resistor to alternate in the same pattern as the source voltage.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Resistive Load Response Under AC',
      content: 'A purely resistive load responds immediately to AC voltage. When the source voltage is positive, current flows in one direction; when negative, current flows in the other direction. Current and voltage are synchronized — they peak, cross zero, and reverse together.',
    },
    {
      title: 'AC Reasoning for Resistive Circuits',
      content: 'For simple resistive AC circuits, the same intuition applies as DC: current follows voltage directly. The key difference is that the voltage (and therefore current) alternates direction continuously rather than staying constant.',
    },
  ],
  sandboxUnlocks: ['ac-resistive-experiment'],
  availableActions: ['inspect'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  usesTimeControls: true,
  formulasShown: [],
  theoryPageAdditions: [],
  quizzesUnlocked: ['quiz-ch7-resistive-ac-basics'],
};
