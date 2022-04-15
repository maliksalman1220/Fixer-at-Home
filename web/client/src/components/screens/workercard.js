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
    let send=

<div class="container workercard_container mt-5 d-flex justify-content-left">
    {/* <div class="card worker_card p-3"> */}
    <div class="image"> <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" class="rounded wimage" width="110"/> </div>
             <div class="ml-3">
                <h4 class="mb-0 mt-0 ctext">{book.firstname}</h4>
                <p class="mb-0 card__sender__rating card__sender__rating-4">
                    <span class="card__sender__rating__star">&#9733;</span>
                    <span class="card__sender__rating__star">&#9733;</span>
                    <span class="card__sender__rating__star">&#9733;</span>
                    <span class="card__sender__rating__star">&#9733;</span>
                    <span class="card__sender__rating__star">&#9733;</span>
                  </p>
                <div class="p-2 mt-auto mb-auto bg-primary d-flex justify-content-between rounded text-white stats">
                    <div class="d-flex flex-column"> <span class="articles">Price Range: </span> <span class="number1">Rs 145-200</span> </div>
                </div>
                <div class="button mt-0 d-flex flex-row align-items-center"> 
               <Button class="btn  workercard_button btn-sm btn-outline-primary mr-3 w-100" href={`/placeorder/${book._id}`}>Request</Button> 
                <button class="btn workercard_button2 btn-sm btn-primary  ml-3">View Profile</button> </div>
            </div>
        </div>

        // <div class="card worker_card p-3 ">
        //     <div class="d-flex align-items-center">
        //         <div class="image"> <img src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" class="rounded" width="155"/> </div>
        //         <div class="ml-3 w-100">
        //             <h4 class="mb-0 mt-0">{book.firstname}</h4>
        //             <p class="mb-0 card__sender__rating card__sender__rating-3">
        //                 <span class="card__sender__rating__star">&#9733;</span>
        //                 <span class="card__sender__rating__star">&#9733;</span>
        //                 <span class="card__sender__rating__star">&#9733;</span>
        //                 <span class="card__sender__rating__star">&#9733;</span>
        //                 <span class="card__sender__rating__star">&#9733;</span>
        //               </p>
        //             <div class="p-2 mt-auto mb-auto bg-primary d-flex justify-content-between rounded text-white stats">
        //                 <div class="d-flex flex-column"> <span class="articles">Price Range: </span> <span class="number1">Rs 145-200</span> </div>
        //             </div>
        //             <div class="button mt-0 d-flex flex-row align-items-center"> 
        //             <Button class="btn  workercard_button btn-sm btn-outline-primary mr-3 w-100" href={`/placeorder/${book._id}`}>Request</Button> 
        //             <button class="btn workercard_button2 btn-sm btn-primary  ml-3 w-100">View Profile</button> </div>
        //         </div>
        //     </div>
        // </div>

        
    
    

  




  



  

    

    return(
        <div>{send}</div>
    )
};
export default BookCard;