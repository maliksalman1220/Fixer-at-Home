import React from 'react';
import { Link } from 'react-router-dom';
import '../screens/styles/worker.css'
import axios from 'axios';
import { Form,Option,Button,Container,Navbar,Nav,NavDropdown,Row,Col,ListGroup  } from 'react-bootstrap';
import {CgProfile} from "react-icons/cg";
import { Component } from 'react';
/*  */
import "./addworkercard.css" 

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
    <div class="image"> <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" class="rounded wimage" width="110"/> </div>
             <div class="ml-3 cardinsidew">
                <h4 class="mb-0 mt-0 ctext">{book.firstname}</h4>
                
                <div class="p-2 mt-1 mb-1 bg-primary d-flex justify-content-between rounded text-white stats" >
                    <div class="d-flex flex-column"> <span class="articles">Price Range: </span> <span class="number1">Rs 145-200</span> </div>
                </div>
                <div class="button mt-0 d-flex flex-row align-items-center"> 
         <a class="btn workercard_button2 btn-sm btn-primary  ml-3" href={`/viewprofile/${book._id}`}>View Profile</a>

            </div>
        </div>

        {/* // <div class="card worker_card p-3 ">
        //     <div class="d-flex align-items-center">
        //         <div class="image">
        //              <CgProfile size={50} />
        //               </div>
        //         <div class="ml-3">
        //             <h4 class="mb-0 mt-0">{book.firstname}</h4>
                    
        //             <div class="p-2 mt-auto mb-auto bg-primary d-flex justify-content-between rounded text-white stats">
        //                 <div class="d-flex flex-column"> <span class="articles">Price Range: </span> <span class="number1">Rs 145-200</span> </div>
        //             </div>
        //             <div class="button mt-0 d-flex flex-row align-items-center"> 
                    
        //         </div>
        //         <a class="btn workercard_button2 btn-sm btn-primary" href={`/viewprofile/${book._id}`}>View Profile</a>
        //         </div>

        //     </div>
*/}
        </div> 

        
    
    

  




  



  

    

    return(
        <div>{send}</div>
    )
};
export default BookCard;