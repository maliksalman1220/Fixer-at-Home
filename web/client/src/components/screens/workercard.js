import React from 'react';
import { Link } from 'react-router-dom';
import '../screens/styles/worker.css'
import axios from 'axios';
import { Form,Option,Button,Container,Navbar,Nav,NavDropdown,Row,Col,ListGroup  } from 'react-bootstrap';

import { Component } from 'react';

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
    var rating = 0;
    if (book.rating === undefined) {
      rating = 0;
    }
    else {
      rating = book.rating;
    }
    var ptag = "mb-0 card__sender__rating card__sender__rating-"+rating;

    let Stars = React.createElement(
      "p", 
      { className: "mb-0 card__sender__rating card__sender__rating-"+rating }, 
      React.createElement("span", { className: "card__sender__rating__star" }, "\u2605"),
      React.createElement("span", { className: "card__sender__rating__star" }, "\u2605"),
      React.createElement("span", { className: "card__sender__rating__star" }, "\u2605"),
      React.createElement("span", { className: "card__sender__rating__star" }, "\u2605"),
      React.createElement("span", { className: "card__sender__rating__star" }, "\u2605"),
    );    
    let send=

<div class="container workercard_container mt-5 d-flex justify-content-left">
    <div class="image"> <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" class="rounded wimage" width="110"/> </div>
             <div class="ml-3">
                <h4 class="mb-0 mt-0 ctext" style={{fontSize:"20px"}}>{book.firstname}</h4>
                  {Stars}
                  {/* <p className='mb-0 card__sender__rating card__sender__rating-4'>
                    <span class="card__sender__rating__star">&#9733;</span>
                    <span class="card__sender__rating__star">&#9733;</span>
                    <span class="card__sender__rating__star">&#9733;</span>
                    <span class="card__sender__rating__star">&#9733;</span>
                    <span class="card__sender__rating__star">&#9733;</span>
                  </p> */}
                <div class="p-2 mt-auto mb-auto bg-primary d-flex justify-content-between rounded text-white stats">
                    <div class="d-flex flex-column"> <span class="articles">Price Range: </span> <span class="number1">Rs 145-200</span> </div>
                </div>
                <div class="button mt-0 d-flex flex-row align-items-center"> 
               <a href={`/placeorder/${book._id}`} style={{backgroundColor:"rgb(255, 208, 0)"}} class="btn workercard_button2 btn-sm btn-primary  ml-3">Request</a>
               <a href={`/workerprofile/"${book._id}"`} class="btn workercard_button2 btn-sm btn-primary  ml-3">View Profile</a>
            </div>
        </div>
</div>

    return(
        <div>{send}</div>
    )
};
export default BookCard;