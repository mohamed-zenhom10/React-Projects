// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

const Timer = ({ onFinish }) => {
  const [timer, setTimer] = useState(600);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 0) {
          clearInterval(interval);
          onFinish();
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onFinish]);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return (
    <div className="timer">
      {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
};

export default Timer;