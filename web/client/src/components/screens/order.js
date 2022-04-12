
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from './ordercard';
import axios from 'axios';
import { Form,Option,Button,Container,Navbar,Nav,NavDropdown,Row,Col  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ordercard.css"


class order extends Component {
  constructor() {
    super();
    this.state = {
      x:[]
    };
  }




   componentDidMount(){

    

   
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
                



<div class="cards-list">
<ul class="responsive-table" style={{width:870}}>
    <li class="table-header">
      <div class="col col-1">worker name</div>
      <div class="col col-2">amount</div>
      <div class="col col-3">status</div>
      </li>
    {bookList}
    </ul>

    </div>
    



</div>
  )}}
    
export default order;