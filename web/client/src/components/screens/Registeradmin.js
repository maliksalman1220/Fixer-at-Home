import React, { useState, useEffect} from 'react'
// import Logo from '../images/m.PNG'
import {Link} from 'react-router-dom'
import '../screens/RegisterScreen.css'
// import ReorderIcon from "@material-ui/icons/Reorder";
function Navbar() {
  // return (
  //   <div className='navbar'> 
  //       {/* <div className='leftside'>
  //           <img src= {Logo} alt = ""/>
  //       </div> */}
  //       <div className='rightside'></div>
        // <Link to = "/"> Home </Link>
        // <Link to = "/about"> About </Link>
        // <Link to = "/services"> Services </Link>   
        // <Link to = "/login"> Login </Link> 
        // <Link to = "/signup"> Sign up </Link> 
  //   </div>
  // );
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        {/* <img src={Logo} /> */}
        <div className="hiddenLinks">
        <Link to = "/"> Home </Link>
        <Link to = "/about"> About </Link>
        <Link to = "/services"> Services </Link>   
        <Link to = "/login"> Login </Link> 
        <Link to = "/registerp"> Sign up </Link> 
        {/* <Link to = "/signup_worker"> Sign up Worker</Link> 
        <Link to = "/signup_admin"> Sign up admin</Link>  */}
        <Link to = "/signup_admin"> Update Profile</Link> 
        </div>
      </div>
      <div className="rightSide">
        <Link to = "/"> Home </Link>
        <Link to = "/about"> About </Link>
        <Link to = "/services"> Services </Link>   
        <Link to = "/login"> Login </Link> 
        <Link to = "/registerp"> Sign up </Link>
        {/* <Link to = "/signup_worker"> Sign up Worker</Link> 
        <Link to = "/signup_admin"> Sign up admin</Link>  */}
        <Link to = "/update_profile"> Update Profile</Link>
        <button onClick={toggleNavbar}>
          {/* <ReorderIcon /> */}
        </button>
      </div>
    </div>
  );
}

export default Navbar