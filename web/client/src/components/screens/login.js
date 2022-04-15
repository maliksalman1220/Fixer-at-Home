import React from "react";
import { useState } from "react";
import "./styles/login.css";

export const Login = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    async function LoginUser (e) {
        // Learn the function templates in JavaScript
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        })
        const data = await response.json();
        
        if (data.status === "success")
        {
          alert("Login Successful")
          console.log(data.token)
          localStorage.setItem("authToken", data.token);

      
      localStorage.setItem('user', JSON.stringify(data.error));
      
        //   window.location.href = "/main";
        } 
        else if (data.error === 'User not found')
        {
          alert("Incorrect Email");
        }
        else if (data.error === 'Password not valid')
        {
            alert("Incorrect Password");
        }
      }

    return (
      <div className='roww'>
      <div className='col-md-6 col-10 mx-auto'>

      {/* <div class="container"> */}
            <form onSubmit={LoginUser} className='logform' style={{width:"80%", marginLeft:"10%", marginTop:"10%"}}>
            <h3 className = "text-center"> Login </h3> 
               
               
                <div className="mb-3">
                    <label class="form-label" for="formGroupInput">Email address</label>
                    <input type="email" 
                    value={email} 
                    className="form-control" 
                    onChange={(e) => setemail(e.target.value)} 
                    placeholder="Enter email" />
                </div>
              
                <div className="mb-3">
                    <label class="form-label" for="formGroupInput">Password</label>
                    <input 
                    type="password" 
                    value={password} 
                    className="form-control" 
                    onChange={(e) => setpassword(e.target.value)} 
                    placeholder="Enter password" />
                </div>
             
                {/* <button type="submit" className="btn btn-primary btn-block">Login</button> */}
        <button type="submit"  class="btn l_btn btn-warning ml-2">Login</button>
                
                {
                /* <div class="col-md-12 text-right">
                <button type="submit" className="btn btn-primary btn-block">
                Login
              </button>
            </div> */}
                <p className="forgot-password text-right">
                    Want to create an account? <a href="./registerp">Sign up</a>
                </p>
            </form>
        </div>
        </div>
        // </div>
    );
}