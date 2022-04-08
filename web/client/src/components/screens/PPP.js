
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from './Listp';
import axios from 'axios';
import { Form,Option,Button,Container,Navbar,Nav,NavDropdown,Row,Col  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"


class PPPP extends Component {
  constructor() {
    super();
    this.state = {
      x:[]
    };
  }




   componentDidMount(){

    


    

  

    

    axios
      .get('/api/auth/getservices')
      .then(res => {
          
        this.setState({
      x: res.data
        
      
        })
        

        

        
        
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
                <Navbar variant="dark" className=" bgqqq ml-0  border-4 color" expand="md">
  <Container className="ms-0">
    <Navbar.Brand className="text-light" href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto text-light">
        <Nav.Link  className="text-light" href="/login">Home</Nav.Link>
        <Nav.Link  className="text-light" href="/QQQ">societies</Nav.Link>
        <Nav.Link  className="text-light" href="/Listq">list</Nav.Link>
    </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<h1><em>Services</em></h1>

<div class="cards-list">

    {bookList}

    </div>
    



</div>
  )}}
    
export default PPPP;