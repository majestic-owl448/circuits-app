# Chapters 4-10 Implementation Checklist

Implementation checklist for foundational work needed before and during Chapters 4-10. This is organized by phase, with file-level tasks and acceptance criteria.

## Status Legend

- [ ] Not started
- [~] In progress
- [x] Completed

## Global Completion Criteria (apply to every phase)

- [x] `npm run lint` passes
- [x] `npm run build` passes
- [x] Existing Chapters 1-3 learner flow remains functional
- [~] Accessibility checks completed for newly added interactive UI
- [x] `CLAUDE.md` status is updated to reflect actual implementation progress

## Phase 0 - Baseline Fixtures for Existing Behavior

### `package.json`
- [x] Add script(s) for deterministic engine fixture verification (for example, `verify:engine`)
- Acceptance criteria:
  - [x] Fixture verification command runs locally without manual edits
  - [x] Command exits non-zero on failed fixture assertions

### `src/engine/__fixtures__/chapter1-3.ts` (new)
- [x] Add representative fixture circuits for Chapters 1-3 (series and currently supported parallel cases)
- [x] Encode expected outputs (completion status, short-circuit status, current, resistance, per-component values where applicable)
- Acceptance criteria:
  - [x] Fixtures are deterministic and do not rely on runtime timestamps/randomness
  - [x] Fixture set covers at least one case per current challenge style that depends on simulation values

### `src/engine/__fixtures__/run-fixtures.ts` (new)
- [x] Implement fixture runner that executes solver and compares actual vs expected values
- [x] Add tolerant numeric comparison helper for floating-point checks
- Acceptance criteria:
  - [x] Output clearly identifies failing fixture(s) and mismatched field(s)
  - [x] Success output is concise and CI-friendly

## Phase 1 - Solver Architecture Upgrade (Gate A)

### `src/engine/solver.ts`
- [x] Refactor into orchestration layer (input normalization, backend selection, result mapping)
- [x] Preserve backward-compatible `SimulationResult` behavior for existing consumers
- Acceptance criteria:
  - [x] All Phase 0 fixtures still pass
  - [x] Chapter 1-3 UI behavior is unchanged from learner perspective

### `package.json`
- [x] Add solver compare-mode verification script (`verify:engine:compare`) for controlled backend parity checks
- Acceptance criteria:
  - [x] Compare-mode script runs with `CIRCUITS_SOLVER_BACKEND=compare`
  - [x] Compare-mode fixtures are green for Chapter 1-3 baseline set

### `src/engine/legacy-solver.ts` (new)
- [x] Extract legacy loop-based behavior into dedicated backend to preserve shipped behavior during migration
- Acceptance criteria:
  - [x] Legacy backend reproduces baseline fixture outputs

### `src/engine/mna/solver.ts` (new)
- [x] Implement MNA-based solution path for mixed topologies
- [x] Support node-voltage and branch-current solution extraction
- Acceptance criteria:
  - [x] Mixed series/parallel fixture circuits solve correctly
  - [x] Open-switch paths are handled correctly and deterministically

### `src/engine/mna/matrix.ts` (new)
- [x] Add matrix assembly/solve helpers with numerical guards
- Acceptance criteria:
  - [x] Singular/invalid matrices produce explicit diagnostics (not silent failures)

### `src/engine/mna/topology.ts` (new)
- [x] Build node indexing/branch mapping for MNA system assembly
- Acceptance criteria:
  - [x] Mapping is stable across runs for the same circuit input

### `src/engine/mna/postprocess.ts` (new)
- [x] Convert solved states into per-component values for UI/evaluator use
- Acceptance criteria:
  - [x] Computed per-component values align with expected fixture tolerances

### `package.json`
- [x] Add dedicated MNA verification script (`verify:engine:mna`)
- Acceptance criteria:
  - [x] Script has matching MNA fixture runner implementation

### `src/engine/__fixtures__/phase1-mna.ts` (new)
- [x] Add mixed-topology and open-path Phase 1 fixtures
- Acceptance criteria:
  - [x] Fixtures are validated by a dedicated MNA runner

### `src/engine/__fixtures__/run-mna-fixtures.ts` (new)
- [x] Implement dedicated runner for Phase 1 MNA fixtures
- Acceptance criteria:
  - [x] Runner reports fixture-level pass/fail with numeric diffs
  - [x] `npm run verify:engine:mna` is green before enabling MNA by default

### `src/types/circuit.ts`
- [x] Extend `SimulationResult` with optional advanced fields (`nodeVoltages`, `branchCurrents`, diagnostics)
- Acceptance criteria:
  - [x] Existing call sites compile unchanged
  - [x] New fields are optional and safely ignored by old UI paths

## Phase 2 - Schema and Type Extensions (Gate C)

### `src/types/lesson.ts`
- [x] Add challenge types: `classify`, `diagnose`
- [x] Add fields for classify payload (categories, correct category, optional required evidence)
- [x] Add fields for diagnose payload (accepted causes, evidence items, optional minimum matches)
- [x] Extend evaluation criteria for multi-criteria/range-based checks
- Acceptance criteria:
  - [x] Existing lessons compile and run without config changes
  - [x] New challenge types are representable without overloading `choose`

### `src/types/circuit.ts`
- [x] Extend `ComponentProperties` with non-ideal and failure-model fields (`internalResistance`, `wireResistance`, `operatingLimit`, `isFailed`, `tolerance`)
- Acceptance criteria:
  - [x] Existing component definitions remain valid with defaults

### `src/lessons/shared.ts`
- [x] Add shared constants/helpers for tolerance defaults and operating-limit presets
- Acceptance criteria:
  - [x] New chapter configs can import defaults instead of duplicating values

## Phase 3 - Evaluator Refactor (Modular Checkers)

### `src/engine/evaluator.ts`
- [x] Refactor into coordinator that runs checker modules and aggregates outcomes
- Acceptance criteria:
  - [x] Existing challenge evaluation semantics are preserved for Chapters 1-3

### `src/engine/__fixtures__/evaluator-fixtures.ts` (new)
- [x] Add deterministic evaluator fixtures for custom checks and multi-criteria outcomes
- Acceptance criteria:
  - [x] Fixtures cover hard-pass failures and advisory-only outcomes

### `src/engine/__fixtures__/run-evaluator-fixtures.ts` (new)
- [x] Implement evaluator fixture runner with clear failure output
- Acceptance criteria:
  - [x] `npm run verify:evaluator` is green

### `package.json`
- [x] Add evaluator verification script (`verify:evaluator`)
- Acceptance criteria:
  - [x] Script runs in local and CI contexts without manual setup

### `src/engine/evaluator/checkers/topology.ts` (new)
- [x] Validate circuit completeness and structural requirements

### `src/engine/evaluator/checkers/numeric-range.ts` (new)
- [x] Validate scalar/range metrics with configurable tolerance handling

### `src/engine/evaluator/checkers/choice.ts` (new)
- [x] Handle `choose` checks in modular form

### `src/engine/evaluator/checkers/classify.ts` (new)
- [x] Evaluate `classify` challenge responses

### `src/engine/evaluator/checkers/diagnose.ts` (new)
- [x] Evaluate `diagnose` challenge responses and evidence thresholds

### `src/engine/evaluator/checkers/constraints.ts` (new)
- [x] Validate operating-limit and constraint checks (prepping Chapter 5/10)

### `src/types/lesson.ts`
- [x] Add evaluator result typing for multi-criteria outputs (hard-pass vs advisory)
- Acceptance criteria:
  - [x] Evaluator can return criterion-level outcomes for rubric-ready UI

## Phase 4 - Measurement Tools (Gate B for Chapter 4)

### `src/engine/measurements.ts` (new)
- [x] Implement voltage, current, resistance measurement APIs
- [x] Enforce de-energized validation for ohmmeter
- Acceptance criteria:
  - [x] Measurement outputs are deterministic at a given circuit state
  - [x] Ohmmeter blocks energized measurement with clear reason

### `src/hooks/useCircuit.ts`
- [x] Expose measurement operations and state to UI layers
- Acceptance criteria:
  - [x] Lesson and sandbox can consume the same measurement API

### `src/components/workspace/CircuitWorkspace.tsx`
- [x] Add measurement interaction mode and probe placement affordances
- Acceptance criteria:
  - [x] Keyboard-only flow can place/select probes and trigger reads

### `src/components/workspace/MeterOverlay.tsx` (new)
- [x] Render meter probes/readouts and active measurement annotations
- Acceptance criteria:
  - [x] Readouts remain legible and non-color-dependent

### `src/components/workspace/DragPalette.tsx`
- [x] Add meter tool selection entries where relevant
- Acceptance criteria:
  - [x] Palette behavior remains coherent with existing component placement modes

### `src/components/lessons/ChallengeView.tsx`
- [x] Add measurement-aware challenge handling for meter interactions
- Acceptance criteria:
  - [x] Learners can complete meter-based challenges without hidden manual steps

### `src/engine/description.ts`
- [x] Include current measurement context in textual circuit description output
- Acceptance criteria:
  - [x] Screen-reader-friendly description includes active meter values when present

## Phase 5 - Non-Ideal Behavior and Failure States

### `src/engine/nonideal.ts` (new)
- [x] Apply internal and wire resistance adjustments to solved circuits
- Acceptance criteria:
  - [x] Non-ideal values affect outputs only when configured

### `src/engine/failure.ts` (new)
- [x] Evaluate operating-limit breaches and emit failure-state transitions
- Acceptance criteria:
  - [x] Failure transitions are deterministic and reproducible

### `src/engine/solver.ts`
- [x] Integrate non-ideal and failure post-processing into final simulation payload
- Acceptance criteria:
  - [x] Existing ideal lessons remain unaffected without non-ideal params

### `src/components/workspace/ComponentRenderer.tsx`
- [x] Add visual states for warnings/failure (`isFailed`, over-limit indicators)
- Acceptance criteria:
  - [x] Warning/failure state is visible without relying on color only

### `src/engine/evaluator/checkers/constraints.ts`
- [x] Enforce operating-limit evaluation checks for challenge grading
- Acceptance criteria:
  - [x] Constraint failures produce learner-readable remediation messaging

## Phase 6 - Time Visualization Foundation (Gate B before Chapter 6)

### `src/engine/time/simulator.ts` (new)
- [x] Implement time-step simulation contract for educational RC/RL behavior
- Acceptance criteria:
  - [x] Time-state snapshots are deterministic for checkpoints (`t0`, `t_mid`, `t_final`)

### `src/types/circuit.ts`
- [x] Add time-state types for snapshots and timeline points
- Acceptance criteria:
  - [x] Types support both transient mode and future AC extension

### `src/components/workspace/TimeControls.tsx` (new)
- [x] Build scrubber + play/pause + speed + reset controls
- Acceptance criteria:
  - [x] Keyboard controls match spec behavior
  - [x] Reduced-motion mode uses step-through updates (no animated playback)

### `src/components/workspace/TimelinePanel.tsx` (new)
- [x] Add compact timeline plot with scrubber marker and checkpoint highlighting
- Acceptance criteria:
  - [x] Dual-line differentiation works without color dependence (line styles/markers)

### `src/components/lessons/LessonView.tsx`
- [x] Integrate time controls/panel into time-enabled lesson flows
- [x] Ensure challenge evaluation can target required checkpoint windows
- Acceptance criteria:
  - [x] Lesson checks evaluate against configured checkpoints, not arbitrary slider positions

### `src/state/persistence.ts`
- [x] Persist time-visualization preferences as needed
- Acceptance criteria:
  - [x] Preferences restore across reloads without migration breakage

### `src/state/app-context.tsx`
- [x] Add actions/state for time controls and playback behavior
- Acceptance criteria:
  - [x] State transitions are predictable and serializable

### `src/engine/description.ts`
- [x] Add textual time-position summary (early/middle/late, changing vs settled)
- Acceptance criteria:
  - [x] Description output reflects current scrubber position context

## Phase 7 - Sandbox Progressive Unlock

### `src/components/sandbox/SandboxView.tsx`
- [x] Replace flat component list with domain-grouped unlock surface
- Acceptance criteria:
  - [x] Beginner mode remains low-complexity while preserving access to unlocked basics

### `src/components/sandbox/SandboxDomainsPanel.tsx` (new)
- [x] Implement grouped domain sections (measurement, non-ideal, time, AC/conversion, active, logic)
- Acceptance criteria:
  - [x] Keyboard navigation works across groups and controls

### `src/state/persistence.ts`
- [x] Persist beginner vs all-tools sandbox view preference
- Acceptance criteria:
  - [x] View preference restores consistently after reload

### `src/state/app-context.tsx`
- [x] Add state/actions for sandbox surface mode toggling
- Acceptance criteria:
  - [x] Toggle state is shared consistently across sandbox sessions

### `src/components/workspace/DragPalette.tsx`
- [x] Keep as reusable low-level picker; ensure compatibility with grouped sandbox domain panel
- Acceptance criteria:
  - [x] Existing lesson placement UX remains functional

## Documentation and Tracking

### `CLAUDE.md`
- [x] Keep current app status synchronized with phase completion and key architectural milestones
- Acceptance criteria:
  - [x] Status section reflects actual delivered state, not planned state

### `docs/review-ch4-10-readiness-2026-04-14.md`
- [x] Update phase statuses/milestones as implementation progresses
- Acceptance criteria:
  - [x] Review doc and this checklist remain aligned

### `docs/specs/time-visualization-ux-spec.md`
- [x] Mark implemented versus pending spec behaviors during Phase 6+
- Acceptance criteria:
  - [x] Gate B readiness for Chapter 6 can be validated from spec status

### `docs/ch4-10-id-mapping-tables.md`
- [x] Add explicit per-chapter lesson/quiz ID mapping tables for Chapters 4-10
- Acceptance criteria:
  - [x] Every planned Chapter 4-10 lesson has a mapped lesson ID and planned standalone quiz ID
  - [x] Mapping format follows `lesson-chX-Y-Z` and `quiz-chX-topic-name` naming conventions

## Recommended Execution Order

1. Phase 0
2. Phase 1
3. Phase 2 + Phase 3
4. Phase 4
5. Phase 5
6. Phase 6
7. Phase 7
