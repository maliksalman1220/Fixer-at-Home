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

//     <Card onClick={onClick} style={{ cursor: "pointer" }}>
//   <p>This is a clickable card.</p>
// </Card>
  <div class="card ccard" onClick={`/worker/${book.name}`}>
    {/* <div class="card_imageppp colorplplpl divv"> </div> */}
    {/* <div class="card-body cbody"> */}
    <h5 class=" text-center ccard-title">{book.name}</h5>
    {/* <a  href={`/worker/${book.name}`} class="btn cbtn btn-warning">Select</a> */}
    {/* </div> */}

    
  </div>
    return(
        <div>{send}</div>
    )
};

export default BookCard;