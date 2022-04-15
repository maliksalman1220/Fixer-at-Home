

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from './workerordercard';
import axios from 'axios';
import { Form,Option,Button,Container,Navbar,Nav,NavDropdown,Row,Col  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ordercard.css"
import { auto } from '@popperjs/core';


class order extends Component {
  constructor() {
    super();
    this.state = {
      x:[]
    };
  }




   componentDidMount(){

    

   
    axios
      
      .post('/api/auth/getworkerorder/'+this.props.match.params.q)
      .then(res => {
          
        this.setState({
      x: res.data
        
      
        })
        

        

        
        
      })
      .catch(err=>{console.log(err)})
      
  };

  qqqq = e => {
    e.preventDefault();

    

    axios
      .put('/api/auth/qqqq/')
      .then(res => {


        

        
        
        
      })
      .catch(err => {
        this.setState({error:err.response.data.error});
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
      );}
    
    
      
    return (
      
  <div>
  <ul class="mx-auto tablebody" style={{width: "60%", marginTop: "10%"}}>
      <li class="table-headerR ">
        <div >Worker Name</div>
        <div >Amount</div>
        <div >Status</div>
        <div >Order Detail</div>
        </li>
          {bookList}
      </ul>
  </div>

      /* <table class="table mx-auto" style={{width: "60%", marginTop: "10%"}}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th  scope="col">Worker Name</th>
      <th  scope="col">Amount</th>
      <th  scope="col">Status</th>
      <th  scope="col" >Order Detail</th>
    </tr>
  </thead>
  <tbody>
    {bookList}
  </tbody>
</table> */


  )}}
    
export default order;