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


const workerordercard = (props) => {

    const  book  = props.book;
    let send
    if (book.status=="pending")
    
    {send=

  
  
 

   
    <li class="table-row">
      <div class="col col-1" data-label="Job Id">{book.workername}</div>
      <div class="col col-2" data-label="Customer Name">{book.price}</div>
      <div class="col col-3 coloryellowp " data-label="Amount">{book.status}</div>
      <div class="col col-4 " data-label="Amount"><a href={`/workerorderdetail/${book._id}`}>detailp</a></div>
    </li>}
    else if(book.status=="accepted") {send=

  
  
 

   
    <li class="table-row">
      <div class="col col-1" data-label="Job Id">{book.workername}</div>
      <div class="col col-2" data-label="Customer Name">{book.price}</div>
      <div class="col col-3 colorbluep"data-label="Amount">{book.status}</div>
      <div class="col col-4" data-label="Amount"><a href={`/workerorderdetail/${book._id}`}>detailp</a></div>
      
    </li>}










else{
send=
<li class="table-row">
<div class="col col-1" data-label="Job Id">{book.workername}</div>
<div class="col col-2" data-label="Customer Name">{book.price}</div>
<div class="col col-3 colorgreenp"data-label="Amount">{book.status}</div>
<div class="col col-4" data-label="Amount"><a href={`/workerorderdetail/${book._id}`}>detailp</a></div>

</li>}
   
  

    return(
        <div>{send}</div>
    )
};
export default workerordercard