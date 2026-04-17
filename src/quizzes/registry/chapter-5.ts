import type { QuizConfig } from '../../types/quiz.ts';

const quizzes: QuizConfig[] = [
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
