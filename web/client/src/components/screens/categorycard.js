import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Form,Option,Button,Container,Navbar,Nav,NavDropdown,Row,Col,ListGroup  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import "./App.css"
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


  
  <div class="card 1">
    <div class="card_imageppp colorplplpl"> </div>
    <div class="card_title title-white">
      <p>{book.name}</p>
      <Button  style={{backgroundColor:'#4bacb8'}} className='pl'>Light</Button>{' '}
    </div>
  </div>
  




  



  

    

    return(
        <div>{send}</div>
    )
};

export default BookCard;