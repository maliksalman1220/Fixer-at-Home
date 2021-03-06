import React from "react";
import { useState } from "react";
import "./styles/login.css";
import { useHistory } from "react-router-dom";
import NavbarLogin from "./navbarLogin";

export const Login = ({history}) => {
  

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
          localStorage.setItem("authToken", data.token);      
          localStorage.setItem('user', JSON.stringify(data.error));
          localStorage.setItem('user_type', data.type);
          localStorage.setItem('username', data.username);
          
          if(data.type=="admin"){console.log("p");history.push("/Addcategories")}
          
          else if (data.type=="worker"){
            console.log("p");history.push("/homework")
          
          }else if ( data.type=="client"){
            console.log("p");history.push("/homecust")
          }
        
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
      <div>
        <NavbarLogin/>
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
             
        <button type="submit"  class="btn workercard_button btn-sm btn-primary">Login</button>
                
                <p className="forgot-password text-right">
                    Want to create an account? <a href="./registerp">Sign up</a>
                </p>
                <p className="forgot-password text-right">
                   <a href="./forgetPassword"> Forgot Password? </a>
                </p>
            </form>
        </div>
        </div>
        </div>
    );
}