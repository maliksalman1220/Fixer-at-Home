import React from 'react'
import NavbarCustomer from './navbarCustomer';
import { useState } from 'react';
import "./styles/RegisterScreen.css";
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Footer from './footer';

function Rating() {
  const params = useParams();
  const [rating, setrating] = useState("");
  const history = useHistory();

  async function sendRating(e) {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/auth/rating/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: params.q,
        rating: rating, 
      }),
    })
    const data = await response.json();
    if (data.status === 'ok') {
      console.log("Updated Successfully")
      history.push('/homecust');
    }
    else {
      console.log(data.error);
    }

  }


  return (
    <div>
      <NavbarCustomer />
      <div>
        <form className='containss logform mt-5' style={{ width: "30%", marginLeft: "35%", marginTop: "10%" }}>

          <fieldset class="" >
            <h4 style={{borderBottom:"1px solid black", width: "100%", fontFamily:"Poppins"}} class="text-center mt-0 mb-5" for="gridRadios1">
              Rating
            </h4>

            <div class="row  d-flex justify-content-left">
              <div class="col-sm-10">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="1" onChange={(e) => setrating(e.target.value)} />
                  <label class="form-check-label" for="gridRadios1">
                    1 Star
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="2" onChange={(e) => setrating(e.target.value)} />
                  <label class="form-check-label" for="gridRadios2">
                    2 Stars
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="3" onChange={(e) => setrating(e.target.value)} />
                  <label class="form-check-label" for="gridRadios1">
                    3 Stars
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="4" onChange={(e) => setrating(e.target.value)} />
                  <label class="form-check-label" for="gridRadios1">
                    4 Stars
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="5" onChange={(e) => setrating(e.target.value)} />
                  <label class="form-check-label" for="gridRadios1">
                    5 Stars
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <div className='d-flex justify-content-center'>
          <button class=" btn h_btnso btn-warning col col-5" onClick={sendRating}> Rate</button>
          </div>
        </form>

      </div>
      <Footer/>
    </div>

  )
}

export default Rating