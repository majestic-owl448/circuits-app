import { useState, useCallback } from 'react';
import type { Challenge } from '../../types/lesson.ts';
import type { MultiCriteriaEvaluationResult } from '../../types/lesson.ts';
import type { SimulationResult } from '../../types/circuit.ts';
import { evaluate, evaluateMultiCriteria } from '../../engine/evaluator.ts';
import { RubricPanel } from './RubricPanel.tsx';
import styles from './ChallengeView.module.css';

interface Props {
  challenge: Challenge;
  simulation: SimulationResult;
  checkpointSimulations?: Partial<Record<'t0' | 't_mid' | 't_final', SimulationResult>>;
  currentCheckpoint?: 't0' | 't_mid' | 't_final';
  components: import('../../types/circuit.ts').CircuitComponent[];
  onComplete: () => void;
}

export function ChallengeView({ challenge, simulation, checkpointSimulations, currentCheckpoint, components, onComplete }: Props) {
  const [hintIndex, setHintIndex] = useState(-1);
  const [feedback, setFeedback] = useState<{ passed: boolean; message: string } | null>(null);
  const [rubricResult, setRubricResult] = useState<MultiCriteriaEvaluationResult | null>(null);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [selectedClassifyCategory, setSelectedClassifyCategory] = useState<string | null>(null);
  const [selectedDiagnoseCause, setSelectedDiagnoseCause] = useState<string | null>(null);
  const [calcInput, setCalcInput] = useState('');
  const [showBreakdown, setShowBreakdown] = useState(false);

  const handleCheck = useCallback(() => {
    if (challenge.type === 'choose' || challenge.type === 'predict') {
      const choice = challenge.choices?.find(c => c.id === selectedChoice);
      if (!choice) {
          setFeedback({ passed: false, message: challenge.type === 'predict' ? 'Please select a prediction.' : 'Please select an answer.' });
        return;
      }
      if (choice.isCorrect) {
        setFeedback({ passed: true, message: choice.explanation ?? 'Correct! Well done.' });
      } else {
        setFeedback({ passed: false, message: choice.explanation ?? 'Not quite. Try again!' });
        if (hintIndex < challenge.hints.length - 1) {
          setHintIndex(prev => prev + 1);
        }
      }
      return;
    }

    if (challenge.type === 'classify' && challenge.classifyConfig) {
      if (!selectedClassifyCategory) {
        setFeedback({ passed: false, message: 'Please select a category.' });
        return;
      }

      const classifyCriteria = {
        ...challenge.evaluationCriteria,
        customCheck: 'classify',
        learnerCategory: selectedClassifyCategory,
        expectedCategory: challenge.classifyConfig.correctCategory,
        requiredEvidenceSignals: challenge.classifyConfig.requiredEvidenceSignals,
      };

      const result = evaluate(classifyCriteria, simulation, components);
      setFeedback(result);
      if (!result.passed && hintIndex < challenge.hints.length - 1) {
        setHintIndex(prev => prev + 1);
      }
      return;
    }

    if (challenge.type === 'diagnose' && challenge.diagnoseConfig) {
      if (!selectedDiagnoseCause) {
        setFeedback({ passed: false, message: 'Please select a likely cause.' });
        return;
      }

      const diagnoseCriteria = {
        ...challenge.evaluationCriteria,
        customCheck: 'diagnose',
        learnerCause: selectedDiagnoseCause,
        acceptedCauses: challenge.diagnoseConfig.acceptedCauses,
        requiredEvidenceSignals: challenge.evaluationCriteria.requiredEvidenceSignals,
        observedEvidenceSignals: challenge.evaluationCriteria.observedEvidenceSignals,
        minEvidenceMatches: challenge.diagnoseConfig.minEvidenceMatches,
      };

      const result = evaluate(diagnoseCriteria, simulation, components);
      setFeedback(result);
      if (!result.passed && hintIndex < challenge.hints.length - 1) {
        setHintIndex(prev => prev + 1);
      }
      return;
    }

    if (challenge.type === 'calculate' && challenge.calculationTarget) {
      const target = challenge.calculationTarget;
      const parsed = parseFloat(calcInput);
      if (isNaN(parsed)) {
        setFeedback({ passed: false, message: 'Please enter a numeric value.' });
        return;
      }
      const diff = Math.abs(parsed - target.expectedValue);
      if (diff <= target.tolerance) {
        setFeedback({
          passed: true,
          message: `Correct! ${parsed} ${target.unit} is right.${target.formula ? ` Using ${target.formula}: the answer is ${target.expectedValue} ${target.unit}.` : ''}`,
        });
      } else {
        const hint = target.formula ? ` Try using: ${target.formula}` : '';
        setFeedback({ passed: false, message: `Not quite.${hint} Check your calculation and try again.` });
        if (hintIndex < challenge.hints.length - 1) {
          setHintIndex(prev => prev + 1);
        }
      }
      return;
    }

    const requestedCheckpoint = challenge.evaluationCriteria.requiredCheckpoint;
    const activeCheckpoint = requestedCheckpoint ?? currentCheckpoint;
    const selectedSimulation = (activeCheckpoint && checkpointSimulations?.[activeCheckpoint])
      ? checkpointSimulations[activeCheckpoint]
      : simulation;

    if (challenge.showRubricPanel) {
      const multiResult = evaluateMultiCriteria(challenge.evaluationCriteria, selectedSimulation, components);
      setRubricResult(multiResult);
      setFeedback({ passed: multiResult.passed, message: multiResult.passed ? 'All required criteria met.' : 'Some criteria were not met. Review the rubric below.' });
      if (!multiResult.passed && hintIndex < challenge.hints.length - 1) {
        setHintIndex(prev => prev + 1);
      }
      return;
    }

    const baseResult = evaluate(challenge.evaluationCriteria, selectedSimulation, components);

    if (baseResult.passed && challenge.evaluationCriteria.checkpointRanges && challenge.evaluationCriteria.checkpointRanges.length > 0) {
      const failedRange = challenge.evaluationCriteria.checkpointRanges.find(range => {
        const checkpointSimulation = checkpointSimulations?.[range.checkpoint];
        if (!checkpointSimulation) return true;
        const component = checkpointSimulation.componentResults.get(range.componentId);
        if (!component) return true;
        const value = component[range.property];
        return value < range.min || value > range.max;
      });

      if (failedRange) {
        setFeedback({
          passed: false,
          message: `Checkpoint ${failedRange.checkpoint} does not meet ${failedRange.property} target range.`,
        });
        if (hintIndex < challenge.hints.length - 1) {
          setHintIndex(prev => prev + 1);
        }
        return;
      }
    }

    const result = baseResult;
    setFeedback(result);
    if (!result.passed && hintIndex < challenge.hints.length - 1) {
      setHintIndex(prev => prev + 1);
    }
  }, [
    challenge,
    simulation,
    checkpointSimulations,
    currentCheckpoint,
    components,
    selectedChoice,
    selectedClassifyCategory,
    selectedDiagnoseCause,
    calcInput,
    hintIndex,
    rubricResult,
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.badge}>Challenge</div>
      <p className={styles.prompt}>{challenge.prompt}</p>

      {(challenge.type === 'choose' || challenge.type === 'predict') && challenge.choices && (
        <div className={styles.choices} role="radiogroup" aria-label="Answer choices">
          {challenge.choices.map(choice => (
            <label key={choice.id} className={styles.choice}>
              <input
                type="radio"
                name={`challenge-${challenge.id}`}
                value={choice.id}
                checked={selectedChoice === choice.id}
                onChange={() => setSelectedChoice(choice.id)}
              />
              <span>{choice.label}</span>
            </label>
          ))}
        </div>
      )}

      {challenge.type === 'calculate' && challenge.calculationTarget && (
        <div className={styles.calcInputGroup}>
          <input
            type="number"
            step="any"
            className={styles.calcInput}
            value={calcInput}
            onChange={e => setCalcInput(e.target.value)}
            placeholder="Your answer"
            aria-label={`Enter value in ${challenge.calculationTarget.unit}`}
          />
          <span className={styles.calcUnit}>{challenge.calculationTarget.unit}</span>
        </div>
      )}

      {challenge.type === 'classify' && challenge.classifyConfig && (
        <div className={styles.choices} role="radiogroup" aria-label="Classification categories">
          {challenge.classifyConfig.categories.map(category => (
            <label key={category} className={styles.choice}>
              <input
                type="radio"
                name={`classify-${challenge.id}`}
                value={category}
                checked={selectedClassifyCategory === category}
                onChange={() => setSelectedClassifyCategory(category)}
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      )}

      {challenge.type === 'diagnose' && challenge.diagnoseConfig && (
        <div className={styles.choices} role="radiogroup" aria-label="Diagnosis causes">
          {challenge.diagnoseConfig.acceptedCauses.map(cause => (
            <label key={cause} className={styles.choice}>
              <input
                type="radio"
                name={`diagnose-${challenge.id}`}
                value={cause}
                checked={selectedDiagnoseCause === cause}
                onChange={() => setSelectedDiagnoseCause(cause)}
              />
              <span>{cause}</span>
            </label>
          ))}
          {challenge.diagnoseConfig.evidenceItems.length > 0 && (
            <div className={styles.hints} aria-label="Evidence items">
              {challenge.diagnoseConfig.evidenceItems.map((item, i) => (
                <p key={i} className={styles.hint}>{item}</p>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Hints */}
      {hintIndex >= 0 && (
        <div className={styles.hints} aria-label="Hints">
          {challenge.hints.slice(0, hintIndex + 1).map((hint, i) => (
            <p key={i} className={styles.hint}>
              {hint}
            </p>
          ))}
        </div>
      )}

      {/* Feedback */}
      {feedback && (
        <div
          className={`${styles.feedback} ${feedback.passed ? styles.success : styles.failure}`}
          role="alert"
        >
          {feedback.message}
        </div>
      )}

      {/* Rubric panel for multi-criteria challenges */}
      {challenge.showRubricPanel && rubricResult && (
        <RubricPanel result={rubricResult} />
      )}

      {/* Detailed breakdown */}
      {challenge.detailedBreakdown && (feedback?.passed || showBreakdown) && (
        <div className={styles.breakdown}>
          <div className={styles.breakdownTitle}>Detailed Breakdown</div>
          {challenge.detailedBreakdown.steps.map((step, i) => (
            <div key={i} className={styles.breakdownStep}>
              <span className={styles.breakdownLabel}>{step.label}</span>
              <code className={styles.breakdownFormula}>{step.formula}</code>
              <span className={styles.breakdownResult}>{step.result}</span>
            </div>
          ))}
        </div>
      )}

      <div className={styles.actions}>
        {(!feedback || !feedback.passed) && (
          <button className={styles.checkButton} onClick={handleCheck}>
            Check Solution
          </button>
        )}
        {feedback?.passed && (
          <button className={styles.nextButton} onClick={onComplete}>
            Continue
          </button>
        )}
        {!feedback?.passed && hintIndex < challenge.hints.length - 1 && (
          <button
            className={styles.hintButton}
            onClick={() => setHintIndex(prev => prev + 1)}
          >
            Show Hint
          </button>
        )}
        {challenge.detailedBreakdown && !feedback?.passed && !showBreakdown && (
          <button
            className={styles.hintButton}
            onClick={() => setShowBreakdown(true)}
          >
            More Details
          </button>
        )}
      </div>
    </div>
  );
}
