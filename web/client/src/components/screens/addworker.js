import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from './addworkercard';
import axios from 'axios';
import { Form,Option,Button,Container,Navbar,Nav,NavDropdown,Row,Col  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./addworker.css"


class Addworkerlist extends Component {
  constructor() {
    super();
    this.state = {
      x:[],
      error:"",
    };
  }




   componentDidMount(){

    


  

    
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };
try{
  
       axios.get("http://localhost:5000/api/private/Admin", config)
       .catch(err=>{console.log(err)})
      .then(res=>{if(res.data.error!=""){console.log(res.data.error);this.setState({error:res.data.error})}})
}
      
    catch (error) {
      console.log(error,"p")
      
      
  

    

  
      
  };


  

    

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
    
    
      
      return this.state.error ? (
        <span className="error-message">{this.state.error}</span>
      ) : (
      <div>
    <h3 className="wregister-screen__title">Approve Workers</h3>

    {/* <h2> Approve Worker Requests </h2> */}

    <div class="mcards-list">
    {bookList}

    </div>
    </div>
  )}}
    
export default Addworkerlist;