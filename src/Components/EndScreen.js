import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Questions } from "../Helpers/QuestionBank";



export const EndScreen = () => {
    const { score, setScore, setGameState  } = useContext(QuizContext);
    return (
        <div className="EndScreen">
        <h1>Quiz Finished</h1>
        <h3>{score} / {Questions.length}</h3>
        <button onClick={() => {
            setGameState('menu')
            setScore(0);
          }}>Try Again</button>
        </div>
    )    
}