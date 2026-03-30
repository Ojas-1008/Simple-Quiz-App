// src/components/QuestionCard.jsx
function QuestionCard({ question, selectedAnswer, onOptionSelect, isSubmitted, onSubmit, correctAnswer, onNext, totalQuestions, progress, currentIndex }) {
    const isLastIndex = currentIndex === totalQuestions - 1;

    return (
        <div className="question-container">
            {/* Progress Section */}
            <div className="progress-section">
                <div className="progress-info">
                    <span className="question-count">Question {currentIndex + 1} of {totalQuestions}</span>
                    <span className="percentage">{Math.round(progress)}%</span>
                </div>
                <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                </div>
            </div>

            {/* Card Content */}
            <div className="card">
                <h1 className="question-text">{question.question}</h1>

                <div className="options-list">
                    {question.options.map((option) => {
                        const isSelected = selectedAnswer === option;
                        const isCorrect = isSubmitted && option === correctAnswer;
                        const isWrong = isSubmitted && isSelected && option !== correctAnswer;
                        const isDisabled = isSubmitted && !isSelected && !isCorrect;

                        return (
                            <button
                                key={option}
                                onClick={() => onOptionSelect(option)}
                                disabled={isSubmitted}
                                className={`option-card ${isSelected ? 'selected' : ''} ${isCorrect ? 'correct' : ''} ${isWrong ? 'wrong' : ''} ${isDisabled ? 'disabled' : ''}`}
                            >
                                <div className="option-left">
                                    <div className="option-indicator">
                                        {isCorrect && <span className="material-symbols-outlined icon-small">check</span>}
                                        {isWrong && <span className="material-symbols-outlined icon-small">close</span>}
                                    </div>
                                    <span className="option-label">{option}</span>
                                </div>
                                {isCorrect && <span className="status-badge">Correct Answer</span>}
                                {isWrong && <span className="status-badge">Your Choice</span>}
                            </button>
                        );
                    })}
                </div>

                {/* Action Button */}
                <div className="action-area">
                    {!isSubmitted ? (
                        <button className="primary-btn" onClick={onSubmit} disabled={!selectedAnswer}>
                            Submit Answer
                        </button>
                    ) : (
                        <button className="primary-btn accent" onClick={onNext}>
                            {isLastIndex ? 'Finish Quiz' : 'Next Question'}
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default QuestionCard;
