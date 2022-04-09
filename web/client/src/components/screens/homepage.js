import React from 'react'
import "../screens/styles/homepage.css"
import image from "../screens/styles/mainimage.png"

function Homepage() {
  return (
    // <>
    // <section id="header" className=''>
    // <div className='container-fluid nav_bg'>
    //     <div className='row'>
    //         <div className='col-10 mx-auto'>
    //         <div className='row'>
    //         <div className='mt-5 col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>
    //             <h1> <strong>Fixer At Home</strong> </h1>
    //             <h2 className='my-3'>
    //                 WE are talented
    //             </h2>
    //             <div className='mt-3'>
    //                 <button> Click</button>
    //             </div>
    //         </div>    
    //         </div>
    //         <div className='col-lg-6 order-1 order-lg-2 header-img'>
    //             <img src={image} className='img-fluid animated' alt=""/>
    //         </div>
    //         </div>
    //     </div>
    // </div>

    // </section>
    // </> 
    <section class="slider">
	<div class="my_container">
		<div class="row">
			<div class="col-lg-9 col-md-10">
				<div class="block">
					<span class="d-block mb-3 text-capitalize">Prepare for new future</span>
					<h1 class="animated fadeInUp mb-5">Our work is presentation of ourcapabilities.</h1>
					<a href="#" class="btn btn-main animated fadeInUp btn-round-full" aria-label="Get started">Get started<i class="btn-icon fa fa-angle-right ml-2"></i></a>
				</div>
			</div>
		</div>
	</div>
</section>
    )
}

export default Homepage