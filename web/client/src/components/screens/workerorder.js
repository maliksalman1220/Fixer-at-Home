

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from './workerordercard';
import axios from 'axios';
import { Form,Option,Button,Container,Nav,NavDropdown,Row,Col  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ordercard.css"
import SidebarWorker from './sidebarworker';
import Navbar from './navbar';

class Order extends Component {
  constructor() {
    super();
    this.state = {
      x:[]
    };
  }




   componentDidMount(){

    

   
    axios
      
      .post('/api/auth/getworkerorder/'+this.props.match.params.q)
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
      <Navbar/>
    <div className='rowC' >


      <div className='sidebar-div'>
    <SidebarWorker/>
    </div>

    <div className='mx-auto content-div' style={{width: "100%", marginTop: "1%"}}> 
    <h3 className="register-screen__title mt-3 d-flex justify-content-center" style={{fontWeight:'bold'}}>Order History</h3>
    <div class="cards-list">
      <ul class="responsive-table mx-auto" style={{width:'70%', marginTop: "5%"}}>
          <li class="table-header hlist">
            <div class="col col-1 tcol-1">Customer name</div>
            <div class="col col-2 tcol-2">Amount</div>
            <div class="col col-3 tcol-3">Status</div>
            <div class="col col-3 tcol-3">Order Details</div>
            </li>
          {bookList}
          </ul>
      
          </div>
     </div>

    </div>

</div>
  )}}
    
export default Order;