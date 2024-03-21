import React, { useEffect } from "react";
import { useQuiz } from "./Context/QuizContext";

function Timer() {
  const { dispatch, secondRemaining }=useQuiz()
  const mins = Math.floor(secondRemaining / 60);
  const second = secondRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div>
      <div className="timer">
        {mins < 10 && "0"}
        {mins}:{second}
        {second < 10 && "0"}
      </div>
    </div>
  );
}

export default Timer;
