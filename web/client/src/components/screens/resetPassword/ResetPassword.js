import {useState, useEffect, React} from 'react';


import { Link } from "react-router-dom";
import axios from "axios";

import "./resetPassword.css";

const ResetPassword = ({ history, match }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const resetPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords don't match");
    }

    try {
      const { data } = await axios.put(
        `/api/auth/resetpassword/${match.params.q}`,
        {
          password,
        },
        config
      );

      console.log(data);
      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
}
    return (

        <div class = "container Rcontain mt-5 mb-5 pt-3 pb-4">
            <form 
            class = "d-flex flex-column align-items-center pb-1"
            onSubmit={resetPasswordHandler}
            > 
                  <h1>
                    Reset Password</h1>
                    <label htmlFor='password' >
                    Password
                    </label>

                    <input 
                        name = "password"
                        class = "text-center"
                        placeholder= 'Enter your password'
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                    />

                    

                
                    <label>
                    Confirm Password
                    </label>

                    <input 
                        name = "confirmPassword"
                        class = "text-center"
                        placeholder= 'Re-enter your password'
                        value = {confirmPassword}
                        onChange = {(e) => setConfirmPassword(e.target.value)}                    />
                    
                    <div
                    class = "d-flex flex-column align-items-center pt-2">
                        <button 
                            type='submit'
                            class="btn btn-warning ml-2"
                            style={{width: "300px"}}
                            >
                            Confirm Password
                        </button>
                    </div>
            </form>        
           
        </div>
  )
}

export default ResetPassword