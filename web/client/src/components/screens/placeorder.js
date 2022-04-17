import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from './categorycard';
import axios from 'axios';
import { Form,Option,Button,Container,Navbar,Nav,NavDropdown,Row,Col  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./App.css"
import '../screens/styles/update_profile.css'
import NavbarCustomer from './navbarCustomer';
class placeorder extends Component {
  constructor() {
    super();
    this.state = {
      x:[],
      time:"",
      information:""
    };

}





  qqqq = e => {


    const data={
        time:"3",
        information:"ppp",
        client:JSON.parse(localStorage.getItem('user'))
    }

    axios
      .post('/api/auth/order/'+this.props.match.params.q,data)
      .then(res => {







      })
      .catch(err => {
        this.setState({error:err.response.data.error});
      })
    }
    render(){    


  return (

    <div>
      <NavbarCustomer/>
    <div className='contain col-md-6 col-10 mx-auto' style={{ }}>
      <form 
       className='form-group'
      style={{width:"70%", marginLeft:"15%", marginTop:"6%"}}>
      <h3 className = "text-center" style={{fontFamily: "Poppins,sans-serif", fontWeight:"bold", marginBottom:"6%"}}> Select Time and Date </h3> 
         <div class="mb-3">
         <label class="form-label" style={{ fontSize:"20px"}} for="formGroupInput">Time</label>
          <input class="form-control"
            type="time"
            required
            id="firstname"
            placeholder="Enter First name"
          />
        </div>

         <div class="mb-3">
         <label class="form-label" style={{ fontSize:"20px"}} for="formGroupInput">Date</label>
          <input class="form-control"
            type="date"
            required
            id="firstname"
            placeholder="Enter First name"
          />
        </div>

        <div class="mb-3">
        <label class="form-label" style={{ fontSize:"20px"}} >Message</label>
        <textarea class="form-control"
        rows="3"
        placeholder="  Write your message here"

        ></textarea>
        </div>

        {/* <div class="mb-3 text-right">
        <button onClick={this.qqqq} className="btn add_btn btn-warning ml-0">
           Confirm Booking
        </button>
          </div> */}

            </form>
      <div className='d-flex justify-content-center'>
          <button onClick={this.qqqq} style={{backgroundColor:"#004c8c", width:"50%"}} className="btn btn-success">
          Place Order
        </button>

</div>
</div>
</div>
  )

  }}
export default placeorder