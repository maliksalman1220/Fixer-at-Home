import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from './categorycard';
import axios from 'axios';
import { Form,Option,Button,Container,Navbar,Nav,NavDropdown,Row,Col  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import '../screens/styles/update_profile.css'
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
          <button onClick={this.qqqq} className="btn btn-success">
          Add
        </button>

</div>
  )

  }}
export default viewprofile