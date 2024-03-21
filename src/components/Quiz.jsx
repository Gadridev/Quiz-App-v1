import { GetAllQuiz } from "../services/apiUser";
import React, { useState,useEffect} from 'react';
function Quiz() {
    const [QuizData, setQuizData] = useState([])
    useEffect(() => {
        async function fetchData() {
            try {
                const data = await GetAllQuiz();
               console.log(data); // Assuming quizzes is the key in your API response
            } catch (error) {
                console.error('Error fetching quiz data:', error);
                // Handle error as needed
            }
        }
        fetchData();
    }, []);

    return (
        <div>
          <h1>rwe</h1>
        </div>
    )
}

export default Quiz
