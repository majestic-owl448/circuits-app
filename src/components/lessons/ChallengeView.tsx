import { useState, useCallback } from 'react';
import type { Challenge } from '../../types/lesson.ts';
import type { SimulationResult } from '../../types/circuit.ts';
import { evaluate } from '../../engine/evaluator.ts';
import styles from './ChallengeView.module.css';

interface Props {
  challenge: Challenge;
  simulation: SimulationResult;
  onComplete: () => void;
}

export function ChallengeView({ challenge, simulation, onComplete }: Props) {
  const [hintIndex, setHintIndex] = useState(-1);
  const [feedback, setFeedback] = useState<{ passed: boolean; message: string } | null>(null);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

  const handleCheck = useCallback(() => {
    if (challenge.type === 'choose') {
      const choice = challenge.choices?.find(c => c.id === selectedChoice);
      if (!choice) {
        setFeedback({ passed: false, message: 'Please select an answer.' });
        return;
      }
      if (choice.isCorrect) {
        setFeedback({ passed: true, message: 'Correct! Well done.' });
      } else {
        setFeedback({ passed: false, message: 'Not quite. Try again!' });
        if (hintIndex < challenge.hints.length - 1) {
          setHintIndex(prev => prev + 1);
        }
      }
      return;
    }

    const result = evaluate(challenge.evaluationCriteria, simulation);
    setFeedback(result);
    if (!result.passed && hintIndex < challenge.hints.length - 1) {
      setHintIndex(prev => prev + 1);
    }
  }, [challenge, simulation, selectedChoice, hintIndex]);

  return (
    <div className={styles.container}>
      <div className={styles.badge}>Challenge</div>
      <p className={styles.prompt}>{challenge.prompt}</p>

      {challenge.type === 'choose' && challenge.choices && (
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
      </div>
    </div>
  );
}
