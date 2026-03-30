import { useState } from 'react';
import './App.css';
import QuestionCard from './components/QuestionCard';
import ResultScreen from './components/ResultScreen';
import { questions } from './data/questions';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  const question = questions[currentIndex];
  const progressPercentage = (currentIndex / questions.length) * 100;

  function onOptionSelect(option) {
    setSelectedAnswer(option);
  }

  function handleSubmit() {
    setIsSubmitted(true);
  }

  function handleNext() {
    if (!isSubmitted) {
      return;
    }

    const newAnswerObject = {
      question: question.question,
      selectedAnswer: selectedAnswer,
      isCorrect: selectedAnswer === question.correctAnswer
    };

    setAnswers((prev) => [...prev, newAnswerObject]);

    if (currentIndex === questions.length - 1) {
      setIsFinished(true);
    } else {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer('');
      setIsSubmitted(false);
    }
  }

  return (
    <div className='App'>
      <h1>Quiz App</h1>
      <QuestionCard
        question={question}
        selectedAnswer={selectedAnswer}
        onOptionSelect={onOptionSelect}
        isSubmitted={isSubmitted}
        onSubmit={handleSubmit}
        correctAnswer={question.correctAnswer}
        onNext={handleNext}
        totalQuestions={questions.length}
        progress={progressPercentage}
        currentIndex={currentIndex}
      />
      <ResultScreen />
    </div>
  );
}

export default App;