import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";

export const MainMenu = () => {
  const { setGameState } = useContext(QuizContext);
  return (
    <div className="Menu">
      <button onClick={() => {
        setGameState('quiz')
      }}>Start Quiz</button>
    </div>
  );
};
