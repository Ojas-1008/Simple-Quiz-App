function QuestionCard({
    question,
    selectedAnswer,
    onOptionSelect,
    isSubmitted,
    onSubmit,
    correctAnswer,
    onNext,
    totalQuestions,
    progress,
    currentIndex
}) {
    const isLastIndex = currentIndex === totalQuestions - 1;

    return (
        <div>
            <div className="progress-container">
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>

            <p>Question {currentIndex + 1} of {totalQuestions}</p>
            <h2>{question.question}</h2>

            {question.options.map((option) => {
                const isSelected = selectedAnswer === option;
                const isCorrect = option === correctAnswer && isSubmitted;
                const isWrong = option !== correctAnswer && isSelected && isSubmitted;

                return (
                    <button
                        key={option}
                        onClick={() => onOptionSelect(option)}
                        className={`option ${isSelected ? 'selected' : ''} ${isCorrect ? 'correct' : ''} ${isWrong ? 'wrong' : ''}`}
                        disabled={isSubmitted}
                    >
                        {option}
                    </button>
                );
            })}

            {selectedAnswer !== '' && (
                <button onClick={onSubmit} disabled={isSubmitted}>
                    Submit
                </button>
            )}

            {isSubmitted && (
                <button onClick={onNext}>
                    {isLastIndex ? 'Finish Quiz' : 'Next'}
                </button>
            )}
        </div>
    );
}

export default QuestionCard;
