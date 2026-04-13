# Interactive Electrical Circuits Learning App
# Lesson Plan, Chapter 9: Logic Gates and Digital-Style Behavior

## Purpose of this chapter

This chapter extends the curriculum from analog and control-oriented circuit behavior into introductory digital-style reasoning. It builds directly on the simplified switching and control ideas introduced with transistors in Chapter 8. The goal is not to turn the course into a full computer engineering curriculum, but to help learners understand that circuits can also be designed to represent logical conditions and state-like behavior.

The chapter introduces the idea of high and low states in a simplified educational model, then introduces basic logic gates as circuit behaviors that transform input conditions into output conditions. The focus remains simulation-first, concept-first, and beginner-friendly. Learners should see that digital-style behavior is still circuit behavior, just expressed in a more rule-like and state-oriented way.

This chapter stays at an introductory level. Deep Boolean algebra, integrated circuit engineering, timing analysis, and advanced digital electronics are outside the scope of this chapter.

## Chapter metadata

- Chapter title: Logic Gates and Digital-Style Behavior
- Stage label: Advanced Beginner Electronics to Early Digital Logic
- Chapter goal: Learner can understand and use basic logic-gate behavior in simplified circuit simulations and can reason about digital-style input and output conditions.
- Primary outcome: Learner understands that transistor-style switching can be used to create rule-based circuit outputs and simple digital logic behavior.
- Main simulation model: simplified digital-style behavior built from instructional switching models
- Main interaction style: guided gate introduction first, then small logic-design challenges
- Default lesson style: comparison-heavy at the start, then more open-ended combinational reasoning
- Main workspace actions available by end of chapter:
  - all previously unlocked actions
  - place or use simplified gate-like components or gate-building structures
  - inspect inputs and outputs
  - reason about multiple input conditions
  - solve small logic-design challenges
- Main conceptual transition in this chapter:
  - from switching a path
  - to combining input conditions into logical circuit outputs

---

## Unit 1: From Switching to Logic

### Unit metadata

- Unit title: From Switching to Logic
- Stage label: Advanced Beginner Electronics to Early Digital Logic
- Unit goal: Learner understands how switching behavior can become logic behavior.
- Explicit prerequisites:
  - Chapter 8 complete

---

### Lesson 1.1: A Circuit Can Represent a Condition

- Stage label: Advanced Beginner Electronics to Early Digital Logic
- Prerequisites:
  - Chapter 8 complete
- Main goal: Learner understands that a circuit can be described in terms of simple states such as active versus inactive, or high versus low, in the instructional model.
- Concepts introduced:
  - input state
  - output state
  - a circuit can represent a condition, not only raw energy transfer
  - simplified high/low language in the product
- Formulas shown:
  - conceptual focus only
- Components used:
  - source
  - switch-like inputs
  - simple controlled output load or indicator
- Prebuilt amount:
  - mostly prebuilt
- Learner actions available:
  - toggle input conditions
  - observe output state
- Current-flow overlay:
  - available where useful
- Hint style:
  - concept-first explanation
- Completion condition:
  - learner identifies which state the output is in under simple input conditions and completes challenge set
- Challenge examples:
  1. identify whether the output is active or inactive
  2. identify which input condition changes the output state
- Sandbox unlocks after lesson:
  - no new gate component yet
  - input and output labeling more explicitly surfaced in supported sandbox modes
- Theory page additions:
  - Input states and output states
  - High and low in the simplified model
- In-lesson theory check:
  - state recognition basics
- Standalone quiz topics unlocked:
  - input/output state basics

---

### Lesson 1.2: One Input Can Control One Output

- Stage label: Early Digital Logic
- Prerequisites:
  - Lesson 1.1
- Main goal: Learner sees the simplest digital-style pattern: one input condition controlling one output condition.
- Concepts introduced:
  - single-input control
  - state mapping
  - the output can be treated as a logical result of the input in a simplified model
- Formulas shown:
  - conceptual focus
- Components used:
  - source
  - one control input
  - one output indicator or load
  - optional transistor-based switching model or abstracted logic element
- Prebuilt amount:
  - mostly prebuilt
- Learner actions available:
  - toggle the input
  - inspect the output
  - compare cases
- Current-flow overlay:
  - available
- Hint style:
  - guided comparison
- Completion condition:
  - learner correctly predicts the output from a given input and completes challenge set
- Challenge examples:
  1. identify the output when the input is active
  2. identify the output when the input is inactive
- Sandbox unlocks after lesson:
  - no new gate component yet
- Theory page additions:
  - Single-input control patterns
- In-lesson theory check:
  - basic input-to-output prediction
- Standalone quiz topics unlocked:
  - single-input control basics

---

## Unit 2: Basic Logic Gates

### Unit metadata

- Unit title: Basic Logic Gates
- Stage label: Early Digital Logic
- Unit goal: Learner is introduced to the simplest standard logic gates in an instructional model.
- Explicit prerequisites:
  - Unit 1 complete

---

### Lesson 2.1: Meet the NOT Gate

- Stage label: Early Digital Logic
- Prerequisites:
  - Lesson 1.2
- Main goal: Learner is introduced to the NOT gate as a simple inversion behavior.
- Concepts introduced:
  - NOT gate
  - inversion
  - output can be opposite of the input state
- Formulas shown:
  - conceptual focus
  - no formal Boolean algebra required yet
- Components used:
  - one input
  - one NOT gate or equivalent instructional representation
  - one output indicator
- Prebuilt amount:
  - mostly prebuilt
- Learner actions available:
  - toggle input
  - inspect output
  - compare states
- Current-flow overlay:
  - optional where helpful, but state display may be more useful here
- Hint style:
  - full explanation by default
- Completion condition:
  - learner correctly predicts NOT gate behavior and completes challenge set
- Challenge examples:
  1. identify the output when the input is high
  2. identify the output when the input is low
- Sandbox unlocks after lesson:
  - NOT gate available in sandbox
- Theory page additions:
  - What is a NOT gate?
- In-lesson theory check:
  - inversion reasoning
- Standalone quiz topics unlocked:
  - NOT gate basics

---

### Lesson 2.2: Meet the AND Gate

- Stage label: Early Digital Logic
- Prerequisites:
  - Lesson 2.1
- Main goal: Learner is introduced to the AND gate as a two-input gate that requires both conditions to be active.
- Concepts introduced:
  - AND gate
  - multiple inputs
  - both conditions must be true for the output to activate
- Formulas shown:
  - conceptual focus
- Components used:
  - two inputs
  - one AND gate or equivalent instructional representation
  - one output indicator
- Prebuilt amount:
  - mostly prebuilt
- Learner actions available:
  - toggle both inputs
  - inspect output
  - compare all combinations
- Current-flow overlay:
  - optional
- Hint style:
  - table-like comparison guidance
- Completion condition:
  - learner correctly identifies AND gate behavior across input combinations
- Challenge examples:
  1. identify when the output is active
  2. identify which input combination leaves the output inactive
- Sandbox unlocks after lesson:
  - AND gate available in sandbox
- Theory page additions:
  - What is an AND gate?
- In-lesson theory check:
  - AND gate combination reasoning
- Standalone quiz topics unlocked:
  - AND gate basics

---

### Lesson 2.3: Meet the OR Gate

- Stage label: Early Digital Logic
- Prerequisites:
  - Lesson 2.2
- Main goal: Learner is introduced to the OR gate as a two-input gate that activates when at least one input is active.
- Concepts introduced:
  - OR gate
  - one or more active inputs can produce the output
  - different gate types implement different circuit rules
- Formulas shown:
  - conceptual focus
- Components used:
  - two inputs
  - OR gate
  - one output indicator
- Prebuilt amount:
  - mostly prebuilt
- Learner actions available:
  - toggle both inputs
  - inspect output
  - compare combinations
- Current-flow overlay:
  - optional
- Hint style:
  - comparison-focused
- Completion condition:
  - learner correctly predicts OR gate behavior across combinations
- Challenge examples:
  1. identify when the output is active
  2. compare AND and OR behavior for the same inputs
- Sandbox unlocks after lesson:
  - OR gate available in sandbox
- Theory page additions:
  - What is an OR gate?
- In-lesson theory check:
  - OR gate combination reasoning
- Standalone quiz topics unlocked:
  - OR gate basics

---

### Lesson 2.4: Compare NOT, AND, and OR

- Stage label: Early Digital Logic
- Prerequisites:
  - Lesson 2.3
- Main goal: Learner compares the first three basic gates directly and understands that each applies a different logic rule.
- Concepts introduced:
  - gate comparison
  - same inputs can produce different outputs depending on the gate
  - gate choice is part of design
- Formulas shown:
  - conceptual focus
- Components used:
  - NOT, AND, OR gate examples
  - inputs and output indicators
- Prebuilt amount:
  - comparison setups prebuilt
- Learner actions available:
  - inspect
  - toggle inputs
  - compare outputs
- Current-flow overlay:
  - optional
- Hint style:
  - side-by-side comparison
- Completion condition:
  - learner distinguishes the three gate types and completes challenge set
- Challenge examples:
  1. identify which gate matches a shown output rule
  2. match each gate to its behavior
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Comparing basic gates
- In-lesson theory check:
  - gate identification and comparison
- Standalone quiz topics unlocked:
  - basic gate comparison

---

## Unit 3: More Gate Variants

### Unit metadata

- Unit title: More Gate Variants
- Stage label: Early Digital Logic
- Unit goal: Learner is introduced to additional commonly used gate types at an intuitive level.
- Explicit prerequisites:
  - Unit 2 complete

---

### Lesson 3.1: Meet NAND and NOR

- Stage label: Early Digital Logic
- Prerequisites:
  - Lesson 2.4
- Main goal: Learner is introduced to NAND and NOR as inverted versions of earlier gates.
- Concepts introduced:
  - NAND
  - NOR
  - inversion can be combined with multi-input logic behavior
- Formulas shown:
  - conceptual focus
- Components used:
  - NAND gate
  - NOR gate
  - inputs and outputs
- Prebuilt amount:
  - mostly prebuilt
- Learner actions available:
  - toggle inputs
  - compare NAND/NOR to AND/OR
- Current-flow overlay:
  - optional
- Hint style:
  - pattern-based explanation
- Completion condition:
  - learner identifies NAND and NOR behavior and completes challenge set
- Challenge examples:
  1. compare NAND to AND
  2. compare NOR to OR
- Sandbox unlocks after lesson:
  - NAND and NOR gates available in sandbox
- Theory page additions:
  - What are NAND and NOR?
- In-lesson theory check:
  - inversion-plus-gate reasoning
- Standalone quiz topics unlocked:
  - NAND and NOR basics

---

### Lesson 3.2: Meet XOR

- Stage label: Early Digital Logic
- Prerequisites:
  - Lesson 3.1
- Main goal: Learner is introduced to XOR as a gate that activates when the inputs differ in the simplified model.
- Concepts introduced:
  - XOR
  - same versus different input states
  - some gate behaviors are about comparison, not just counting active inputs
- Formulas shown:
  - conceptual focus
- Components used:
  - XOR gate
  - two inputs
  - one output indicator
- Prebuilt amount:
  - mostly prebuilt
- Learner actions available:
  - toggle inputs
  - compare combinations
- Current-flow overlay:
  - optional
- Hint style:
  - comparison and pattern-focused
- Completion condition:
  - learner correctly predicts XOR behavior and completes challenge set
- Challenge examples:
  1. identify when the XOR output is active
  2. identify which input combinations produce the same result
- Sandbox unlocks after lesson:
  - XOR gate available in sandbox
- Theory page additions:
  - What is XOR?
- In-lesson theory check:
  - XOR pattern reasoning
- Standalone quiz topics unlocked:
  - XOR basics

---

### Lesson 3.3: Gate Truth Tables as a Review Tool

- Stage label: Early Digital Logic
- Prerequisites:
  - Lesson 3.2
- Main goal: Learner is introduced to truth tables as a compact way to summarize gate behavior.
- Concepts introduced:
  - truth table
  - input combinations and output result table
  - a structured summary of gate behavior
- Formulas shown:
  - conceptual focus
- Components used:
  - gate examples already introduced
  - truth-table displays in lesson UI
- Prebuilt amount:
  - prebuilt
- Learner actions available:
  - inspect
  - fill in missing entries
  - compare gate behavior
- Current-flow overlay:
  - not central
- Hint style:
  - structured and table-based
- Completion condition:
  - learner correctly reads and completes simple truth-table entries
- Challenge examples:
  1. fill in missing output entries for a gate
  2. identify which truth table corresponds to a shown gate
- Sandbox unlocks after lesson:
  - truth-table reference support available in sandbox gate review mode if supported
- Theory page additions:
  - What is a truth table?
- In-lesson theory check:
  - truth-table reading basics
- Standalone quiz topics unlocked:
  - truth-table basics

---

## Unit 4: Small Logic Designs

### Unit metadata

- Unit title: Small Logic Designs
- Stage label: Early Digital Logic to Introductory System Design
- Unit goal: Learner applies gate behavior to small design problems instead of only recognizing predefined gates.
- Explicit prerequisites:
  - Unit 3 complete

---

### Lesson 4.1: Choose the Right Gate for the Rule

- Stage label: Early Digital Logic
- Prerequisites:
  - Lesson 3.3
- Main goal: Learner chooses a gate based on the desired output rule.
- Concepts introduced:
  - output rule drives gate selection
  - gate choice is a design decision
- Formulas shown:
  - conceptual focus
- Components used:
  - multiple gate options
  - input and output states
- Prebuilt amount:
  - lightly scaffolded
- Learner actions available:
  - choose gate
  - connect it
  - test combinations
  - check solution
- Current-flow overlay:
  - optional
- Hint style:
  - issue-first
  - explanation available
- Completion condition:
  - learner selects the correct gate for the target rule
- Challenge examples:
  1. choose a gate that only activates when both inputs are active
  2. choose a gate that activates when inputs differ
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Choosing the right gate for a rule
- In-lesson theory check:
  - gate-selection reasoning
- Standalone quiz topics unlocked:
  - gate choice basics

---

### Lesson 4.2: Combine Two Gates

- Stage label: Introductory System Design
- Prerequisites:
  - Lesson 4.1
- Main goal: Learner combines two gates to create a slightly more complex output rule.
- Concepts introduced:
  - gate composition
  - an output of one stage can feed another stage
  - larger logic behavior can be built from smaller pieces
- Formulas shown:
  - conceptual focus
- Components used:
  - two gates
  - input conditions
  - one output indicator
- Prebuilt amount:
  - lightly scaffolded
- Learner actions available:
  - place gates
  - connect stages
  - test input combinations
  - check solution
- Current-flow overlay:
  - optional
- Hint style:
  - progressive by stage
- Completion condition:
  - learner builds a correct two-gate system
- Challenge examples:
  1. combine gates to create a specified output rule
  2. identify why a one-gate solution is insufficient in the shown case
- Sandbox unlocks after lesson:
  - multi-gate design supported in sandbox
- Theory page additions:
  - Combining gates into larger logic behavior
- In-lesson theory check:
  - multi-stage gate reasoning
- Standalone quiz topics unlocked:
  - multi-gate basics

---

### Lesson 4.3: Inputs, Outputs, and System Behavior

- Stage label: Introductory System Design
- Prerequisites:
  - Lesson 4.2
- Main goal: Learner reasons about a small logic system as a whole rather than as isolated parts.
- Concepts introduced:
  - system-level logic behavior
  - tracing inputs through a small design
  - debugging logic paths
- Formulas shown:
  - conceptual focus
- Components used:
  - small multi-gate system
  - inputs and outputs
- Prebuilt amount:
  - partially prebuilt
- Learner actions available:
  - inspect
  - test combinations
  - debug
  - check solution
- Current-flow overlay:
  - optional
- Hint style:
  - first points to where the system's rule is violated
- Completion condition:
  - learner correctly analyzes or fixes a small logic system
- Challenge examples:
  1. identify which input combination breaks the intended behavior
  2. fix a small logic system that uses one incorrect gate
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Reasoning about a small logic system
- In-lesson theory check:
  - system-level gate reasoning
- Standalone quiz topics unlocked:
  - small logic-system basics

---

## Unit 5: Chapter Review Challenge

### Unit metadata

- Unit title: Logic and Digital-Style Review
- Stage label: Introductory System Design
- Unit goal: Learner integrates the chapter’s gate and logic-design ideas.
- Explicit prerequisites:
  - Unit 4 complete

---

### Lesson 5.1: Review Challenge

- Stage label: Introductory System Design
- Prerequisites:
  - Lesson 4.3
- Main goal: Learner solves a gate-selection and small-system design challenge using the correct logic behavior.
- Concepts introduced:
  - no major new concept
  - integration and fluency
- Formulas shown:
  - conceptual focus
- Components used:
  - multiple gate types
  - inputs and outputs
- Prebuilt amount:
  - lightly scaffolded
- Learner actions available:
  - choose gates
  - connect them
  - test combinations
  - inspect truth-table summaries where available
  - check solution
- Current-flow overlay:
  - optional
- Hint style:
  - concise first hint
  - explanation available on request
- Completion condition:
  - learner builds a correct small logic design and passes the review challenge
- Challenge examples:
  1. build a logic system that matches the given rule
  2. identify and fix a system that uses the wrong gate type
- Sandbox unlocks after lesson:
  - chapter-complete prompt encouraging experimentation with gate combinations
- Theory page additions:
  - Chapter 9 review topic links
- In-lesson theory check:
  - mixed quick checks
- Standalone quiz topics unlocked:
  - Chapter 9 review quiz

---

### Lesson 5.2: Larger Integration Challenge

- Stage label: Introductory System Design
- Prerequisites:
  - Lesson 5.1
- Main goal: Learner integrates switching, logic-gate behavior, and earlier circuit ideas in a larger capstone-style challenge for this branch of the curriculum.
- Concepts introduced:
  - no major new concept
  - integration across switching/control and logic behavior
- Formulas shown:
  - conceptual focus
- Components used:
  - gates
  - transistor-style control elements where appropriate
  - input and output elements
  - optional conversion or source-type context if useful to the challenge
- Prebuilt amount:
  - lightly scaffolded
- Learner actions available:
  - build
  - test combinations
  - inspect system behavior
  - check solution
- Current-flow overlay:
  - optional
- Hint style:
  - progressive
- Completion condition:
  - learner creates a working small digital-style system that satisfies the stated rule
- Challenge examples:
  1. build a control system whose output follows a multi-input rule
  2. diagnose and fix a design that almost works but fails under one input combination
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Integrating switching and logic behavior
- In-lesson theory check:
  - input-combination reasoning
- Standalone quiz topics unlocked:
  - integrated digital-style reasoning basics

---

## Chapter 9 theory review items

By the end of this chapter, the theory reference should include topic-group entries for:
- Input states and output states
- High and low in the simplified model
- Single-input control patterns
- What is a NOT gate?
- What is an AND gate?
- What is an OR gate?
- Comparing basic gates
- What are NAND and NOR?
- What is XOR?
- What is a truth table?
- Choosing the right gate for a rule
- Combining gates into larger logic behavior
- Reasoning about a small logic system
- Integrating switching and logic behavior

Each entry should link back to the lesson or lessons where it was introduced.

## Chapter 9 standalone quizzes

Suggested quizzes unlocked by the end of the chapter:
1. Input/output state basics
2. Single-input control basics
3. NOT gate basics
4. AND gate basics
5. OR gate basics
6. Basic gate comparison
7. NAND and NOR basics
8. XOR basics
9. Truth-table basics
10. Gate choice basics
11. Multi-gate basics
12. Small logic-system basics
13. Integrated digital-style reasoning basics
14. Chapter 9 review quiz

These are optional and replayable.

## Chapter 9 sandbox state by the end

By the end of Chapter 9, sandbox should support, in supported digital-style modes:
- simplified high/low input and output representation
- NOT, AND, OR, NAND, NOR, and XOR gates
- truth-table reference support where available
- multi-gate design experiments
- gate-selection and debugging practice
- small digital-style control-system experiments

## Handoff to Chapter 10

Chapter 10 should choose between two strong directions:
- a final review, mastery, and capstone-design chapter set that consolidates the whole curriculum, or
- a further extension into more advanced digital or system topics

For the current product vision, a capstone and mastery chapter is likely the stronger next step.
