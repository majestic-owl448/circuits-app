# Chapters 4-10 Lesson and Quiz ID Mapping Tables

This file satisfies the chapter-start ID mapping-table requirement from `docs/future-chapters-implementation-readiness.md`.

Mapping rules used:

- Lesson IDs follow `lesson-chX-Y-Z` (chapter/unit/lesson).
- Quiz IDs follow `quiz-chX-topic-name` with stable kebab-case topic slugs.
- Quiz IDs below are deterministic planning IDs mapped to each lesson's "Standalone quiz topics unlocked" line in the chapter plans.

## Chapter 4

| Lesson ID | Lesson title | Planned standalone quiz ID |
|---|---|---|
| `lesson-ch4-1-1` | Why Measure If You Can Already Calculate? | `quiz-ch4-role-of-measurement-in-circuit-reasoning` |
| `lesson-ch4-1-2` | Meet the Voltmeter | `quiz-ch4-voltmeter-basics` |
| `lesson-ch4-1-3` | Use the Voltmeter to Verify a Known Circuit | `quiz-ch4-voltage-verification-with-a-voltmeter` |
| `lesson-ch4-2-1` | Meet the Ammeter | `quiz-ch4-ammeter-basics` |
| `lesson-ch4-2-2` | Verify Series and Parallel Current With the Ammeter | `quiz-ch4-current-verification-with-measurement` |
| `lesson-ch4-2-3` | Meet the Ohmmeter | `quiz-ch4-ohmmeter-basics` |
| `lesson-ch4-3-1` | More Than Pure Series or Pure Parallel | `quiz-ch4-mixed-circuit-structure-basics` |
| `lesson-ch4-3-2` | Reduce the Circuit Step by Step | `quiz-ch4-mixed-circuit-reduction-basics` |
| `lesson-ch4-3-3` | Calculate the Full Mixed Circuit | `quiz-ch4-mixed-circuit-calculation-basics` |
| `lesson-ch4-3-4` | Use Meters to Check a Mixed Circuit | `quiz-ch4-mixed-circuit-inspection-basics` |
| `lesson-ch4-4-1` | Matching a Source to a Target Load | `quiz-ch4-source-load-matching-basics` |
| `lesson-ch4-4-2` | Debug the Failing Design | `quiz-ch4-debugging-strategy-basics` |
| `lesson-ch4-5-1` | Kirchhoff’s Current Law | `quiz-ch4-kcl-basics` |
| `lesson-ch4-5-2` | Kirchhoff’s Voltage Law | `quiz-ch4-kvl-basics` |
| `lesson-ch4-5-3` | Chapter Review Challenge | `quiz-ch4-chapter-4-review-quiz` |

## Chapter 5

| Lesson ID | Lesson title | Planned standalone quiz ID |
|---|---|---|
| `lesson-ch5-1-1` | Why Realistic Behavior Matters | `quiz-ch5-ideal-versus-non-ideal-basics` |
| `lesson-ch5-1-2` | Wider Acceptable Ranges | `quiz-ch5-target-range-reasoning-in-non-ideal-contexts` |
| `lesson-ch5-2-1` | The Source Is Not Perfect | `quiz-ch5-internal-resistance-basics` |
| `lesson-ch5-2-2` | Voltage Drop Under Load | `quiz-ch5-source-drop-basics` |
| `lesson-ch5-2-3` | Diagnose Source Behavior With Meters | `quiz-ch5-meter-based-source-diagnosis` |
| `lesson-ch5-2-4` | Matching the Source to the Load With Internal Resistance | `quiz-ch5-source-internal-resistance-and-design-reasoning` |
| `lesson-ch5-3-1` | Wires Are Not Always Perfect | `quiz-ch5-wire-resistance-basics` |
| `lesson-ch5-3-2` | Voltage Drop Along the Path | `quiz-ch5-voltage-drop-along-wires` |
| `lesson-ch5-3-3` | Design Around Wire Losses | `quiz-ch5-wire-loss-design-reasoning` |
| `lesson-ch5-4-1` | Heat as a Circuit Consequence | `quiz-ch5-heating-basics` |
| `lesson-ch5-4-2` | Burnout and Operating Limits | `quiz-ch5-burnout-and-limits-basics` |
| `lesson-ch5-4-3` | Make It Work Without Breaking It | `quiz-ch5-operating-limit-design-reasoning` |
| `lesson-ch5-5-1` | The Same Label Does Not Always Mean the Same Exact Value | `quiz-ch5-tolerance-basics` |
| `lesson-ch5-5-2` | Design for Tolerance, Not Just Nominal Values | `quiz-ch5-tolerance-aware-design-basics` |
| `lesson-ch5-5-3` | Non-Ideal Review Challenge | `quiz-ch5-chapter-5-review-quiz` |

## Chapter 6

| Lesson ID | Lesson title | Planned standalone quiz ID |
|---|---|---|
| `lesson-ch6-1-1` | Not Every Circuit Settles Instantly | `quiz-ch6-transient-versus-steady-state-basics` |
| `lesson-ch6-1-2` | Initial State Versus Final State | `quiz-ch6-initial-state-versus-final-state-reasoning` |
| `lesson-ch6-2-1` | Meet the Capacitor | `quiz-ch6-capacitor-basics` |
| `lesson-ch6-2-2` | Charging Behavior | `quiz-ch6-capacitor-charging-basics` |
| `lesson-ch6-2-3` | Steady State in a Simple Capacitor Circuit | `quiz-ch6-capacitor-steady-state-basics` |
| `lesson-ch6-2-4` | Discharging Behavior | `quiz-ch6-capacitor-discharge-basics` |
| `lesson-ch6-3-1` | Meet the Inductor | `quiz-ch6-inductor-basics` |
| `lesson-ch6-3-2` | Current Change in an Inductor Circuit | `quiz-ch6-inductor-current-basics` |
| `lesson-ch6-3-3` | Steady State in a Simple Inductor Circuit | `quiz-ch6-inductor-steady-state-basics` |
| `lesson-ch6-3-4` | Inductor Energy Release | `quiz-ch6-inductor-energy-release-basics` |
| `lesson-ch6-4-1` | Two Different Kinds of Time-Dependent Components | `quiz-ch6-capacitor-versus-inductor-comparison-basics` |
| `lesson-ch6-4-2` | Use the Right Component for the Right Behavior | `quiz-ch6-time-dependent-component-choice-basics` |
| `lesson-ch6-5-1` | Design for the Initial Response | `quiz-ch6-initial-response-design-basics` |
| `lesson-ch6-5-2` | Design for the Later Response | `quiz-ch6-later-response-design-basics` |
| `lesson-ch6-5-3` | Chapter Review Challenge | `quiz-ch6-chapter-6-review-quiz` |

## Chapter 7

| Lesson ID | Lesson title | Planned standalone quiz ID |
|---|---|---|
| `lesson-ch7-1-1` | Direct Current Versus Alternating Current | `quiz-ch7-ac-versus-dc-basics` |
| `lesson-ch7-1-2` | AC Changes Over Time in a Different Way | `quiz-ch7-ac-time-pattern-basics` |
| `lesson-ch7-1-3` | A First Introductory AC Wave View | `quiz-ch7-introductory-ac-wave-basics` |
| `lesson-ch7-2-1` | The Same Load, Different Source Type | `quiz-ch7-ac-dc-load-comparison-basics` |
| `lesson-ch7-2-2` | Resistive Loads Under AC | `quiz-ch7-resistive-ac-basics` |
| `lesson-ch7-2-3` | Time-Dependent Components Under AC Preview | `quiz-ch7-introductory-ac-reactive-preview-basics` |
| `lesson-ch7-3-1` | Why Convert Between DC and AC? | `quiz-ch7-conversion-need-basics` |
| `lesson-ch7-3-2` | DC to AC Conversion | `quiz-ch7-dc-to-ac-basics` |
| `lesson-ch7-3-3` | AC to DC Conversion | `quiz-ch7-ac-to-dc-basics` |
| `lesson-ch7-4-1` | A DC Solar Source Feeding an AC Load | `quiz-ch7-modern-dc-to-ac-system-basics` |
| `lesson-ch7-4-2` | Compare Direct Connection and Converted Connection | `quiz-ch7-source-type-matching-with-conversion` |
| `lesson-ch7-5-1` | AC Versus DC Review Challenge | `quiz-ch7-chapter-7-review-quiz` |
| `lesson-ch7-5-2` | Mixed-System Design Challenge | `quiz-ch7-mixed-ac-dc-system-design-basics` |

## Chapter 8

| Lesson ID | Lesson title | Planned standalone quiz ID |
|---|---|---|
| `lesson-ch8-1-1` | Meet the Diode | `quiz-ch8-diode-basics` |
| `lesson-ch8-1-2` | Orientation Matters | `quiz-ch8-diode-orientation-basics` |
| `lesson-ch8-1-3` | Diodes in a DC Circuit | `quiz-ch8-diode-use-in-simple-circuits` |
| `lesson-ch8-2-1` | Why a Diode Matters for AC | `quiz-ch8-diode-and-ac-basics` |
| `lesson-ch8-2-2` | Introductory Rectification | `quiz-ch8-rectification-basics` |
| `lesson-ch8-2-3` | Compare Unrectified and Rectified Output | `quiz-ch8-rectified-versus-unrectified-basics` |
| `lesson-ch8-3-1` | Meet the Transistor | `quiz-ch8-transistor-basics` |
| `lesson-ch8-3-2` | A Transistor as a Switch | `quiz-ch8-transistor-switch-basics` |
| `lesson-ch8-3-3` | Use a Small Control to Affect a Larger Path | `quiz-ch8-transistor-control-basics` |
| `lesson-ch8-4-1` | Diode or Transistor? | `quiz-ch8-component-choice-basics` |
| `lesson-ch8-4-2` | A Simple Control Circuit | `quiz-ch8-simple-control-circuit-basics` |
| `lesson-ch8-5-1` | Review Challenge | `quiz-ch8-chapter-8-review-quiz` |
| `lesson-ch8-5-2` | Larger Integration Challenge | `quiz-ch8-integrated-active-component-reasoning` |

## Chapter 9

| Lesson ID | Lesson title | Planned standalone quiz ID |
|---|---|---|
| `lesson-ch9-1-1` | A Circuit Can Represent a Condition | `quiz-ch9-input-output-state-basics` |
| `lesson-ch9-1-2` | One Input Can Control One Output | `quiz-ch9-single-input-control-basics` |
| `lesson-ch9-2-1` | Meet the NOT Gate | `quiz-ch9-not-gate-basics` |
| `lesson-ch9-2-2` | Meet the AND Gate | `quiz-ch9-and-gate-basics` |
| `lesson-ch9-2-3` | Meet the OR Gate | `quiz-ch9-or-gate-basics` |
| `lesson-ch9-2-4` | Truth Tables as a Tool for Understanding Gates | `quiz-ch9-truth-table-basics` |
| `lesson-ch9-2-5` | Compare NOT, AND, and OR Using Truth Tables | `quiz-ch9-basic-gate-comparison` |
| `lesson-ch9-3-1` | Meet NAND and NOR | `quiz-ch9-nand-and-nor-basics` |
| `lesson-ch9-3-2` | Meet XOR | `quiz-ch9-xor-basics` |
| `lesson-ch9-4-1` | Choose the Right Gate for the Rule | `quiz-ch9-gate-choice-basics` |
| `lesson-ch9-4-2` | Combine Two Gates | `quiz-ch9-multi-gate-basics` |
| `lesson-ch9-4-3` | Inputs, Outputs, and System Behavior | `quiz-ch9-small-logic-system-basics` |
| `lesson-ch9-5-1` | Review Challenge | `quiz-ch9-chapter-9-review-quiz` |
| `lesson-ch9-5-2` | Larger Integration Challenge | `quiz-ch9-integrated-digital-style-reasoning-basics` |

## Chapter 10

| Lesson ID | Lesson title | Planned standalone quiz ID |
|---|---|---|
| `lesson-ch10-1-1` | The Circuit Map So Far | `quiz-ch10-whole-curriculum-concept-map-review` |
| `lesson-ch10-1-2` | Classify the Problem Domain | `quiz-ch10-domain-classification-basics` |
| `lesson-ch10-1-3` | Choose the Right Reasoning First | `quiz-ch10-analysis-strategy-basics` |
| `lesson-ch10-2-1` | Find the First Real Problem | `quiz-ch10-mixed-domain-troubleshooting-basics` |
| `lesson-ch10-2-2` | Fix the Circuit Step by Step | `quiz-ch10-iterative-debugging-basics` |
| `lesson-ch10-3-1` | Ideal and Non-Ideal DC Capstone | `quiz-ch10-dc-capstone-review-basics` |
| `lesson-ch10-3-2` | Time-Dependent Capstone | `quiz-ch10-time-dependent-capstone-review-basics` |
| `lesson-ch10-3-3` | AC and Conversion Capstone | `quiz-ch10-ac-dc-capstone-review-basics` |
| `lesson-ch10-3-4` | Active Components and Logic Capstone | `quiz-ch10-active-components-capstone-review-basics` |
| `lesson-ch10-4-1` | Choose the Right Domain, Then Solve | `quiz-ch10-cross-domain-analysis-basics` |
| `lesson-ch10-4-2` | Multi-Stage System Challenge | `quiz-ch10-multi-stage-system-basics` |
| `lesson-ch10-5-1` | Final Mastery Challenge | `quiz-ch10-final-mastery-review-quiz` |
| `lesson-ch10-5-2` | Optional Mastery Review Quiz | `quiz-ch10-optional-mastery-review-quiz` |
