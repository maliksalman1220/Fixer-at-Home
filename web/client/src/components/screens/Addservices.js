
import React, { Component } from 'react';

import List from './Listp';
import axios from 'axios';
import { Form,Option,Button,Container,Navbar,Nav,NavDropdown,Row,Col  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import "./styles/addService.css"


class   Addservices extends Component {
  constructor() {
    super();
    this.state = {
      x:[],
      name:"",
      pic:"",
      service:""

    };
  }


  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.valueAsNumber || e.target.value });
  };
    onSubmit = e => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      pic:this.state.pic
      
      };
      console.log(data)



      
    axios
      .post('/api/auth/services/', data)
      .then(res => {
        
      
      
        })
        .catch(err => {
          this.setState({error:err.response.data.error});
        })
      };
    

    onclick=e=>{
      const data = {
        service: this.state.service
        
        };
        console.log(data)
        //console.log(id);
  axios
  .post('/api/auth/delete/',data)
  .then(res => {
    
  
  
    })
    .catch(err => {
      console.log(err);
    })
    }

   componentDidMount(){

    


    

  

    

    axios
      .get('/api/auth/getservices/')
      .then(res => {
          
        this.setState({
      x: res.data
        
      
        })
        

        

        
        
      })
      
  };

  
      
    

  render() {
    const books = this.state.x
    console.log("PrintBook: " + books);
    let bookList;

    if(!books) {
      bookList = "there is no book recored!";
    } else {
        
      bookList = books.map((book, k) =>
        <List book={book} key={k} />
      );
    }
    
    
      
    return (

      <div>
                


    <div class="container mt-5 mb-5 addgrp">
    <div class="row">
  
      <form onSubmit={this.onSubmit} className='form-group addgrpp' style={{width:"80%", marginLeft:"10%", marginTop:"10%"}}>
        <div className=' add'>
        <h3 className="register-screen__title">Add Service</h3>

        <div className="form-group addgrpp" >
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.onChange}
            
          />
        </div>
        
        
        <div className="form-group addgrpp">
          
          <input
            type="text"
            
            name="pic"
            placeholder="pic"
            value={this.state.pic}
            onChange={this.onChange}
            
          />
        </div>

        <button type={this.onSubmit} class="btn rr-btn btn-warning ml-2">
          Add
        </button>
        </div>
        <div style={{marginTop:89}}></div>
        <div className='container del'>
        <h3 className="register-screen__title">Delete Service </h3>
        
        <div className="form-group addgrpp">
          
          <input
            type="text"
            
            name="category"
            placeholder="service"
            value={this.state.category}
            onChange={this.onChange}
            
          />
        </div>       
        <button onClick={this.onclick} class="btn rbtn btn-primary default">
          Delete
        </button>
          </div>
        <span className="register-screen__subtext">
          
        </span>
   


    


</form>
</div>
</div>
</div>
)}}
    
export default Addservices