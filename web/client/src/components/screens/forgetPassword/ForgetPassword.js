import {useState, useEffect, React} from 'react';
import "./forgetPassword.css"

import axios from "axios";
import NavbarLogin from '../navbarLogin';


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
        
      <div>
      <NavbarLogin/>
  <div className='contact'>
    <div className='row'>
      <div className='col-md-6 col-10 mx-auto'>
            <form  
            className='form-group reggrp' style={{width:"70%", marginLeft:"10%", marginTop:"10%"}}
            onSubmit={forgotPasswordHandler}
            
            > 
               <h1
               class = "text-center"
               style={{fontFamily:"Poppins" }}

               >
                Forget Password</h1>             
                    <label 
                    class = "text-center "
                    style={{fontFamily:"Poppins" }}
                    >
                    Please enter your email, so we can send a link to reset your password.
                    </label>
                    <div className='row g-2'>
                     <div class="col-md">
                    <input 
                        name = "email"
                        class="form-control"
                        placeholder= 'Enter your email'
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}
                    />
              </div>

              </div>
              <div class = "button mt-0 d-flex flex-row align-items-center ml-3">
                    <button 
                        class="btn workercard_button2 btn-sm btn-primary  ml-3"
                        type='submit'
                        // style={{width:"10%" }}
                        >
                        Send My Password
                    </button>
                </div>  

            </form>
            </div>
            </div>
            </div>    
        </div>
  )
}

export default ForgetPassword