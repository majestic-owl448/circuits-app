# Lesson Plan, Chapter 7: AC Fundamentals and DC/AC Conversion

## Purpose of this chapter

This chapter introduces alternating current after the learner has already built a strong foundation in DC circuits, non-ideal behavior, and time-dependent components. The goal is to help the learner understand that AC is not simply “another DC value,” but a different kind of electrical behavior in which voltage and current vary directionally and over time.

The chapter stays conceptual and simulation-first. It introduces AC in a way that remains consistent with the product’s beginner-friendly philosophy. The learner should first understand what AC is, how it differs from DC, how loads can behave differently under AC versus DC, and how a system can convert between DC and AC. A modern motivating example is included: a DC source such as a solar panel or battery system feeding an AC load through a conversion stage.

This chapter does not aim to become a full advanced AC engineering course. It introduces enough AC reasoning for the learner to understand the basic behavior, terminology, and simulation model, and to analyze simple AC/DC conversion scenarios conceptually.

## Chapter metadata

- Chapter title: AC Fundamentals and DC/AC Conversion
- Stage label: Late Intermediate
- Chapter goal: Learner can understand AC at an introductory level, compare AC and DC behavior conceptually, and reason about simple conversion scenarios between DC and AC in simulation.
- Primary outcome: Learner understands what AC is, how it differs from DC, and why conversion between DC and AC matters in modern systems.
- Main simulation model: introductory AC and AC/DC conversion simulations with simplified instructional behavior
- Main interaction style: guided conceptual comparison first, then controlled analysis and target-based challenges
- Default lesson style: strongly guided at the start, then increasingly analytical
- Main workspace actions available by end of chapter:
  - all previously unlocked actions
  - inspect AC and DC source behavior in the simulation
  - compare simple source types and load outcomes
  - reason about conversion stages conceptually
  - use existing inspection tools in lesson-defined AC contexts
- Main conceptual transition in this chapter:
  - from DC-only reasoning
  - to understanding alternating behavior
  - to understanding systems that include both DC and AC stages

## ID mapping for implementation

- Lesson IDs in this chapter must map directly from lesson numbering: lesson `U.L` -> `lesson-ch7-U-L`.
- Standalone quiz IDs in this chapter must use `quiz-ch7-topic-name` with stable kebab-case slugs derived from quiz titles.
- Keep slugs stable across revisions to avoid breaking `unlockedBy` and registry references.

## Implementation boundary notes for this chapter

To reduce ambiguity during implementation, this chapter uses the following support contract:

- Lesson mode (required):
  - all Unit 1-5 lesson interactions in this plan
  - timeline-panel comparison in Lesson 1.2
  - conceptual conversion blocks in Unit 3
- Sandbox mode (required by chapter end):
  - AC source placement
  - introductory AC waveform view
  - AC/DC comparison scenarios
  - DC-to-AC and AC-to-DC conversion blocks
- Optional (can be disabled for first ship if clearly labeled):
  - capacitor/inductor AC preview experiments in sandbox

---

## Unit 1: What AC Is

### AC waveform view relation to Chapter 6 timeline panel

- The Chapter 7 AC waveform view is not a separate UX system.
- It is the Chapter 6 timeline panel configured for repeating-cycle visualization instead of one-time transient windows.
- AC scrubber behavior follows the Chapter 6 AC extension: cycle-relative anchors, optional two-cycle view for comparison, continuous loop playback in AC mode, and checkpoint snap/pause when challenge evaluation requires it.
- If a distinct signal widget is introduced in future implementations, it must mirror the same checkpoint and accessibility rules defined in `docs/specs/time-visualization-ux-spec.md`.

### Unit metadata

- Unit title: What AC Is
- Stage label: Late Intermediate
- Unit goal: Learner is introduced to AC as a distinct source and behavior model.
- Explicit prerequisites:
  - Chapter 6 complete

---

### Lesson 1.1: Direct Current Versus Alternating Current

- Stage label: Late Intermediate
- Prerequisites:
  - Chapter 6 complete
- Main goal: Learner understands the high-level difference between DC and AC.
- Concepts introduced:
  - DC as one-directional or steady-direction electrical behavior in the instructional model
  - AC as alternating electrical behavior
  - current direction and source behavior can vary over time in AC
- Formulas shown:
  - no heavy new formulas required yet
  - earlier DC formulas remain available when instructionally relevant as reference
- Components used:
  - one DC source
  - one AC source
  - simple comparison load
- Prebuilt amount:
  - comparison setups prebuilt
- Learner actions available:
  - inspect
  - toggle or activate source
  - observe behavior
- Current-flow overlay:
  - available
  - directionality differences shown when the lesson enables directional overlay mode
- Hint style:
  - concept-first explanation
- Completion condition:
  - learner distinguishes AC from DC and completes challenge set
- Challenge examples:
  1. identify which source is AC and which is DC
  2. choose the best beginner-friendly explanation of how AC differs from DC
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - AC source available in sandbox
- Theory page additions:
  - What is AC?
  - AC versus DC
- In-lesson theory check:
  - AC versus DC recognition
- Standalone quiz topics unlocked:
  - AC versus DC basics

---

### Lesson 1.2: AC Changes Over Time in a Different Way

- Stage label: Late Intermediate
- Prerequisites:
  - Lesson 1.1
- Main goal: Learner understands that AC changes over time in a repeating way that is different from the one-time transients already studied.
- Concepts introduced:
  - repeating alternating pattern
  - AC variation over time
  - difference between transient behavior and repeating AC behavior
  - the precise distinction: a transient is a one-time response to a change (switch on → settle to steady state). AC is a continuous, repeating pattern that does not settle to a single value.
- Side-by-side comparison requirement:
  - This lesson must include an explicit visual comparison showing the same load connected first to a DC source with a switch (producing a Chapter 6-style transient), and then to an AC source (producing repeating behavior). Both should use the timeline panel introduced in Chapter 6 so learners can directly compare the two time-domain plots.
  - The comparison should make clear: the transient curve approaches a flat line (steady state), while the AC curve keeps repeating without flattening.
- Formulas shown:
  - no heavy waveform math yet
- Components used:
  - AC source
  - simple load
  - DC source with switch for transient comparison (required, not optional)
- Prebuilt amount:
  - prebuilt
- Learner actions available:
  - inspect
  - observe behavior over time
  - use timeline panel to compare transient and AC plots
- Current-flow overlay:
  - available
- Hint style:
  - explicit comparison between transient change and repeating alternation
- Completion condition:
  - learner identifies the repeating nature of AC and completes challenge set
- Challenge examples:
  1. identify which changing behavior is transient and which is AC using the timeline panel
  2. identify whether a shown source alternates repeatedly or only changes once after switching
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Repeating AC behavior
  - AC versus transient change
- In-lesson theory check:
  - repeating versus one-time change reasoning
- Standalone quiz topics unlocked:
  - AC time-pattern basics

---

### Lesson 1.3: A First Introductory AC Wave View

- Stage label: Late Intermediate
- Prerequisites:
  - Lesson 1.2
- Main goal: Learner sees a simplified wave-style representation of AC without requiring advanced waveform math.
- Concepts introduced:
  - AC can be represented visually as a changing wave over time
  - the wave view is a representation of changing electrical behavior
- Formulas shown:
  - none required beyond labels if the simulation chooses to expose them
- Components used:
  - AC source
  - simple load
  - simple waveform or signal display in the lesson UI
- Prebuilt amount:
  - prebuilt
- Learner actions available:
  - inspect
  - compare source behavior and waveform visualization
- Current-flow overlay:
  - available when instructionally relevant
- Hint style:
  - visualization-focused explanation
- Completion condition:
  - learner correctly interprets the simplified wave display and completes challenge set
- Challenge examples:
  1. identify where the displayed behavior is changing direction
  2. identify whether the shown wave is consistent with AC or DC
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - simple waveform display available in AC sandbox mode using the Chapter 6 timeline-panel interaction model
- Theory page additions:
  - Introductory AC wave view
- In-lesson theory check:
  - waveform interpretation basics
- Standalone quiz topics unlocked:
  - introductory AC wave basics

---

## Unit 2: AC Loads and Comparison With DC

### Unit metadata

- Unit title: AC Loads and Comparison With DC
- Stage label: Late Intermediate
- Unit goal: Learner compares how loads behave under AC and DC in the simplified simulation model.
- Explicit prerequisites:
  - Unit 1 complete

---

### Lesson 2.1: The Same Load, Different Source Type

- Stage label: Late Intermediate
- Prerequisites:
  - Lesson 1.3
- Main goal: Learner compares a simple load connected to a DC source versus an AC source.
- Concepts introduced:
  - source type changes circuit behavior
  - the load must be understood in the context of the source type
- Formulas shown:
  - conceptual focus, not heavy new math
- Components used:
  - one resistive load
  - one DC source
  - one AC source
- Prebuilt amount:
  - comparison setups prebuilt
- Learner actions available:
  - inspect
  - compare
  - run source scenarios
- Current-flow overlay:
  - available
- Hint style:
  - comparison-driven explanation
- Completion condition:
  - learner identifies how the load behavior differs across source type and completes challenge set
- Challenge examples:
  1. identify which behavior corresponds to AC drive of the load
  2. identify which comparison statement is correct for the shown simulation
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Comparing the same load under AC and DC
- In-lesson theory check:
  - source-type comparison question
- Standalone quiz topics unlocked:
  - AC/DC load comparison basics

---

### Lesson 2.2: Resistive Loads Under AC

- Stage label: Late Intermediate
- Prerequisites:
  - Lesson 2.1
- Main goal: Learner understands the simplest introductory case of a resistive load under AC.
- Concepts introduced:
  - resistive load response under AC in the instructional model
  - AC behavior can still be reasoned about in simple cases
- Formulas shown:
  - no advanced AC power math required yet
- Components used:
  - AC source
  - resistive load
- Prebuilt amount:
  - mostly prebuilt
- Learner actions available:
  - inspect
  - compare
  - observe over time
- Current-flow overlay:
  - available
- Hint style:
  - simple and intuitive
- Completion condition:
  - learner correctly describes the basic AC behavior of the resistive load and completes challenge set
- Challenge examples:
  1. identify whether the load is being driven by alternating behavior
  2. compare simple resistive response under AC versus DC
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - resistive-load AC experiments available in supported sandbox mode
- Theory page additions:
  - Resistive loads under AC in the simplified model
- In-lesson theory check:
  - basic AC resistive-load reasoning
- Standalone quiz topics unlocked:
  - resistive AC basics

---

### Lesson 2.3: Time-Dependent Components Under AC Preview

- Stage label: Late Intermediate
- Prerequisites:
  - Lesson 2.2
- Main goal: Learner sees that capacitors and inductors can interact with AC in ways that differ from the earlier DC-only time-dependent lessons.
- Concepts introduced:
  - AC can interact with capacitor and inductor behavior differently than simple DC switching scenarios
  - the speed of repetition matters: how quickly AC alternates can affect how much a capacitor or inductor "responds" in the simplified model
  - this is an introductory preview, not a full advanced treatment
- Forward note: The idea that AC repetition speed affects component behavior is the conceptual seed for impedance and frequency-dependent analysis in more advanced curricula (outside current product scope). This lesson does not use formal frequency, period, or impedance terminology, but establishes the intuition that "faster changes and slower changes produce different results with these components."
- Terminology transition requirement:
  - This lesson is where formal naming begins: introduce **frequency** and **period** by name at an introductory level after the intuition is established.
  - Keep the treatment light: define terms, relate them to faster/slower repetition, and avoid advanced impedance math.
- Formulas shown:
  - conceptual focus only
- Components used:
  - AC source
  - capacitor or inductor in simple preview setups
- Prebuilt amount:
  - comparison setups prebuilt
- Learner actions available:
  - inspect
  - compare
  - observe time-dependent patterns
- Current-flow overlay:
  - available
- Hint style:
  - explicit preview framing
- Completion condition:
  - learner identifies that AC plus capacitor/inductor behavior deserves separate reasoning and completes challenge set
- Challenge examples:
  1. identify which component-source combination behaves differently from the earlier DC-only cases
  2. identify why this is only an introductory preview and not yet a full advanced AC treatment
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - optional simple AC preview modes for capacitors and inductors when AC-reactive preview mode is enabled
- Theory page additions:
  - Introductory preview of reactive behavior under AC
- In-lesson theory check:
  - identify which cases require new AC-aware reasoning
- Standalone quiz topics unlocked:
  - introductory AC reactive preview basics

---

## Unit 3: Conversion Between DC and AC

### Unit metadata

- Unit title: Conversion Between DC and AC
- Stage label: Late Intermediate
- Unit goal: Learner understands that some systems use conversion stages to move between DC and AC.
- Thread map (source-load matching progression):
  - Ch2 baseline: ideal single-load matching
  - Ch4 extension: mixed-circuit matching with measurement verification
  - Ch5 extension: non-ideal constraints and operating limits
  - Ch7 extension: AC/DC compatibility and conversion-stage selection
  - canonical reference: `docs/curriculum-progression-qa-checklist.md` -> "Source-load matching progression thread map (canonical)"
- Explicit prerequisites:
  - Unit 2 complete

---

### Lesson 3.1: Why Convert Between DC and AC?

- Stage label: Late Intermediate
- Prerequisites:
  - Lesson 2.3
- Main goal: Learner understands why a system might need a conversion stage between a source and a load.
- Concepts introduced:
  - source type and load type may not match directly
  - conversion stages solve compatibility problems
  - modern systems often include both DC and AC segments
  - canonical thread reference: see `docs/curriculum-progression-qa-checklist.md` -> "Source-load matching progression thread map (canonical)"
  - progression framing: this extends Chapter 2 and Chapter 4 source-load matching from ideal DC-only contexts into mixed AC/DC compatibility contexts
- Formulas shown:
  - conceptual focus
- Components used:
  - DC source
  - AC source
  - DC load
  - AC load
  - abstract conversion-stage block
- Prebuilt amount:
  - prebuilt conceptual diagrams and simple simulation setups
- Learner actions available:
  - inspect
  - compare source-load combinations
- Current-flow overlay:
  - available when instructionally relevant
- Hint style:
  - concept-first explanation
- Completion condition:
  - learner identifies why conversion is needed in guided examples and completes challenge set
- Challenge examples:
  1. identify when source and load types do not match
  2. choose when a conversion stage is needed
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - abstract DC/AC conversion block available in sandbox
- Theory page additions:
  - Why convert between DC and AC?
  - canonical thread reference: see `docs/curriculum-progression-qa-checklist.md` -> "Source-load matching progression thread map (canonical)"
  - Extending source-load matching from Chapters 2 and 4 into AC/DC systems
- In-lesson theory check:
  - source-load mismatch reasoning
- Standalone quiz topics unlocked:
  - conversion-need basics

---

### Lesson 3.2: DC to AC Conversion

- Stage label: Late Intermediate
- Prerequisites:
  - Lesson 3.1
- Main goal: Learner understands the conceptual role of a DC-to-AC conversion stage.
- Concepts introduced:
  - DC-to-AC conversion
  - conversion block as part of the system
  - load may need a different source form than the original source provides
  - scope boundary note: the conversion block is intentionally abstract in this chapter; detailed inverter internals are deferred
- Formulas shown:
  - conceptual focus only
- Components used:
  - DC source
  - DC-to-AC conversion stage
  - AC load
- Prebuilt amount:
  - prebuilt and lightly scaffolded
- Learner actions available:
  - build or complete a conceptual system
  - run
  - inspect source/load compatibility
- Current-flow overlay:
  - available when instructionally relevant
- Hint style:
  - guided system explanation
- Completion condition:
  - learner correctly builds or identifies a DC-to-AC conversion path and completes challenge set
- Challenge examples:
  1. insert the conversion stage into the correct place
  2. identify why the AC load cannot be directly fed by the original DC source in the lesson scenario
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - DC-to-AC conversion stage fully usable in supported sandbox scenarios
- Theory page additions:
  - DC-to-AC conversion at an introductory level
  - Why the DC-to-AC stage is treated as a conceptual black box at this level
- In-lesson theory check:
  - conversion-path reasoning
- Standalone quiz topics unlocked:
  - DC-to-AC basics

---

### Lesson 3.3: AC to DC Conversion

- Stage label: Late Intermediate
- Prerequisites:
  - Lesson 3.2
- Main goal: Learner understands the conceptual role of an AC-to-DC conversion stage.
- Concepts introduced:
  - AC-to-DC conversion
  - some loads require DC even when the available source is AC
- Formulas shown:
  - conceptual focus only
- Components used:
  - AC source
  - AC-to-DC conversion stage
  - DC load
- Prebuilt amount:
  - prebuilt and lightly scaffolded
- Learner actions available:
  - complete system
  - inspect
  - run
- Current-flow overlay:
  - available
- Hint style:
  - guided system explanation
- Completion condition:
  - learner correctly builds or identifies an AC-to-DC conversion path and completes challenge set
- Challenge examples:
  1. place the conversion stage correctly
  2. identify why the DC load needs conversion before connection
- Challenge type: `choose`, `drag-place`
- Sandbox unlocks after lesson:
  - AC-to-DC conversion stage available in supported sandbox scenarios
- Theory page additions:
  - AC-to-DC conversion at an introductory level
- In-lesson theory check:
  - identify when AC-to-DC conversion is needed
- Standalone quiz topics unlocked:
  - AC-to-DC basics

---

## Unit 4: Modern Mixed-System Example

### Unit metadata

- Unit title: Modern Mixed-System Example
- Stage label: Late Intermediate
- Unit goal: Learner analyzes a practical conceptual example involving both DC and AC stages.
- Explicit prerequisites:
  - Unit 3 complete

---

### Lesson 4.1: A DC Solar Source Feeding an AC Load

- Stage label: Late Intermediate
- Prerequisites:
  - Lesson 3.3
- Main goal: Learner works through the modern example of a DC source such as a solar panel or battery system feeding an AC load through a conversion stage.
- Concepts introduced:
  - modern systems can include multiple source/load domains
  - DC-to-AC conversion allows a DC system to serve an AC load
  - the overall system must be understood as multiple connected stages
- Formulas shown:
  - conceptual focus
  - prior source/load reasoning remains available
- Components used:
  - DC source representing a solar-like source
  - DC-to-AC conversion stage
  - AC load
- Prebuilt amount:
  - partly prebuilt, with a clear reference example available
- Learner actions available:
  - replicate or complete the system
  - run it
  - inspect the source stage and load stage
- Current-flow overlay:
  - available when instructionally relevant
- Hint style:
  - system-level explanation
- Completion condition:
  - learner correctly constructs or identifies the needed conversion path and completes challenge set
- Challenge examples:
  1. complete the system so the AC load can be powered from the DC source
  2. identify why the conversion stage is necessary in this example
- Challenge type: `build`, `choose`
- Sandbox unlocks after lesson:
  - solar-like DC source example prompt available in sandbox
- Theory page additions:
  - DC source to AC load example
- In-lesson theory check:
  - identify source, converter, and load roles
- Standalone quiz topics unlocked:
  - modern DC-to-AC system basics

---

### Lesson 4.2: Compare Direct Connection and Converted Connection

- Stage label: Late Intermediate
- Prerequisites:
  - Lesson 4.1
- Main goal: Learner compares a failed direct connection idea with a corrected converted connection system.
- Concepts introduced:
  - direct mismatch versus compatible system design
  - conversion is part of correct system design, not an arbitrary add-on
- Formulas shown:
  - conceptual focus
- Components used:
  - DC source
  - AC load
  - conversion stage
  - comparison direct-connection setup
- Prebuilt amount:
  - comparison systems prebuilt
- Learner actions available:
  - inspect
  - compare
  - identify correct system
- Current-flow overlay:
  - available when instructionally relevant
- Hint style:
  - comparison-driven explanation
- Completion condition:
  - learner identifies why the corrected system works conceptually while the direct mismatch does not
- Challenge examples:
  1. identify which system is viable
  2. identify the main conceptual error in the direct-connection system
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - no new components
- Theory page additions:
  - Matching source type to load type through conversion
- In-lesson theory check:
  - mismatch-versus-conversion reasoning
- Standalone quiz topics unlocked:
  - source-type matching with conversion

---

## Unit 5: Chapter Review Challenge

### Unit metadata

- Unit title: AC and Conversion Review
- Stage label: Late Intermediate
- Unit goal: Learner integrates AC basics, AC/DC comparison, and conversion-stage reasoning.
- Explicit prerequisites:
  - Unit 4 complete

---

### Lesson 5.1: AC Versus DC Review Challenge

- Stage label: Late Intermediate
- Prerequisites:
  - Lesson 4.2
- Main goal: Learner integrates the chapter’s AC/DC distinctions in a single challenge.
- Concepts introduced:
  - no major new concept
  - integration and fluency
- Formulas shown:
  - conceptual focus with prior references available
- Components used:
  - AC and DC sources
  - representative loads
  - one or more conversion stages
- Prebuilt amount:
  - lightly scaffolded
- Learner actions available:
  - inspect
  - build or complete systems
  - run
  - check solution
- Current-flow overlay:
  - available
- Hint style:
  - progressive and concise first
- Completion condition:
  - learner correctly classifies source/load types and uses or omits conversion appropriately
- Challenge examples:
  1. match the correct source path to the correct load type
  2. identify which system requires conversion and which does not
- Challenge type: `choose`
- Sandbox unlocks after lesson:
  - chapter-complete AC/DC comparison prompt available
- Theory page additions:
  - Chapter 7 review topic links
- In-lesson theory check:
  - mixed quick checks
- Standalone quiz topics unlocked:
  - Chapter 7 review quiz

---

### Lesson 5.2: Mixed-System Design Challenge

- Stage label: Late Intermediate
- Prerequisites:
  - Lesson 5.1
- Main goal: Learner solves a broader conceptual system-design challenge involving DC, AC, and conversion.
- Concepts introduced:
  - system design with multiple electrical domains
  - correct conversion path as the key design decision
- Formulas shown:
  - conceptual focus
- Components used:
  - DC source
  - AC source
  - DC load
  - AC load
  - DC-to-AC and AC-to-DC conversion stages where appropriate
- Prebuilt amount:
  - lightly scaffolded
- Learner actions available:
  - choose components
  - connect system blocks
  - run
  - check solution
- Current-flow overlay:
  - available when instructionally relevant
- Hint style:
  - issue-first
  - explanation on request
- Completion condition:
  - learner creates a correct mixed-source mixed-load conceptual system
- Challenge examples:
  1. design a system where the available source and required load type differ
  2. identify and fix a system with the wrong conversion stage
- Challenge type: `fix`, `choose`
- Sandbox unlocks after lesson:
  - no new component type
- Theory page additions:
  - Designing mixed AC/DC systems at an introductory level
  - Troubleshooting and investigation checkpoint: source-type mismatch and conversion-stage diagnosis
- In-lesson theory check:
  - conversion-stage selection reasoning
- Standalone quiz topics unlocked:
  - mixed AC/DC system design basics

---

## Chapter 7 theory review items

By the end of this chapter, the theory reference should include topic-group entries for:
- What is AC?
- AC versus DC
- Repeating AC behavior
- AC versus transient change
- Introductory AC wave view
- Comparing the same load under AC and DC
- Resistive loads under AC in the simplified model
- Introductory preview of reactive behavior under AC
- Why convert between DC and AC?
- DC-to-AC conversion at an introductory level
- AC-to-DC conversion at an introductory level
- DC source to AC load example
- Matching source type to load type through conversion
- Designing mixed AC/DC systems at an introductory level

Each entry should link back to the lesson or lessons where it was introduced.

## Chapter 7 standalone quizzes

Suggested quizzes unlocked by the end of the chapter:
1. AC versus DC basics
2. AC time-pattern basics
3. Introductory AC wave basics
4. AC/DC load comparison basics
5. Resistive AC basics
6. Introductory AC reactive preview basics
7. Conversion-need basics
8. DC-to-AC basics
9. AC-to-DC basics
10. Modern DC-to-AC system basics
11. Source-type matching with conversion
12. Mixed AC/DC system design basics
13. Chapter 7 review quiz

These are optional and replayable.

## Chapter 7 sandbox state by the end

By the end of Chapter 7, sandbox should support in required AC mode:
- AC source placement
- introductory AC waveform display
- simple comparison between AC and DC source behavior
- resistive-load AC experiments
- optional preview experiments with capacitors and inductors under AC when AC-reactive preview mode is enabled
- DC-to-AC conversion block
- AC-to-DC conversion block
- mixed AC/DC source-load scenarios

## Handoff to Chapter 8

Chapter 8 should include:
- diode directionality and orientation-dependent behavior in simple instructional circuits
- diode-based rectification as a concrete implementation of Chapter 7 conversion ideas
- transistor-based switching/control concepts as the next control-domain extension

Chapter 8 implementation should assume learners can already:
- distinguish AC from DC behavior in both qualitative and timeline views
- explain why conversion blocks are needed between mismatched source and load domains
- build simple AC/DC conceptual paths using DC-to-AC and AC-to-DC conversion blocks

Chapter 8 then concretizes those conversion ideas through diode-based rectification and introduces transistor-based control.
