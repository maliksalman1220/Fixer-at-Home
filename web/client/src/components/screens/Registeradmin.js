import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import "./RegisterScreen.css";
import "./styles/RegisterScreen.css";


const RegisterScreenp = ({ history }) => {
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
        "/api/auth/register/p",
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
  <div className='contact'>
    <div className='row'>
      <div className='col-md-6 col-10 mx-auto'>
    
      <form onSubmit={registerHandler} className='form-group' style={{width:"80%", marginLeft:"10%", marginTop:"10%"}}>
      <h3 className = "text-center"> Register </h3> 
        {error && <span className="error-message">{error}</span>}

        <div className='row g-2'>
         <div class="col-md">
         <label class="form-label" for="formGroupInput">First Name</label>
          <input class="form-control"
            type="text"
            required
            id="firstname"
            
            placeholder="Enter First name"
            value={firstname}
            onChange={(e) => setfirstname(e.target.value)}
          />
        </div>
        
        <div className="col-md">
          <label class="form-label" for="formGroupInput">Last Name</label>
          <input class="form-control"
            type="text"
            placeholder="last name"
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
          />
        </div>
        </div>

        <div className="col-md">
          <label class="form-label">Username:</label>
          <input
            type="text"
            
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        
        <div className="col-md">
          <label class="form-label">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-md">
          <label class="form-label">Password:</label>
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
        <div className="col-md">
          <label class="form-label">Confirm Password:</label>
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
        <div className="col-md">
          <label class="form-label">Contact number:</label>
          <input
            type="text"
            
            
            placeholder="Enter contact number "
            value={contactnumber}
            onChange={(e) => setcontactnumber(e.target.value)}
          />
        </div>
        <div className="col-md">
          <label class="form-label">Date of Birth:</label>
          <input
            type="date"
            
            
            
            value={dob}
            onChange={(e) => setdob(e.target.value)}
          />
        </div>
        <div className="col-md">
          <label class="form-label">Address</label>
          <input
            type="text"
            
            
            placeholder="Enter address"
            value={addr}
            onChange={(e) => setaddr(e.target.value)}
          />
        </div>
        <div className="col-md">
          <label class="form-label">Address</label>
          <input
            type="integer"
            
            
            placeholder="Enter address"
            value={number}
            onChange={(e) => setnumber(e.target.value)}
          />
        </div>
        
        <div class="col-md-12 text-right">
        <button type="submit" onClick={registerHandlerp} class="btn btn-warning ml-2">Registerp</button>
        <button type="button" class="btn btn-primary default">Cancel</button>
                {/* <button type="submit" class="btn btn-primary">
                Register
              </button> */}
              {/* <button onClick={registerHandlerp} type="submit" class="btn btn-primary">
                Registerp
              </button> */}
            </div>
      
        <span className="col-md-12 text-right">
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
    </div>
    </div>
  );
};

export default RegisterScreenp;