import React from 'react'
import "../screens/styles/homepage.css"
import image from "../screens/styles/Poppins.png"
import {AiOutlineArrowRight} from "react-icons/ai" 
import NavbarLogin from './navbarLogin'
import Footer from './footer'
function Homepage() {
  return (
      
    <div>
        <NavbarLogin/>
    <section class="">
           <div class="carousel-inner backk">
                <img class="d-block img-fluid" src={image} alt="Responsive image" />
           </div>
   </section>   

   <section class="aboutusback" id="about">
     <div class="container mt-5 aboutus">
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
            and pocket-friendly home services to you! So what are you waiting for? Book a Fixer now!</p>
        </div>   
     </div>   
   </section>   

   <section class="">   
    <div class="container aboutus">
        <div class="row">
         <div class="col-sm-12 col-md-12">
            <h4 class=" headingss text-center mb-3 mt-4">Services We Provide</h4>
            <p className='mb-5 text-center'> Create an account to get started</p>
          </div>
         </div>
         <div class="row align-items-center justify-content-center">
            {/* insert cards here */}
            <div class="col-sm-3 mb-3">
                <div class="card" style={{width: "15rem"}}>
                <img src="https://karigaronline.com.pk/wp-content/uploads/2020/08/hiring-a-painter.jpeg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text ctextt">Painting Service</p>
                </div>
                </div>
            </div>
            <div class="col-sm-3 mb-3">
                <div class="card" style={{width: "15rem"}}>
                <img src="https://www.residencestyle.com/wp-content/uploads/2021/01/home-appliance-repair1.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text ctextt">Home Appliance Service</p>
                </div>
                </div>
            </div>

            <div class="col-sm-3 mb-3">
                <div class="card" style={{width: "15rem"}}>
                <img src="https://pak24tv.com/images/electricialservices.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text ctextt">Electrician Service</p>
                </div>
                </div>
            </div>
         </div>
         <div class="row align-items-center justify-content-center">
         <div class="col-sm-3 mb-3">
                <div class="card" style={{width: "15rem"}}>
                <img src="https://smartguy.com/webservice/storage/category/handyman-services.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text ctextt">Handyman Services</p>
                </div>
                </div>
            </div>
            <div class="col-sm-3 mb-3">
                <div class="card" style={{width: "15rem"}}>
                <img src="https://www.domov.in/wp-content/uploads/2020/03/4501-1505862800.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text ctextt">Carpenter Services</p>
                </div>
                </div>
            </div>

            <div class="col-sm-3 mb-3">
                <div class="card" style={{width: "15rem"}}>
                <img src="https://supercoolingservice.pk/wp-content/uploads/2022/03/ac-service-in-karachi.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text ctextt">AC Services</p>
                </div>
                </div>
            </div>
         </div>
   </div>
  </section>  


  <section class="">
   <div class="container col-md-12 p-1 text-left">
     <div class="col-sm-12 col-md-12 mb-4">
        <h4 class="headingss text-center mt-5">Create an Account</h4>
    </div>

<div class="container mx-auto mb-5">
  <div class="row align-items-center justify-content-center">
    <div class="col">
    <a href="/registerp" class="btn h_btnsl btn-warning" role="button" >Sign Up to Book a Service    <AiOutlineArrowRight/>
    </a>
    </div> 
    <div class="col">
    <a href="/services" class="btn h_btnsl btn-primary default" role="button" >Sign Up as a Worker    <AiOutlineArrowRight/></a>
    </div>
  </div>
</div>                    
 </div> 
</section> 
<Footer/>
</div>

    )
}

export default Homepage
