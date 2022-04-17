import {useState, useEffect, React} from 'react';

import NavbarLogin from '../navbarLogin';

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

      <div>
      <NavbarLogin/>
  <div className='contact'>
    <div className='row'>
      <div className='col-md-6 col-10 mx-auto'>
            <form 
           className='form-group reggrp' style={{width:"70%", marginLeft:"10%", marginTop:"10%"}}
            onSubmit={resetPasswordHandler}
            > 
                  <h1
                  class = "text-center"
                  style={{fontFamily:"Poppins" }}>
                    Reset Password</h1>

                    
                     <div class="col-md">

                     <label class = "text-left"
                    style={{fontFamily:"Poppins" }} >
                    Password
                    </label>

                    <input 
                        name = "password"
                        class="form-control"
                        placeholder= 'Enter your password'
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                    />

                    </div>
                    
                    <div class="col-md">
                    <label
                     class = "text-left "
                     style={{fontFamily:"Poppins" }} >
                    Confirm Password
                    </label>

                    <input 
                        name = "confirmPassword"
                        class="form-control"
                        placeholder= 'Re-enter your password'
                        value = {confirmPassword}
                        onChange = {(e) => setConfirmPassword(e.target.value)}  />
                    
                    </div>
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
            </div>
            </div>    
        </div>
  )
}

export default ResetPassword