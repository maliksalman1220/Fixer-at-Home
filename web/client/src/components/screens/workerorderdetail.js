import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from './categorycard';
import axios from 'axios';
import { Form,Option,Button,Container,Navbar,Nav,NavDropdown,Row,Col  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import '../screens/styles/update_profile.css'
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
          <button onClick={this.qqqq} className="btn btn-success">
          Add
        </button>
        
          <button onClick={this.ppp} className="btn btn-success">
          Add
        </button>

</div>
  )

  }}
export default placeorder;