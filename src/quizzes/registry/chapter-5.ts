import type { QuizConfig } from '../../types/quiz.ts';

const quizzes: QuizConfig[] = [
  {
    id: 'quiz-ch5-target-range',
    title: 'Target-Range Reasoning in Non-Ideal Contexts',
    unlockedBy: 'lesson-ch5-1-2',
    passingScore: 60,
    questions: [
      {
        id: 'ch5tr1',
        prompt: 'What does "operating range" mean in the context of non-ideal simulation?',
        choices: [
          { id: 'ch5tr1-a', label: 'The span of acceptable values within which a design is considered successful', isCorrect: true, explanation: 'Correct. An operating range defines what counts as good enough, not just a single exact target.' },
          { id: 'ch5tr1-b', label: 'The maximum voltage a component can handle before breaking', isCorrect: false, explanation: 'That describes an operating limit, not an operating range. A range is about the acceptable span of outcomes.' },
          { id: 'ch5tr1-c', label: 'The range of voltage settings available on a power supply', isCorrect: false, explanation: 'Operating range refers to acceptable simulation outcomes, not power-supply settings.' },
        ],
      },
      {
        id: 'ch5tr2',
        prompt: 'A circuit has an ideal current target of 2.4A. The non-ideal simulation produces 2.35A. The acceptable window is \u00b15% of the ideal value. Is 2.35A acceptable?',
        choices: [
          { id: 'ch5tr2-a', label: 'Yes \u2014 2.35A falls within the \u00b15% window of [2.28A, 2.52A]', isCorrect: true, explanation: 'Correct. \u00b15% of 2.4A gives [2.28A, 2.52A]. At 2.35A, the result is within range.' },
          { id: 'ch5tr2-b', label: 'No \u2014 the result differs from the ideal 2.4A so it fails', isCorrect: false, explanation: 'Non-ideal effects intentionally shift results slightly. What matters is whether the result falls within the acceptable range.' },
          { id: 'ch5tr2-c', label: 'No \u2014 only results above the ideal target are acceptable', isCorrect: false, explanation: 'Operating ranges extend in both directions from the target. Results slightly above or below the ideal can both be acceptable.' },
        ],
      },
      {
        id: 'ch5tr3',
        prompt: 'Why is range-based evaluation more appropriate than exact-value matching when non-ideal components are present?',
        choices: [
          { id: 'ch5tr3-a', label: 'Because non-ideal effects introduce realistic variation that would cause exact-value checks to reject working designs', isCorrect: true, explanation: 'Correct. A circuit may function correctly even if its output differs slightly from the ideal prediction due to internal resistance or other losses.' },
          { id: 'ch5tr3-b', label: 'Because non-ideal simulators are less accurate than ideal ones', isCorrect: false, explanation: 'Both models are deterministic. The difference is that non-ideal models include more realistic effects, not less accuracy.' },
          { id: 'ch5tr3-c', label: 'Because engineers always prefer approximate answers', isCorrect: false, explanation: 'Engineers use ranges to reflect acceptable performance windows, not out of preference for approximation.' },
        ],
      },
    ],
  },
  {
    id: 'quiz-ch5-ideal-non-ideal-basics',
    title: 'Ideal vs Non-Ideal Behavior',
    unlockedBy: 'lesson-ch5-1-1',
    passingScore: 60,
    questions: [
      {
        id: 'ch5ini1',
        prompt: 'Why do we use ideal models if real components are not perfectly ideal?',
        choices: [
          { id: 'ch5ini1-a', label: 'They are easier to calculate and provide a useful starting point', isCorrect: true, explanation: 'Correct. Ideal models simplify analysis so you can learn the fundamentals first.' },
          { id: 'ch5ini1-b', label: 'Real components are actually ideal in most cases', isCorrect: false, explanation: 'All real components have non-ideal effects, even if they are small.' },
          { id: 'ch5ini1-c', label: 'Ideal models produce more accurate simulations', isCorrect: false, explanation: 'Non-ideal models are more accurate; ideal models trade accuracy for simplicity.' },
        ],
      },
      {
        id: 'ch5ini2',
        prompt: 'A real battery has internal resistance. How does this affect the current in a simple circuit compared to an ideal battery with the same label voltage?',
        choices: [
          { id: 'ch5ini2-a', label: 'Current increases because the battery works harder', isCorrect: false, explanation: 'Internal resistance adds to total resistance, which reduces current.' },
          { id: 'ch5ini2-b', label: 'Current decreases because total resistance is higher', isCorrect: true, explanation: 'Correct. I = V / (R_load + R_internal), so more resistance means less current.' },
          { id: 'ch5ini2-c', label: 'Current stays exactly the same', isCorrect: false, explanation: 'Only an ideal battery (zero internal resistance) would give the same current.' },
        ],
      },
      {
        id: 'ch5ini3',
        prompt: 'Which component property introduces non-ideal behavior in a battery?',
        choices: [
          { id: 'ch5ini3-a', label: 'Terminal voltage', isCorrect: false, explanation: 'Terminal voltage is the output; internal resistance is the non-ideal property.' },
          { id: 'ch5ini3-b', label: 'Internal resistance', isCorrect: true, explanation: 'Correct. Internal resistance causes a voltage drop inside the battery itself.' },
          { id: 'ch5ini3-c', label: 'Switch state', isCorrect: false, explanation: 'Switch state controls circuit continuity, not non-ideal battery behavior.' },
        ],
      },
    ],
  },
];

export default quizzes;
