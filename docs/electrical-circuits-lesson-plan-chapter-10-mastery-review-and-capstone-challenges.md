# Lesson Plan, Chapter 10: Mastery, Review, and Capstone Challenges

## Purpose of this chapter

This chapter serves as the consolidation point for the entire curriculum. By this stage, the learner has progressed from simple ideal DC circuits through numerical analysis, series and parallel structures, measurement, named circuit laws, non-ideal behavior, capacitors and inductors, AC and conversion, active components, and introductory digital-style behavior.

The goal of this chapter is not to introduce many new concepts. Instead, it is to help the learner integrate, review, and apply what they have learned across larger circuit problems and design challenges. The learner should be pushed to recognize which kind of reasoning is needed for a given scenario, choose the right tools, use the right component categories, and meet a clearly defined target without unnecessary scaffolding.

This chapter also acts as the strongest bridge between course completion and any future advanced curriculum extensions. It defines what “mastery at this level” means for the current product.

## Chapter metadata

- Chapter title: Mastery, Review, and Capstone Challenges
- Stage label: Capstone / Mastery
- Chapter goal: Learner can integrate concepts from across the curriculum and solve larger, mixed-domain circuit challenges in simulation.
- Primary outcome: Learner can recognize the relevant domain of a problem, select the right conceptual tools, and produce a correct circuit or system design within the simulation model.
- Main simulation model: all previously introduced supported models, including ideal, selected non-ideal, time-dependent, AC/DC conversion, active components, and digital-style behavior
- Main interaction style: lightly scaffolded review at the start, then capstone-style problem solving
- Default lesson style: less prebuilt, more open-ended, more integrative
- Main workspace actions available by end of chapter:
  - all previously unlocked actions
  - all previously introduced supported component categories
  - multi-stage reasoning across several topic domains
  - larger system debugging
  - multi-step verification using measurements, theory reference, and detailed evaluation
- Main conceptual transition in this chapter:
  - from unit-level skill
  - to whole-curriculum integration and mastery demonstration

## ID mapping for implementation

- Lesson IDs in this chapter must map directly from lesson numbering: lesson `U.L` -> `lesson-ch10-U-L`.
- Standalone quiz IDs in this chapter must use `quiz-ch10-topic-name` with stable kebab-case slugs derived from quiz titles.
- Keep slugs stable across revisions to avoid breaking `unlockedBy` and registry references.

## Implementation boundary notes for this chapter

To reduce ambiguity during implementation, this chapter uses the following support contract:

- Lesson mode (required):
  - domain classification tasks before cross-domain solving
  - mixed-domain troubleshooting flows with iterative fixes
  - capstone challenges across DC/non-ideal, time-dependent, AC/conversion, and active/logic domains
  - final mastery rubric panel with criterion-level feedback (interaction model in `docs/specs/capstone-rubric-panel-ux-spec.md`)
- Sandbox mode (required by chapter end):
  - cross-domain prompt sets
  - multi-stage mixed-system experimentation
  - debugging/redesign workflows using previously unlocked tools
- Optional (can be disabled for first ship if clearly labeled):
  - additional mastery-only prompt bundles beyond required lesson-linked prompts

---

## Unit 1: Whole-Curriculum Review

### Unit metadata

- Unit title: Whole-Curriculum Review
- Stage label: Capstone / Mastery
- Unit goal: Learner refreshes the major conceptual map of the course before entering larger capstone challenges.
- Explicit prerequisites:
  - Chapter 9 complete

---

### Lesson 1.1: The Circuit Map So Far

- Stage label: Capstone / Mastery
- Prerequisites:
  - Chapter 9 complete
- Main goal: Learner reconnects the main concept groups across the full curriculum.
- Concepts reviewed:
  - ideal DC reasoning
  - numerical analysis
  - series and parallel structures
  - measurement tools
  - Kirchhoff’s laws
  - non-ideal behavior
  - capacitors and inductors
  - AC and conversion
  - diodes and transistors
  - logic gates and digital-style behavior
- Formulas shown:
  - broad review selection from prior chapters
- Components used:
  - representative examples from multiple chapters
- Prebuilt amount:
  - review-oriented prebuilt examples
- Learner actions available:
  - inspect
  - compare
  - identify concept domains
- Current-flow overlay:
  - available when instructionally relevant
- Hint style:
  - summary-first
  - links back to theory topics and lesson areas
- Completion condition:
  - learner correctly identifies the main category of reasoning needed for a set of example circuits
- Challenge examples:
  1. identify whether a scenario is mainly about series/parallel, non-ideal behavior, AC/DC conversion, or logic behavior
  2. choose which reference topic is most relevant to a shown system
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - no new unlock, but review prompts across all prior domains become available
- Theory page additions:
  - Mastery progression map
  - Whole-curriculum concept map
- In-lesson theory check:
  - concept classification review
- Standalone quiz topics unlocked:
  - whole-curriculum concept map review

---

### Lesson 1.2: Classify the Problem Domain

- Stage label: Capstone / Mastery
- Prerequisites:
  - Lesson 1.1
- Main goal: Learner explicitly practices classifying circuit problems by domain before attempting to solve them.
- Why this lesson exists:
  - Unit 4, Lesson 4.1 will ask learners to "choose the right domain, then solve." Learners have been making these choices implicitly since Chapter 4 through measurement, diagnosis, and troubleshooting lessons. This lesson formalizes that implicit skill into an explicit, named method before it becomes part of larger challenges.
- Concepts introduced:
  - domain classification as a problem-solving skill
  - the major domains: ideal DC structure, numerical DC analysis, non-ideal constraints, time-dependent behavior, AC/DC conversion, active components (diodes/transistors), digital logic
  - identifying domain by symptoms: "values are wrong" → numerical or non-ideal; "timing matters" → time-dependent; "direction matters" → diode or AC; "conditions control output" → transistor or logic
  - primary domain versus secondary factors:
    - primary domain = the branch that must be solved first to make progress
    - secondary factors = additional constraints that must still pass after the primary domain is handled
    - examples: a non-ideal DC case may include numerical checks as secondary factors; a logic case may include non-ideal limits as secondary factors
- Formulas shown:
  - only as needed in the examples
- Components used:
  - mixed examples from multiple domains, each designed to exercise one primary domain
- Prebuilt amount:
  - prebuilt scenarios for classification practice
- Learner actions available:
  - inspect
  - classify domain
  - explain reasoning
- Current-flow overlay:
  - available when instructionally relevant
- Hint style:
  - symptom-based classification guidance
- Completion condition:
  - learner correctly classifies at least 4 of 5 presented scenarios by domain
- Challenge examples:
  1. classify a failing circuit: is the problem structural, numerical, non-ideal, time-dependent, or logic-related?
  2. given a description of symptoms, choose the most likely domain before inspecting the circuit
- Challenge type: `choose`, `classify`
- Sandbox unlocks after lesson:
  - no new unlock
- Theory page additions:
  - Domain classification for circuit problem-solving
- In-lesson theory check:
  - symptom-to-domain matching
- Standalone quiz topics unlocked:
  - domain classification basics

---

### Lesson 1.3: Choose the Right Reasoning First

- Stage label: Capstone / Mastery
- Prerequisites:
  - Lesson 1.2
- Main goal: Learner practices identifying the right first analytical move in a complex scenario, building on the domain classification skill from Lesson 1.2.
- Concepts reviewed:
  - structural analysis first when topology is the main issue
  - value analysis first when the structure is already clear
  - measurement first when inspection is the best route
  - domain selection matters before detailed solving
- Formulas shown:
  - only as needed in the examples
- Components used:
  - mixed examples from multiple domains
- Prebuilt amount:
  - prebuilt scenarios for diagnosis
- Learner actions available:
  - inspect
  - choose first step
  - compare approaches
- Current-flow overlay:
  - available when instructionally relevant
- Hint style:
  - issue-first with reasoning explanation
- Completion condition:
  - learner selects the best first analytical move in guided scenarios
- Challenge examples:
  1. decide whether to simplify, measure, compare source/load type, or inspect gate logic first
  2. identify which wrong first move would waste time in the shown scenario
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - no new unlock
- Theory page additions:
  - Choosing the right first step in analysis
- In-lesson theory check:
  - best-first-step reasoning
- Standalone quiz topics unlocked:
  - analysis-strategy basics

---

## Unit 2: Mixed-Domain Troubleshooting

### Unit metadata

- Unit title: Mixed-Domain Troubleshooting
- Stage label: Capstone / Mastery
- Unit goal: Learner diagnoses and fixes larger circuits that may fail for structural, numerical, non-ideal, time-dependent, AC/DC, or logic reasons.
- Explicit prerequisites:
  - Unit 1 complete

---

### Lesson 2.1: Find the First Real Problem

- Stage label: Capstone / Mastery
- Prerequisites:
  - Lesson 1.3
- Main goal: Learner identifies the first blocking issue in a multi-factor circuit problem.
- Concepts reviewed:
  - progressive debugging
  - easiest detectable meaningful issue first
  - large failures may have multiple causes, but the first useful fix matters most
- Formulas shown:
  - as needed by the scenario
- Components used:
  - mixed-domain problem circuits
- Prebuilt amount:
  - faulty systems provided with limited guidance
- Learner actions available:
  - inspect
  - run
  - measure
  - use **Describe circuit**
  - check solution
- Current-flow overlay:
  - available when instructionally relevant
- Hint style:
  - aligns with product-wide progressive hint model
- Completion condition:
  - learner identifies the most meaningful first issue and begins correcting it
- Challenge examples:
  1. identify the earliest blocking issue in a mixed-domain failure
  2. choose which of several proposed fixes should come first
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - troubleshooting prompts across multiple domains become available
- Theory page additions:
  - Troubleshooting and investigation: first-issue troubleshooting strategy
- In-lesson theory check:
  - first-fix prioritization
- Standalone quiz topics unlocked:
  - mixed-domain troubleshooting basics

---

### Lesson 2.2: Fix the Circuit Step by Step

- Stage label: Capstone / Mastery
- Prerequisites:
  - Lesson 2.1
- Main goal: Learner performs stepwise troubleshooting in a larger circuit and does not assume one edit solves everything.
- Concepts reviewed:
  - debugging as a sequence
  - verify after each fix
  - use measurement and evaluation intentionally
- Formulas shown:
  - as relevant
- Components used:
  - larger mixed circuits or system diagrams
- Prebuilt amount:
  - faulty systems with minimal scaffolding
- Learner actions available:
  - build
  - revise
  - run
  - measure
  - check solution repeatedly
  - inspect detailed explanations
- Current-flow overlay:
  - available
- Hint style:
  - concise first hint
  - deeper explanation on request
- Completion condition:
  - learner successfully fixes the larger system through iterative debugging
- Challenge examples:
  1. repair a circuit with both a structural and a numeric issue
  2. repair a system with a correct subpart placed in the wrong stage
- Challenge type: `fix`
- Sandbox unlocks after lesson:
  - no new unlock
- Theory page additions:
  - Troubleshooting and investigation: stepwise troubleshooting workflow
- In-lesson theory check:
  - identify the best verification step after a fix
- Standalone quiz topics unlocked:
  - iterative debugging basics

---

## Unit 3: Domain-Specific Capstones

### Unit metadata

- Unit title: Domain-Specific Capstones
- Stage label: Capstone / Mastery
- Unit goal: Learner completes capstone-style challenges in each major branch of the curriculum.
- Explicit prerequisites:
  - Unit 2 complete
- Ordering model:
  - Lessons 3.1-3.4 are domain capstones that may be completed in any order once Unit 2 is complete.
  - Unit completion requires all four domain capstones to be passed.

---

### Lesson 3.1: Ideal and Non-Ideal DC Capstone

- Stage label: Capstone / Mastery
- Prerequisites:
  - Lesson 2.2
- Main goal: Learner solves a larger DC design challenge involving both ideal reasoning and selected non-ideal constraints.
- Concepts reviewed:
  - series and parallel reasoning
  - source/load matching
  - internal resistance
  - wire losses
  - operating limits
  - failure prevention
- Formulas shown:
  - whichever are needed
- Components used:
  - DC source
  - resistive loads
  - non-ideal source and path elements
  - meters
- Prebuilt amount:
  - lightly scaffolded
- Learner actions available:
  - build
  - run
  - measure
  - inspect evaluation
  - check solution
- Current-flow overlay:
  - available
- Hint style:
  - progressive, target-focused
- Completion condition:
  - learner builds a working non-ideal DC system that satisfies a specified target without causing failure
- Challenge examples:
  1. design a circuit that keeps a target load in range despite realistic losses
  2. diagnose and redesign a near-correct non-ideal DC system
- Challenge type: `diagnose`
- Sandbox unlocks after lesson:
  - capstone DC prompt available
- Theory page additions:
  - Capstone strategy for ideal and non-ideal DC problems
- In-lesson theory check:
  - mixed DC quick checks
- Standalone quiz topics unlocked:
  - DC capstone review basics

---

### Lesson 3.2: Time-Dependent Capstone

- Stage label: Capstone / Mastery
- Prerequisites:
  - Unit 2 complete
- Main goal: Learner solves a challenge involving capacitor or inductor behavior where both initial and later states matter.
- Concepts reviewed:
  - transient behavior
  - steady state
  - component choice between capacitor and inductor
  - initial-response versus later-response goals
- Formulas shown:
  - as relevant
- Components used:
  - source
  - resistor
  - capacitor and/or inductor
  - meters
- Prebuilt amount:
  - lightly scaffolded
- Learner actions available:
  - build
  - run
  - inspect behavior over time
  - measure
  - check solution
- Current-flow overlay:
  - available
- Hint style:
  - initial-state versus later-state emphasis
- Completion condition:
  - learner creates a circuit that satisfies the stated time-aware goal
- Challenge examples:
  1. design for a required initial effect while preserving an acceptable later state
  2. identify why a circuit passes one time-based target and fails another
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - capstone time-dependent prompt available
- Theory page additions:
  - Capstone strategy for time-dependent problems
- In-lesson theory check:
  - initial/later target reasoning
- Standalone quiz topics unlocked:
  - time-dependent capstone review basics

---

### Lesson 3.3: AC and Conversion Capstone

- Stage label: Capstone / Mastery
- Prerequisites:
  - Unit 2 complete
- Main goal: Learner solves a larger conceptual system challenge involving AC, DC, and conversion stages.
- Concepts reviewed:
  - AC versus DC
  - source/load type matching
  - DC-to-AC conversion
  - AC-to-DC conversion
  - multi-stage system understanding
- Formulas shown:
  - conceptual focus, with prior references available
- Components used:
  - AC and DC sources
  - AC and DC loads
  - conversion blocks
- Prebuilt amount:
  - lightly scaffolded
- Learner actions available:
  - choose stages
  - connect system
  - inspect
  - run
  - check solution
- Current-flow overlay:
  - available when instructionally relevant
- Hint style:
  - system-stage reasoning
- Completion condition:
  - learner creates a correct mixed AC/DC system for the stated target
- Challenge examples:
  1. build the correct path from source type to load type through the needed conversion
  2. repair a system that has the right blocks in the wrong order
- Challenge type: `build`, `fix`
- Sandbox unlocks after lesson:
  - capstone AC/DC prompt available
- Theory page additions:
  - Capstone strategy for AC/DC conversion problems
- In-lesson theory check:
  - stage and source/load matching checks
- Standalone quiz topics unlocked:
  - AC/DC capstone review basics

---

### Lesson 3.4: Active Components and Logic Capstone

- Stage label: Capstone / Mastery
- Prerequisites:
  - Unit 2 complete
- Main goal: Learner solves a challenge involving diodes, transistor control, or logic-gate behavior.
- Concepts reviewed:
  - diode orientation
  - rectification
  - transistor switching
  - logic gate choice
  - small logic-system behavior
- Formulas shown:
  - conceptual focus
- Components used:
  - diode
  - transistor
  - logic gates
  - sources and outputs as needed
- Prebuilt amount:
  - lightly scaffolded
- Learner actions available:
  - choose components
  - build
  - test combinations
  - check solution
- Current-flow overlay:
  - available when instructionally relevant
- Hint style:
  - issue-first
- Completion condition:
  - learner produces the intended directionality, control, or logic behavior
- Challenge examples:
  1. choose the correct active or logical component for the rule
  2. repair a system that fails under a specific input or orientation case
- Challenge type: `fix`, `choose`
- Sandbox unlocks after lesson:
  - capstone active-component prompt available
- Theory page additions:
  - Capstone strategy for active-component and logic problems
- In-lesson theory check:
  - component-role quick checks
- Standalone quiz topics unlocked:
  - active-components capstone review basics

---

## Unit 4: Cross-Domain Integration Challenges

### Unit metadata

- Unit title: Cross-Domain Integration Challenges
- Stage label: Capstone / Mastery
- Unit goal: Learner works on larger scenarios that blend more than one major curriculum branch together.
- Explicit prerequisites:
  - Unit 3 complete

---

### Lesson 4.1: Choose the Right Domain, Then Solve

- Stage label: Capstone / Mastery
- Prerequisites:
  - Unit 3 complete (all domain capstones passed)
- Main goal: Learner solves a scenario where identifying the domain of the problem is part of the challenge.
- Concepts reviewed:
  - problem classification
  - analysis strategy selection
  - domain crossover
- Formulas shown:
  - as relevant
- Components used:
  - mixed-domain systems
- Prebuilt amount:
  - lightly scaffolded
- Learner actions available:
  - inspect
  - classify
  - choose path
  - build
  - run
  - check solution
- Current-flow overlay:
  - available when instructionally relevant
- Hint style:
  - first hint focuses on domain selection
- Completion condition:
  - learner identifies the right domain and solves the scenario correctly
- Challenge examples:
  1. determine whether the key issue is logic, conversion, non-ideal loss, or time-dependent behavior
  2. fix a system whose failure is caused by solving the wrong kind of problem first
- Challenge type: `fix`, `choose`
- Sandbox unlocks after lesson:
  - cross-domain prompt set available
- Theory page additions:
  - Cross-domain problem solving
- In-lesson theory check:
  - domain-selection reasoning
- Standalone quiz topics unlocked:
  - cross-domain analysis basics

---

### Lesson 4.2: Multi-Stage System Challenge

- Stage label: Capstone / Mastery
- Prerequisites:
  - Lesson 4.1
- Main goal: Learner solves a multi-stage system with at least two distinct conceptual layers.
- Concepts reviewed:
  - stage ordering
  - compatibility between stages
  - local correctness versus whole-system correctness
- Formulas shown:
  - as relevant to the parts used
- Components used:
  - mixed system blocks from earlier chapters
- Prebuilt amount:
  - lightly scaffolded
- Learner actions available:
  - build multi-stage system
  - run
  - inspect stage outputs
  - check solution
- Current-flow overlay:
  - available when instructionally relevant
- Hint style:
  - stage-by-stage
- Completion condition:
  - learner creates a valid multi-stage system satisfying the target
- Challenge examples:
  1. build a system where one stage conditions the source before another stage uses it
  2. identify and fix a system where each individual stage seems plausible but the overall chain is wrong
- Challenge type: `build`, `fix`, `choose`
- Sandbox unlocks after lesson:
  - no new unlock
- Theory page additions:
  - Multi-stage system reasoning
- In-lesson theory check:
  - stage-order reasoning
- Standalone quiz topics unlocked:
  - multi-stage system basics

---

## Unit 5: Final Mastery Challenge

### Unit metadata

- Unit title: Final Mastery Challenge
- Stage label: Capstone / Mastery
- Unit goal: Learner demonstrates integrated understanding of the curriculum at the intended product endpoint.
- Explicit prerequisites:
  - Unit 4 complete

---

### Lesson 5.1: Final Mastery Challenge

- Stage label: Capstone / Mastery
- Prerequisites:
  - Lesson 4.2
- Main goal: Learner completes the largest whole-curriculum challenge in the lesson plan.
- Evaluation rubric:
  - The final mastery challenge uses a multi-criteria evaluator. The learner's solution is assessed on all applicable dimensions, with criterion-by-criterion pass/fail shown in a rubric panel (see implementation readiness doc).
  - **Dimension 1 — Correct structure**: Circuit topology is valid. Components are connected in a way that forms a complete, functional path. No open circuits, short circuits, or disconnected segments unless intentional.
  - **Dimension 2 — Correct values**: All measurable quantities (voltage, current, resistance, power) at target components fall within the specified tolerance for the scenario. Both ideal-context and non-ideal-context tolerances apply when instructionally relevant.
  - **Dimension 3 — Constraint satisfaction**: All operating limits, source-load compatibility requirements, and conversion-stage requirements are met. No component is in a failure state. Time-dependent targets (if applicable) are met at all specified checkpoints.
  - **Dimension 4 — Domain-appropriate reasoning**: Advisory metric only. The learner's approach is compared against expected domain strategy signals in the lesson config.
    - Required evidence signals (used for deterministic feedback):
      - selected `primaryDomain` label before or during first check
      - first major action category (`analyze-structure`, `measure`, `classify-source-load`, `test-input-combinations`, or other configured action)
      - first tool family used (meter, timeline/time-view, waveform/conversion view, logic table)
      - stage ordering for multi-stage scenarios (if applicable)
    - Scoring rule:
      - `aligned`: at least 3 of the configured expected signals match
      - `partially-aligned`: exactly 2 signals match
      - `not-aligned`: 0-1 signals match
    - This dimension never blocks pass/fail.
  - **Dimension 5 — Efficient design**: The solution does not include unnecessary components or redundant stages. This is a soft criterion — a correct but slightly over-engineered solution still passes, but feedback notes where simplification is possible.
  - Pass threshold: Dimensions 1-3 must all pass. Dimension 4 is assessed but advisory. Dimension 5 is feedback-only.
- Concepts reviewed:
  - all major curriculum branches as needed by the chosen scenario
- Formulas shown:
  - all relevant references available in the side panel and theory system
- Components used:
  - any supported product components needed by the scenario
- Prebuilt amount:
  - minimal prebuilt structure
- Learner actions available:
  - build
  - run
  - measure
  - inspect time-dependent behavior when instructionally relevant
  - inspect detailed evaluation
  - use **Describe circuit**
  - check solution
- Current-flow overlay:
  - available when instructionally relevant
- Hint style:
  - minimal by default
  - progressive support only when requested or after failed checks
- Completion condition:
  - learner solves the final challenge and satisfies all stated target conditions
- Challenge examples:
  1. build a valid multi-domain system that includes at least two or three major curriculum concepts working together
  2. diagnose and repair a nearly-complete system that fails for one structural reason and one domain-specific reason
- Challenge type: `build`, `fix`, `diagnose`
- Sandbox unlocks after lesson:
  - final mastery sandbox prompt set
- Theory page additions:
  - Final mastery strategy checklist
- In-lesson theory check:
  - none beyond the challenge itself
- Standalone quiz topics unlocked:
  - Final mastery review quiz

---

### Lesson 5.2: Optional Mastery Review Quiz

- Stage label: Capstone / Mastery
- Prerequisites:
  - Unit 4 complete
- Main goal: Learner optionally reviews the full course through a broad mixed quiz set.
- Availability note:
  - This optional quiz is unlocked as soon as Unit 5 starts (before or after Lesson 5.1).
  - Completing it is never required for chapter completion.
- Why this exists after the mastery challenge:
  - The mastery challenge (Lesson 5.1) tests applied, hands-on ability. This quiz tests conceptual breadth and terminology recall across the entire curriculum. A learner may pass the mastery challenge by being strong in a few domains while having gaps in others. This quiz surfaces those gaps and links back to the relevant theory sections for self-directed review.
  - This quiz is optional because the mastery challenge is the primary completion gate. The quiz serves learners who want to verify their conceptual coverage or identify areas for further study.
- Concepts reviewed:
  - all major theory branches
- Formulas shown:
  - as needed per question
- Components used:
  - quiz-driven review, not main workspace building
- Prebuilt amount:
  - not applicable
- Learner actions available:
  - answer quiz questions
  - review results
  - revisit linked theory and lessons
- Current-flow overlay:
  - not central
- Hint style:
  - quiz review with theory refresher at the end
- Completion condition:
  - optional completion only
- Challenge examples:
  1. formula selection in mixed domains
  2. concept classification across multiple branches
  3. system-stage reasoning
  4. component-choice reasoning
- Challenge type: `classify`
- Sandbox unlocks after lesson:
  - none
- Theory page additions:
  - Mastery quiz review topics
- In-lesson theory check:
  - not applicable
- Standalone quiz topics unlocked:
  - this lesson effectively is the broad final review

---

## Chapter 10 theory review items

By the end of this chapter, the theory reference should include topic-group entries for:
- Whole-curriculum concept map
- Domain classification for circuit problem-solving
- Choosing the right first step in analysis
- Troubleshooting and investigation: first-issue troubleshooting strategy
- Troubleshooting and investigation: stepwise troubleshooting workflow
- Troubleshooting and investigation thread map (Ch4 -> Ch5 -> Ch6 -> Ch7 -> Ch8 -> Ch9 -> Ch10)
- Capstone strategy for ideal and non-ideal DC problems
- Capstone strategy for time-dependent problems
- Capstone strategy for AC/DC conversion problems
- Capstone strategy for active-component and logic problems
- Cross-domain problem solving
- Multi-stage system reasoning
- Final mastery strategy checklist

Each entry should link back to the lesson or lessons where it was introduced.

## Chapter 10 standalone quizzes

Suggested quizzes unlocked by the end of the chapter:
1. Whole-curriculum concept map review
2. Domain classification basics
3. Analysis-strategy basics
4. Mixed-domain troubleshooting basics
5. Iterative debugging basics
6. DC capstone review basics
7. Time-dependent capstone review basics
8. AC/DC capstone review basics
9. Active-components capstone review basics
10. Cross-domain analysis basics
11. Multi-stage system basics
12. Final mastery review quiz

These are optional and replayable.

## Chapter 10 sandbox state by the end

By the end of Chapter 10, sandbox should support:
- open-ended experimentation across all supported curriculum domains
- capstone-style prompt sets
- cross-domain mixed systems
- multi-stage system experiments
- debugging and redesign practice using the full supported toolset

## Curriculum endpoint after Chapter 10

By the end of the full lesson-plan set, the learner should be able to:
- reason about simple and moderately complex ideal DC circuits
- perform numerical analysis with voltage, current, resistance, and power
- analyze series, parallel, and mixed circuits
- use virtual meters meaningfully
- apply named circuit laws when instructionally relevant
- reason about selected non-ideal effects
- understand basic capacitor and inductor behavior over time
- compare DC and AC conceptually
- understand simple DC/AC conversion scenarios
- use diodes and transistors at an introductory applied level
- understand basic digital-style logic behavior and gate selection
- integrate several of these ideas in a larger simulated system

## End-state note

This chapter completes a broad lesson-plan arc for the currently approved product scope. Future extensions, if desired, could branch into:
- deeper AC analysis
- advanced digital electronics
- richer transistor and semiconductor applications
- system design specializations
- specialized assessment or certification tracks
