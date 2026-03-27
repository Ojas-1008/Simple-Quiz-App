import { useState } from 'react';
import './App.css';
import QuestionCard from './components/QuestionCard';
import ResultScreen from './components/ResultScreen';
import { questions } from './data/questions';

function App() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState("");

  const question = questions[currentIndex];

  function onOptionSelect(option) {
    setSelectedAnswer(option);
  }

  return (
    <div className='App'>
      <h1>Quiz App</h1>
      <QuestionCard question={question} selectedAnswer={selectedAnswer} onOptionSelect={onOptionSelect} />
      <ResultScreen />
    </div>
  );
}

export default App;