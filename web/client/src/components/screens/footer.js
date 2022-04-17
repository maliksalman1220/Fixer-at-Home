import React from 'react';
import {AiFillPhone} from "react-icons/ai"
import {MdEmail} from "react-icons/md"

function Footer()
{
    return(
      // <section className='mt-5'>
  <footer
          class="mt-5 text-center text-lg-start text-white"
          style={{backgroundColor: "#004c8c", fontFamily:"Poppins,sans-serif"}}

          >
    <div class="container p-3 pb-0">
      {/* <section class=""> */}
        <div class="row">
          <div class="col-lg-3 col-md-6  ml-4 mb-4 mb-md-0">
            <h5 class="text-uppercase" style={{fontFamily:"Poppins,sans-serif"}}>Get to know us:</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <a href="#!" class="text-white">About Us</a>
              </li>
              <li>
                <a href="#!" class="text-white">Services</a>
              </li>
              <li>
                <a href="#!" class="text-white">Sign Up</a>
              </li>
              <li>
                <a href="#!" class="text-white">Contact Us</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 mb-4 ml-4 mb-md-0">
            <h5 class="text-uppercase" style={{fontFamily:"Poppins,sans-serif"}}>Connect With Us:</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <p class="text-white"> <AiFillPhone/> 0321871234</p>
              </li>

              <li>
                <p class="text-white"> <MdEmail/> fixerathome@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
        <div
         class="text-center p-1"
         style={{backgroundColor:"#004c8c"}}
         >
      © Copyright 2022 FixerAtHome.com
    </div>
      {/* </section> */}
    </div>
    
  </footer>
  // </section>
    )
}
 
export default Footer;