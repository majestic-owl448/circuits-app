import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_7_METADATA, CH7_NODES } from '../../shared.ts';

export const lessonCh7_3_2: LessonConfig = {
  id: 'lesson-ch7-3-2',
  unitId: 'ch7-unit-3',
  title: 'DC to AC Conversion',
  description: 'Follow the signal path through a DC-to-AC conversion stage and understand its role as an abstract system block.',
  stageLabel: CHAPTER_7_METADATA.stageLabel,
  prerequisites: ['lesson-ch7-3-1'],
  conceptsIntroduced: [
    'DC-to-AC conversion',
    'conversion block as part of the system',
    'scope boundary: inverter internals are abstract at this level',
  ],
  initialNodes: CH7_NODES,
  initialCircuit: [
    {
      id: 'bat-1',
      type: 'battery',
      nodeA: 'n1',
      nodeB: 'n3',
      properties: { voltage: 9 },
      name: 'DC Source (9V)',
      position: { x: 150, y: 250 },
      rotation: 0,
    },
    {
      id: 'conv-1',
      type: 'dc-ac-converter',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: {},
      name: 'DC-to-AC Converter',
      position: { x: 325, y: 150 },
      rotation: 0,
    },
    {
      id: 'res-1',
      type: 'resistor',
      nodeA: 'n2',
      nodeB: 'n4',
      properties: { resistance: 100 },
      name: 'AC Load',
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
      text: 'The DC source on the left provides steady, one-directional voltage and current — just as you have studied throughout this course. On its own, this source cannot drive an AC load. Inspect the battery to see its constant DC output.',
      highlights: ['bat-1'],
    },
    {
      id: 'step-2',
      text: 'The DC-to-AC converter block in the middle accepts DC input and produces AC output. The converter is responsible for repeatedly reversing the output polarity to generate an alternating signal. At this introductory level, the converter is treated as a black box — we do not study its internal circuitry.',
      highlights: ['conv-1'],
    },
    {
      id: 'step-3',
      text: 'The AC load on the right receives alternating current from the converter output. This load is now correctly matched to its source type. The full system chain is: DC source → DC-to-AC converter → AC load. Each stage has a defined role, and the converter makes the otherwise-incompatible connection possible.',
      highlights: ['res-1'],
      theoryCheck: {
        question: 'What is the role of the DC-to-AC converter in this circuit?',
        choices: [
          { id: 'tc-a', label: 'It increases the DC voltage to a higher level', isCorrect: false, explanation: 'Voltage amplification is a separate function. The DC-to-AC converter changes the type of current from unidirectional (DC) to alternating (AC).' },
          { id: 'tc-b', label: 'It converts DC input into AC output, allowing a DC source to drive an AC load', isCorrect: true, explanation: 'Correct. The converter changes the source type from DC to AC, making the DC source compatible with the AC load.' },
          { id: 'tc-c', label: 'It protects the DC source from being overloaded', isCorrect: false, explanation: 'Protection is a separate concern. The primary function of a DC-to-AC converter is type conversion, not source protection.' },
        ],
        explanation: 'A DC-to-AC converter accepts DC input and produces AC output, bridging an incompatible source-load pair.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'A DC source needs to drive an AC load. Which component makes this possible?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch1-b' },
      hints: ['Think about which component changes the type of current from DC to AC.'],
      choices: [
        { id: 'ch1-a', label: 'A larger resistor in series with the DC source', isCorrect: false, explanation: 'Adding resistance changes the current magnitude but not the current type. It does not convert DC to AC.' },
        { id: 'ch1-b', label: 'A DC-to-AC conversion stage', isCorrect: true, explanation: 'Correct. A DC-to-AC converter accepts DC input and outputs AC, making the DC source compatible with the AC load.' },
        { id: 'ch1-c', label: 'A switch that toggles very quickly', isCorrect: false, explanation: 'While rapid switching is one real technique used inside inverters, at this level the converter is treated as a system block rather than an internal circuit.' },
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'Why is the DC-to-AC conversion block treated as a black box at this level?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: ['Think about the scope of this introductory chapter versus more advanced circuit analysis.'],
      choices: [
        { id: 'ch2-a', label: 'Because DC-to-AC converters do not have internal circuits', isCorrect: false, explanation: 'DC-to-AC converters (called inverters) have sophisticated internal circuits. They are treated as black boxes here only because their internals are beyond this chapter\'s scope.' },
        { id: 'ch2-b', label: 'The details of how conversion works internally are beyond this introductory chapter; the key concept is that the stage converts the source type', isCorrect: true, explanation: 'Correct. Understanding the system-level role — DC in, AC out — is sufficient at this stage. Internal implementation details are an advanced topic.' },
        { id: 'ch2-c', label: 'Because the converter output type depends on the user\'s choice at runtime', isCorrect: false, explanation: 'A DC-to-AC converter always produces AC output from DC input. Its output type is not variable.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'DC-to-AC Conversion',
      content: 'A DC-to-AC converter (also called an inverter) accepts a DC input and produces an AC output. This allows a DC source to drive an AC load. At an introductory level, the converter is treated as a system block: DC goes in, AC comes out.',
    },
    {
      title: 'Conversion Block as a System Component',
      content: 'In system-level thinking, a conversion stage is simply a block in the signal chain. The input type and output type are what matter at this level. The internal circuit of the converter is an advanced topic beyond the scope of this introductory chapter.',
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
      id: 'theory-ch7-dc-to-ac',
      title: 'DC-to-AC Conversion',
      content: 'A DC-to-AC converter accepts DC input and produces AC output. It is the interface between a DC source and an AC load. At an introductory level it is treated as a black box: DC enters, AC exits. The internal circuitry (an inverter) is an advanced topic.',
      sourceLesson: 'lesson-ch7-3-2',
    },
  ],
  quizzesUnlocked: ['quiz-ch7-dc-to-ac-basics'],
};
