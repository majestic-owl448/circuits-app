# Future Chapters Implementation Readiness

This addendum strengthens the Chapter 4-10 lesson plans with implementation-ready constraints, dependencies, and acceptance rules.

## Naming Conventions for Chapter 4-10 Content

- Lesson IDs must follow `lesson-chX-Y-Z` and map directly to chapter/unit/lesson numbering used in lesson-plan documents.
- Standalone quiz IDs must follow `quiz-chX-topic-name` with stable, kebab-case topic slugs defined in chapter implementation notes.
- Before implementation of each chapter starts, add a short lesson/quiz ID mapping table to that chapter's implementation checklist.

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
  - Ohmmeter validity messaging must preserve Chapter 4's de-energized rule, with non-ideal clarification: non-ideal source/internal-resistance models do not change energized/de-energized determination; any active source contribution in the connected graph component keeps the context energized.

### Chapter 6 - Capacitors, Inductors, Time Behavior
- **Engine requirements**
  - Time-step simulation loop for simple RC/RL behavior.
  - Initial-state and steady-state snapshots exposed to lesson evaluator.
  - Controlled numerical stability settings for educational determinism.
  - Inductor energy-release model (demagnetization behavior when driving condition changes).
- **UI/tooling requirements**
  - Time scrubber/playback controls.
  - Plot or compact timeline panel for voltage/current over time.
  - **CRITICAL: Full Time-Visualization UX Specification is defined in `docs/specs/time-visualization-ux-spec.md`.** That specification covers: time scrubber interaction model, playback controls (play/pause/speed/reset), timeline panel (compact plot with quantity selection), checkpoint markers, accessibility requirements (keyboard, reduced-motion, text summaries), and meter integration. This specification must be finalized and implemented as Gate B before Chapter 6 content work begins.

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

### Cross-chapter sandbox progressive-unlock UX
- **Requirement scope**
  - Define and implement a progressive tool-surface model so sandbox controls scale from Chapter 4 to Chapter 10 without overwhelming learners.
  - Detailed interaction model is specified in `docs/specs/sandbox-progressive-unlock-ux-spec.md`.
- **Minimum behavior**
  - Group tools by domain (measurement, non-ideal, time, AC/conversion, active, logic).
  - Show only chapter-unlocked domains by default; allow expanding prior-domain groups.
  - Preserve a "beginner view" and an "all unlocked tools" view.
  - Persist learner view preference locally.
- **Accessibility and clarity**
  - Keyboard navigation across tool groups.
  - Text labels that do not rely on color-only grouping.
  - Clear unavailable-state messaging for not-yet-unlocked domains.

### Chapter 10 - Mastery and Capstone
- **Engine requirements**
  - Cross-domain scenario support (DC, non-ideal, time, AC, active, logic).
  - Multi-criteria evaluator (structure + values + constraints + explanation).
  - Scenario seed/version locking for repeatable grading.
  - Domain classification evaluator for Lesson 1.2 (assess whether learner's domain choice matches expected domain).
- **UI/tooling requirements**
  - Capstone rubric panel with criterion-by-criterion pass/fail.
  - Save/restore checkpoints per capstone challenge.
  - **Rubric dimensions for Final Mastery Challenge (Lesson 5.1):** The multi-criteria evaluator must assess five dimensions defined in the Chapter 10 lesson plan: (1) correct structure, (2) correct values within tolerance, (3) constraint satisfaction (operating limits, compatibility, time-dependent checkpoints), (4) domain-appropriate reasoning (advisory), (5) efficient design (feedback-only). Dimensions 1-3 are hard-pass gates; 4-5 are advisory feedback.

### Accessibility carry-forward for new visual elements (Ch7-9)
- All new visual interactions introduced in Chapters 7-9 must satisfy the same accessibility baseline used in the Chapter 6 Time-Visualization UX Specification.
- This includes:
  - waveform/signal views,
  - rectification output comparison visuals,
  - gate-state diagrams,
  - truth-table panels.
- Minimum parity requirements:
  - keyboard-operable interaction,
  - non-color-only differentiation,
  - text summary fallback for current state/output,
  - reduced-motion-respecting behavior for animated visualizations.

### Accessibility carry-forward for Chapter 10 rubric UI

- The Chapter 10 capstone rubric panel is a new visual and interactive surface and must satisfy the same accessibility baseline used in the Chapter 6 Time-Visualization UX Specification.
- Minimum parity requirements:
  - keyboard-operable rubric navigation,
  - pass/fail/advisory status not communicated by color alone,
  - text summary fallback for rubric status and criterion feedback,
  - reduced-motion-respecting behavior for score/state transitions.

## 2) Acceptance Criteria Standard (All Future Chapters)

Use the same evaluation contract for each challenge type:

- **`choose`**: correct option selected; explanation shown for every option.
- **`predict`**: learner prediction compared against simulator result.
- **`build`**: topology correctness + target metric(s) within tolerance.
- **`fix`**: identified fault removed; post-fix metrics valid.
- **`drag-place`**: required component placement and orientation validated.
- **`calculate`**: numeric answer within tolerance + unit check.
- **`classify`**: learner assigns correct domain/category label; explanation shown for each option.
- **`diagnose`**: learner identifies root cause from measurement evidence; accepted causes listed in lesson config.

Schema note for implementation:

- `classify` and `diagnose` are required additions to the challenge schema before Chapter 4 implementation starts.
- Minimum required fields:
  - `classify`: `categories`, `correctCategory`, optional `requiredEvidenceSignals`.
  - `diagnose`: `acceptedCauses`, `evidenceItems`, optional `minEvidenceMatches`.
- Backward compatibility:
  - existing challenge types remain unchanged.
  - clients that do not yet support these new types must fail gracefully with a clear unsupported-type message in authoring validation, not at learner runtime.

Tolerance defaults:

- **Ideal numeric lessons**: +/-1%.
- **Non-ideal/range lessons**: explicit min/max ranges in lesson config.
- **Time-domain checkpoints**: fixed checkpoint windows (for example, `t0`, `t_mid`, `t_final`) with per-window tolerance in lesson config.

## 3) Dependency Gates Before Starting Each Chapter

Do not start implementation of a chapter until all gates are green.

- **Gate A (Engine)**: required models implemented + deterministic outputs for lesson fixtures.
- **Gate B (UI)**: required tools/controls exist and are keyboard accessible.
- **Gate C (Content)**: lesson/challenge schema fields required by the chapter are finalized.
  - For Chapters 4-10, this includes `classify` and `diagnose` so intermediate chapters can use these types directly instead of overloading generic `choose`.
  - Challenge examples in planning docs must include an explicit `Challenge type` tag so implementation does not infer interaction type from prose.

Implementation usage guidance (non-gate) for Chapter 4 and Chapter 5:

- Do not force all existing intermediate diagnostic checks to migrate immediately.
- Prefer `classify` when the learner is labeling a domain/category before solving.
- Prefer `diagnose` when the learner is selecting a root cause from evidence.
- Existing `choose` challenges remain acceptable when the interaction is simple recognition and no diagnostic evidence model is needed.
- **Gate D (Validation)**: representative chapter fixtures pass lint/build and manual walkthrough.

## 4) Effort and Risk Scoring (Planning Heuristic)

Scale: `Effort` 1-5, `Risk` 1-5.

Legend:
- `1`: minor extension of existing systems
- `3`: moderate feature work across at least one subsystem boundary
- `5`: new subsystem or cross-cutting architecture changes required

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

## 6) Full-Curriculum Content Scale Note

- Planned full scale is approximately 145 lessons and 141 standalone quizzes (implemented Chapters 1-3 plus planned Chapters 4-10).
- Navigation and organization requirements at this scale:
  - chapter and unit filters are required in lesson/quiz navigation surfaces,
  - progression map must support collapsed chapter views by default,
  - quiz browsing must support chapter-scoped grouping and search by topic slug/title,
  - long-list rendering should avoid performance regressions on low-power devices.
- Validation expectation:
  - before Chapter 8 implementation starts, run a UI walkthrough using full-scale fixture data to confirm map, quiz list, and unlock-state clarity.
