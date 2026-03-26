import type { LessonStep } from '../../types/lesson.ts';
import styles from './LessonText.module.css';

interface Props {
  step: LessonStep;
  stepIndex: number;
  totalSteps: number;
  canAdvance: boolean;
  onAdvance: () => void;
}

export function LessonText({ step, stepIndex, totalSteps, canAdvance, onAdvance }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.progress}>
        Step {stepIndex + 1} of {totalSteps}
      </div>
      <div
        className={styles.text}
        dangerouslySetInnerHTML={{ __html: markdownToHtml(step.text) }}
      />
      {step.requiredAction ? (
        <div className={styles.action}>
          {canAdvance ? (
            <button className={styles.nextButton} onClick={onAdvance}>
              Continue
            </button>
          ) : (
            <p className={styles.actionHint}>
              {getActionHint(step)}
            </p>
          )}
        </div>
      ) : (
        <button className={styles.nextButton} onClick={onAdvance}>
          {stepIndex === totalSteps - 1 ? 'Start Challenge' : 'Continue'}
        </button>
      )}
    </div>
  );
}

function getActionHint(step: LessonStep): string {
  if (!step.requiredAction) return '';
  switch (step.requiredAction.type) {
    case 'toggle-switch':
      return step.requiredAction.targetState
        ? 'Click the switch to close it.'
        : 'Click the switch to open it.';
    case 'connect-wire':
      return 'Connect the two highlighted points with a wire.';
    case 'place-component':
      return 'Place the required component on the workspace.';
    default:
      return 'Complete the required action to continue.';
  }
}

function markdownToHtml(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.+?)`/g, '<code>$1</code>');
}
