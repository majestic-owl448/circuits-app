import type { QuizConfig } from '../../types/quiz.ts';

const quizzes: QuizConfig[] = [
  {
    id: 'quiz-ch4-role-of-measurement-in-circuit-reasoning',
    title: 'Role of Measurement in Circuit Reasoning',
    unlockedBy: 'lesson-ch4-1-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch4rm1',
        prompt: 'In this curriculum, what is the best order?',
        choices: [
          { id: 'ch4rm1-a', label: 'Measure first, reason later', isCorrect: false, explanation: 'Reasoning should come first.' },
          { id: 'ch4rm1-b', label: 'Predict first, then verify with measurement', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4rm1-c', label: 'Skip formulas if meters are available', isCorrect: false, explanation: 'Formulas remain essential.' },
        ],
      },
      {
        id: 'ch4rm2',
        prompt: 'What is a good use of a meter after a calculation?',
        choices: [
          { id: 'ch4rm2-a', label: 'Verify whether measured values match expected values', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4rm2-b', label: 'Replace all topology reasoning permanently', isCorrect: false, explanation: 'Topology reasoning remains fundamental.' },
          { id: 'ch4rm2-c', label: 'Avoid recording evidence', isCorrect: false, explanation: 'Evidence is the point of measurement.' },
        ],
      },
      {
        id: 'ch4rm3',
        prompt: 'If measured and predicted values disagree, best next step is to:',
        choices: [
          { id: 'ch4rm3-a', label: 'Ignore measurement and submit', isCorrect: false, explanation: 'Mismatch should be investigated.' },
          { id: 'ch4rm3-b', label: 'Recheck assumptions, setup, and targets', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4rm3-c', label: 'Delete formulas from workflow', isCorrect: false, explanation: 'Formulas still guide reasoning.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch4-voltmeter-basics',
    title: 'Voltmeter Basics',
    unlockedBy: 'lesson-ch4-1-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch4vb1',
        prompt: 'What does a voltmeter measure?',
        choices: [
          { id: 'ch4vb1-a', label: 'Current through a branch', isCorrect: false, explanation: 'That is ammeter behavior.' },
          { id: 'ch4vb1-b', label: 'Voltage difference across two points', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4vb1-c', label: 'Equivalent resistance directly in all cases', isCorrect: false, explanation: 'Not voltmeter behavior.' },
        ],
      },
      {
        id: 'ch4vb2',
        prompt: 'Where is a voltmeter conceptually placed?',
        choices: [
          { id: 'ch4vb2-a', label: 'Across nodes or component terminals', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4vb2-b', label: 'Only in series with current path', isCorrect: false, explanation: 'That is not voltmeter placement.' },
          { id: 'ch4vb2-c', label: 'Only at battery terminals', isCorrect: false, explanation: 'It can be used across many targets.' },
        ],
      },
      {
        id: 'ch4vb3',
        prompt: 'A voltmeter is most useful for:',
        choices: [
          { id: 'ch4vb3-a', label: 'Checking potential differences against predictions', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4vb3-b', label: 'Directly measuring branch current', isCorrect: false, explanation: 'That is an ammeter task.' },
          { id: 'ch4vb3-c', label: 'Only proving a circuit is closed', isCorrect: false, explanation: 'Circuit closure is not its only use.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch4-voltage-verification-with-a-voltmeter',
    title: 'Voltage Verification With a Voltmeter',
    unlockedBy: 'lesson-ch4-1-3',
    passingScore: 60,
    questions: [
      {
        id: 'ch4vv1',
        prompt: 'A measured voltage matches prediction. Best conclusion?',
        choices: [
          { id: 'ch4vv1-a', label: 'The model is supported for this case', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4vv1-b', label: 'All future measurements are unnecessary', isCorrect: false, explanation: 'Verification is still useful across cases.' },
          { id: 'ch4vv1-c', label: 'Formulas are obsolete', isCorrect: false, explanation: 'Formulas are still core tools.' },
        ],
      },
      {
        id: 'ch4vv2',
        prompt: 'Prediction-first verification helps because it:',
        choices: [
          { id: 'ch4vv2-a', label: 'Makes conclusions testable', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4vv2-b', label: 'Eliminates the need for units', isCorrect: false, explanation: 'Units are always required.' },
          { id: 'ch4vv2-c', label: 'Guarantees all circuits are correct', isCorrect: false, explanation: 'It supports confidence but does not guarantee all cases.' },
        ],
      },
      {
        id: 'ch4vv3',
        prompt: 'If measured voltage is very different from prediction, you should:',
        choices: [
          { id: 'ch4vv3-a', label: 'Investigate assumptions and measurement target', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4vv3-b', label: 'Always trust prediction over measurement', isCorrect: false, explanation: 'Mismatch needs investigation, not blind trust.' },
          { id: 'ch4vv3-c', label: 'Skip to next lesson', isCorrect: false, explanation: 'Resolve contradiction first.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch4-ammeter-basics',
    title: 'Ammeter Basics',
    unlockedBy: 'lesson-ch4-2-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch4ab1',
        prompt: 'Where is an ammeter used correctly?',
        choices: [
          { id: 'ch4ab1-a', label: 'Inline with the measured branch', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4ab1-b', label: 'Across a component terminal pair', isCorrect: false, explanation: 'That is voltmeter style.' },
          { id: 'ch4ab1-c', label: 'Only at the battery terminals', isCorrect: false, explanation: 'Current can be measured in many branch locations.' },
        ],
      },
      {
        id: 'ch4ab2',
        prompt: 'What quantity does an ammeter report?',
        choices: [
          { id: 'ch4ab2-a', label: 'Current (A)', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4ab2-b', label: 'Voltage (V)', isCorrect: false, explanation: 'That is voltmeter output.' },
          { id: 'ch4ab2-c', label: 'Resistance (ohm)', isCorrect: false, explanation: 'That is ohmmeter output in valid contexts.' },
        ],
      },
      {
        id: 'ch4ab3',
        prompt: 'Ammeter readings are most useful for:',
        choices: [
          { id: 'ch4ab3-a', label: 'Verifying branch current predictions', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4ab3-b', label: 'Directly reading equivalent resistance', isCorrect: false, explanation: 'Not an ammeter function.' },
          { id: 'ch4ab3-c', label: 'Replacing all calculations', isCorrect: false, explanation: 'Calculations remain essential.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch4-current-verification-with-measurement',
    title: 'Current Verification With Measurement',
    unlockedBy: 'lesson-ch4-2-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch4cv1',
        prompt: 'In a parallel section, branch currents are best described as:',
        choices: [
          { id: 'ch4cv1-a', label: 'Always equal regardless of branch resistance', isCorrect: false, explanation: 'Branch resistance affects branch current.' },
          { id: 'ch4cv1-b', label: 'Potentially different while total current is conserved', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4cv1-c', label: 'Impossible to measure', isCorrect: false, explanation: 'They are measurable with an ammeter.' },
        ],
      },
      {
        id: 'ch4cv2',
        prompt: 'Measurement in this lesson is intended to:',
        choices: [
          { id: 'ch4cv2-a', label: 'Test expected current relationships', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4cv2-b', label: 'Replace topology analysis', isCorrect: false, explanation: 'Topology remains necessary.' },
          { id: 'ch4cv2-c', label: 'Avoid evidence collection', isCorrect: false, explanation: 'Evidence is central.' },
        ],
      },
      {
        id: 'ch4cv3',
        prompt: 'If branch current readings conflict with expectation, you should:',
        choices: [
          { id: 'ch4cv3-a', label: 'Recheck branch targets and assumptions', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4cv3-b', label: 'Discard all readings', isCorrect: false, explanation: 'Readings should be investigated, not discarded.' },
          { id: 'ch4cv3-c', label: 'Assume all branches must be equal', isCorrect: false, explanation: 'That is not always true.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch4-ohmmeter-basics',
    title: 'Ohmmeter Basics',
    unlockedBy: 'lesson-ch4-2-3',
    passingScore: 60,
    questions: [
      {
        id: 'ch4ob1',
        prompt: 'What is the key validity condition for ohmmeter use here?',
        choices: [
          { id: 'ch4ob1-a', label: 'Circuit must be de-energized in the connected component', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4ob1-b', label: 'Current must be above 1 A', isCorrect: false, explanation: 'Current threshold is not the rule.' },
          { id: 'ch4ob1-c', label: 'Only pure series circuits are allowed', isCorrect: false, explanation: 'Topology type is not the validity rule.' },
        ],
      },
      {
        id: 'ch4ob2',
        prompt: 'What does an ohmmeter report?',
        choices: [
          { id: 'ch4ob2-a', label: 'Resistance', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4ob2-b', label: 'Voltage difference only', isCorrect: false, explanation: 'That is voltmeter behavior.' },
          { id: 'ch4ob2-c', label: 'Current only', isCorrect: false, explanation: 'That is ammeter behavior.' },
        ],
      },
      {
        id: 'ch4ob3',
        prompt: 'If the app says the circuit is energized, you should:',
        choices: [
          { id: 'ch4ob3-a', label: 'Use the ohmmeter anyway', isCorrect: false, explanation: 'That is invalid in this model.' },
          { id: 'ch4ob3-b', label: 'De-energize context before measuring resistance', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4ob3-c', label: 'Convert to a voltmeter reading instead of fixing state', isCorrect: false, explanation: 'Validity still depends on proper setup.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch4-mixed-circuit-structure-basics',
    title: 'Mixed-Circuit Structure Basics',
    unlockedBy: 'lesson-ch4-3-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch4ms1',
        prompt: 'What defines a mixed circuit?',
        choices: [
          { id: 'ch4ms1-a', label: 'Only one path from source to load', isCorrect: false, explanation: 'That is pure series.' },
          { id: 'ch4ms1-b', label: 'Both series and parallel substructures', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4ms1-c', label: 'A circuit that only uses meters', isCorrect: false, explanation: 'Meter usage does not define topology.' },
        ],
      },
      {
        id: 'ch4ms2',
        prompt: 'Best first step in mixed-circuit analysis is:',
        choices: [
          { id: 'ch4ms2-a', label: 'Identify series and parallel substructures', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4ms2-b', label: 'Guess final current immediately', isCorrect: false, explanation: 'Topology should come first.' },
          { id: 'ch4ms2-c', label: 'Ignore branch structure', isCorrect: false, explanation: 'Branch structure is central.' },
        ],
      },
      {
        id: 'ch4ms3',
        prompt: 'A mixed circuit can be described as:',
        choices: [
          { id: 'ch4ms3-a', label: 'One network with combined one-path and branching behavior', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4ms3-b', label: 'A circuit with no closed loop requirement', isCorrect: false, explanation: 'Closed-loop validity still matters.' },
          { id: 'ch4ms3-c', label: 'A circuit where laws no longer apply', isCorrect: false, explanation: 'Laws still apply.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch4-mixed-circuit-reduction-basics',
    title: 'Mixed-Circuit Reduction Basics',
    unlockedBy: 'lesson-ch4-3-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch4mr1',
        prompt: 'Best reduction approach in a mixed circuit?',
        choices: [
          { id: 'ch4mr1-a', label: 'Reduce identifiable substructures step by step', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4mr1-b', label: 'Assume all parts are series', isCorrect: false, explanation: 'That ignores branches.' },
          { id: 'ch4mr1-c', label: 'Skip intermediate equivalents', isCorrect: false, explanation: 'Intermediate values are critical.' },
        ],
      },
      {
        id: 'ch4mr2',
        prompt: 'Why track intermediate equivalent values?',
        choices: [
          { id: 'ch4mr2-a', label: 'They are required to reach correct final values', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4mr2-b', label: 'They are optional decoration only', isCorrect: false, explanation: 'They are functional, not decorative.' },
          { id: 'ch4mr2-c', label: 'They apply only to AC topics', isCorrect: false, explanation: 'They apply in DC mixed-circuit work too.' },
        ],
      },
      {
        id: 'ch4mr3',
        prompt: 'After reducing a parallel block, next step is usually to:',
        choices: [
          { id: 'ch4mr3-a', label: 'Combine with adjacent series segments as appropriate', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4mr3-b', label: 'Restart from original circuit each time', isCorrect: false, explanation: 'Proceed from reduced equivalent.' },
          { id: 'ch4mr3-c', label: 'Ignore units in calculations', isCorrect: false, explanation: 'Units should always be tracked.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch4-mixed-circuit-calculation-basics',
    title: 'Mixed-Circuit Calculation Basics',
    unlockedBy: 'lesson-ch4-3-3',
    passingScore: 60,
    questions: [
      {
        id: 'ch4mc1',
        prompt: 'For 12 V and 40 ohm equivalent resistance, what is total current?',
        choices: [
          { id: 'ch4mc1-a', label: '0.3 A', isCorrect: true, explanation: 'Correct. I = 12 / 40.' },
          { id: 'ch4mc1-b', label: '4.8 A', isCorrect: false, explanation: 'That is V x R, not V / R.' },
          { id: 'ch4mc1-c', label: '52 A', isCorrect: false, explanation: 'Incorrect use of formulas.' },
        ],
      },
      {
        id: 'ch4mc2',
        prompt: 'Why calculate expected values before measuring?',
        choices: [
          { id: 'ch4mc2-a', label: 'To create testable predictions', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4mc2-b', label: 'To avoid all meter usage', isCorrect: false, explanation: 'Meters are still used for verification.' },
          { id: 'ch4mc2-c', label: 'Because measurements are invalid', isCorrect: false, explanation: 'Measurements are valid verification tools.' },
        ],
      },
      {
        id: 'ch4mc3',
        prompt: 'A complete mixed-circuit analysis should include:',
        choices: [
          { id: 'ch4mc3-a', label: 'Intermediate and final values with units', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4mc3-b', label: 'Only one final number without context', isCorrect: false, explanation: 'Context and intermediate reasoning are needed.' },
          { id: 'ch4mc3-c', label: 'No branch-level interpretation', isCorrect: false, explanation: 'Branch interpretation matters in mixed circuits.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch4-mixed-circuit-inspection-basics',
    title: 'Mixed-Circuit Inspection Basics',
    unlockedBy: 'lesson-ch4-3-4',
    passingScore: 60,
    questions: [
      {
        id: 'ch4mi1',
        prompt: 'If prediction and measurement disagree, what is best?',
        choices: [
          { id: 'ch4mi1-a', label: 'Treat mismatch as evidence to recheck assumptions', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4mi1-b', label: 'Ignore measurement and continue', isCorrect: false, explanation: 'Mismatch is valuable evidence.' },
          { id: 'ch4mi1-c', label: 'Delete all formulas from analysis', isCorrect: false, explanation: 'Formulas remain essential.' },
        ],
      },
      {
        id: 'ch4mi2',
        prompt: 'In mixed-circuit troubleshooting, a useful first check is:',
        choices: [
          { id: 'ch4mi2-a', label: 'Meter target points and reduction assumptions', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4mi2-b', label: 'Random rewiring', isCorrect: false, explanation: 'Use evidence-guided checks first.' },
          { id: 'ch4mi2-c', label: 'Skipping branch-level review', isCorrect: false, explanation: 'Branch-level behavior is important.' },
        ],
      },
      {
        id: 'ch4mi3',
        prompt: 'A strong inspection workflow combines:',
        choices: [
          { id: 'ch4mi3-a', label: 'Prediction, measurement, and targeted debugging', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4mi3-b', label: 'Measurement only', isCorrect: false, explanation: 'Prediction and interpretation are required too.' },
          { id: 'ch4mi3-c', label: 'Guessing only', isCorrect: false, explanation: 'Evidence-based process is expected.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch4-source-load-matching-basics',
    title: 'Source-Load Matching Basics',
    unlockedBy: 'lesson-ch4-4-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch4sl1',
        prompt: 'A valid source-load match means:',
        choices: [
          { id: 'ch4sl1-a', label: 'Target component values remain in required range', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4sl1-b', label: 'Maximum current regardless of limits', isCorrect: false, explanation: 'Can violate constraints.' },
          { id: 'ch4sl1-c', label: 'Any closed circuit', isCorrect: false, explanation: 'Closed loop alone is insufficient.' },
        ],
      },
      {
        id: 'ch4sl2',
        prompt: 'Why are target ranges important?',
        choices: [
          { id: 'ch4sl2-a', label: 'They define acceptable operating behavior', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4sl2-b', label: 'They are optional if the bulb lights', isCorrect: false, explanation: 'Lighting alone is not enough.' },
          { id: 'ch4sl2-c', label: 'They replace all calculations', isCorrect: false, explanation: 'Calculations still matter.' },
        ],
      },
      {
        id: 'ch4sl3',
        prompt: 'If target current is below range, likely direction is to:',
        choices: [
          { id: 'ch4sl3-a', label: 'Reduce excessive series resistance', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4sl3-b', label: 'Increase resistance further', isCorrect: false, explanation: 'That usually lowers current more.' },
          { id: 'ch4sl3-c', label: 'Ignore the range requirement', isCorrect: false, explanation: 'Range compliance is required.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch4-debugging-strategy-basics',
    title: 'Debugging Strategy Basics',
    unlockedBy: 'lesson-ch4-4-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch4ds1',
        prompt: 'Best first debugging move?',
        choices: [
          { id: 'ch4ds1-a', label: 'Identify the primary blocking cause', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4ds1-b', label: 'Change every component at once', isCorrect: false, explanation: 'That obscures cause-effect.' },
          { id: 'ch4ds1-c', label: 'Guess without evidence', isCorrect: false, explanation: 'Debugging should be evidence-backed.' },
        ],
      },
      {
        id: 'ch4ds2',
        prompt: 'A diagnosis should be based on:',
        choices: [
          { id: 'ch4ds2-a', label: 'Observed evidence signals', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4ds2-b', label: 'Random intuition only', isCorrect: false, explanation: 'Evidence is required.' },
          { id: 'ch4ds2-c', label: 'Ignoring meter data', isCorrect: false, explanation: 'Meter data is key evidence.' },
        ],
      },
      {
        id: 'ch4ds3',
        prompt: 'After a fix, next step should be to:',
        choices: [
          { id: 'ch4ds3-a', label: 'Recheck performance against target range', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4ds3-b', label: 'Skip verification', isCorrect: false, explanation: 'Verification is required.' },
          { id: 'ch4ds3-c', label: 'Assume issue is solved permanently', isCorrect: false, explanation: 'You should verify current state.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch4-kcl-basics',
    title: 'KCL Basics',
    unlockedBy: 'lesson-ch4-5-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch4kcl1',
        prompt: 'KCL states that at a junction:',
        choices: [
          { id: 'ch4kcl1-a', label: 'Sum of incoming current equals sum of outgoing current', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4kcl1-b', label: 'Voltage is always zero', isCorrect: false, explanation: 'That is not KCL.' },
          { id: 'ch4kcl1-c', label: 'Resistance is conserved', isCorrect: false, explanation: 'Not a KCL statement.' },
        ],
      },
      {
        id: 'ch4kcl2',
        prompt: 'If two branch currents leaving a node are 0.2 A and 0.3 A, incoming current is:',
        choices: [
          { id: 'ch4kcl2-a', label: '0.5 A', isCorrect: true, explanation: 'Correct. Outgoing total is 0.5 A.' },
          { id: 'ch4kcl2-b', label: '0.1 A', isCorrect: false, explanation: 'That does not satisfy conservation.' },
          { id: 'ch4kcl2-c', label: '0.6 A', isCorrect: false, explanation: 'That exceeds required outgoing sum.' },
        ],
      },
      {
        id: 'ch4kcl3',
        prompt: 'KCL is primarily a law about conservation of:',
        choices: [
          { id: 'ch4kcl3-a', label: 'Current at a node', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4kcl3-b', label: 'Voltage around a loop', isCorrect: false, explanation: 'That is KVL.' },
          { id: 'ch4kcl3-c', label: 'Resistance across a branch', isCorrect: false, explanation: 'Not KCL.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch4-kvl-basics',
    title: 'KVL Basics',
    unlockedBy: 'lesson-ch4-5-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch4kvl1',
        prompt: 'KVL states that around a closed loop:',
        choices: [
          { id: 'ch4kvl1-a', label: 'Current is constant in all branches', isCorrect: false, explanation: 'Branch current can differ in parallel.' },
          { id: 'ch4kvl1-b', label: 'Voltage rises and drops balance to zero', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4kvl1-c', label: 'Power is always maximized', isCorrect: false, explanation: 'Not a KVL statement.' },
        ],
      },
      {
        id: 'ch4kvl2',
        prompt: 'In a 9 V loop with one 4 V drop, remaining drop is:',
        choices: [
          { id: 'ch4kvl2-a', label: '5 V', isCorrect: true, explanation: 'Correct. 9 = 4 + 5.' },
          { id: 'ch4kvl2-b', label: '13 V', isCorrect: false, explanation: 'That does not satisfy loop balance.' },
          { id: 'ch4kvl2-c', label: '2.25 V', isCorrect: false, explanation: 'Incorrect for this loop equation.' },
        ],
      },
      {
        id: 'ch4kvl3',
        prompt: 'KVL is most directly applied when analyzing:',
        choices: [
          { id: 'ch4kvl3-a', label: 'Voltage relationships around closed loops', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4kvl3-b', label: 'Only current splitting at junctions', isCorrect: false, explanation: 'That is KCL focus.' },
          { id: 'ch4kvl3-c', label: 'Only component naming', isCorrect: false, explanation: 'KVL is a quantitative relationship.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch4-chapter-4-review-quiz',
    title: 'Chapter 4 Review Quiz',
    unlockedBy: 'lesson-ch4-5-3',
    passingScore: 60,
    questions: [
      {
        id: 'ch4rev1',
        prompt: 'Which approach best represents Chapter 4 fluency?',
        choices: [
          { id: 'ch4rev1-a', label: 'Use named laws, manual reasoning, and measurement evidence together', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4rev1-b', label: 'Rely only on meter readings without model checks', isCorrect: false, explanation: 'Reasoning and measurement should be integrated.' },
          { id: 'ch4rev1-c', label: 'Ignore target ranges if the circuit lights up', isCorrect: false, explanation: 'Range constraints are central to matching tasks.' },
        ],
      },
      {
        id: 'ch4rev2',
        prompt: 'A strong Chapter 4 workflow is:',
        choices: [
          { id: 'ch4rev2-a', label: 'Predict, measure, diagnose, refine', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4rev2-b', label: 'Measure only, no model', isCorrect: false, explanation: 'Model-based reasoning is required.' },
          { id: 'ch4rev2-c', label: 'Guess and proceed', isCorrect: false, explanation: 'Evidence-based process is expected.' },
        ],
      },
      {
        id: 'ch4rev3',
        prompt: 'Which pair correctly matches law and context?',
        choices: [
          { id: 'ch4rev3-a', label: 'KCL for node current balance; KVL for loop voltage balance', isCorrect: true, explanation: 'Correct.' },
          { id: 'ch4rev3-b', label: 'KCL for loop voltage; KVL for node current', isCorrect: false, explanation: 'Those are reversed.' },
          { id: 'ch4rev3-c', label: 'Both laws are only for AC circuits', isCorrect: false, explanation: 'They are used in DC analysis too.' },
        ],
      },
    ],
  },
];

export default quizzes;
