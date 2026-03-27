import { useState } from 'react';
import { useAppState, useAppDispatch } from '../../state/app-context.tsx';
import { quizRegistry } from '../../quizzes/quiz-registry.ts';
import type { QuizQuestion } from '../../types/quiz.ts';
import styles from './QuizView.module.css';

export function QuizView() {
  const { activeQuizId } = useAppState();
  const dispatch = useAppDispatch();

  const quiz = quizRegistry.find(q => q.id === activeQuizId);
  if (!quiz) {
    return (
      <div className={styles.page}>
        <p className={styles.error}>Quiz not found.</p>
        <button className={styles.backButton} onClick={() => dispatch({ type: 'NAVIGATE', view: 'home' })}>
          Back to Home
        </button>
      </div>
    );
  }

  return <QuizViewInner quiz={quiz} dispatch={dispatch} />;
}

function QuizViewInner({
  quiz,
  dispatch,
}: {
  quiz: typeof quizRegistry[number];
  dispatch: ReturnType<typeof useAppDispatch>;
}) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [finished, setFinished] = useState(false);

  const question: QuizQuestion = quiz.questions[questionIndex];
  const totalQuestions = quiz.questions.length;
  const progressPct = ((questionIndex) / totalQuestions) * 100;

  const correctCount = Object.values(answers).filter(Boolean).length;

  function handleAnswer(questionId: string, isCorrect: boolean) {
    setAnswers(prev => ({ ...prev, [questionId]: isCorrect }));
  }

  function handleNext() {
    if (questionIndex < totalQuestions - 1) {
      setQuestionIndex(prev => prev + 1);
    } else {
      const finalCorrect = Object.values(answers).filter(Boolean).length;
      const score = Math.round((finalCorrect / totalQuestions) * 100);
      dispatch({ type: 'COMPLETE_QUIZ', quizId: quiz.id, score });
      setFinished(true);
    }
  }

  function handleRetry() {
    setQuestionIndex(0);
    setAnswers({});
    setFinished(false);
  }

  if (finished) {
    const score = Math.round((correctCount / totalQuestions) * 100);
    const passed = score >= quiz.passingScore;
    return (
      <div className={styles.page}>
        <div className={styles.scoreCard}>
          <h2 className={styles.scoreTitle}>{quiz.title}</h2>
          <div className={`${styles.scoreValue} ${passed ? styles.scorePassed : styles.scoreFailed}`}>
            {score}%
          </div>
          <p className={styles.scoreDetail}>
            {correctCount} of {totalQuestions} correct
          </p>
          <p className={styles.scoreMessage}>
            {passed
              ? 'Great work! You have a solid understanding of these concepts.'
              : 'Keep practicing. Review the theory and try again.'}
          </p>
          <div className={styles.scoreActions}>
            <button className={styles.retryButton} onClick={handleRetry}>
              Try Again
            </button>
            <button
              className={styles.backButton}
              onClick={() => dispatch({ type: 'NAVIGATE', view: 'home' })}
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.quizContainer}>
        <div className={styles.header}>
          <h2 className={styles.title}>{quiz.title}</h2>
          <button
            className={styles.exitButton}
            onClick={() => dispatch({ type: 'NAVIGATE', view: 'home' })}
          >
            Exit
          </button>
        </div>

        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${progressPct}%` }} />
        </div>
        <p className={styles.progressLabel}>
          Question {questionIndex + 1} of {totalQuestions}
        </p>

        <QuestionCard
          key={question.id}
          question={question}
          isLast={questionIndex >= totalQuestions - 1}
          onAnswer={handleAnswer}
          onNext={handleNext}
        />
      </div>
    </div>
  );
}

function QuestionCard({
  question,
  isLast,
  onAnswer,
  onNext,
}: {
  question: QuizQuestion;
  isLast: boolean;
  onAnswer: (questionId: string, isCorrect: boolean) => void;
  onNext: () => void;
}) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const selectedChoice = question.choices.find(c => c.id === selectedId);

  function handleSubmit() {
    if (!selectedId) return;
    setSubmitted(true);
    const choice = question.choices.find(c => c.id === selectedId);
    onAnswer(question.id, choice?.isCorrect ?? false);
  }

  return (
    <div className={styles.questionCard}>
      <p className={styles.questionText}>{question.prompt}</p>

      <div className={styles.choices} role="radiogroup" aria-label="Answer choices">
        {question.choices.map(choice => (
          <label
            key={choice.id}
            className={`${styles.choice} ${submitted && selectedId === choice.id ? (choice.isCorrect ? styles.correct : styles.incorrect) : ''} ${submitted && choice.isCorrect && selectedId !== choice.id ? styles.correctHint : ''}`}
          >
            <input
              type="radio"
              name={`quiz-q-${question.id}`}
              value={choice.id}
              checked={selectedId === choice.id}
              onChange={() => setSelectedId(choice.id)}
              disabled={submitted}
              className={styles.radio}
            />
            <span className={styles.choiceLabel}>{choice.label}</span>
          </label>
        ))}
      </div>

      {submitted && selectedChoice && (
        <div className={`${styles.feedback} ${selectedChoice.isCorrect ? styles.feedbackCorrect : styles.feedbackWrong}`}>
          <p className={styles.feedbackTitle}>
            {selectedChoice.isCorrect ? 'Correct!' : 'Incorrect'}
          </p>
          {selectedChoice.explanation && (
            <p className={styles.feedbackText}>{selectedChoice.explanation}</p>
          )}
        </div>
      )}

      <div className={styles.actions}>
        {!submitted && (
          <button
            className={styles.submitButton}
            onClick={handleSubmit}
            disabled={!selectedId}
          >
            Submit
          </button>
        )}
        {submitted && (
          <button className={styles.nextButton} onClick={onNext}>
            {isLast ? 'See Results' : 'Next Question'}
          </button>
        )}
      </div>
    </div>
  );
}
