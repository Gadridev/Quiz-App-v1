import React from "react";
import Options from "./Options";
import { useQuiz } from "../Context/QuizContext";

function Question() {
  const {questions,dispatch,answer}=useQuiz()
  console.log(questions)
  return (
    <>
      <h4>{questions.question}</h4>
      <Options questions={questions} dispatch={dispatch} answer={answer} />
    </>
  );
}
export default Question;
