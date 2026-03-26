export interface QuizConfig {
  id: string;
  title: string;
  unlockedBy: string;
  questions: QuizQuestion[];
  passingScore: number;
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  choices: { id: string; label: string; isCorrect: boolean; explanation?: string }[];
}
