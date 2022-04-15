import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Form,Option,Button,Container,Navbar,Nav,NavDropdown,Row,Col,ListGroup,Table  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import "./ordercard.css"
const onClick=(id)=>{
  console.log(id);
  axios
  .post('/api/auth/delete/'+id)
  .then(res => {
    
  
  
    })
    .catch(err => {
      console.log(err);
    })
  };


const BookCard = (props) => {

    const  book  = props.book;
    let send
    if (book.status=="pending")
    
    {send=

  
  
 

   
    <li class="table-row">
      <div class="col col-1" data-label="Job Id">{book.workername}</div>
      <div class="col col-2" data-label="Customer Name">{book.price}</div>
      <div class="col col-3 colrp " data-label="Amount"> {book.status}</div>
      
    </li>}
    else {send=

    <li class="table-row">
      <div class="col col-1" data-label="Job Id">{book.workername}</div>
      <div class="col col-2" data-label="Customer Name">{book.price}</div>
      <div class="col col-3 "style={{color:111111}} data-label="Amount">{book.status}</div>
      
    </li>}
   
  

    return(
        <div>{send}</div>
    )
};

export default BookCard;