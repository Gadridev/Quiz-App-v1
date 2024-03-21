import { useQuiz } from "../Context/QuizContext";

function Header() {
  const { test } = useQuiz();
  console.log(test);
  return (
    <header className='app-header'>
      <img src='logo512.png' alt='React logo' />
      <h1>The React Quiz</h1>
    </header>
  );
}

export default Header;
