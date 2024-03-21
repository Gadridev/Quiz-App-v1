import React from 'react'
import { useQuiz } from '../Context/QuizContext'

function ProgressPoint() {
  const {index,NumQuestions,points,possiblePoints,answer}=useQuiz()
  return (
    <header className='progress'>
        <progress max={NumQuestions} value={index + Number(answer !== null)}/>
        <p>Question <strong>{index+1}</strong>/{NumQuestions}</p>
        <p><strong>{points}</strong>/{possiblePoints}</p>

    </header>
  )
}

export default ProgressPoint