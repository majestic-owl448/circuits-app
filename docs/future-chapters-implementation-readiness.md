# Future Chapters Implementation Readiness

This addendum strengthens the Chapter 4-10 lesson plans with implementation-ready constraints, dependencies, and acceptance rules.

## 1) Cross-Chapter Engine and UI Requirements

### Chapter 4 - Measurement, Mixed Circuits, Named Laws
- **Engine requirements**
  - Stable mixed series/parallel solver outputs (branch current, node voltage, equivalent resistance).
  - Meter read APIs for voltage, current, resistance in lesson and sandbox contexts.
  - Deterministic explanation payloads for worked-solution steps.
- **UI/tooling requirements**
  - Voltmeter/ammeter/ohmmeter placement affordances and readouts.
  - Mixed-circuit value highlighting and per-step trace view.

### Chapter 5 - Non-Ideal Behavior and Limits
- **Engine requirements**
  - Optional source internal resistance and wire resistance models.
  - Thermal/limit model with explicit failure thresholds and safe operating ranges.
  - Range-based evaluator with configurable pass bands.
- **UI/tooling requirements**
  - Value drift/under-load indicators.
  - Warning states for over-limit operation (before hard failure).

### Chapter 6 - Capacitors, Inductors, Time Behavior
- **Engine requirements**
  - Time-step simulation loop for simple RC/RL behavior.
  - Initial-state and steady-state snapshots exposed to lesson evaluator.
  - Controlled numerical stability settings for educational determinism.
- **UI/tooling requirements**
  - Time scrubber/playback controls.
  - Plot or compact timeline panel for voltage/current over time.

### Chapter 7 - AC Fundamentals and DC/AC Conversion
- **Engine requirements**
  - AC waveform primitives and frequency/amplitude parameters.
  - Intro conversion blocks with constrained educational behavior.
  - RMS/average helpers where required by lesson logic.
- **UI/tooling requirements**
  - Waveform view mode and unit-aware readouts.
  - Side-by-side AC vs DC comparison widgets.

### Chapter 8 - Diodes, Transistors, Rectification, Switching
- **Engine requirements**
  - Simplified diode conduction model (forward/reverse behavior).
  - Simplified transistor switching model with clear control path semantics.
  - Rectification examples with predictable outputs.
- **UI/tooling requirements**
  - Orientation-sensitive component visuals.
  - Control-path emphasis overlays for transistor lessons.

### Chapter 9 - Logic Gates and Digital-Style Behavior
- **Engine requirements**
  - Boolean abstraction layer over circuit states for gate behavior.
  - Truth-table generation from simulated input states.
  - Robust handling for invalid/undefined educational states.
- **UI/tooling requirements**
  - Gate input toggles and immediate output indicators.
  - Truth-table panel linked to current input selection.

### Chapter 10 - Mastery and Capstone
- **Engine requirements**
  - Cross-domain scenario support (DC, non-ideal, time, AC, active, logic).
  - Multi-criteria evaluator (structure + values + constraints + explanation).
  - Scenario seed/version locking for repeatable grading.
- **UI/tooling requirements**
  - Capstone rubric panel with criterion-by-criterion pass/fail.
  - Save/restore checkpoints per capstone challenge.

## 2) Acceptance Criteria Standard (All Future Chapters)

Use the same evaluation contract for each challenge type:

- **`choose`**: correct option selected; explanation shown for every option.
- **`predict`**: learner prediction compared against simulator result.
- **`build`**: topology correctness + target metric(s) within tolerance.
- **`fix`**: identified fault removed; post-fix metrics valid.
- **`drag-place`**: required component placement and orientation validated.
- **`calculate`**: numeric answer within tolerance + unit check.

Tolerance defaults:

- **Ideal numeric lessons**: +/-1%.
- **Non-ideal/range lessons**: explicit min/max ranges in lesson config.
- **Time-domain checkpoints**: fixed checkpoint windows (for example, `t0`, `t_mid`, `t_final`) with per-window tolerance in lesson config.

## 3) Dependency Gates Before Starting Each Chapter

Do not start implementation of a chapter until all gates are green.

- **Gate A (Engine)**: required models implemented + deterministic outputs for lesson fixtures.
- **Gate B (UI)**: required tools/controls exist and are keyboard accessible.
- **Gate C (Content)**: lesson/challenge schema fields required by the chapter are finalized.
- **Gate D (Validation)**: representative chapter fixtures pass lint/build and manual walkthrough.

## 4) Effort and Risk Scoring (Planning Heuristic)

Scale: `Effort` 1-5, `Risk` 1-5.

| Chapter | Focus | Effort | Risk | Main Risk Driver |
|---|---|---:|---:|---|
| 4 | Measurement + mixed circuits | 3 | 3 | Meter UX + solver explanation consistency |
| 5 | Non-ideal behavior | 4 | 4 | Model complexity and range evaluation semantics |
| 6 | Time-dependent behavior | 5 | 5 | Numerical stability + time UX |
| 7 | AC + conversion | 5 | 5 | New waveform model and pedagogy alignment |
| 8 | Diodes/transistors | 4 | 4 | Simplification fidelity vs learner expectations |
| 9 | Logic abstraction | 4 | 4 | Analog-to-digital mapping edge cases |
| 10 | Capstone integration | 5 | 5 | Cross-domain evaluator and rubric consistency |

## 5) Suggested Execution Order Inside Each Future Chapter

1. Build/verify engine primitives with fixture circuits.
2. Implement minimum UI controls for that chapter's tools.
3. Ship first unit in guided mode only.
4. Add challenge evaluator rules and tolerance configs.
5. Expand remaining units with increasing learner autonomy.
6. Run chapter-level content consistency checks (lesson IDs, quiz unlocks, rubric fields).
