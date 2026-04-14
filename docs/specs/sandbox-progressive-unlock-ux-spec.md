# Sandbox Progressive-Unlock UX Specification

This specification defines the cross-chapter sandbox progressive-unlock interaction model for Chapters 4-10.

## Scope

- Applies to sandbox tool presentation and interaction after Chapter 3 baseline unlocks.
- Covers grouping model, default and expanded states, unlock messaging, keyboard behavior, and persistence.
- Does not define simulation engine behavior for individual tools.

## Tool-domain grouping model

Tool groups are fixed and ordered:
1. Measurement
2. Non-Ideal
3. Time
4. AC/Conversion
5. Active Components
6. Logic

Rules:
- A group appears in navigation when the chapter that introduces it is unlocked.
- Previously unlocked groups remain available (monotonic unlock).
- Future groups may be shown as locked stubs with clear unavailable messaging.

## Views and defaults

Two learner-selectable views are required:
- `Beginner view`: default for first visit in each chapter; emphasizes newly relevant group and keeps others collapsed.
- `All unlocked tools` view: shows all unlocked groups expanded state as last set by learner.

Default behavior:
- On first sandbox entry after a new chapter unlock, focus the newly unlocked group and show a one-line "new tools unlocked" note.
- If learner already changed view preference, preserve preference and do not force reset.

## Group expand/collapse behavior

- Each group has an independent expand/collapse toggle.
- In `Beginner view`, only one group is expanded by default; learner can expand additional groups manually.
- In `All unlocked tools` view, group expansion state persists per user preference.
- Expansion state must persist in local storage.

## Keyboard interaction

- Group headers are keyboard-focusable buttons.
- Enter/Space toggles group expansion.
- Up/Down moves between group headers.
- Right expands collapsed group; Left collapses expanded group.
- Tab enters the currently expanded group's tool controls in logical order.

## Locked and unavailable states

- Locked groups must show:
  - plain-language reason (for example, "Unlock in Chapter 8"),
  - next unlock milestone,
  - no interactive tool controls.
- Status must not rely on color alone.

## Accessibility requirements

- Keyboard-only operation for all group and view controls.
- Visible focus indicators for group headers, view toggles, and tool controls.
- Group state announced with accessible labels (`expanded`/`collapsed`/`locked`).
- Reduced-motion mode disables animated accordion transitions.

## Persistence model

Persist the following sandbox UI preferences locally:
- selected view (`Beginner view` or `All unlocked tools`),
- per-group expand/collapse state,
- last focused group.

If stored preferences reference unavailable groups (for earlier chapters), ignore invalid entries safely.

## QA checklist hooks

- Verify unlock monotonicity across simulated progression from Chapter 4 to Chapter 10.
- Verify no previously unlocked tool disappears after unlocking later chapters.
- Verify keyboard-only navigation across all group and view controls.
- Verify locked-state messaging is present and understandable without color.
