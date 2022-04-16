import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Form,Option,Button,Container,Navbar,Nav,NavDropdown,Row,Col,ListGroup  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import "./catagorycard.css"
import { Card } from 'react-bootstrap';
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
    let send=

  <div class="card ccard">
    <h5 class=" text-center ccard-title">{book.name}</h5>
    <a  href={`/worker/${book.name}`} class="btn cbtn btn-warning">Select</a>
  </div>
    return(
        <div>{send}</div>
    )
};

export default BookCard;