import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Ready from "./components/Ready";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import ProgressPoint from "./components/ProgressPoint";
import FinishScreen from "./components/FinishScreen";
import Footer from "./components/Footer";
import Timer from "./Timer";
import { useQuiz } from "./Context/QuizContext";
import Home from "./components/Home";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from "./components/Login";
// import Quiz from "./components/Quiz";
// import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
// import { ToastContainer } from "react-toastify";
// import { Toaster } from "react-hot-toast";
function App() {
  // const querClient = new QueryClient();
   const { status } = useQuiz();
  return (
    <>
      {/* <BrowserRouter> */}
        {" "}
        {/* Ensure BrowserRouter wraps all routes */}
        {/* <Routes>
          <Route path="/" element={<Login />} />
          <Route path="quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
      <>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "black",
              color: "yellow",
            },
          }}
        />
      </> */}
       <div className="app">
        <Header />
        <Main>
          {status === "Loading" && <Loader />}
          {status === "home" && <Home />}
          {status === "error" && <Loader />}
          {status === "Ready" && <Ready />}
          {status === "active" && (
            <>
              <ProgressPoint />
              <Question />
              <Footer>
                <Timer />
                <NextButton />
              </Footer>
            </>
          )}
          {status === "finish" && <FinishScreen />}
        </Main>
      </div> 
    </>
  );
}

export default App;
