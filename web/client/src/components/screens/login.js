import React from "react";
import { useState } from "react";

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
        
        if (data.status === 'ok')
        {
          alert("Login Successful");
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
        <div className="container">
            <form onSubmit={LoginUser}>
                <h3>Login</h3>
                <br />
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" value={email} className="form-control" onChange={(e) => setemail(e.target.value)} placeholder="Enter email" />
                </div>
                <br />
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={password} className="form-control" onChange={(e) => setpassword(e.target.value)} placeholder="Enter password" />
                </div>
                <br />
                <button type="submit" className="btn btn-primary btn-block">Login</button>
                <p className="forgot-password text-right">
                    Doesn't have an account <a href="./register">Sign up?</a>
                </p>
            </form>
        </div>
    );
}