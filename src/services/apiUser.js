import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
export async function login(email, password) {
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:8000/api/v1/user/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email,
        password,
      },
    });

    if (res.data.status === "success") {
        console.log(res)
        toast.success('Successfully created!');
    }
  } catch (err) {
    console.log("error", err.response.data.message);
  }
}
export async function GetAllQuiz() {
  console.log("trying to open");
  const token = Cookies.get("jwt");
  console.log(token); // Retrieve the token from cookies
  const res = await axios.get("http://127.0.0.1:8000/api/v1/quiz/", {
    headers: {
      Authorization: `Bearer ${token}`, // Include the JWT token in the request headers
    },
  });
  if (res.data.status === "success") {
    return res.data; // Return the quizzes array from response data
  }
}
