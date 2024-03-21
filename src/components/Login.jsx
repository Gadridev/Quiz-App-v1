import { useState } from 'react'
import'./styleF.css'
import { login } from '../services/apiUser'
import {useNavigate} from "react-router-dom"
function Login() { 
    const [email,setEmail]=useState('jamal@gmail.com')
    const [password,setpassword]=useState('mounir12@21')
    const navigate=useNavigate()
    function onSubmit(e) {
        e.preventDefault();
        // Your login logic here
        // Assuming login() is defined somewhere and performs authentication
        login(email, password)
        navigate('quiz')
    }
    return (
        <div class="container">
            <div class="center">
                <h1>Login</h1>
                <form action="" onSubmit={onSubmit}>
                    <div class="txt_field">
                        <input type="text" name="text" defaultValue={email} onChange={(e)=>setEmail(e.target.value)} required />
                        <span></span>
                        <label>Username</label>
                    </div>
                    <div class="txt_field">
                        <input type="password" name="password" defaultValue={password} onChange={(e)=>setpassword(e.target.value)}  required />
                        <span></span>
                        <label>Password</label>
                    </div>
                    <div class="pass">Forget Password?</div>
                    <input name="submit" type="Submit" value="Login" />
                    <div class="signup_link">
                        Not a Member ? <a href="signup.php">Signup</a>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login

