import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from './categorycard';
import axios from 'axios';
import { Form,Option,Button,Container,Navbar,Nav,NavDropdown,Row,Col  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../screens/styles/update_profile.css'
import {WorkerViewsCustomer} from './workerViewsCustomer';
import "./workerorderdetail.css"

class placeorder extends Component {
  constructor() {
    super();
    this.state = {
      x:[],
      time:"",
      information:""
    };

}



ppp = e => {
    


    axios
      .post('/api/auth/orderstatuscompleted/'+this.props.match.params.q)
      .then(res => {


        

        
        
        
      })
      .catch(err => {
        this.setState({error:err.response.data.error});
      })
    }

  qqqq = e => {
    


    axios
      .post('/api/auth/orderstatus/'+this.props.match.params.q)
      .then(res => {


        

        
        
        
      })
      .catch(err => {
        this.setState({error:err.response.data.error});
      })
    }
    render(){    


  return (
      <div>
        <WorkerViewsCustomer/>

        <div class="d-flex col-md-11 justify-content-end p-0 mt-0">
            <button onClick={this.qqqq} className="btn mb-4  btn-contt btn-warning">
               Accept Request
           </button>
           <button onClick={this.ppp} className="btn mb-4 ml-3 ab mr-5 btn-contt btn-primary default">
               Mark Completed
          </button>
        </div>

</div>
  )

  }}
export default placeorder;