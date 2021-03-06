import React, { useState, useEffect} from 'react'
// import Logo from '../images/m.PNG'
import {Link} from 'react-router-dom'
import '../screens/styles/navbar.css'
// import ReorderIcon from "@material-ui/icons/Reorder";

function NavbarAdmin() {
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
      <li class="nav-item">
        <a class="nav-link" href="/aboutA">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/pppp">Services</a>
      </li>
      {/* <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/services" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Services
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">AC</a>
          <a class="dropdown-item" href="#">Carpenter</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
      {/* customers */}
      {/* <li class="nav-item">
        <a class="nav-link"href={`/order/${JSON.parse(localStorage.getItem('user'))}`}>Orders</a>
      </li> */}

     <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
    </a>

        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
        <a class="dropdown-item dropdown" href="#"></a>
        {/* workerprofileview */}
          <a class="dropdown-item" href="./Addservices">Add Services</a>
          <a class="dropdown-item" href="./Addservices">Delete Services</a>
          <a class="dropdown-item" href="./Addcategories">Add Catagories</a>
          <a class="dropdown-item" href="./Addcategories">Delete Catagories</a>
          <a class="dropdown-item" href="./addworker">Approve Workers</a>
          {/* <a class="dropdown-item" href="/update_profile">Profile</a> */}
          {/* <a class="dropdown-item" href="/registerp">Register Customer</a> */}
          {/* <a class="dropdown-item" href="/registerp">Register Worker</a> */}
          <a class="dropdown-item" href="/login">Log Out</a>
        </div>
      </li>
    </ul>
    </ul>
    {/* search bar just in case */}
    {/* <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
  </div>
</nav>
    // </div>
  );
}

export default NavbarAdmin