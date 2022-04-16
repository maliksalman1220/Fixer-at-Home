import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from './categorycard';
import axios from 'axios';
import { Form,Option,Button,Container,Navbar,Nav,NavDropdown,Row,Col  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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
          <button onClick={this.qqqq} className="btn btn-success">
          Add
        </button>

</div>
  )

  }}
export default placeorder