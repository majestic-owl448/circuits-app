# Lesson Plan, Chapter 8: Diodes, Transistors, Rectification, and Switching

## Purpose of this chapter

This chapter extends the curriculum beyond passive circuit behavior and source/load matching into components that shape, control, and redirect circuit behavior more actively. It introduces diodes and transistors at an instructional level suitable for this product: concept-first, simulation-first, and grounded in visible circuit behavior rather than advanced semiconductor physics.

The chapter begins with diodes because they create a clear behavioral distinction in a circuit and are an intuitive bridge from earlier source-type reasoning. It then introduces rectification as a major application of diodes in AC/DC conversion. After that, it introduces transistors in a simplified switching/control role so learners can understand that one part of a circuit can control another more intentionally than with passive components alone.

This chapter is still theoretical and simulation-based. Electron-level or deep semiconductor physics remains optional enrichment rather than core material.

## Chapter metadata

- Chapter title: Diodes, Transistors, Rectification, and Switching
- Stage label: Late Intermediate - Active Components
- Chapter goal: Learner can understand diode directionality, introductory rectification, and transistor-based switching/control behavior in simulation.
- Primary outcome: Learner can use diodes and transistors conceptually in simple circuit designs and understand why they matter in larger electrical systems.
- Category label introduced in this chapter: Active Components (instructional category for diode and transistor lessons in this product).
- Main simulation model: simplified instructional models of diodes and transistors, connected to earlier DC, AC, and conversion ideas
- Main interaction style: guided behavior discovery first, then structured analysis and targeted design challenges
- Default lesson style: comparison-heavy early, more design-oriented later
- Main workspace actions available by end of chapter:
  - all previously unlocked actions
  - place diodes and transistors in supported circuit scenarios
  - reason about one-way behavior and switch-like control behavior
  - inspect rectification and control outcomes in simplified simulated systems
- Main conceptual transition in this chapter:
  - from passive circuit response
  - to components that direct or control behavior more selectively

## ID mapping for implementation

- Lesson IDs in this chapter must map directly from lesson numbering: lesson `U.L` -> `lesson-ch8-U-L`.
- Standalone quiz IDs in this chapter must use `quiz-ch8-topic-name` with stable kebab-case slugs derived from quiz titles.
- Keep slugs stable across revisions to avoid breaking `unlockedBy` and registry references.

## Implementation boundary notes for this chapter

To reduce ambiguity during implementation, this chapter uses the following support contract:

- Lesson mode (required):
  - diode orientation-dependent behavior
  - introductory rectification comparisons
  - transistor switching/control-path behavior
- Sandbox mode (required by chapter end):
  - diode placement with orientation-sensitive outcomes
  - transistor placement in simplified control scenarios
  - rectification exploration prompts
- Optional (can be disabled for first ship if clearly labeled):
  - larger multi-stage integrations that combine conversion + rectification + control in one open-ended sandbox scenario
- Modeling scope note:
  - diode behavior defaults to an instructional ideal-conduction model in this chapter's baseline lessons
  - forward-voltage-drop modeling is an optional non-ideal extension and is out of required scope for initial Chapter 8 implementation
  - DC-to-AC conversion internals (inverter implementation) remain intentionally abstract at this stage; learners should connect the idea to transistor switching behavior without requiring full inverter circuit derivations

---

## Unit 1: Diodes

### Unit metadata

- Unit title: Diodes
- Stage label: Late Intermediate
- Unit goal: Learner is introduced to the diode as a component with directional behavior.
- Explicit prerequisites:
  - Chapter 7 complete

---

### Lesson 1.1: Meet the Diode

- Stage label: Late Intermediate
- Prerequisites:
  - Chapter 7 complete
- Main goal: Learner is introduced to the diode as a new component whose behavior depends on orientation.
- Concepts introduced:
  - diode
  - active component (instructional category)
  - directional behavior
  - a component can allow one circuit behavior in one orientation and a different result in the opposite orientation
- Formulas shown:
  - conceptual focus
  - no deep semiconductor equations required
- Components used:
  - source
  - diode
  - simple load
  - switch when instructionally relevant
- Prebuilt amount:
  - mostly prebuilt
- Learner actions available:
  - inspect
  - toggle
  - compare diode orientations
- Current-flow overlay:
  - available
- Hint style:
  - full explanation by default
- Completion condition:
  - learner identifies the diode and its directional role and completes challenge set
- Challenge examples:
  1. identify the diode in a shown circuit
  2. choose which orientation allows the intended behavior in the simplified model
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - diode available in sandbox
- Theory page additions:
  - What is a diode?
- In-lesson theory check:
  - diode recognition and directional concept check
- Standalone quiz topics unlocked:
  - diode basics

---

### Lesson 1.2: Orientation Matters

- Stage label: Late Intermediate
- Prerequisites:
  - Lesson 1.1
- Main goal: Learner sees that the same circuit can behave differently depending on diode orientation.
- Concepts introduced:
  - orientation dependence
  - one-way behavior in the instructional model
  - component placement alone is not enough, orientation matters too
- Formulas shown:
  - conceptual focus
- Components used:
  - simple DC source
  - diode
  - load
- Prebuilt amount:
  - comparison circuits prebuilt
- Learner actions available:
  - compare orientations
  - build or correct diode placement
  - run and inspect
- Current-flow overlay:
  - available
- Hint style:
  - comparison-driven
- Completion condition:
  - learner correctly identifies or fixes diode orientation and completes challenge set
- Challenge examples:
  1. identify which orientation gives the intended output
  2. fix a circuit where the diode is reversed
- Challenge type: `fix`, `choose`
- Sandbox unlocks after lesson:
  - diode orientation now matters explicitly in sandbox behavior
- Theory page additions:
  - Why diode orientation matters
- In-lesson theory check:
  - orientation reasoning
- Standalone quiz topics unlocked:
  - diode orientation basics

---

### Lesson 1.3: Diodes in a DC Circuit

- Stage label: Late Intermediate
- Prerequisites:
  - Lesson 1.2
- Main goal: Learner uses a diode in a simple DC circuit to shape the result.
- Concepts introduced:
  - diode as a functional design choice in a circuit
  - directionality can be used intentionally
- Formulas shown:
  - conceptual focus with prior circuit formulas available when instructionally relevant
- Components used:
  - DC source
  - diode
  - resistive load
  - optional support resistor
- Prebuilt amount:
  - lightly scaffolded
- Learner actions available:
  - build
  - run
  - check solution
- Current-flow overlay:
  - available
- Hint style:
  - issue-first, explanation available
- Completion condition:
  - learner uses the diode correctly in a simple design challenge
- Challenge examples:
  1. build a circuit that only works in the intended orientation
  2. identify why a diode is useful in the shown design
- Challenge type: `build`, `choose`
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Using a diode in a simple DC circuit
- In-lesson theory check:
  - choose when a diode is useful in a simple DC scenario
- Standalone quiz topics unlocked:
  - diode use in simple circuits

---

## Unit 2: Rectification

### Unit metadata

- Unit title: Rectification
- Stage label: Late Intermediate - Active Components
- Unit goal: Learner understands how diodes connect to AC/DC conversion through introductory rectification.
- Explicit prerequisites:
  - Unit 1 complete

---

### Lesson 2.1: Why a Diode Matters for AC

- Stage label: Late Intermediate
- Prerequisites:
  - Lesson 1.3
- Main goal: Learner sees that diode directionality becomes especially meaningful in an AC context.
- Connection to Chapter 7:
  - In Chapter 7, Unit 3, the learner worked with abstract conversion blocks that turned AC into DC-like behavior (and vice versa). Those blocks were treated as black boxes to keep the focus on system-level reasoning.
  - This lesson begins to show what is inside one of those conversion blocks: a diode. By the end of Unit 2, the learner will understand that the abstract "AC-to-DC conversion" from Chapter 7 can be concretely realized through diode-based rectification.
  - This callback should be made explicit in the lesson introduction so the learner connects the two ideas.
- Concepts introduced:
  - AC alternates
  - diode directionality can shape alternating behavior
  - this creates the foundation for rectification
  - connection: the abstract AC-to-DC conversion block from Chapter 7 is realized by diode-based circuits
- Formulas shown:
  - conceptual focus
- Components used:
  - AC source
  - diode
  - simple load
- Prebuilt amount:
  - prebuilt comparison examples
- Learner actions available:
  - inspect
  - compare
  - run
- Current-flow overlay:
  - available
- Hint style:
  - conceptual comparison
- Completion condition:
  - learner identifies why diode directionality matters more visibly in an AC example and completes challenge set
- Challenge examples:
  1. identify what the diode changes in the AC-driven circuit
  2. identify why this behavior connects to AC-to-DC conversion ideas
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - AC-plus-diode experiments available in supported sandbox mode
- Theory page additions:
  - Diodes under AC at an introductory level
- In-lesson theory check:
  - identify why AC highlights diode behavior
- Standalone quiz topics unlocked:
  - diode and AC basics

---

### Lesson 2.2: Introductory Rectification

- Stage label: Late Intermediate - Active Components
- Prerequisites:
  - Lesson 2.1
- Main goal: Learner is introduced to rectification as a simplified way to turn alternating behavior into a more one-directional output behavior.
- Concepts introduced:
  - rectification
  - AC-to-DC conversion conceptually
  - diode-based shaping of an AC source
- Formulas shown:
  - conceptual focus only
- Components used:
  - AC source
  - diode
  - load
  - simple waveform or output display when rectification-view mode is enabled
- Prebuilt amount:
  - mostly prebuilt
- Learner actions available:
  - inspect
  - compare source and output
  - run
- Current-flow overlay:
  - available
- Hint style:
  - guided explanation
- Completion condition:
  - learner identifies rectification behavior in the simplified model and completes challenge set
- Challenge examples:
  1. identify which output is rectified
  2. identify why the diode is necessary for the shown effect
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - introductory rectification examples available in sandbox
- Theory page additions:
  - Introductory rectification
- In-lesson theory check:
  - rectification recognition
- Standalone quiz topics unlocked:
  - rectification basics

---

### Lesson 2.3: Compare Unrectified and Rectified Output

- Stage label: Late Intermediate - Active Components
- Prerequisites:
  - Lesson 2.2
- Main goal: Learner compares a direct AC-driven output with a rectified output.
- Concepts introduced:
  - unrectified versus rectified behavior
  - conversion stages change the kind of output behavior the load sees
- Formulas shown:
  - conceptual focus
- Components used:
  - AC source
  - diode rectification stage
  - load
  - output display
- Prebuilt amount:
  - comparison systems prebuilt
- Learner actions available:
  - inspect
  - compare
  - identify outcomes
- Current-flow overlay:
  - available
- Hint style:
  - side-by-side comparison
- Completion condition:
  - learner explains the practical difference between the two outputs in the simulation and completes challenge set
- Challenge examples:
  1. identify which output better matches a DC-like target requirement
  2. identify the main role of the diode stage in the rectified system
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Comparing unrectified and rectified output
- In-lesson theory check:
  - output comparison reasoning
- Standalone quiz topics unlocked:
  - rectified versus unrectified basics

---

## Unit 3: Transistors

### Unit metadata

- Unit title: Transistors
- Stage label: Late Intermediate - Active Components
- Unit goal: Learner is introduced to the transistor as a component used for switching or controlling circuit behavior in a simplified instructional model.
- Explicit prerequisites:
  - Unit 2 complete

---

### Lesson 3.1: Meet the Transistor

- Stage label: Late Intermediate - Active Components
- Prerequisites:
  - Lesson 2.3
- Main goal: Learner is introduced to the transistor as a component that can control one part of a circuit using another.
- Concepts introduced:
  - transistor
  - simplified switching/control role
  - a circuit can use one signal or section to influence another
- Formulas shown:
  - conceptual focus
  - no deep semiconductor math
- Components used:
  - transistor
  - source
  - load
  - control-related supporting elements
- Prebuilt amount:
  - mostly prebuilt
- Learner actions available:
  - inspect
  - toggle control conditions
  - observe load response
- Current-flow overlay:
  - available
- Hint style:
  - full explanation by default
- Completion condition:
  - learner identifies the transistor and its simplified control role and completes challenge set
- Challenge examples:
  1. identify the transistor in the shown circuit
  2. choose the best beginner-friendly explanation of what the transistor is doing
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - transistor available in sandbox
- Theory page additions:
  - What is a transistor?
- In-lesson theory check:
  - transistor recognition and role
- Standalone quiz topics unlocked:
  - transistor basics

---

### Lesson 3.2: A Transistor as a Switch

- Stage label: Late Intermediate - Active Components
- Prerequisites:
  - Lesson 3.1
- Main goal: Learner sees the transistor used as a simplified switch.
- Concepts introduced:
  - transistor switch behavior
  - a control condition can turn another path on or off
  - switching can be done electronically, not only mechanically
- Formulas shown:
  - conceptual focus
- Components used:
  - source
  - transistor
  - load
  - control path
- Prebuilt amount:
  - mostly prebuilt comparison setups
- Learner actions available:
  - toggle control state
  - inspect load behavior
  - compare transistor switching to a mechanical switch conceptually
- Current-flow overlay:
  - available
- Hint style:
  - comparison-driven explanation
- Completion condition:
  - learner correctly identifies the switching role of the transistor and completes challenge set
- Challenge examples:
  1. identify when the transistor is allowing the load path to operate
  2. compare the transistor switch concept to a normal switch at a beginner level
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - transistor-switch examples available in sandbox
- Theory page additions:
  - Transistor as a simplified switch
- In-lesson theory check:
  - switch-role reasoning
- Standalone quiz topics unlocked:
  - transistor switch basics

---

### Lesson 3.3: Use a Small Control to Affect a Larger Path

- Stage label: Late Intermediate - Active Components
- Prerequisites:
  - Lesson 3.2
- Main goal: Learner understands the basic idea that a transistor lets one part of the circuit influence another part.
- Concepts introduced:
  - control path versus controlled path
  - transistor makes circuit control more flexible
- Formulas shown:
  - conceptual focus
- Components used:
  - transistor
  - source
  - control input path
  - controlled load path
- Prebuilt amount:
  - lightly scaffolded
- Learner actions available:
  - build or complete the circuit
  - run
  - check solution
- Current-flow overlay:
  - available
- Hint style:
  - issue-first, explanation available
- Completion condition:
  - learner builds or corrects a transistor-controlled circuit in the simplified model
- Challenge examples:
  1. complete the circuit so the control path affects the target load
  2. identify why the transistor is useful in the design
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Control path and controlled path
- In-lesson theory check:
  - identify which path is doing the controlling
- Standalone quiz topics unlocked:
  - transistor control basics

---

## Unit 4: Switching and Control Systems

### Unit metadata

- Unit title: Switching and Control Systems
- Stage label: Late Intermediate - Active Components
- Unit goal: Learner applies diode and transistor concepts in simple switching and control design problems.
- Explicit prerequisites:
  - Unit 3 complete

---

### Lesson 4.1: Diode or Transistor?

- Stage label: Late Intermediate - Active Components
- Prerequisites:
  - Lesson 3.3
- Main goal: Learner chooses whether a diode or transistor is the more appropriate component for a given simplified design goal.
- Concepts introduced:
  - component choice by purpose
  - diode and transistor solve different classes of problems
- Formulas shown:
  - conceptual focus
- Components used:
  - diode
  - transistor
  - source
  - loads
  - control path where needed
- Prebuilt amount:
  - lightly scaffolded
- Learner actions available:
  - choose component
  - build or complete circuit
  - run
  - check solution
- Current-flow overlay:
  - available
- Hint style:
  - first points to mismatch between goal and chosen component
- Completion condition:
  - learner selects and uses the appropriate component for the goal
- Challenge examples:
  1. choose whether the goal is about directionality or control
  2. identify which component best matches the required behavior
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Choosing between diode and transistor
- In-lesson theory check:
  - diode-versus-transistor reasoning
- Standalone quiz topics unlocked:
  - component choice basics

---

### Lesson 4.2: A Simple Control Circuit

- Stage label: Late Intermediate - Active Components
- Prerequisites:
  - Lesson 4.1
- Main goal: Learner creates a simple circuit where one condition controls another through a transistor in the instructional model.
- Concepts introduced:
  - control logic in a circuit-like form
  - state-dependent operation
- Formulas shown:
  - conceptual focus
- Components used:
  - transistor
  - source
  - load
  - control input element
- Prebuilt amount:
  - lightly scaffolded
- Learner actions available:
  - build
  - run
  - inspect
  - check solution
- Current-flow overlay:
  - available
- Hint style:
  - progressive
- Completion condition:
  - learner builds a functioning simplified control circuit
- Challenge examples:
  1. make the target load respond only when the control condition is present
  2. identify why a passive-only design does not meet the same control goal
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - control-style transistor challenge prompts available in sandbox
- Theory page additions:
  - Simple transistor-controlled circuits
- In-lesson theory check:
  - control-condition reasoning
- Standalone quiz topics unlocked:
  - simple control-circuit basics

---

## Unit 5: Chapter Review Challenge

### Unit metadata

- Unit title: Diodes, Rectification, and Switching Review
- Stage label: Late Intermediate - Active Components
- Unit goal: Learner integrates diode behavior, rectification, transistor switching, and component-choice reasoning.
- Unit 5 differentiation rule:
  - Lesson 5.1 is guided consolidation of component selection and behavior checks.
  - Lesson 5.2 is a lower-scaffold transfer challenge with stricter learner autonomy.
- Explicit prerequisites:
  - Unit 4 complete

---

### Lesson 5.1: Review Challenge

- Stage label: Late Intermediate - Active Components
- Prerequisites:
  - Lesson 4.2
- Main goal: Learner completes a broader review challenge using the appropriate active or directional component for the problem.
- Concepts introduced:
  - no major new concept
  - integration and fluency
- Formulas shown:
  - conceptual focus with prior theory available for reference
- Components used:
  - diode
  - transistor
  - AC or DC source depending on the challenge
  - load
  - control path where needed
- Prebuilt amount:
  - limited prebuilt structure
- Learner actions available:
  - choose component
  - build
  - run
  - inspect
  - check solution
- Current-flow overlay:
  - available
- Hint style:
  - concise first hint
  - explanation available on request
- Completion condition:
  - learner solves the design challenge and selects the correct behavior-shaping component
- Challenge examples:
  1. choose the correct component for rectification versus control
  2. diagnose and fix a circuit that uses the wrong component type
- Challenge type: `fix`, `choose`, `diagnose`
- Sandbox unlocks after lesson:
  - chapter-complete prompt encouraging experiments with diode orientation, rectification, and transistor control
- Theory page additions:
  - Chapter 8 review topic links
- In-lesson theory check:
  - mixed quick checks
- Standalone quiz topics unlocked:
  - Chapter 8 review quiz

---

### Lesson 5.2: Larger Integration Challenge

- Stage label: Late Intermediate - Active Components
- Prerequisites:
  - Lesson 5.1
- Main goal: Learner solves a larger challenge combining conversion, rectification, and switching/control at a conceptual level.
- Concepts introduced:
  - no major new concept
  - larger system integration
- Formulas shown:
  - conceptual focus
- Components used:
  - AC and/or DC sources
  - diode stage
  - transistor stage
  - loads
  - conversion stages if needed
- Prebuilt amount:
  - lightly scaffolded
- Learner actions available:
  - build
  - run
  - inspect system blocks
  - check solution
- Current-flow overlay:
  - available
- Hint style:
  - issue-first
- Completion condition:
  - learner creates a working simplified system that uses the right stages for the right roles
- Challenge examples:
  1. build a system that needs rectification at one stage and control at another
  2. identify and fix a system where the right idea is used in the wrong place
- Challenge type: `build`, `fix`, `choose`
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Integrating directionality, conversion, and control
- Troubleshooting and investigation checkpoint: directionality-versus-control diagnosis
- In-lesson theory check:
  - stage-role reasoning
- Standalone quiz topics unlocked:
  - integrated active-component reasoning

---

## Chapter 8 theory review items

By the end of this chapter, the theory reference should include topic-group entries for:
- What is a diode?
- Why diode orientation matters
- Using a diode in a simple DC circuit
- Diodes under AC at an introductory level
- Introductory rectification
- Comparing unrectified and rectified output
- What is a transistor?
- Transistor as a simplified switch
- Control path and controlled path
- Choosing between diode and transistor
- Simple transistor-controlled circuits
- Integrating directionality, conversion, and control

Each entry should link back to the lesson or lessons where it was introduced.

## Chapter 8 standalone quizzes

Suggested quizzes unlocked by the end of the chapter:
1. Diode basics
2. Diode orientation basics
3. Diode use in simple circuits
4. Diode and AC basics
5. Rectification basics
6. Rectified versus unrectified basics
7. Transistor basics
8. Transistor switch basics
9. Transistor control basics
10. Component choice basics
11. Simple control-circuit basics
12. Integrated active-component reasoning
13. Chapter 8 review quiz

These are optional and replayable.

## Chapter 8 sandbox state by the end

By the end of Chapter 8, sandbox should support in required active-component mode:
- diode placement and orientation-dependent behavior
- introductory rectification experiments
- transistor placement in simplified switching/control circuits
- control-path and controlled-path examples
- conceptual integration of conversion, directionality, and control stages

## Handoff to Chapter 9

Chapter 9 should include:
- explicit input/state/output language for behaviors learners used as switch/control patterns in Chapter 8
- formal gate taxonomy and truth-table-based reasoning
- small multi-gate design and debugging tasks that build on Chapter 8 control intuition

Chapter 9 implementation should assume learners can already:
- reason about transistor control as state-like switching (on/off control condition)
- distinguish directionality problems (diode) from control problems (transistor)
- connect Chapter 7 conversion blocks to Chapter 8 diode-based rectification

Chapter 9 then re-labels these switching behaviors into explicit input/state/output language and formal gate rules.
