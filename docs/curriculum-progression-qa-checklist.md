# Curriculum Progression QA Checklist

Use this checklist while implementing new chapters to keep topic progression clear, avoid repetition, and preserve prerequisite clarity.

## Scope

- Implemented baseline: Chapters 1-3
- Planned implementation: Chapters 4-10

## How to use this checklist

- Run this checklist at unit-design time and again before merging a chapter.
- Mark each item pass/fail and add a short note when failing.
- If an item fails, fix the lesson metadata or challenge framing before adding more content.
- Keep stable defaults (overlay availability, hint style, formula visibility, baseline actions) at chapter/unit metadata level; document only lesson-level exceptions when behavior differs.
- Keep cross-chapter UX behavior canonical in `docs/specs/*.md`; chapter lesson plans should point to the spec instead of re-expanding full interaction details.
- Feature-gating wording standard:
  - Use "when instructionally relevant" for pedagogical optionality.
  - Use "when enabled in <named mode>" for UI toggles or mode-specific behavior.
  - Use "where available" only for legacy or backward-compatibility contexts; avoid it in new chapter plans.
  - Avoid "where supported" in chapter plans unless tied to a specific engine capability gate.

## Global progression checks (all chapters)

- [ ] Every unit states both a clear learning goal and explicit prerequisites.
- [ ] Every lesson introduces at least one new idea, skill, or context.
- [ ] Revisited topics are explicitly labeled as review, extension, or application.
- [ ] Formula use matches stage level (conceptual first, then procedural, then mixed).
- [ ] Unlock flow is monotonic (no lesson requires concepts not yet introduced).
- [ ] Challenge types align with lesson intent (`choose` for concept checks, `build/fix` for application, `calculate` for numeric fluency).
- [ ] Every challenge example in planning docs has an explicit challenge type tag (`build`, `fix`, `predict`, `choose`, `drag-place`, `calculate`, `classify`, `diagnose`).
- [ ] Every lesson in chapter plans maps unambiguously to a lesson ID using `lesson-chX-Y-Z`.
- [ ] Every standalone quiz topic maps unambiguously to a quiz ID using `quiz-chX-topic-name`.
- [ ] Quiz-to-lesson mapping is valid: each quiz `unlockedBy` points to an existing lesson ID.
- [ ] Theory-to-lesson mapping is valid: each theory entry links to an introducing lesson.
- [ ] Sandbox unlock monotonicity holds: previously unlocked tool families remain available.
- [ ] Handoff assumptions are validated against the next chapter's Unit 1 prerequisites.

## Stage-label glossary and usage (Chapters 8-10)

- Purpose: stage labels indicate learner progression level first; optional domain/theme qualifiers are secondary.
- Allowed progression labels:
  - `Late Intermediate`
  - `Advanced Beginner Electronics`
  - `Early Digital Logic`
  - `Introductory System Design`
  - `Capstone / Mastery`
- Allowed transition labels (use only when a lesson spans two adjacent progression levels):
  - `Early Intermediate to Intermediate`
  - `Intermediate to Late Intermediate`
  - `Advanced Beginner Electronics to Early Digital Logic`
  - `Early Digital Logic to Introductory System Design`
- Optional qualifier format:
  - `Base Label - Qualifier` (ASCII hyphen with spaces)
  - Example: `Late Intermediate - Active Components`
- Usage rules:
  - Prefer base labels with no qualifier unless the qualifier materially improves instructional clarity.
  - Do not use slash-separated labels for theme categories in stage labels (except the canonical `Capstone / Mastery`).
  - Keep stage labels consistent within a unit unless a transition label is intentionally used.

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
- [ ] Manual mixed-circuit calculation (Lesson 3.3) comes before meter-based verification (Lesson 3.4), ensuring learners produce expected values before verifying with tools.
- [ ] KCL/KVL lessons clearly state they formalize patterns already seen in Chapter 3.
- [ ] Source-load matching is positioned as deeper application than Chapter 2's introductory matching, with explicit differentiation note in unit metadata.

### Chapter 5: Non-Ideal Behavior and Limits

- [ ] Unit 1 clearly signals a model shift (ideal -> non-ideal) rather than a restart.
- [ ] Terminology is explicitly differentiated: operating range vs operating limit vs tolerance (defined in Lesson 1.2 metadata).
- [ ] Range/tolerance evaluation is explained as necessary for non-ideal contexts.
- [ ] Internal resistance, wire losses, and heating are introduced as distinct causes with distinct evidence.
- [ ] Diagnostic meter lesson (Lesson 2.3) teaches using meters to detect non-ideal effects before the design lesson (Lesson 2.4) asks learners to design around them.
- [ ] Challenges require diagnosis of non-ideal effects, not only recalculation of ideal formulas.
- [ ] Unit 5 includes a tolerance-aware design practice lesson before the chapter review challenge.

### Chapter 6: Capacitors, Inductors, Time Behavior

- [ ] Early lessons distinguish transient vs steady-state before adding component details.
- [ ] Capacitor and inductor behavior are each introduced independently before comparison lessons.
- [ ] Inductor energy release (Lesson 3.4) mirrors capacitor discharge (Lesson 2.4) — both components have explicit charge/store and release/discharge lessons.
- [ ] Time-based checkpoints are explicit in challenge instructions (initial, middle, final as relevant).
- [ ] Time-Visualization UX Specification is finalized before implementation begins (see Chapter 6 lesson plan).
- [ ] Time-Visualization UX Specification includes explicit AC repeating-cycle scrubber behavior used by Chapter 7 waveform lessons.
- [ ] Frequency/period forward note prepares learners for Chapter 7's AC content without introducing formal terminology.
- [ ] Learners are asked to reason about behavior over time, not just a single final value.

### Chapter 7: AC Fundamentals and DC/AC Conversion

- [ ] Chapter start explicitly contrasts repeating AC behavior with Chapter 6 transients.
- [ ] Lesson 1.2 includes a required side-by-side visual comparison of transient vs AC behavior using the timeline panel.
- [ ] AC concepts stay conceptual first (waveform literacy before heavy math).
- [ ] Lesson 2.3 (reactive preview) establishes the intuition that AC repetition speed affects C/L behavior and introduces frequency/period names at an introductory level.
- [ ] Conversion lessons preserve causal story (why convert, then how, then compare outcomes).
- [ ] Mixed-system examples integrate prior reasoning instead of introducing unrelated scenarios.

### Chapter 8: Diodes, Transistors, Rectification, Switching

- [ ] Diode orientation dependence is mastered before rectification challenges.
- [ ] Lesson 2.1 explicitly connects to Chapter 7's abstract conversion blocks, explaining that diode-based rectification is what those blocks implement.
- [ ] Rectification is framed as an application of AC + diode directionality from Chapters 7 and 8 Unit 1.
- [ ] Transistor lessons build from switch/control semantics before adding larger-path effects.
- [ ] Unit 4 explicitly prepares the learner for logic abstraction in Chapter 9.
- [ ] Chapter boundaries explicitly state diode forward-drop modeling scope (baseline ideal-conduction model versus optional non-ideal extension).

### Chapter 9: Logic Gates and Digital-Style Behavior

- [ ] Unit 1 explicitly bridges physical switching language to state/input/output language, with a concrete Chapter 8 transistor-switch example relabeled using state language.
- [ ] NOT/AND/OR are introduced before NAND/NOR/XOR.
- [ ] Truth tables are introduced in Unit 2 (Lesson 2.4) as a learning tool alongside basic gates, not deferred to Unit 3 as a review afterthought.
- [ ] Gate comparison lesson (2.5) uses truth tables as the comparison structure.
- [ ] XOR lesson includes concrete motivation showing why AND and OR cannot express the "inputs differ" rule.
- [ ] Small design lessons require gate selection reasoning, not just memorization.
- [ ] Unit 1 includes a conceptual transistor-to-gate bridge example (switch arrangements as gate-like rules) before formal gate taxonomy.

### Chapter 10: Mastery Review and Capstones

- [ ] Domain classification is explicitly taught as a skill (Lesson 1.2) before it is required as part of challenges (Unit 4).
- [ ] Unit 1 and Unit 2 diagnose reasoning-strategy choice before long builds.
- [ ] Domain capstones each map cleanly to prior chapter outcomes.
- [ ] Cross-domain challenges require selecting the right domain first, then solving.
- [ ] Final mastery challenge (Lesson 5.1) has explicit rubric with five dimensions: structure, values, constraints, domain reasoning, efficiency. Dimensions 1-3 are hard gates.
- [ ] Optional mastery quiz (Lesson 5.2) is clearly positioned as a conceptual breadth check distinct from the hands-on mastery challenge.
- [ ] Unit 3 domain capstones can be completed in any order once Unit 2 is complete, with all four required before Unit 4.
- [ ] Optional mastery quiz is available before or after the final mastery challenge and never blocks completion.
- [ ] Dimension 4 evidence signals use a defined vocabulary in lesson config and are implementable deterministically.

## UX and accessibility scale checks (chapters 7-10)

- [ ] Sandbox progressive-unlock UI keeps chapter-appropriate tool surfaces without hiding already-earned tools permanently.
- [ ] New visual elements (waveform views, rectification comparisons, gate diagrams, truth tables) inherit Chapter 6 accessibility baselines.
- [ ] Chapter 10 rubric panel inherits Chapter 6 accessibility baselines (keyboard, non-color-only status, text summary fallback, reduced-motion support).

## Redundancy watchlist

Check these common overlap points each time you add or revise content:

- [ ] Chapter 2 matching vs Chapter 4 matching vs Chapter 5 limits are clearly differentiated.
- [ ] Chapter 2 numerical checking vs Chapter 4 meter usage are clearly differentiated.
- [ ] Chapter 6 time-dependent behavior vs Chapter 7 AC repetition are clearly differentiated.
- [ ] Chapter 8 switching/control vs Chapter 9 logic abstraction are clearly differentiated.

### Source-load matching progression thread map (canonical)

Use this as the single reference thread whenever source-load matching language appears in chapter plans.

- Chapter 2: ideal single-load matching baseline (numerical and conceptual fit checks).
- Chapter 4: measurement-guided matching in mixed circuits (multi-path reasoning + meter verification).
- Chapter 5: non-ideal matching under losses and operating limits (internal resistance, wire loss, safe ranges).
- Chapter 7: AC/DC compatibility matching with conversion-stage selection.

- [ ] Each chapter that references source-load matching points to this canonical thread map.
- [ ] No chapter presents source-load matching as a brand-new concept unless explicitly labeled as extension/reframe.

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
