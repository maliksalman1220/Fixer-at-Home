
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from './Listp';
import axios from 'axios';
import { Form,Option,Button,Container,Navbar,Nav,NavDropdown,Row,Col  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Listp.css"
import NavbarCustomer from './navbarCustomer';


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
        <NavbarCustomer/>
                
   <div className='services'> 
   <div class="aligncenter">
           <p><img width="27" height="27" src="https://jtkh01kfq943190ei48njh7k-wpengine.netdna-ssl.com/wp-content/uploads/2018/04/title-img.png" /></p>
           <h2 className='lfontu'>Popular Services</h2>
           <h3 className='lfont'>What we Can Do</h3>
          </div></div>
   
    <div class="cards-list lcards-list">

    {bookList}

    </div>


</div>
  )}}
    
export default PPPP;