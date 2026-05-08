// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";

const QuizIntro = () => {
  const navigator = useNavigate();
  return (
    <div className="quiz-intro">
      <h1>Welcome to The React Quiz!</h1>
      <p>15 questions to test your React mastery</p>
      <button onClick={() => navigator("/quiz-questions")}>Start Quiz</button>
    </div>
  );
};

export default QuizIntro;
