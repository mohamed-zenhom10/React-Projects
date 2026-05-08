// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";

const Result = ({ points }) => {
  const navigate = useNavigate();
  const restart = () => {
    navigate("/");
  };
  return (
    <div className="result">
      <div className="score">
        {points <= 50 ? (
          <>🙁</>
        ) : points > 50 && points <= 100 ? (
          <>🫡</>
        ) : (
          <>😀</>
        )}{" "}
        Your Score is {points} Out Of 150 ({Math.floor((points / 150) * 100)}%)
      </div>
      <button onClick={restart}>Restart Quiz</button>
    </div>
  );
};

export default Result;
