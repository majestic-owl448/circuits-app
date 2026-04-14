# Time-Visualization UX Specification

This specification defines the interaction model for time-dependent circuit visualization used throughout Chapter 6 and referenced in later chapters.

## Scope and readiness

- Applies to Chapter 6 time-dependent lessons and Chapter 7 AC waveform extension behavior.
- This specification must be finalized before Chapter 6 implementation begins (see implementation readiness doc, Gate B).

## Core components

1. **Time scrubber**
   - A horizontal slider control below the circuit workspace, representing the full simulation time window for the current lesson scenario.
   - The scrubber has labeled anchor points: `t₀` (initial state, immediately after switch), optional `t_mid` (midpoint checkpoint), and `t_final` (steady state or end of observation window).
   - Dragging the scrubber updates the circuit visualization to show component states (voltage, current, visual indicators) at the selected time.
   - The scrubber position is displayed as a relative label (for example, "Early," "Middle," "Late") rather than raw seconds, to keep the focus conceptual.

2. **Playback controls**
   - Play/pause button: animates the circuit from `t₀` through `t_final` at a pedagogically appropriate speed (not real-time; compressed to approximately 5-8 seconds for a full cycle).
   - Speed control: two speeds, normal and slow (half speed). No fast-forward.
   - Reset button: returns to `t₀`.
   - All controls are keyboard-accessible (Space for play/pause, Left/Right arrow for scrubber step, R for reset).

3. **Timeline panel (compact plot)**
   - A small panel (collapsible, default open in time-dependent lessons) showing one or two quantities plotted over the simulation time window.
   - Default quantities: voltage across the target component and current through the target component. Lessons can configure which quantities are shown.
   - The current scrubber position is shown as a vertical marker on the plot.
   - The plot uses two clearly distinguishable line styles (solid vs dashed, not color-only) for accessibility.
   - Axis labels use the same learner-friendly terms used elsewhere in the product (for example, "Voltage across capacitor" not `V_C(t)`).

4. **Checkpoint markers**
   - Lessons can define checkpoint windows (for example, `t₀`, `t_mid`, `t_final`) where the learner must inspect or answer about the circuit state.
   - Checkpoints appear as labeled dots on the time scrubber and as highlighted regions on the timeline plot.
   - When a lesson challenge requires a checkpoint answer, the scrubber snaps to that checkpoint and the relevant values are highlighted.

## Accessibility requirements

- All time-dependent visualizations must be operable via keyboard alone (no mouse-only interactions).
- The timeline plot must not rely on color alone to distinguish lines; use line style (solid, dashed, dotted) and shape markers.
- A text summary of the current state at the scrubber position must be available via the existing `Describe circuit` action, including approximate values and whether the circuit is still changing or has settled.
- Reduced-motion mode: when the user's system prefers reduced motion, playback is replaced by step-through (scrubber moves in discrete jumps with no animation). The circuit visualization updates instantly rather than animating.

## Interaction with existing tools

- Meters (voltmeter, ammeter) show the value at the current scrubber position, not just the steady-state value.
- Current-flow overlay animates at the scrubber position's rate and direction.
- The `Check solution` action evaluates at the checkpoint(s) specified by the lesson, not at an arbitrary scrubber position.

## Scope boundaries

- This specification covers Chapters 6-7 (time-dependent and AC visualization). Chapter 7's AC waveform view extends this model by adding repeating cycles rather than single transient windows.
- AC repeating-cycle extension for Chapter 7:
  - The scrubber window defaults to one full cycle, normalized as `cycleStart`, optional `cycleMid`, and `cycleEnd` checkpoints.
  - Lessons may optionally expose a two-cycle view for comparison, but challenge checkpoints always reference cycle-relative anchors so evaluation remains deterministic.
  - Playback loops continuously while in AC mode; if checkpoint evaluation is required, playback pauses and snaps to the required checkpoint.
  - In reduced-motion mode, AC playback is step-through only and advances between cycle anchors rather than animating continuously.
  - The timeline marker and meter readouts in AC mode always reflect the current cycle-relative scrubber position.
- The time scrubber does not support sub-millisecond precision. All time-domain simulations use educationally simplified time scales.
- No oscilloscope-style triggering or multi-channel comparison is required. The timeline panel shows at most two quantities simultaneously.
