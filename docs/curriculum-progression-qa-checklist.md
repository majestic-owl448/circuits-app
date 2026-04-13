# Curriculum Progression QA Checklist

Use this checklist while implementing new chapters to keep topic progression clear, avoid repetition, and preserve prerequisite clarity.

## Scope

- Implemented baseline: Chapters 1-3
- Planned implementation: Chapters 4-10

## How to use this checklist

- Run this checklist at unit-design time and again before merging a chapter.
- Mark each item pass/fail and add a short note when failing.
- If an item fails, fix the lesson metadata or challenge framing before adding more content.

## Global progression checks (all chapters)

- [ ] Every unit states both a clear learning goal and explicit prerequisites.
- [ ] Every lesson introduces at least one new idea, skill, or context.
- [ ] Revisited topics are explicitly labeled as review, extension, or application.
- [ ] Formula use matches stage level (conceptual first, then procedural, then mixed).
- [ ] Unlock flow is monotonic (no lesson requires concepts not yet introduced).
- [ ] Challenge types align with lesson intent (`choose` for concept checks, `build/fix` for application, `calculate` for numeric fluency).

## Baseline anchors from implemented chapters (1-3)

Use these anchors to avoid backsliding when writing future chapters.

- [ ] Chapter 1 remains the reference for first principles (loop, switch, source/load, current/voltage language).
- [ ] Chapter 2 remains the reference for first numerical reasoning (Ohm's Law, power, simple solution reading).
- [ ] Chapter 3 remains the reference for topology reasoning (series vs parallel behavior and calculations).
- [ ] New lessons do not re-teach Chapter 1-3 outcomes as if they are new.

## Chapter-by-chapter progression checks (4-10)

### Chapter 4: Measurement, Mixed Circuits, Named Laws

- [ ] Measurement is framed as verification/inspection/debugging, not as replacement for manual reasoning.
- [ ] Mixed-circuit reduction is introduced before formal KCL/KVL naming.
- [ ] KCL/KVL lessons clearly state they formalize patterns already seen in Chapter 3.
- [ ] Source-load matching is positioned as deeper application than Chapter 2's introductory matching.

### Chapter 5: Non-Ideal Behavior and Limits

- [ ] Unit 1 clearly signals a model shift (ideal -> non-ideal) rather than a restart.
- [ ] Range/tolerance evaluation is explained as necessary for non-ideal contexts.
- [ ] Internal resistance, wire losses, and heating are introduced as distinct causes with distinct evidence.
- [ ] Challenges require diagnosis of non-ideal effects, not only recalculation of ideal formulas.

### Chapter 6: Capacitors, Inductors, Time Behavior

- [ ] Early lessons distinguish transient vs steady-state before adding component details.
- [ ] Capacitor and inductor behavior are each introduced independently before comparison lessons.
- [ ] Time-based checkpoints are explicit in challenge instructions (initial, middle, final as relevant).
- [ ] Learners are asked to reason about behavior over time, not just a single final value.

### Chapter 7: AC Fundamentals and DC/AC Conversion

- [ ] Chapter start explicitly contrasts repeating AC behavior with Chapter 6 transients.
- [ ] AC concepts stay conceptual first (waveform literacy before heavy math).
- [ ] Conversion lessons preserve causal story (why convert, then how, then compare outcomes).
- [ ] Mixed-system examples integrate prior reasoning instead of introducing unrelated scenarios.

### Chapter 8: Diodes, Transistors, Rectification, Switching

- [ ] Diode orientation dependence is mastered before rectification challenges.
- [ ] Rectification is framed as an application of AC + diode directionality from Chapters 7 and 8 Unit 1.
- [ ] Transistor lessons build from switch/control semantics before adding larger-path effects.
- [ ] Unit 4 explicitly prepares the learner for logic abstraction in Chapter 9.

### Chapter 9: Logic Gates and Digital-Style Behavior

- [ ] Unit 1 explicitly bridges physical switching language to state/input/output language.
- [ ] NOT/AND/OR are introduced before NAND/NOR/XOR.
- [ ] Truth-table work is introduced as a representation tool, not a separate disconnected topic.
- [ ] Small design lessons require gate selection reasoning, not just memorization.

### Chapter 10: Mastery Review and Capstones

- [ ] Unit 1 and Unit 2 diagnose reasoning-strategy choice before long builds.
- [ ] Domain capstones each map cleanly to prior chapter outcomes.
- [ ] Cross-domain challenges require selecting the right domain first, then solving.
- [ ] Final mastery criteria measure explanation quality as well as structural and numeric correctness.

## Redundancy watchlist

Check these common overlap points each time you add or revise content:

- [ ] Chapter 2 matching vs Chapter 4 matching vs Chapter 5 limits are clearly differentiated.
- [ ] Chapter 2 numerical checking vs Chapter 4 meter usage are clearly differentiated.
- [ ] Chapter 6 time-dependent behavior vs Chapter 7 AC repetition are clearly differentiated.
- [ ] Chapter 8 switching/control vs Chapter 9 logic abstraction are clearly differentiated.

## Prerequisite clarity checklist

- [ ] Unit metadata includes prerequisite chapter/unit outcomes in plain language.
- [ ] Lesson prerequisites reference concrete prior lessons or chapter completion.
- [ ] No lesson assumes tool/component behavior before it is introduced.
- [ ] Quiz unlocks assess concepts already taught in lesson flow.
- [ ] Handoff section states what the next chapter assumes learners can already do.

## Release gate for a chapter

Do not mark a chapter content-complete until:

- [ ] All global checks pass.
- [ ] All chapter-specific checks pass.
- [ ] All redundancy watchlist items pass.
- [ ] All prerequisite clarity items pass.
- [ ] A manual walkthrough confirms no abrupt difficulty spikes between units.
