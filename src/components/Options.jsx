import React from "react";

function Options({ questions, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div>
      <div className="options">
        {questions.options?.map((option, index) => (
          <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === questions.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
            key={index}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}//answer=index
          >
           { console.log(answer,index)}
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Options;
