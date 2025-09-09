import { useState } from 'react';
import type { QuestionCardProps } from './types';
import OptionButton from './OptionButton';

function QuestionCard({ question, onAnswer }: QuestionCardProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionClick = (option: string) => {
    if (!isAnswered) {
      setSelectedOption(option);
    }
  };

  const handleSubmit = () => {
    if (selectedOption && !isAnswered) {
      setIsAnswered(true);
      onAnswer(selectedOption);
    }
  };

  const handleNext = () => {
    // Reset state for next question
    setSelectedOption(null);
    setIsAnswered(false);
  };

  return (
    <div className="question-card">
      <h2 className="question-text">{question.text}</h2>
      <div className="options-container">
        {question.options.map((option, index) => (
          <OptionButton
            key={index}
            text={option}
            isSelected={selectedOption === option}
            isCorrect={isAnswered ? option === question.correctAnswer : undefined}
            onClick={() => handleOptionClick(option)}
          />
        ))}
      </div>
      <div className="question-actions">
        {!isAnswered ? (
          <button 
            className="submit-button" 
            onClick={handleSubmit}
            disabled={!selectedOption}
          >
            Submit Answer
          </button>
        ) : (
          <div className="answer-feedback">
            <p className={selectedOption === question.correctAnswer ? 'correct-feedback' : 'incorrect-feedback'}>
              {selectedOption === question.correctAnswer 
                ? "Correct!" 
                : `Incorrect. The correct answer is: ${question.correctAnswer}`}
            </p>
            <button className="next-button" onClick={handleNext}>
              Next Question
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionCard;