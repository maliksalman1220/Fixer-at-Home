import React, { useState, useEffect} from 'react'
// import Logo from '../images/m.PNG'
import {Link} from 'react-router-dom'
import '../screens/styles/navbar.css'
// import ReorderIcon from "@material-ui/icons/Reorder";

function NavbarLogin() {
  const user_type = localStorage.getItem('user_type');
  const user_id = localStorage.getItem('user');

  var link = "";
  if (user_type === 'worker') {
    link = "/workerprofile/"+user_id;
  }
  else if (user_type === 'client') {
    link = "/userprofile/"+user_id;
  }

  console.log(user_type);

  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    
    // <div className="navbar">
      <nav class="navbar navbar-expand-lg navbar-dark colorp navbar-left">
      <div class="container-fluid colorp ">
  <a class="navbar-brand " href="#" >Fixer At Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarSupportedContent">
    
    <ul class="d-flex align-items-end navbar-nav ml-lg-auto">  
      <li class="nav-item active">
        <a class="nav-link " href="/home">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/about">About Us</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/services" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Sign Up
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/registercust">As a Customer?</a>
          <a class="dropdown-item" href="/registerp">As a Worker?</a>
        </div>
      </li>
     
      {/* /registercust */}
      <li class = "nav-item">
        <a class="nav-link" href="/login">Login</a>
      </li>
      {/* <li class = "nav-item">
        <a class="nav-link" href="/registercust">Sign Up</a>
      </li> */}

     
  </ul>
  </div>
  </div>
</nav>
    // </div>
  );
}

export default NavbarLogin