import { useState, useEffect, useCallback } from 'react';
import { useAppState, useAppDispatch } from '../../state/app-context.tsx';
import { useCircuit } from '../../hooks/useCircuit.ts';
import { lessonRegistry } from '../../lessons/lesson-registry.ts';
import { LessonLayout } from '../layout/LessonLayout.tsx';
import { TheoryPanel } from '../layout/TheoryPanel.tsx';
import { CircuitWorkspace } from '../workspace/CircuitWorkspace.tsx';
import { LessonText } from './LessonText.tsx';
import { ChallengeView } from './ChallengeView.tsx';
import type { LessonConfig } from '../../types/lesson.ts';
import type { CircuitNode } from '../../types/circuit.ts';
import styles from './LessonView.module.css';

export function LessonView() {
  const { activeLessonId, preferences } = useAppState();
  const dispatch = useAppDispatch();

  const lesson = lessonRegistry.find(l => l.id === activeLessonId);
  if (!lesson) {
    return <div className={styles.error}>Lesson not found.</div>;
  }

  return <LessonViewInner lesson={lesson} dispatch={dispatch} preferences={preferences} />;
}

function LessonViewInner({
  lesson,
  dispatch,
  preferences,
}: {
  lesson: LessonConfig;
  dispatch: ReturnType<typeof useAppDispatch>;
  preferences: { showCurrentOverlay: boolean; theoryPanelPinned: boolean };
}) {
  const [stepIndex, setStepIndex] = useState(0);
  const [phase, setPhase] = useState<'steps' | 'challenges'>('steps');
  const [challengeIndex, setChallengeIndex] = useState(0);
  const [showTheory, setShowTheory] = useState(preferences.theoryPanelPinned);
  const [showOverlay, setShowOverlay] = useState(preferences.showCurrentOverlay);

  const circuit = useCircuit({
    nodes: lesson.initialNodes.map(n => ({ ...n })) as CircuitNode[],
    components: lesson.initialCircuit.map(c => ({ ...c })),
  });

  const currentStep = phase === 'steps' ? lesson.steps[stepIndex] : null;
  const currentChallenge = phase === 'challenges' ? lesson.challenges[challengeIndex] : null;

  // Auto-enable overlay when step requests it
  useEffect(() => {
    if (currentStep?.showCurrentOverlay) {
      setShowOverlay(true);
    }
  }, [currentStep]);

  const handleStepAction = useCallback(() => {
    if (phase !== 'steps') return;

    if (stepIndex < lesson.steps.length - 1) {
      setStepIndex(prev => prev + 1);
    } else {
      // Move to challenges
      if (lesson.challenges.length > 0) {
        setPhase('challenges');
        setChallengeIndex(0);
        // Load challenge circuit if provided
        const challenge = lesson.challenges[0];
        if (challenge.initialCircuit && challenge.initialNodes) {
          circuit.reset(
            challenge.initialNodes.map(n => ({ ...n })) as CircuitNode[],
            challenge.initialCircuit.map(c => ({ ...c })),
          );
        }
      } else {
        handleLessonComplete();
      }
    }
  }, [phase, stepIndex, lesson, circuit]);

  const handleChallengeComplete = useCallback(() => {
    if (challengeIndex < lesson.challenges.length - 1) {
      const nextIdx = challengeIndex + 1;
      setChallengeIndex(nextIdx);
      const challenge = lesson.challenges[nextIdx];
      if (challenge.initialCircuit && challenge.initialNodes) {
        circuit.reset(
          challenge.initialNodes.map(n => ({ ...n })) as CircuitNode[],
          challenge.initialCircuit.map(c => ({ ...c })),
        );
      }
    } else {
      handleLessonComplete();
    }
  }, [challengeIndex, lesson, circuit]);

  function handleLessonComplete() {
    dispatch({
      type: 'COMPLETE_LESSON',
      lessonId: lesson.id,
      unlocks: lesson.sandboxUnlocks,
    });
    dispatch({ type: 'NAVIGATE', view: 'home' });
  }

  // Check if current step's required action is satisfied
  const isStepActionSatisfied = useCallback(() => {
    if (!currentStep?.requiredAction) return true;
    const action = currentStep.requiredAction;
    if (action.type === 'toggle-switch') {
      const comp = circuit.components.find(c => c.id === action.componentId);
      return comp?.properties.isClosed === action.targetState;
    }
    return true;
  }, [currentStep, circuit.components]);

  // Auto-advance when required action is satisfied
  useEffect(() => {
    if (phase === 'steps' && currentStep?.requiredAction && isStepActionSatisfied()) {
      handleStepAction();
    }
  }, [phase, currentStep, isStepActionSatisfied, handleStepAction]);

  const leftPanel = (
    <div className={styles.leftContent}>
      {phase === 'steps' && currentStep && (
        <LessonText
          step={currentStep}
          stepIndex={stepIndex}
          totalSteps={lesson.steps.length}
          canAdvance={isStepActionSatisfied()}
          onAdvance={handleStepAction}
        />
      )}
      {phase === 'challenges' && currentChallenge && (
        <ChallengeView
          challenge={currentChallenge}
          simulation={circuit.simulation}
          onComplete={handleChallengeComplete}
        />
      )}
      <div className={styles.controls}>
        <button
          className={styles.overlayToggle}
          onClick={() => setShowOverlay(!showOverlay)}
          aria-pressed={showOverlay}
        >
          {showOverlay ? 'Hide' : 'Show'} Current Flow
        </button>
        <button
          className={styles.theoryToggle}
          onClick={() => setShowTheory(!showTheory)}
          aria-pressed={showTheory}
        >
          {showTheory ? 'Hide' : 'Show'} Theory
        </button>
      </div>
    </div>
  );

  return (
    <LessonLayout
      leftPanel={leftPanel}
      workspace={
        <CircuitWorkspace
          circuit={circuit}
          showCurrentOverlay={showOverlay}
          highlights={currentStep?.highlights}
          interactive={true}
          wiringMode={phase === 'challenges' && (currentChallenge?.type === 'fix' || currentChallenge?.type === 'build')}
        />
      }
      rightPanel={
        <TheoryPanel
          items={lesson.theoryContent}
          onClose={() => setShowTheory(false)}
        />
      }
      showRightPanel={showTheory}
    />
  );
}
