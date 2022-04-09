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



        <div class="card worker_card p-3 ">
            <div class="d-flex align-items-center">
                <div class="image"> <img src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" class="rounded" width="155"/> </div>
                <div class="ml-3 w-100">
                    <h4 class="mb-0 mt-0">{book.firstname}</h4>
                    
                    <div class="p-2 mt-auto mb-auto bg-primary d-flex justify-content-between rounded text-white stats">
                        <div class="d-flex flex-column"> <span class="articles">Price Range: </span> <span class="number1">Rs 145-200</span> </div>
                    </div>
                    <div class="button mt-0 d-flex flex-row align-items-center"> 
                    
                    <a class="btn workercard_button2 btn-sm btn-primary  ml-3 w-100" href={`/viewprofile/${book._id}`}>View Profile</a> </div>
                </div>
            </div>
        </div>

        
    
    

  




  



  

    

    return(
        <div>{send}</div>
    )
};
export default BookCard;