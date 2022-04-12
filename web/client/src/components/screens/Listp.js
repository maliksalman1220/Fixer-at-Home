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


  
  // <div class="card lcardd 1 ">
  //   <div class="card_image listimg color divv"> <img src= {book.pic} contrast/> </div>
  //   <div class="card_title lcard_title  title-white divv">
  //     <p>{book.name}</p>
  //     <Button  className='pl lpl lcolor'><Link to={`/category/${book.name}`}>q</Link></Button>{' '}
  //   </div>
  // </div>
  
<div class="card lcard">
  <img src={book.pic} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title lcard-title">{book.name}</h5>
    <a href={`/category/${book.name}`} class="btn lbtn btn-warning">Select</a>

  </div>
</div>

    return(
        <div>{send}</div>
    )
};

export default BookCard;