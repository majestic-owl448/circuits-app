import { useState, useEffect, useCallback, useMemo } from 'react';
import { useAppState, useAppDispatch } from '../../state/app-hooks.ts';
import { useCircuit } from '../../hooks/useCircuit.ts';
import { loadLessonsForChapter } from '../../data/loaders.ts';
import { LessonLayout } from '../layout/LessonLayout.tsx';
import { TheoryPanel } from '../layout/TheoryPanel.tsx';
import { FormulaPanel } from '../layout/FormulaPanel.tsx';
import { CircuitWorkspace } from '../workspace/CircuitWorkspace.tsx';
import { DragPalette } from '../workspace/DragPalette.tsx';
import { TimeControls } from '../workspace/TimeControls.tsx';
import { TimelinePanel } from '../workspace/TimelinePanel.tsx';
import { LessonText } from './LessonText.tsx';
import { ChallengeView } from './ChallengeView.tsx';
import { InlineTheoryCheck } from './InlineTheoryCheck.tsx';
import type { LessonConfig } from '../../types/lesson.ts';
import type { CircuitNode, ComponentType, Position } from '../../types/circuit.ts';
import { advanceTimeSlider, checkpointForSlider, createInitialTimeState, describeTimePosition, snapSliderToCheckpoint } from '../../engine/time/simulator.ts';
import styles from './LessonView.module.css';

export function LessonView() {
  const { activeLessonId, preferences } = useAppState();
  const dispatch = useAppDispatch();
  const [lesson, setLesson] = useState<LessonConfig | null>(null);

  useEffect(() => {
    let mounted = true;
    // Chapter 1 uses legacy lesson-N-N IDs; all other chapters use lesson-chN-U-L.
    const chapterMatch = activeLessonId?.match(/^lesson-ch(\d+)-/);
    const chapter = chapterMatch ? Number(chapterMatch[1]) : 1;

    loadLessonsForChapter(chapter).then(registry => {
      if (!mounted) return;
      const found = registry.find(l => l.id === activeLessonId) ?? null;
      setLesson(found);
    });
    return () => {
      mounted = false;
    };
  }, [activeLessonId]);

  if (!lesson && activeLessonId) {
    return <div className={styles.error}>Loading lesson...</div>;
  }

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
  preferences: {
    showCurrentOverlay: boolean;
    theoryPanelPinned: boolean;
    reducedMotion: boolean;
    timePanelCollapsed: boolean;
    timePlaybackSpeed: 'normal' | 'slow';
  };
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

  const [timeState, setTimeState] = useState<{
    sliderValue: number;
    isPlaying: boolean;
    speed: 'normal' | 'slow';
  }>({
    sliderValue: 0,
    isPlaying: false,
    speed: 'normal',
  });
  const derivedTimeState = useMemo(() => createInitialTimeState(circuit.simulation, circuit.components), [circuit.simulation, circuit.components]);

  const currentStep = phase === 'steps' ? lesson.steps[stepIndex] : null;
  const currentChallenge = phase === 'challenges' ? lesson.challenges[challengeIndex] : null;
  const checkpointSimulations = lesson.usesTimeControls
    ? {
      t0: derivedTimeState.snapshots.find(snapshot => snapshot.checkpoint === 't0')?.simulation ?? circuit.simulation,
      t_mid: derivedTimeState.snapshots.find(snapshot => snapshot.checkpoint === 't_mid')?.simulation ?? circuit.simulation,
      t_final: derivedTimeState.snapshots.find(snapshot => snapshot.checkpoint === 't_final')?.simulation ?? circuit.simulation,
    }
    : undefined;

  useEffect(() => {
    if (!lesson.usesTimeControls || !timeState.isPlaying) {
      return;
    }

    const timer = window.setInterval(() => {
      setTimeState(prev => {
        const next = advanceTimeSlider(prev.sliderValue, prev.speed, false);
        return {
          ...prev,
          sliderValue: next,
          isPlaying: next < 100,
        };
      });
    }, 180);

    return () => window.clearInterval(timer);
  }, [lesson.usesTimeControls, timeState.isPlaying]);

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
          checkpointSimulations={checkpointSimulations}
          currentCheckpoint={lesson.usesTimeControls ? checkpointForSlider(timeState.sliderValue) : undefined}
          components={circuit.components}
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
      {lesson.usesTimeControls && (
        <>
          <TimeControls
            sliderValue={timeState.sliderValue}
            isPlaying={timeState.isPlaying}
            speed={timeState.speed}
            onSliderChange={(value) => setTimeState(prev => ({
              ...prev,
              sliderValue: preferences.reducedMotion ? snapSliderToCheckpoint(value) : value,
            }))}
            onTogglePlay={() => {
              if (preferences.reducedMotion) {
                setTimeState(prev => ({
                  ...prev,
                  isPlaying: false,
                  sliderValue: advanceTimeSlider(prev.sliderValue, prev.speed, true),
                }));
                return;
              }
              setTimeState(prev => ({ ...prev, isPlaying: !prev.isPlaying }));
            }}
            onToggleSpeed={() => setTimeState(prev => ({ ...prev, speed: prev.speed === 'normal' ? 'slow' : 'normal' }))}
            onReset={() => setTimeState(prev => ({ ...prev, sliderValue: 0, isPlaying: false }))}
          />
          {!preferences.timePanelCollapsed && (
            <TimelinePanel sliderValue={timeState.sliderValue} />
          )}
          <div className={styles.controls}>
            <button
              className={styles.theoryToggle}
              onClick={() => dispatch({ type: 'TOGGLE_TIME_PANEL_COLLAPSED' })}
            >
              {preferences.timePanelCollapsed ? 'Show Timeline' : 'Hide Timeline'}
            </button>
            <p className={styles.error}>Time position: {describeTimePosition(timeState.sliderValue)}</p>
            <p className={styles.error}>Checkpoint: {checkpointForSlider(timeState.sliderValue)}</p>
          </div>
        </>
      )}
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
              reducedMotion={preferences.reducedMotion}
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
