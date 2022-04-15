
import React, { Component } from 'react';

import List from './Listp';
import axios from 'axios';
import { Form,Option,Button,Container,Navbar,Nav,NavDropdown,Row,Col  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Sidebar from './sidebar';
import "./addservices.css"
class   Addservices extends Component {
  constructor() {
    super();
    this.state = {
      x:[],
      name:"",
      pic:"",
      service:""

    };
  }


  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.valueAsNumber || e.target.value });
  };
    onSubmit = e => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      pic:this.state.pic
      
      };
      console.log(data)



      
    axios
      .post('/api/auth/services/', data)
      .then(res => {
        
      
      
        })
        .catch(err => {
          this.setState({error:err.response.data.error});
        })
      };
    

    onclick=e=>{
      const data = {
        service: this.state.service
        
        };
        console.log(data)
        //console.log(id);
  axios
  .post('/api/auth/delete/',data)
  .then(res => {
    
  
  
    })
    .catch(err => {
      console.log(err);
    })
    }

   componentDidMount(){

    


    

  

    

    axios
      .get('/api/auth/getservices/')
      .then(res => {
          
        this.setState({
      x: res.data
        
      
        })
        

        

        
        
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
      );
    }
    
    
      
    return (
      <div className='roww'>
      <div className='col-md-6 col-10 mx-auto'>

      <form onSubmit={this.onSubmit} className='llogform' style={{width:"100%"}}>
        <div className='addserv'>
        <h3 className="register-screen__title">Add Service</h3>

        <div className="form-group" >
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.onChange}
            
          />
        </div>
        
        
        <div className="form-group addgrpp">
          
          <input
            type="text"
            
            name="pic"
            placeholder="pic"
            value={this.state.pic}
            onChange={this.onChange}
            
          />
  
  <button type={this.onSubmit} class="btn add_btn btn-warning ml-0">
          Add
        </button>
        </div>

        </div>
        <div style={{marginTop:"10%"}}></div>
        <div className='addserv'>
        <h3 className="register-screen__title">Delete Service </h3>
        
        <div className="form-group addgrpp">
          
          <input
            type="text"
            
            name="category"
            placeholder="service"
            value={this.state.category}
            onChange={this.onChange}
            
          />
          
        <button onClick={this.onclick} class="btn add_btn btn-warning ml-0">
          Delete
        </button>
        </div>  
             
          </div>

</form>

</div>
</div>
)}}
    
export default Addservices