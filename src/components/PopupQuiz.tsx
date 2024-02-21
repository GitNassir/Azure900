import React, { useState } from 'react';
import './PopupQuiz.css'; // Husk at opdatere denne CSS til at style din modal korrekt
import { quizTopics } from './quizQuestions';

interface PopupQuizProps {
  topic: keyof typeof quizTopics;
}

const PopupQuiz: React.FC<PopupQuizProps> = ({ topic }) => {
  const questions = quizTopics[topic];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleAnswerSelect = (index: number, isCorrect: boolean) => {
    setSelectedAnswer(index);
    if (isCorrect) {
      setCorrectAnswersCount(correctAnswersCount + 1);
    }

    if (currentQuestionIndex === questions.length - 1) {
      setShowResult(true);
    } else {
      setTimeout(goToNextQuestion, 2000); // Gå automatisk til næste spørgsmål efter 2 sekunder
    }
  };

  const goToNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedAnswer(null);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setCorrectAnswersCount(0);
    setShowResult(false);
    setIsOpen(false);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Tage en quiz!</button>
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-modal">
            {!showResult ? (
              <>
                <h2>Spørgsmål {currentQuestionIndex + 1} af {questions.length}</h2>
                <p><strong>{currentQuestion.question}</strong></p>
                <ul className="answers-list">
                  {currentQuestion.answers.map((answer, index) => (
                    <li
                      key={index}
                      className={`${selectedAnswer === index ? (answer.correct ? "correct" : "incorrect") : ""}`}
                      onClick={() => handleAnswerSelect(index, answer.correct)}
                    >
                      {answer.text}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <div>
                <h2>Resultat</h2>
                <p>Du fik {correctAnswersCount} ud af {questions.length} korrekt!</p>
                <button onClick={resetQuiz}>Prøv igen</button>
              </div>
            )}
            <button onClick={resetQuiz}>Luk</button>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupQuiz;
