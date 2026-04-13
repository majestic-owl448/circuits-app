import { useState, useEffect, useCallback } from 'react';
import { useAppState, useAppDispatch } from '../../state/app-hooks.ts';
import { useCircuit } from '../../hooks/useCircuit.ts';
import { lessonRegistry } from '../../lessons/lesson-registry.ts';
import { LessonLayout } from '../layout/LessonLayout.tsx';
import { TheoryPanel } from '../layout/TheoryPanel.tsx';
import { FormulaPanel } from '../layout/FormulaPanel.tsx';
import { CircuitWorkspace } from '../workspace/CircuitWorkspace.tsx';
import { DragPalette } from '../workspace/DragPalette.tsx';
import { LessonText } from './LessonText.tsx';
import { ChallengeView } from './ChallengeView.tsx';
import { InlineTheoryCheck } from './InlineTheoryCheck.tsx';
import type { LessonConfig } from '../../types/lesson.ts';
import type { CircuitNode, ComponentType, Position } from '../../types/circuit.ts';
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
  const [showFormulas, setShowFormulas] = useState(false);
  const [passedTheoryCheckStepId, setPassedTheoryCheckStepId] = useState<string | null>(null);
  const [selectedPlacementType, setSelectedPlacementType] = useState<ComponentType | null>(null);
  const [deletionMode, setDeletionMode] = useState(false);

  const circuit = useCircuit({
    nodes: lesson.initialNodes.map(n => ({ ...n })) as CircuitNode[],
    components: lesson.initialCircuit.map(c => ({ ...c })),
  });

  const currentStep = phase === 'steps' ? lesson.steps[stepIndex] : null;
  const currentChallenge = phase === 'challenges' ? lesson.challenges[challengeIndex] : null;

  const handleLessonComplete = useCallback(() => {
    dispatch({
      type: 'COMPLETE_LESSON',
      lessonId: lesson.id,
      unlocks: lesson.sandboxUnlocks,
      unlockedActions: lesson.availableActions,
      unlockedFeatures: lesson.showFormulaPanel ? ['formula-panel'] : [],
      theoryEntries: lesson.theoryPageAdditions.map(t => t.id),
      quizzesUnlocked: lesson.quizzesUnlocked,
    });
    dispatch({ type: 'NAVIGATE', view: 'home' });
  }, [dispatch, lesson]);

  const handleStepAction = useCallback(() => {
    if (phase !== 'steps') return;

    if (stepIndex < lesson.steps.length - 1) {
      setStepIndex(prev => prev + 1);
    } else {
      // Move to challenges
      if (lesson.challenges.length > 0) {
        setPhase('challenges');
        setChallengeIndex(0);
        // Load challenge circuit if provided, or clear for build challenges
        const challenge = lesson.challenges[0];
        if (challenge.initialCircuit && challenge.initialNodes) {
          circuit.reset(
            challenge.initialNodes.map(n => ({ ...n })) as CircuitNode[],
            challenge.initialCircuit.map(c => ({ ...c })),
          );
        } else if (challenge.type === 'build') {
          circuit.reset(
            lesson.initialNodes.map(n => ({ ...n })) as CircuitNode[],
            [],
          );
        }
      } else {
        handleLessonComplete();
      }
    }
  }, [phase, stepIndex, lesson, circuit, handleLessonComplete]);

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
      } else if (challenge.type === 'build') {
        circuit.reset(
          lesson.initialNodes.map(n => ({ ...n })) as CircuitNode[],
          [],
        );
      }
    } else {
      handleLessonComplete();
    }
  }, [challengeIndex, lesson, circuit, handleLessonComplete]);

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
      const timer = window.setTimeout(() => {
        handleStepAction();
      }, 0);

      return () => window.clearTimeout(timer);
    }
  }, [phase, currentStep, isStepActionSatisfied, handleStepAction]);

  // Determine if advancing is allowed: must pass theory check if present
  const canAdvanceStep = isStepActionSatisfied() && (!currentStep?.theoryCheck || passedTheoryCheckStepId === currentStep.id);
  const effectiveShowOverlay = showOverlay || !!currentStep?.showCurrentOverlay;

  const isDragPlaceChallenge = phase === 'challenges' && currentChallenge?.type === 'drag-place';
  const isBuildChallenge = phase === 'challenges' && currentChallenge?.type === 'build';
  const showDeleteInLesson = lesson.availableActions.includes('delete-component') && (isBuildChallenge || isDragPlaceChallenge);

  const handlePlace = useCallback((position: Position) => {
    if (selectedPlacementType) {
      circuit.placeComponent(selectedPlacementType, position);
    }
  }, [selectedPlacementType, circuit]);

  const handleDeleteComponent = useCallback((componentId: string) => {
    circuit.deleteComponent(componentId);
  }, [circuit]);

  const leftPanel = (
    <div className={styles.leftContent}>
      {phase === 'steps' && currentStep && (
        <>
          <LessonText
            step={currentStep}
            stepIndex={stepIndex}
            totalSteps={lesson.steps.length}
            canAdvance={canAdvanceStep}
            onAdvance={handleStepAction}
          />
          {currentStep.theoryCheck && (
              <InlineTheoryCheck
                check={currentStep.theoryCheck}
                onPass={() => setPassedTheoryCheckStepId(currentStep.id)}
              />
            )}
        </>
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
        {lesson.showFormulaPanel && (
          <button
            className={styles.theoryToggle}
            onClick={() => setShowFormulas(!showFormulas)}
            aria-pressed={showFormulas}
          >
            {showFormulas ? 'Hide' : 'Show'} Formulas
          </button>
        )}
      </div>
    </div>
  );

  return (
    <>
      <LessonLayout
        leftPanel={leftPanel}
        workspace={
          <>
            {isDragPlaceChallenge && currentChallenge?.componentToPlace && (
              <DragPalette
                availableTypes={[currentChallenge.componentToPlace]}
                selectedType={selectedPlacementType}
                onSelect={setSelectedPlacementType}
                deletionMode={deletionMode}
                onToggleDelete={() => { setDeletionMode(d => !d); setSelectedPlacementType(null); }}
                showDelete={showDeleteInLesson}
              />
            )}
            {isBuildChallenge && (
              <DragPalette
                availableTypes={
                  (currentChallenge?.availableComponents
                    ?? (lesson.sandboxUnlocks.length > 0
                      ? lesson.sandboxUnlocks
                      : ['battery', 'bulb', 'switch', 'resistor'])
                  ).filter((t): t is ComponentType => t !== 'wire')
                }
                selectedType={selectedPlacementType}
                onSelect={(t) => { setSelectedPlacementType(t); if (t) setDeletionMode(false); }}
                deletionMode={deletionMode}
                onToggleDelete={() => { setDeletionMode(d => !d); setSelectedPlacementType(null); }}
                showDelete={showDeleteInLesson}
              />
            )}
            <CircuitWorkspace
              circuit={circuit}
              showCurrentOverlay={effectiveShowOverlay}
              highlights={currentStep?.highlights}
              interactive={true}
              wiringMode={phase === 'challenges' && (currentChallenge?.type === 'fix' || currentChallenge?.type === 'build')}
              placementMode={(isDragPlaceChallenge || isBuildChallenge) && !!selectedPlacementType}
              placementType={selectedPlacementType}
              onPlace={handlePlace}
              deletionMode={deletionMode}
              onDeleteComponent={handleDeleteComponent}
              showValues={lesson.showFormulaPanel}
            />
          </>
        }
        rightPanel={
          <TheoryPanel
            items={lesson.theoryContent}
            onClose={() => setShowTheory(false)}
          />
        }
        showRightPanel={showTheory}
      />
      {showFormulas && lesson.formulasShown.length > 0 && (
        <FormulaPanel
          formulas={lesson.formulasShown}
          onClose={() => setShowFormulas(false)}
        />
      )}
    </>
  );
}
