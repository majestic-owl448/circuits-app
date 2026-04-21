import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_8_METADATA, CH8_NODES } from '../../shared.ts';

export const lessonCh8_2_2: LessonConfig = {
  id: 'lesson-ch8-2-2',
  unitId: 'ch8-unit-2',
  title: 'Introductory Rectification',
  description: 'Learn what rectification means and how a single diode produces a pulsed one-directional output from an AC source.',
  stageLabel: CHAPTER_8_METADATA.stageLabel,
  prerequisites: ['lesson-ch8-2-1'],
  conceptsIntroduced: [
    'rectification',
    'AC-to-DC conversion conceptually',
    'diode-based shaping of AC output',
  ],
  initialNodes: CH8_NODES,
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
      id: 'diode-1',
      type: 'diode',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: { isForwardBiased: true },
      name: 'Diode (Rectifier)',
      position: { x: 325, y: 150 },
      rotation: 0,
    },
    {
      id: 'res-1',
      type: 'resistor',
      nodeA: 'n2',
      nodeB: 'n4',
      properties: { resistance: 100 },
      name: 'Load',
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
      text: 'When a diode removes the reverse half of an AC cycle, the result is current that only flows in one direction — though it pulses on and off. This process of converting an alternating signal into a one-directional pulsed signal is called rectification. A circuit that does this is called a rectifier.',
      highlights: ['diode-1'],
    },
    {
      id: 'step-2',
      text: 'Open the timeline panel and observe the output at the load. The unrectified AC signal goes both positive and negative repeatedly. After the diode, the signal only goes positive — it pulses on during each forward half-cycle and drops to zero during the blocked reverse half-cycles.',
      highlights: ['diode-1', 'res-1'],
      showCurrentOverlay: true,
    },
    {
      id: 'step-3',
      text: 'This pulsed output is called "pulsed DC" or "half-wave rectified" output. It is not the same as smooth DC from a battery — it still pulses. But it is closer to DC than raw AC because it never reverses direction. Rectification is the first conversion stage on the path from AC to DC.',
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Rectification is best described as:',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: ['Think about what the diode does to the AC signal and what the output looks like.'],
      choices: [
        {
          id: 'ch1-a',
          label: 'Converting DC into AC using a switching component',
          isCorrect: false,
          explanation: 'That describes an inverter, not a rectifier. Rectification goes from AC toward DC, not the other direction.',
        },
        {
          id: 'ch1-b',
          label: 'The process of converting alternating current into a one-directional pulsed current using a diode',
          isCorrect: true,
          explanation: 'Correct. Rectification uses a diode to block the reverse half of the AC cycle, producing one-directional pulsed current.',
        },
        {
          id: 'ch1-c',
          label: 'Removing all variation from an AC signal to produce perfectly constant DC',
          isCorrect: false,
          explanation: 'A single diode produces pulsed output, not smooth constant DC. Removing all variation requires additional filtering stages beyond rectification.',
        },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Why is the output of a simple half-wave rectifier called "pulsed DC" rather than "true DC"?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: ['Compare the rectified output timeline to the flat constant output of a battery.'],
      choices: [
        {
          id: 'ch2-a',
          label: 'Because the output still alternates in both directions, just more slowly',
          isCorrect: false,
          explanation: 'After rectification, the output does not go negative. It only flows in one direction — it just pulses on and off.',
        },
        {
          id: 'ch2-b',
          label: 'Because it only contains the positive half-cycles — it pulses on and off rather than staying at a constant level like true DC',
          isCorrect: true,
          explanation: 'Correct. A half-wave rectifier passes only the forward half-cycles and blocks the rest. The output pulses rather than remaining constant.',
        },
        {
          id: 'ch2-c',
          label: 'Because the voltage level is lower than a real DC source would provide',
          isCorrect: false,
          explanation: 'The voltage level is not the reason for the "pulsed" label. The key distinction is that the output pulses on and off rather than being constant.',
        },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Rectification',
      content: 'Rectification is the process of using a diode to convert alternating current into a one-directional pulsed current. The diode blocks the reverse half of each AC cycle, allowing only the forward half-cycles to pass through to the load.',
    },
    {
      title: 'Pulsed DC vs True DC',
      content: 'The output of a simple half-wave rectifier is called pulsed DC because it only flows in one direction (unlike raw AC) but it is not constant (unlike true DC from a battery). It pulses between the forward peak and zero on every cycle. This is closer to DC than raw AC but is not smooth DC.',
    },
  ],
  sandboxUnlocks: ['rectification-example'],
  availableActions: ['inspect'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  usesTimeControls: true,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-ch8-rectification',
      title: 'Introductory rectification',
      content: 'Rectification is the conversion of AC into pulsed one-directional current using a diode. A single diode creates a half-wave rectified output — it passes only the forward half-cycles. The result pulses on and off but never reverses, making it closer to DC than the original AC signal.',
      sourceLesson: 'lesson-ch8-2-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch8-rectification-basics'],
};
