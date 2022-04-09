import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from './addworkercard';
import axios from 'axios';
import { Form,Option,Button,Container,Navbar,Nav,NavDropdown,Row,Col  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"


class addworkerlist extends Component {
  constructor() {
    super();
    this.state = {
      x:[]
    };
  }




   componentDidMount(){

    


    

  

    

    axios
      
      .get('/api/auth/getworkerp/')
      .then(res => {
          
        this.setState({
      x: res.data
        
      
        })
        
console.log(this.state.x)
        

        
        
      })
      
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
                
<h1><em>Categories</em></h1>

<div class="cards-list">

    {bookList}

    </div>
    



</div>
  )}}
    
export default addworkerlist;