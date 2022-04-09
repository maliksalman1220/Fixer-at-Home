import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles/RegisterScreen.css";


const RegisterScreen = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [contactnumber, setcontactnumber] = useState("");
  const [dob, setdob] = useState("");
  const [addr, setaddr] = useState("");
  const [error, setError] = useState("");
  const [ppp,setppp]=useState("");
  const [number,setnumber] = useState("");

  const registerHandlerp = async (e) =>{
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },};
      try{
      const data = {email,contactnumber}
    axios
      .post('/api/auth/email',data)
      .then(res => {
        console.log(res.data)
        
    
      setppp(res.data.msg)
      console.log(ppp)})
    } catch (error) {
    setError(error.response.data.error);
    setTimeout(() => {
      setError("");
    }, 5000);
  }
  }
  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    console.log(contactnumber.substring(0,5))
    if(number != contactnumber.substring(0,5))
    {
      return setError("wrong num");
    }
    
    
    
    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        "/api/auth/registerclient",
        {
          firstname,
          lastname,
          username,
          email,
          password,
          contactnumber,
          dob,
          addr
        },
        config
      );

      

      localStorage.setItem("authToken", data.token);

      history.push("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="register-screen">
      <div className= "my-5">
      <h1 className = "text-center"> Login </h1> 
    </div>
    
      <form onSubmit={registerHandler} className="register-screen__form">
        <h3 className="register-screen__title">Register</h3>
        {error && <span className="error-message">{error}</span>}
        <div className="form-groupl">
          <label htmlFor="confirmpassword">First Name:</label>
          <input
            type="text"
            required
            id="firstname"
            
            placeholder="first name"
            value={firstname}
            onChange={(e) => setfirstname(e.target.value)}
          />
        </div>
        <div className="form-groupl">
          <label htmlFor="confirmpassword">Last Name</label>
          <input
            type="text"
            
            
            placeholder="last name"
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
          />
        </div>
        <div className="form-groupl">
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-groupl">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-groupl">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            required
            id="password"
            autoComplete="true"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-groupl">
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input
            type="password"
            required
            id="confirmpassword"
            autoComplete="true"
            placeholder="Confirm password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="form-groupl">
          <label htmlFor="confirmpassword">contact number:</label>
          <input
            type="text"
            
            
            placeholder="enter contact number "
            value={contactnumber}
            onChange={(e) => setcontactnumber(e.target.value)}
          />
        </div>
        <div className="form-groupl">
          <label htmlFor="confirmpassword">Date of Birth:</label>
          <input
            type="date"
            
            
            
            value={dob}
            onChange={(e) => setdob(e.target.value)}
          />
        </div>
        <div className="form-groupl">
          <label htmlFor="confirmpassword">Address</label>
          <input
            type="text"
            
            
            placeholder="enter address"
            value={addr}
            onChange={(e) => setaddr(e.target.value)}
          />
        </div>
        <div className="form-groupl">
          <label htmlFor="confirmpassword">Address</label>
          <input
            type="integer"
            
            
            placeholder="enter address"
            value={number}
            onChange={(e) => setnumber(e.target.value)}
          />
        </div>
        <button onClick={registerHandler} type="submit" className="btn btn-primary">
          Register
        </button>
        <button onClick={registerHandlerp}type="submit" className="btn btn-primary">
          Registerp
        </button>

        <span className="register-screen__subtext">
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default RegisterScreen;
