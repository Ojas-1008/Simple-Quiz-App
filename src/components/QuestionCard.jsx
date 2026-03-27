function QuestionCard({ question, selectedAnswer, onOptionSelect }) {
    return (
        <div>
            <h2>{question.question}</h2>
            {question.options.map((option) => (
                <button key={option} onClick={() => onOptionSelect(option)} className={`option ${selectedAnswer === option ? 'selected' : ''}`}>{option}</button>
            ))}
        </div>
    );
}

export default QuestionCard;