import type { LessonConfig } from '../../../../types/lesson.ts';
import { CHAPTER_7_METADATA, CH7_NODES } from '../../shared.ts';

export const lessonCh7_4_1: LessonConfig = {
  id: 'lesson-ch7-4-1',
  unitId: 'ch7-unit-4',
  title: 'A DC Solar Source Feeding an AC Load',
  description: 'Discover how modern systems combine a DC source with a conversion stage to power AC loads — the core architecture of solar and battery-powered systems.',
  stageLabel: CHAPTER_7_METADATA.stageLabel,
  prerequisites: ['lesson-ch7-3-3'],
  conceptsIntroduced: [
    'modern systems include DC source + conversion + AC load',
    'DC-to-AC conversion allows DC systems to serve AC loads',
    'multi-stage system understanding',
  ],
  initialNodes: CH7_NODES,
  initialCircuit: [
    {
      id: 'bat-1',
      type: 'battery',
      nodeA: 'n1',
      nodeB: 'n3',
      properties: { voltage: 9 },
      name: 'Solar/DC Source',
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
      text: 'Modern energy systems often start with a DC source — a solar panel or a battery. These sources are excellent at storing and delivering direct current. But many devices in homes and buildings — lights, appliances, motors — are designed to run on alternating current (AC). There is a mismatch between what the source provides and what the load requires.',
    },
    {
      id: 'step-2',
      text: 'A DC-to-AC converter (also called an inverter) solves this mismatch. It sits between the DC source and the AC load. It takes the steady DC power from the solar panel or battery and transforms it into alternating current that the AC load can use. The result is a three-stage system: DC source → converter → AC load.',
      highlights: ['bat-1', 'conv-1', 'res-1'],
    },
    {
      id: 'step-3',
      text: 'Look at the circuit. Identify the three stages: the Solar/DC Source that provides DC power, the DC-to-AC Converter that transforms the power type, and the AC Load that consumes AC power. Each stage has a clear role. Without the converter, the source and load types would be incompatible.',
      theoryCheck: {
        question: 'In a solar system powering AC household devices, what is the role of each stage in the chain: DC source → converter → AC load?',
        choices: [
          { id: 'tc-a', label: 'The DC source generates power, the converter transforms the current type from DC to AC, and the AC load uses the AC power', isCorrect: true, explanation: 'Correct. Each stage has a distinct function: generation, transformation, and consumption. The converter is the bridge between incompatible source and load types.' },
          { id: 'tc-b', label: 'The converter stores energy, the DC source regulates voltage, and the AC load provides feedback to the system', isCorrect: false, explanation: 'These roles are incorrect. The DC source generates power; the converter transforms current type; the load consumes power.' },
          { id: 'tc-c', label: 'The AC load generates AC power that feeds back into the DC source through the converter', isCorrect: false, explanation: 'Power flows from source to load, not the reverse. The load consumes power; it does not generate it.' },
        ],
        explanation: 'In a DC source → converter → AC load system, the source provides DC power, the converter changes it to AC, and the load uses the AC power. Each stage has a single clear function.',
      },
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Complete the system so the AC load can be powered from the DC source. Add the missing conversion stage.',
      type: 'build',
      evaluationCriteria: { topologyCheck: 'complete' },
      hints: [
        'The DC source provides DC power. The load requires AC power.',
        'A DC-to-AC converter placed between source and load solves the type mismatch.',
      ],
      availableComponents: ['dc-ac-converter', 'wire'],
    },
    {
      id: 'challenge-2',
      prompt: 'In a solar system powering household AC devices, what role does the inverter (DC-to-AC converter) play?',
      type: 'choose',
      evaluationCriteria: { correctChoiceId: 'ch2-b' },
      hints: ['Think about what "inverter" means in terms of current type conversion.'],
      choices: [
        { id: 'ch2-a', label: 'It stores excess solar energy in a battery for later use', isCorrect: false, explanation: 'Energy storage is the job of a battery, not the inverter. The inverter converts current type, not store energy.' },
        { id: 'ch2-b', label: 'It converts the DC power from the solar panels into AC that household devices require', isCorrect: true, explanation: 'Correct. The inverter (DC-to-AC converter) transforms DC output from the solar source into AC power suitable for household loads.' },
        { id: 'ch2-c', label: 'It increases the voltage of the DC source before sending it to the load', isCorrect: false, explanation: 'Voltage regulation is a separate function. The key purpose of the inverter in this context is converting DC to AC current type.' },
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Multi-Stage Power Systems',
      content: 'Many real-world power systems have multiple stages: a source, one or more conversion stages, and a load. When the source type (DC) does not match the load type (AC), a conversion stage is required to bridge the gap.',
    },
    {
      title: 'DC-to-AC Conversion in Practice',
      content: 'A DC-to-AC converter (inverter) accepts DC input and produces AC output. Solar panels and batteries are common DC sources. Household appliances are common AC loads. The inverter makes these compatible.',
    },
  ],
  sandboxUnlocks: ['solar-dc-ac-example'],
  availableActions: ['inspect', 'drag-to-place', 'connect-wire'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  usesTimeControls: false,
  formulasShown: [],
  theoryPageAdditions: [
    {
      id: 'theory-ch7-dc-to-ac-system',
      title: 'DC Source to AC Load Example',
      content: 'When a DC source (such as a solar panel or battery) must power an AC load (such as a household appliance), a DC-to-AC converter is inserted between them. This three-stage architecture — DC source → converter → AC load — is the foundation of solar inverter systems.',
      sourceLesson: 'lesson-ch7-4-1',
    },
  ],
  quizzesUnlocked: ['quiz-ch7-modern-dc-to-ac-system-basics'],
};
