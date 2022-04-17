import React from 'react'
import NavbarCustomer from './navbarCustomer'
import "./styles/RegisterScreen.css";

function Rating() {
  return (
      <div>
          <NavbarCustomer/>
    <div>
    <form className='containss logform mt-5' style={{width:"30%", marginLeft:"35%", marginTop:"10%"}}>
  
  <fieldset class="" >
  <h4 class="text-center mt-0 mb-5" for="gridRadios1">
            Rating
          </h4>

    <div class="row">
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
          <label class="form-check-label" for="gridRadios1">
            1 Star
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
          <label class="form-check-label" for="gridRadios2">
          2 Stars
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
          <label class="form-check-label" for="gridRadios1">
          3 Stars
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
          <label class="form-check-label" for="gridRadios1">
          4 Stars
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
          <label class="form-check-label" for="gridRadios1">
          5 Stars
          </label>
        </div>
      </div>
    </div>
  </fieldset>
  
  <a class=" btn h_btnso btn-warning col col-5" href={""}> Rate</a>
 
</form>

    </div>
    </div>

  )
}

export default Rating