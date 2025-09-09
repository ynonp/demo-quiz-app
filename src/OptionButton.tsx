import type { OptionButtonProps } from './types';

function OptionButton({ text, isSelected, isCorrect, onClick }: OptionButtonProps) {
  let className = 'option-button';
  
  if (isSelected) {
    className += ' selected';
  }
  
  if (isCorrect !== undefined) {
    className += isCorrect ? ' correct' : ' incorrect';
  }

  return (
    <button 
      className={className} 
      onClick={onClick}
      disabled={isCorrect !== undefined}
    >
      {text}
    </button>
  );
}

export default OptionButton;