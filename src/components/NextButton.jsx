import React from "react";
import { useQuiz } from "../Context/QuizContext";

function NextButton() {
  const { dispatch, answer, index, NumQuestions }=useQuiz()
  if (answer == null) return null;

  if (index < NumQuestions - 1) 
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  
  if (index === NumQuestions - 1) 
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        finish
      </button>
    );
  }


export default NextButton;
