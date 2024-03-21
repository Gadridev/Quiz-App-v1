import React from "react";
import { useQuiz } from "../Context/QuizContext";

function FinishScreen() {
  const { points, possiblePoints,highScoore ,dispatch}=useQuiz();
  const percentage = (points / possiblePoints) * 100;
  let emoji;
  if(percentage===100) emoji='🥇';
  if(percentage>=80 && percentage<100) emoji='🎉'
  if(percentage>=50 && percentage<80) emoji='🥰'
  if(percentage>=0 && percentage<50) emoji='😢'
  if(percentage===0) emoji='🤷'


  return (
    <>
    <p className="result">
      <span>{emoji}</span>You Scored <strong>{points}</strong> out of {possiblePoints}(
       {Math.ceil(percentage)})
    </p>
       <p className="highscore">(Highscoore :{highScoore} points)</p>
       <button className="btn btn-ui" onClick={()=>dispatch({type:"restart"})}>Restart Quiz</button>
    </>
  );
}

export default FinishScreen;
