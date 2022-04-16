import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from './categorycard';
import axios from 'axios';
import { Form,Option,Button,Container,Navbar,Nav,NavDropdown,Row,Col  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../screens/styles/update_profile.css'
import {WorkerViewsCustomer} from './workerViewsCustomer';

class viewprofile extends Component {
  constructor() {
    super();
    this.state = {
      x:[]
    };
  }




   componentDidMount(){

    


    

  

    

    axios
      
      .get('/api/auth/getworkerdetail/'+this.props.match.params.q)
      .then(res => {
          
        this.setState({
      x: res.data
        
      
        })
        

        
console.log(this.state.x,"ppppppppppp")
        
        
      })
      
  };

  qqqq = e => {
    

    

    axios
      .get('/api/auth/addworker/'+this.props.match.params.q)
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
          Approve 
        </button>  
        </div>

          

</div>
  )

  }}
export default viewprofile