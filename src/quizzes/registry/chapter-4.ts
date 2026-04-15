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
    ],
  },
];

export default quizzes;
