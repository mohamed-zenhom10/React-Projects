// eslint-disable-next-line no-unused-vars
import React, { use, useContext, useEffect, useRef, useState } from "react";
import { QuestionsContext } from "../context/QuestionContext";
import Result from "./Result";
import { useNavigate } from "react-router-dom";
import Timer from "./Timer";

const Questions = () => {
  const { questions } = useContext(QuestionsContext);
  const [qIndex, setQIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [points, setPoints] = useState(0);
  const navigator = useNavigate();

  const currentQuestion = questions[qIndex];
  const correctAnswer = questions[qIndex]?.["correct_answer"];

  const setAnswer = (answer) => {
    setSelectedAnswer(answer);
    if (answer === currentQuestion?.["correct_answer"]) {
      setPoints((prev) => prev + 10);
    }
  };

  const next = () => {
    if (!selectedAnswer) {
      alert("Please select an answer!");
      return;
    }
    setQIndex(qIndex + 1);
    setSelectedAnswer(null);
  };

  return (
    <>
      {qIndex < questions.length - 1 ? (
        <div className="questions">
          <div className="progress-bar">
            <div
              className="bar"
              style={{
                width: `${(qIndex / questions.length) * 100}%`,
              }}
            ></div>
          </div>

          <div className="data">
            <div className="count">
              Question {qIndex + 1} / {questions.length}
            </div>

            <div className="points">
              {points > 0 ? points + " / " : <></>}150
            </div>
          </div>

          <div className="quiz-data">
            <h1>{currentQuestion?.question_title}</h1>

            <div className="answers-container">
              {[1, 2, 3, 4].map((num) => {
                const answer = currentQuestion?.[`answer_${num}`];
                return (
                  <div
                    key={num}
                    className={`
                            answer
                            ${selectedAnswer ? (answer === correctAnswer ? "correct" : "wrong") : ""}
                          `}
                    onClick={() => setAnswer(answer)}
                  >
                    {answer}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="info">
            <Timer onFinish={() => navigator("/result")} />
            {selectedAnswer ? (
              <button className="next-btn" onClick={next}>
                Next
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <Result points={points} />
      )}
    </>
  );
};

export default Questions;
