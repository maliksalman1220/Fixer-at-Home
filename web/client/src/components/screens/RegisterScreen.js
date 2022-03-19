import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./RegisterScreen.css";

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

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

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
        "/api/auth/register",
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
      <form onSubmit={registerHandler} className="register-screen__form">
        <h3 className="register-screen__title">Register</h3>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group">
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
        <div className="form-group">
          <label htmlFor="confirmpassword">Last Name</label>
          <input
            type="text"
            
            
            placeholder="last name"
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
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
        <div className="form-group">
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
        <div className="form-group">
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
        <div className="form-group">
          <label htmlFor="confirmpassword">contact number:</label>
          <input
            type="text"
            
            
            placeholder="enter contact number "
            value={contactnumber}
            onChange={(e) => setcontactnumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmpassword">Date of Birth:</label>
          <input
            type="date"
            
            
            
            value={dob}
            onChange={(e) => setdob(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmpassword">Address</label>
          <input
            type="text"
            
            
            placeholder="enter address"
            value={addr}
            onChange={(e) => setaddr(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>

        <span className="register-screen__subtext">
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default RegisterScreen;
