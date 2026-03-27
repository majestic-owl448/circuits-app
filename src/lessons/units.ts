import type { UnitConfig } from '../types/lesson.ts';

export const unitRegistry: UnitConfig[] = [
  {
    id: 'unit-1',
    title: 'First Contact With a Circuit',
    stageLabel: 'Beginner',
    description: 'Discover that a circuit must form a complete path and that a switch can control whether a bulb turns on.',
    lessons: ['lesson-1-1', 'lesson-1-2', 'lesson-1-3'],
  },
  {
    id: 'unit-2',
    title: 'Current, Voltage, and the Bulb as a Load',
    stageLabel: 'Beginner',
    description: 'Gain the first conceptual model of what flows, what pushes, and what the bulb does.',
    lessons: ['lesson-2-1', 'lesson-2-2', 'lesson-2-3', 'lesson-2-4'],
  },
  {
    id: 'unit-3',
    title: 'Resistance and Early Formula Familiarity',
    stageLabel: 'Beginner',
    description: 'Understand resistance and become familiar with the earliest formulas.',
    lessons: ['lesson-3-1', 'lesson-3-2', 'lesson-3-3'],
  },
  {
    id: 'unit-4',
    title: 'First Construction Freedom',
    stageLabel: 'Beginner',
    description: 'Take more responsibility for circuit assembly, including making and correcting mistakes.',
    lessons: ['lesson-4-1', 'lesson-4-2', 'lesson-4-3'],
  },
  {
    id: 'unit-5',
    title: 'Readiness for Numbers',
    stageLabel: 'Beginner to Early Intermediate',
    description: 'Prepare to transition from qualitative understanding to numerical analysis.',
    lessons: ['lesson-5-1', 'lesson-5-2'],
  },
  // Chapter 2: First Numerical DC Analysis
  {
    id: 'ch2-unit-1',
    title: 'First Numbers in a Circuit',
    stageLabel: 'Beginner to Early Intermediate',
    description: 'Understand that source and load have explicit numerical values that determine circuit behavior.',
    lessons: ['lesson-ch2-1-1', 'lesson-ch2-1-2', 'lesson-ch2-1-3'],
  },
  {
    id: 'ch2-unit-2',
    title: 'First Manual Use of Ohm\'s Law',
    stageLabel: 'Early Intermediate',
    description: 'Begin actively using V = IR to calculate current, resistance, and voltage.',
    lessons: ['lesson-ch2-2-1', 'lesson-ch2-2-2', 'lesson-ch2-2-3'],
  },
  {
    id: 'ch2-unit-3',
    title: 'Power Enters the Picture',
    stageLabel: 'Early Intermediate',
    description: 'Understand power as a quantitative description and begin calculating it in simple circuits.',
    lessons: ['lesson-ch2-3-1', 'lesson-ch2-3-2', 'lesson-ch2-3-3'],
  },
  {
    id: 'ch2-unit-4',
    title: 'Numerical Challenge Structure',
    stageLabel: 'Early Intermediate',
    description: 'Apply numerical reasoning inside challenges and see transparent evaluation results.',
    lessons: ['lesson-ch2-4-1', 'lesson-ch2-4-2', 'lesson-ch2-4-3'],
  },
  {
    id: 'ch2-unit-5',
    title: 'Source and Load Matching Begins',
    stageLabel: 'Early Intermediate',
    description: 'Start reasoning about whether a source and load fit together numerically.',
    lessons: ['lesson-ch2-5-1', 'lesson-ch2-5-2'],
  },
];
