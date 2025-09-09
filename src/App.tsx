import { useState } from 'react';
import type { Question } from './types';
import QuestionCard from './QuestionCard';
import ResultsScreen from './ResultsScreen';
import ProgressBar from './ProgressBar';
import './App.css';

const QUIZ_QUESTIONS: Question[] = [
  {
    text: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    text: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    correctAnswer: "Mars"
  },
  {
    text: "What is the largest mammal in the world?",
    options: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
    correctAnswer: "Blue Whale"
  },
  {
    text: "Which programming language is used for web development?",
    options: ["Python", "JavaScript", "C++", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    text: "What year was the first iPhone released?",
    options: ["2006", "2007", "2008", "2009"],
    correctAnswer: "2007"
  }
];

function App() {
  const [questions] = useState<Question[]>(QUIZ_QUESTIONS);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (selectedOption: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    
    // Update score if answer is correct
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    // Move to next question or show results after a delay
    setTimeout(() => {
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setShowResults(true);
      }
    }, 2000); // 2 second delay to show feedback
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className="quiz-app">
      <header className="quiz-header">
        <h1>Simple Quiz App</h1>
      </header>
      
      {!showResults ? (
        <div className="quiz-content">
          <ProgressBar 
            current={currentQuestionIndex} 
            total={questions.length} 
          />
          <QuestionCard
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
          />
        </div>
      ) : (
        <ResultsScreen
          score={score}
          total={questions.length}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default App;
