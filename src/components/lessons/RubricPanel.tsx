import { useState } from 'react';
import type { MultiCriteriaEvaluationResult } from '../../types/lesson.ts';
import styles from './RubricPanel.module.css';

interface Props {
  result: MultiCriteriaEvaluationResult;
}

export function RubricPanel({ result }: Props) {
  const [expanded, setExpanded] = useState(true);
  const [expandedOutcomeId, setExpandedOutcomeId] = useState<string | null>(null);

  const hardGateOutcomes = result.outcomes.filter(o => o.severity === 'hard-pass');
  const advisoryOutcomes = result.outcomes.filter(o => o.severity === 'advisory');
  const passedHardGates = hardGateOutcomes.filter(o => o.passed).length;

  function statusLabel(outcome: MultiCriteriaEvaluationResult['outcomes'][number]) {
    if (outcome.severity === 'advisory') {
      return outcome.passed ? 'advisory-aligned' : 'advisory-not-aligned';
    }
    return outcome.passed ? 'pass' : 'fail';
  }

  function statusText(outcome: MultiCriteriaEvaluationResult['outcomes'][number]) {
    if (outcome.severity === 'advisory') {
      return outcome.passed ? 'Aligned' : 'Not aligned';
    }
    return outcome.passed ? 'Pass' : 'Fail';
  }

  function toggleOutcome(id: string) {
    setExpandedOutcomeId(prev => (prev === id ? null : id));
  }

  return (
    <div className={styles.panel} aria-label="Evaluation rubric">
      <button
        className={styles.panelHeader}
        onClick={() => setExpanded(prev => !prev)}
        aria-expanded={expanded}
        aria-controls="rubric-body"
      >
        <span className={styles.panelTitle}>Evaluation Rubric</span>
        <span className={`${styles.overallChip} ${result.passed ? styles.chipPass : styles.chipFail}`}>
          {result.passed ? 'Pass' : 'Fail'} — {passedHardGates}/{hardGateOutcomes.length} criteria met
        </span>
        <span className={styles.chevron} aria-hidden="true">{expanded ? '▲' : '▼'}</span>
      </button>

      {expanded && (
        <div id="rubric-body" className={styles.body}>
          {result.outcomes.length === 0 && (
            <p className={styles.emptyNote}>No evaluation criteria available.</p>
          )}

          {hardGateOutcomes.length > 0 && (
            <div className={styles.section}>
              <div className={styles.sectionLabel}>Required criteria</div>
              {hardGateOutcomes.map(outcome => (
                <div key={outcome.id} className={styles.outcomeRow}>
                  <button
                    className={styles.outcomeSummary}
                    onClick={() => toggleOutcome(outcome.id)}
                    aria-expanded={expandedOutcomeId === outcome.id}
                  >
                    <span className={`${styles.statusChip} ${styles[`status-${statusLabel(outcome)}`]}`}>
                      {statusText(outcome)}
                    </span>
                    <span className={styles.outcomeId}>{formatOutcomeId(outcome.id)}</span>
                    <span className={styles.expandIcon} aria-hidden="true">
                      {expandedOutcomeId === outcome.id ? '−' : '+'}
                    </span>
                  </button>
                  {expandedOutcomeId === outcome.id && (
                    <div className={styles.outcomeDetail}>{outcome.message}</div>
                  )}
                </div>
              ))}
            </div>
          )}

          {advisoryOutcomes.length > 0 && (
            <div className={styles.section}>
              <div className={styles.sectionLabel}>Advisory (non-blocking)</div>
              {advisoryOutcomes.map(outcome => (
                <div key={outcome.id} className={styles.outcomeRow}>
                  <button
                    className={styles.outcomeSummary}
                    onClick={() => toggleOutcome(outcome.id)}
                    aria-expanded={expandedOutcomeId === outcome.id}
                  >
                    <span className={`${styles.statusChip} ${styles[`status-${statusLabel(outcome)}`]}`}>
                      {statusText(outcome)}
                    </span>
                    <span className={styles.outcomeId}>{formatOutcomeId(outcome.id)}</span>
                    <span className={styles.expandIcon} aria-hidden="true">
                      {expandedOutcomeId === outcome.id ? '−' : '+'}
                    </span>
                  </button>
                  {expandedOutcomeId === outcome.id && (
                    <div className={styles.outcomeDetail}>{outcome.message}</div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function formatOutcomeId(id: string): string {
  return id
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}
