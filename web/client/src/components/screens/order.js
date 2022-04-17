
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from './ordercard';
import axios from 'axios';
import { Form,Option,Button,Container,Navbar,Nav,NavDropdown,Row,Col  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ordercard.css"
import SidebarCustomer from './sidebarCustomer';
import NavbarCustomer from './navbarCustomer';

class order extends Component {
  constructor() {
    super();
    this.state = {
      x:[]
    };
  }




   componentDidMount(){

    
   
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        };
  
      
           axios.get("/api/private", config)
          
        .catch =(error) => {
          console.log(error.response)
          
          
        }
   
    axios
      
      .post('/api/auth/getorder/'+this.props.match.params.q)
      .then(res => {
          
        this.setState({
      x: res.data
        
      
        })
        

        

        
        
      })
      .catch(err=>{console.log(err)})
      
  };

  qqqq = e => {
    e.preventDefault();

    

    axios
      .put('/api/auth/qqqq/')
      .then(res => {


        

        
        
        
      })
      .catch(err => {
        this.setState({error:err.response.data.error});
      })
    };

  render() {
    const books = this.state.x
    console.log("PrintBook: " + books);
    let bookList;

    if(!books) {
      bookList = "there is no book recored!";
    } else {
        
      bookList = books.map((book, k) =>
        <List book={book} key={k} />
      );}
    
    
      
    return (
      <div>
        <NavbarCustomer/>
      <div className='rowC' >
      <SidebarCustomer/>
     <div className='mx-auto' style={{width: "100%", marginTop: "1%"}}> 
     <h3 className="register-screen__title mt-3 d-flex justify-content-center" style={{fontWeight:'bold'}}>Order Details</h3>
     <div class="cards-list">
       <ul class="responsive-table mx-auto" style={{width:'70%', marginTop: "2%"}}>
           <li class="table-header hlist">
             <div class="col col-1 tcol-1">Worker name</div>
             <div class="col col-2 tcol-2">Amount</div>
             <div class="col col-3 tcol-3">Status</div>
             {/* <div class="col col-3 tcol-3">Order Details</div> */}
             </li>
           {bookList}
           </ul>
       
           </div>
      </div>
  </div>
  </div>
  )}}
    
export default order;