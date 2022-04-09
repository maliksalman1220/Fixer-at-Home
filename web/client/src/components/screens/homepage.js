import React from 'react'
import "../screens/styles/homepage.css"
import image from "../screens/styles/mainimage.png"

function Homepage() {
  return (
    <section class="slider">
	<div class="my_container" >
		<div class="row">
            <div class="col-lg-9 col-md-10">
				
                <div class="block">
                <h1 class="animated htext htextu fadeInUp mb-1">Fixer At Home</h1>
                <span class="d-block htext h-font mb-3 text-capitalize">Something needs to be fixed? No worries because Mr fixer is right at your doorstep!</span>
                <div class="col-md-12 btn-cont  p-1 text-left">
                <a href="/registerp" class="btn h_btnsl btn-warning" role="button" >Get Started</a>
                <a href="/services" class="btn h_btns btn-primary default" role="button" >Services</a>
            </div>
				</div>
			</div>
		</div>
	</div>
</section>

    )
}

export default Homepage