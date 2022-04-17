import {useState, useEffect, React} from 'react';
import "./forgetPassword.css"

import axios from "axios";


const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/forgotpassword",
        { email },
        config
      );

      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setEmail("");
      setTimeout(() => {
        setError("");
      }, 5000);
    }};

    return (     
        
        <div class = "container Pcontain mt-5 mb-5 pt-3 pb-4"> 
            <form  
            class = "d-flex flex-column align-items-center pb-1"
            onSubmit={forgotPasswordHandler}
            
            > 
               <h1
               class = "text-center"
               >
                Forget Password</h1>             
                    <label 
                    class = "text-center "
                    >
                    Please enter your email, so we can send a link to reset your password.
                    </label>
                
                    <input 
                        name = "email"
                        class = "text-center"
                        placeholder= 'Enter your email'
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}
                        style={{width: "30%"}}

                    />

                  
                <div 
                class = "d-flex flex-column align-items-center pt-2">
                    <button 
                        class="btn btn-warning ml-2"
                        style={{width: "300px"}}
                        type='submit'>
                        Send My Password
                    </button>
                </div>
            </form>

            
        </div>
  )
}

export default ForgetPassword