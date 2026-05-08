// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Title from "./components/Title";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizIntro from "./components/QuizIntro";
import Quiz from "./components/Quiz";
import Questions from "./components/Questions";
import { QuestionsContext } from "./context/QuestionContext";
import Result from "./components/Result";

const App = () => {
  const [questions, setQuesionts] = useState([]);

  useEffect(() => {
    const getQ = async () => {
      try {
        const response = await fetch("/data/data.json");
        const data = await response.json();
        setQuesionts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getQ();
  }, []);

  return (
    <div className="container">
      <Title />
      <QuestionsContext.Provider value={{questions}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Quiz />}>
              <Route index={true} element={<QuizIntro />} />
              <Route path="/quiz-questions" element={<Questions />} />
            </Route>
            <Route path="/result" element={<Result />}/>
          </Routes>
        </BrowserRouter>
      </QuestionsContext.Provider>
    </div>
  );
};

export default App;
