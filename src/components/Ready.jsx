import React from "react";
import { useQuiz } from "../Context/QuizContext";

function Ready() {
  const {NumQuestions,dispatch}=useQuiz()
  return (
    <div className="start">
      <h2>Welcome To The React Quiz!</h2> 
      <h3>{NumQuestions} questions to test your React mastery</h3>
      <button className="btn btn-ui" onClick={()=>dispatch({type:'active'})}>Let's start</button>
    </div>
  );
}

export default Ready;
