# Capstone Rubric Panel UX Specification

This specification defines the Chapter 10 final mastery rubric panel interaction model.

## Scope

- Applies to Chapter 10 Lesson 5.1 and any future challenge that uses the same multi-criteria evaluator.
- Covers rubric panel layout, interaction, status semantics, accessibility, and checkpoint behavior.
- Does not redefine scoring logic; scoring remains defined in Chapter 10 lesson plan and evaluator config.

## Rubric dimensions and status semantics

- Dimension 1: Correct structure (hard gate)
- Dimension 2: Correct values (hard gate)
- Dimension 3: Constraint satisfaction (hard gate)
- Dimension 4: Domain-appropriate reasoning (advisory)
- Dimension 5: Efficient design (feedback-only)

Status labels:
- `pass`: criterion satisfied
- `fail`: criterion not satisfied
- `advisory-aligned`, `advisory-partially-aligned`, `advisory-not-aligned`: Dimension 4 only
- `feedback`: Dimension 5 feedback-only outcome

## Panel layout

- Rubric panel appears in lesson workspace as a collapsible side panel.
- Default state:
  - before first check: collapsed with a summary chip (`Rubric: not evaluated`)
  - after first check: expanded by default to show dimension-level outcomes
- Top summary section shows:
  - overall hard-gate result (`pass` only if Dimensions 1-3 pass)
  - count of passed hard-gate dimensions (`x/3`)
  - advisory summary for Dimensions 4-5
- Dimension list section shows one row per dimension with:
  - label and short description
  - current status token
  - expand/collapse affordance for detailed evidence and guidance

## Interaction model

- `Check solution` updates rubric statuses in-place without losing panel focus context.
- Clicking a dimension row (or pressing Enter/Space when focused) toggles details.
- Expanded details can include:
  - failing signals/metrics
  - accepted ranges/checkpoints
  - one short next-step hint
- Re-check behavior:
  - each new check replaces prior status values
  - panel remains open/closed according to learner choice

## Dimension 4 evidence display

- Dimension 4 detail must show configured expected signals and observed learner signals.
- Display includes:
  - `primaryDomain` selection status
  - first major action category
  - first tool family used
  - stage ordering signal (when applicable)
- The UI must show deterministic match count used for classification (`aligned`, `partially-aligned`, `not-aligned`).

## Accessibility requirements

- Keyboard:
  - panel toggle and every dimension row are keyboard-operable
  - expanded details are reachable in tab order
  - focus remains visible after each check update
- Non-color-only meaning:
  - status must be conveyed by text label and icon/shape, not color alone
- Text fallback:
  - `Describe circuit` must include hard-gate pass/fail summary and per-dimension status text
  - advisory dimensions are identified as non-blocking in text output
- Reduced motion:
  - expand/collapse and status updates use minimal or no animation when reduced-motion is enabled

## Error and empty states

- If rubric data is unavailable, show a clear inline message and keep lesson operable.
- If a dimension is not applicable in a scenario, mark it `not-applicable` with a short reason.
- If Dimension 4 signals are partially unavailable, show available signals and label missing ones explicitly.

## Telemetry and QA hooks

- Emit a deterministic payload after each check including:
  - dimension statuses
  - hard-gate result
  - dimension-4 signal matches
- Manual QA checklist for this panel must verify:
  - keyboard-only use
  - non-color-only status communication
  - deterministic re-check outcomes on fixture scenarios
