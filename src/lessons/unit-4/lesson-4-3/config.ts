import type { LessonConfig } from '../../../types/lesson.ts';
import { STANDARD_NODES } from '../../shared.ts';
import type { CircuitComponent } from '../../../types/circuit.ts';

/** A deliberately broken circuit: wire goes to wrong node, creating an incomplete loop. */
const brokenCircuit: CircuitComponent[] = [
  { id: 'battery-1', type: 'battery', nodeA: 'n1', nodeB: 'n4', properties: { voltage: 9 }, name: 'Battery', position: { x: 100, y: 200 }, rotation: 0 },
  { id: 'wire-wrong', type: 'wire', nodeA: 'n1', nodeB: 'n3', properties: {}, name: 'Wire (wrong)', position: { x: 300, y: 200 }, rotation: 0 },
  { id: 'bulb-1', type: 'bulb', nodeA: 'n2', nodeB: 'n3', properties: { resistance: 45 }, name: 'Bulb', position: { x: 500, y: 200 }, rotation: 0 },
  { id: 'switch-1', type: 'switch', nodeA: 'n4', nodeB: 'n3', properties: { isClosed: false }, name: 'Switch', position: { x: 300, y: 400 }, rotation: 0 },
];

export const lesson4_3: LessonConfig = {
  id: 'lesson-4-3',
  unitId: 'unit-4',
  title: 'Wrong Circuits Are Allowed',
  description: 'Understand that faulty circuits can be built, tested, and debugged rather than prevented.',
  stageLabel: 'Beginner',
  prerequisites: ['lesson-4-2'],
  conceptsIntroduced: ['meaningful mistakes', 'open circuits as build mistakes', 'wrong order or wrong connection can stop the circuit from working'],
  initialCircuit: brokenCircuit,
  initialNodes: STANDARD_NODES,
  steps: [
    {
      id: 'step-1',
      text: 'Not every circuit you build will work on the first try, and that is perfectly fine. Making mistakes and fixing them is one of the best ways to learn. This circuit has a problem — let\'s find it.',
      highlights: ['wire-wrong'],
    },
    {
      id: 'step-2',
      text: 'Try closing the switch to see what happens.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: true },
      highlights: ['switch-1'],
    },
    {
      id: 'step-3',
      text: 'The bulb does not light. The circuit is not working because the wiring is wrong. Turn on the current overlay to help diagnose the problem.',
      showCurrentOverlay: true,
    },
    {
      id: 'step-4',
      text: 'The current overlay shows no flow. Trace the path: the wire goes from n1 to n3, bypassing the bulb entirely. The bulb is not part of the loop, so it gets no current. You need to delete the wrong wire and replace it with a correct one.',
      highlights: ['wire-wrong', 'n1', 'n2'],
      theoryCheck: {
        question: 'Why can it be useful to build a circuit that does not work?',
        choices: [
          { id: 'tc-a', label: 'It wastes time and teaches nothing', isCorrect: false, explanation: 'Mistakes are valuable because finding and fixing them builds understanding.' },
          { id: 'tc-b', label: 'It helps you understand why circuits fail, which deepens your understanding', isCorrect: true, explanation: 'Correct! Debugging a broken circuit teaches you how circuits work and what makes them fail.' },
          { id: 'tc-c', label: 'It is only useful if someone else fixes it for you', isCorrect: false, explanation: 'Fixing it yourself is where the learning happens.' },
        ],
        explanation: 'Building, testing, and fixing faulty circuits is a powerful learning method. Each mistake reveals something about how circuits work.',
      },
    },
    {
      id: 'step-5',
      text: 'Now it is your turn to fix the circuit. Delete the wrong wire, then connect the correct one from n1 to n2.',
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Build a simple circuit from minimal parts. Place components and connect wires to create a working loop. Test it before checking your answer.',
      type: 'build',
      evaluationCriteria: { circuitMustBeClosed: true, customCheck: 'has-switch-and-bulb' },
      hints: [
        'You need a battery, a wire, a bulb, and a switch all connected in a loop.',
        'Make sure every component connects to the next in an unbroken path.',
        'Test by closing the switch — if the bulb lights, you succeeded.',
      ],
    },
    {
      id: 'challenge-2',
      prompt: 'This circuit has a wrong connection. Find the error, delete the faulty wire, reconnect it correctly, and get the bulb to light.',
      type: 'build',
      initialCircuit: brokenCircuit,
      initialNodes: STANDARD_NODES,
      evaluationCriteria: { circuitMustBeClosed: true, customCheck: 'correct-loop-path' },
      hints: [
        'Use the current overlay to see where flow is blocked.',
        'The wire from n1 goes to the wrong node. Delete it and reconnect to n2.',
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Learning through trial and error',
      content: 'Building a faulty circuit and then diagnosing the problem is a powerful learning method. The app will not prevent you from making mistakes — instead, it gives you tools like the current overlay to figure out what went wrong and fix it.',
    },
  ],
  sandboxUnlocks: ['delete-component'],
  availableActions: ['toggle-switch', 'drag-to-place', 'connect-wire', 'delete-component'],
  currentOverlayAvailable: true,
  showFormulaPanel: true,
  formulasShown: [
    {
      formula: 'V = IR',
      symbols: [
        { symbol: 'V', name: 'Voltage', unit: 'volts (V)' },
        { symbol: 'I', name: 'Current', unit: 'amperes (A)' },
        { symbol: 'R', name: 'Resistance', unit: 'ohms (\u03A9)' },
      ],
    },
    {
      formula: 'P = VI',
      symbols: [
        { symbol: 'P', name: 'Power', unit: 'watts (W)' },
        { symbol: 'V', name: 'Voltage', unit: 'volts (V)' },
        { symbol: 'I', name: 'Current', unit: 'amperes (A)' },
      ],
    },
  ],
  theoryPageAdditions: [
    {
      id: 'theory-trial-and-error',
      title: 'Learning through trial and error',
      content: 'Building a faulty circuit and then diagnosing the problem is a powerful learning method. The app will not prevent you from making mistakes — instead, it gives you tools like the current overlay to figure out what went wrong and fix it.',
      sourceLesson: 'lesson-4-3',
    },
  ],
  quizzesUnlocked: [],
};
