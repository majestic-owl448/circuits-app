import type { MeterState } from '../../hooks/useCircuit.ts';
import styles from './MeterOverlay.module.css';

interface Props {
  meterState: MeterState | null;
  onClose: () => void;
}

export function MeterOverlay({ meterState, onClose }: Props) {
  if (!meterState) {
    return null;
  }

  return (
    <div className={styles.overlay} role="status" aria-live="polite">
      <div className={styles.header}>
        <strong className={styles.title}>{labelForMode(meterState.mode)}</strong>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close meter panel">
          Close
        </button>
      </div>
      {meterState.result ? (
        <div className={styles.readout}>
          <div className={meterState.result.valid ? styles.valid : styles.invalid}>
            {meterState.result.valid && meterState.result.value !== null
              ? `${meterState.result.value.toFixed(3)} ${meterState.result.unit}`
              : 'No valid reading'}
          </div>
          <p className={styles.message}>{meterState.result.message}</p>
          {meterState.mode === 'voltmeter' && meterState.targetNodeAId && meterState.targetNodeBId && (
            <p className={styles.message}>Nodes: {meterState.targetNodeAId} to {meterState.targetNodeBId}</p>
          )}
          {meterState.mode === 'voltmeter' && meterState.pendingNodeId && (
            <p className={styles.message}>Selected first probe at {meterState.pendingNodeId}. Select second node.</p>
          )}
        </div>
      ) : (
        <p className={styles.message}>Select a measurement target to read a value.</p>
      )}
    </div>
  );
}

function labelForMode(mode: MeterState['mode']): string {
  if (mode === 'voltmeter') return 'Voltmeter';
  if (mode === 'ammeter') return 'Ammeter';
  return 'Ohmmeter';
}
