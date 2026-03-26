import type { LessonConfig } from '../../types/lesson.ts';

export const lesson3: LessonConfig = {
  id: 'lesson-3',
  title: 'Two Bulbs in a Row',
  description: 'Add a second bulb in series and observe how brightness changes.',
  initialNodes: [
    { id: 'n1', position: { x: 150, y: 100 } },
    { id: 'n2', position: { x: 350, y: 100 } },
    { id: 'n3', position: { x: 550, y: 100 } },
    { id: 'n4', position: { x: 550, y: 300 } },
    { id: 'n5', position: { x: 150, y: 300 } },
  ],
  initialCircuit: [
    {
      id: 'battery-1',
      type: 'battery',
      nodeA: 'n1',
      nodeB: 'n5',
      properties: { voltage: 9 },
      name: 'Battery 1',
      position: { x: 50, y: 200 },
      rotation: 0,
    },
    {
      id: 'bulb-1',
      type: 'bulb',
      nodeA: 'n1',
      nodeB: 'n2',
      properties: { resistance: 45 },
      name: 'Bulb 1',
      position: { x: 250, y: 50 },
      rotation: 0,
    },
    {
      id: 'bulb-2',
      type: 'bulb',
      nodeA: 'n2',
      nodeB: 'n3',
      properties: { resistance: 45 },
      name: 'Bulb 2',
      position: { x: 450, y: 50 },
      rotation: 0,
    },
    {
      id: 'wire-1',
      type: 'wire',
      nodeA: 'n3',
      nodeB: 'n4',
      properties: {},
      name: 'Wire 1',
      position: { x: 550, y: 200 },
      rotation: 0,
    },
    {
      id: 'switch-1',
      type: 'switch',
      nodeA: 'n5',
      nodeB: 'n4',
      properties: { isClosed: false },
      name: 'Switch 1',
      position: { x: 350, y: 350 },
      rotation: 0,
    },
  ],
  steps: [
    {
      id: 'step-1',
      text: 'This circuit has **two bulbs** connected one after another. This is called a **series circuit** — there is only one path for current to flow.',
    },
    {
      id: 'step-2',
      text: 'Close the switch and observe the bulbs.',
      requiredAction: { type: 'toggle-switch', componentId: 'switch-1', targetState: true },
      highlights: ['switch-1'],
    },
    {
      id: 'step-3',
      text: 'Both bulbs light up, but they\'re **dimmer** than the single bulb in Lesson 1. Why?',
      showCurrentOverlay: true,
    },
    {
      id: 'step-4',
      text: 'In a series circuit, the **total resistance** is the sum of all resistances. Two 45Ω bulbs = 90Ω total. More resistance means **less current** flows.',
    },
    {
      id: 'step-5',
      text: 'The battery\'s voltage (9V) is shared between the two bulbs. Each bulb gets **less voltage** and **less power**, so each glows dimmer.',
    },
    {
      id: 'step-6',
      text: 'In a series circuit: **same current** flows through every component, but **voltage is divided** among the loads.',
    },
  ],
  challenges: [
    {
      id: 'challenge-1',
      prompt: 'Build a series circuit with two bulbs. Connect: Battery → Bulb → Bulb → Switch → back to Battery. Then close the switch.',
      type: 'build',
      initialCircuit: [],
      initialNodes: [
        { id: 'n1', position: { x: 150, y: 100 } },
        { id: 'n2', position: { x: 350, y: 100 } },
        { id: 'n3', position: { x: 550, y: 100 } },
        { id: 'n4', position: { x: 550, y: 300 } },
        { id: 'n5', position: { x: 150, y: 300 } },
      ],
      evaluationCriteria: {
        circuitMustBeClosed: true,
        targetComponent: 'bulb-1',
        targetProperty: 'power',
        expectedRange: { min: 0.1, max: 1000 },
      },
      hints: [
        'Start by placing a battery. It provides the voltage.',
        'Connect two bulbs in series — one after the other, in a single path.',
        'Add a switch and close it to complete the circuit.',
      ],
    },
  ],
  theoryContent: [
    {
      title: 'Series Circuit',
      content: 'A series circuit has only one path for current. All components are connected end-to-end.',
    },
    {
      title: 'Resistance in Series',
      content: 'Total resistance equals the sum of all individual resistances.',
      formula: 'R_total = R₁ + R₂ + ...',
    },
    {
      title: 'Current in Series',
      content: 'The same current flows through every component in a series circuit.',
    },
    {
      title: 'Voltage in Series',
      content: 'The source voltage is divided among the loads. Each load gets a share proportional to its resistance.',
    },
  ],
  sandboxUnlocks: ['bulb'],
};
