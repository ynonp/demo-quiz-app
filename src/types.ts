export interface Question {
  text: string;
  options: string[];
  correctAnswer: string;
}

export interface QuestionCardProps {
  question: Question;
  onAnswer: (selectedOption: string) => void;
}

export interface OptionButtonProps {
  text: string;
  isSelected: boolean;
  isCorrect?: boolean;
  onClick: () => void;
}

export interface ResultsScreenProps {
  score: number;
  total: number;
  onRestart: () => void;
}

export interface ProgressBarProps {
  current: number;
  total: number;
}