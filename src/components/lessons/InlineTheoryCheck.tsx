import { useState } from 'react';
import type { InlineTheoryCheck as InlineTheoryCheckType } from '../../types/lesson.ts';
import styles from './InlineTheoryCheck.module.css';

interface Props {
  check: InlineTheoryCheckType;
  onPass: () => void;
}

export function InlineTheoryCheck({ check, onPass }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  function handleSubmit() {
    if (!selectedId) return;
    const choice = check.choices.find(c => c.id === selectedId);
    if (!choice) return;

    setSubmitted(true);
    if (choice.isCorrect) {
      setIsCorrect(true);
      onPass();
    }
  }

  function handleRetry() {
    setSelectedId(null);
    setSubmitted(false);
    setIsCorrect(false);
  }

  return (
    <div className={styles.container}>
      <p className={styles.question}>{check.question}</p>
      <div className={styles.choices} role="radiogroup" aria-label="Answer choices">
        {check.choices.map(choice => (
          <label
            key={choice.id}
            className={`${styles.choice} ${submitted && selectedId === choice.id ? (choice.isCorrect ? styles.correct : styles.incorrect) : ''} ${submitted && choice.isCorrect && !isCorrect ? styles.correctHint : ''}`}
          >
            <input
              type="radio"
              name="theory-check"
              value={choice.id}
              checked={selectedId === choice.id}
              onChange={() => setSelectedId(choice.id)}
              disabled={submitted && isCorrect}
              className={styles.radio}
            />
            <span className={styles.choiceLabel}>{choice.label}</span>
          </label>
        ))}
      </div>

      {submitted && isCorrect && (
        <div className={styles.feedback + ' ' + styles.feedbackCorrect}>
          <p className={styles.feedbackTitle}>Correct!</p>
          <p className={styles.feedbackText}>{check.explanation}</p>
        </div>
      )}

      {submitted && !isCorrect && (
        <div className={styles.feedback + ' ' + styles.feedbackWrong}>
          <p className={styles.feedbackTitle}>Not quite.</p>
          <p className={styles.feedbackText}>
            {check.choices.find(c => c.id === selectedId)?.explanation ?? 'Try again.'}
          </p>
        </div>
      )}

      {!submitted && (
        <button
          className={styles.submitButton}
          onClick={handleSubmit}
          disabled={!selectedId}
        >
          Check Answer
        </button>
      )}

      {submitted && !isCorrect && (
        <button className={styles.retryButton} onClick={handleRetry}>
          Try Again
        </button>
      )}
    </div>
  );
}
