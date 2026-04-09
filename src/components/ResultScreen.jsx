function ResultScreen({ score, scorePercentage, total, onReset }) {

    let message;
    if (scorePercentage >= 80) {
        message = "Excellent! 🏆";
    } else if (scorePercentage >= 50) {
        message = "Good effort! 👍";
    } else {
        message = "Keep practicing! 💪";
    }

    return (
        <div className="result-container">
            <h1>Quiz Complete!</h1>

            <div className="score-circle">
                <span className="final-score">{score} / {total}</span>
            </div>

            <h2>{message}</h2>
            <p>You scored {Math.round(scorePercentage)}% overall.</p>

            <button className="primary-btn" onClick={onReset}>
                Try Again
                <span className="material-symbols-outlined">restart_alt</span>
            </button>
        </div>
    );
}

export default ResultScreen;