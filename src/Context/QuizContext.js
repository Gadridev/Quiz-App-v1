import { createContext, useContext, useEffect, useReducer } from "react";

const QuizContext = createContext();
const initialState = {
  questions: [],//Quedtions[data]
  status: "home",
  index: 0,
  answer: null,
  points: 0,
  highScoore: 0,
  secondRemaining: null,
};
const SEC_PER_QUESTION = 30;
// import DateCounter from './DateCounter';
function reducer(state, action) {
  switch (action.type) {
    case "dataRecive":
      return { ...state, questions: action.payload, status: "Ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "active":
      return {
        ...state,
        status: "active",
        secondRemaining: state.questions.length * SEC_PER_QUESTION,
      };
    case "newAnswer":
      //answer
      // const questions = state.questions.at(state.index||0=index)=question number1;
      const questions = state.questions.at(state.index);
      console.log(questions);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === questions.correctOption
            ? state.points + questions.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "finish",
        highScoore:
          state.points > state.highScoore ? state.points : state.highScoore,
      };
    case "restart":
      return { ...initialState, questions: state.questions, status: "Ready" };
    // return {
    //   ...state,
    //   status: (state.status = "Ready"),
    //   index: (state.index = 0),
    //   answer: (state.answer = null),
    //   points: (state.points = 0),
    //   highScoore: (state.highScoore = 0),

    // };
    case "tick":
      return {
        ...state,
        secondRemaining: state.secondRemaining - 1,
        status: state.secondRemaining === 0 ? "finish" : state.status,
      };
    default:
      throw new Error("Unknown action");
  }
}
function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const NumQuestions = state.questions.length;
  const possiblePoints = state.questions.reduce(
    (prev, curr) => prev + curr.points,
    0
  );
  useEffect(function () {
    fetch(`http://localhost:4000/questions`)
      .then((res) => res.json())
      .then((data) => dispatch({type:"dataRecive",payload:data}))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  console.log(state.questions[2])

  return (
    <QuizContext.Provider
      value={{
        test: "hello world",
        state,
        points:state.points,
        status:state.status,
        index:state.index,
        answer:state.answer,
        questions:state.questions[state.index],
        secondRemaining:state.secondRemaining,
        highScoore:state.highScoore,
        NumQuestions,
        possiblePoints,
        dispatch
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}
function useQuiz() {
  const Context = useContext(QuizContext);
  if (Context === undefined) throw new Error("you can't use Context oustid Provider");
  return Context;
}

export { QuizProvider, useQuiz };
