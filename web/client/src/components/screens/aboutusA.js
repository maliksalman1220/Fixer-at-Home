import React from 'react'
import image from "../screens/styles/ims.png"
import NavbarAdmin from './navbarAdmin'

function AboutusA() {
    
  return (
    <div>
 <NavbarAdmin/>
    <section className='mb-5'>
    <div class="carousel-inner backk">
                <img class="d-block img-fluid" src={image} alt="Responsive image" />
           </div>

    </section>

   
    <section>
    <div class="container mt-6 aboutus">
       <div class="row">
         <div class="col-sm-12 col-md-12">
            <h4 class="headingss text-center mt-4 ">Know about us</h4>
          </div>
         </div>
        <div class="row">
           <p class="mt-2 mb-5 text-center">Fixer At Home
            is your go-to expert for 
            all your Home Care needs. Our Fixers are available around the clock, whenever and where ever
            you need them.
            Fixer At Home provides reliable, fast, safe, 
            and pocket-friendly home services to you! So what are you waiting for? Create an account and book a Fixer now!</p>
        </div>   
     </div>

    </section>
    </div>
  )
}

export default AboutusA