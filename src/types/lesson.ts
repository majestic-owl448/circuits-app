import type { CircuitComponent } from './circuit.ts';

export interface LessonConfig {
  id: string;
  title: string;
  description: string;
  initialCircuit: CircuitComponent[];
  initialNodes: { id: string; position: { x: number; y: number } }[];
  steps: LessonStep[];
  challenges: Challenge[];
  theoryContent: TheoryItem[];
  sandboxUnlocks: string[];
}

export interface LessonStep {
  id: string;
  text: string;
  requiredAction?: UserAction;
  highlights?: string[];
  showCurrentOverlay?: boolean;
}

export type UserAction =
  | { type: 'toggle-switch'; componentId: string; targetState: boolean }
  | { type: 'connect-wire'; fromNode: string; toNode: string }
  | { type: 'place-component'; componentType: string }
  | { type: 'any' };

export interface Challenge {
  id: string;
  prompt: string;
  type: 'build' | 'fix' | 'predict' | 'choose';
  initialCircuit?: CircuitComponent[];
  initialNodes?: { id: string; position: { x: number; y: number } }[];
  evaluationCriteria: EvaluationCriteria;
  hints: string[];
  choices?: ChallengeChoice[];
}

export interface ChallengeChoice {
  id: string;
  label: string;
  isCorrect: boolean;
}

export interface EvaluationCriteria {
  circuitMustBeClosed?: boolean;
  targetComponent?: string;
  targetProperty?: 'power' | 'current' | 'voltage';
  expectedRange?: { min: number; max: number };
  customCheck?: string;
}

export interface TheoryItem {
  title: string;
  content: string;
  formula?: string;
}
