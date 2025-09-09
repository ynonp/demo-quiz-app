import type { ResultsScreenProps } from './types';

function ResultsScreen({ score, total, onRestart }: ResultsScreenProps) {
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="results-screen">
      <h1>Quiz Complete!</h1>
      <div className="score-display">
        <div className="score-number">{score} / {total}</div>
        <div className="score-percentage">{percentage}%</div>
      </div>
      <div className="score-message">
        {percentage >= 80 ? "Excellent work!" :
         percentage >= 60 ? "Good job!" :
         percentage >= 40 ? "Not bad!" :
         "Keep practicing!"}
      </div>
      <button className="restart-button" onClick={onRestart}>
        Restart Quiz
      </button>
    </div>
  );
}

export default ResultsScreen;