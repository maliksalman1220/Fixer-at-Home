
import React, { Component } from 'react';

import List from './categorycard';
import axios from 'axios';
import { Form,Option,Button,Container,Navbar,Nav,NavDropdown,Row,Col  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./addcatagory.css"
import Sidebar from './sidebar';
// import "./sidebar"


class   Addcategories extends Component {
  constructor() {
    super();
    this.state = {
      x:[],
      name:"",
      service:"",
      category:"",error:""

    };
  }


  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.valueAsNumber || e.target.value });
  };
    onSubmit = e => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      service:this.state.service,
     
      
      };
      console.log(data)



      
    axios
      .post('/api/auth/categories', data)
      .then(res => {
        
      
      
        })
        .catch(err => {
          this.setState({error:err.response.data.error});
        })
      };
    

    onclick=e=>{
      const data = {
        category: this.state.category
        
        };
        console.log(data)
        //console.log(id);
  axios
  .post('/api/auth/deletecategory',data)
  .then(res => {
    
  
  
    })
    .catch(err => {
      console.log(err);
    })
    }

   componentDidMount(){

    
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };
try{
  
       axios.get("/api/private/Admin", config)
       .catch(err=>{console.log(err)})
      .then(res=>{if(res.data.error!=""){console.log(res.data.error);this.setState({error:res.data.error})}})
}
      
    catch (error) {
      console.log(error,"p")
      
      
  

    

  
      
  };}

  
      
    

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
    
    
      
    return this.state.error ? (
    <span className="error-message">{this.state.error}</span>
  ) : (

      <div className='roww'>
      <div className='col-md-6 col-10 mx-auto'>

      <form onSubmit={this.onSubmit} className="llogform" style={{width:"100%"}}>
        <h3 className="register-screen__title">Add Category</h3>
       
        <div className="form-group" >
        
          <input
            type="text"
            
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.onChange}
            
          />
        </div>
        
        
        <div className="form-group">
          
          <input
            type="text"
            
            name="service"
            placeholder="service"
            value={this.state.service}
            onChange={this.onChange}
            
          />
        </div>
        <button type={this.onSubmit} className="btn add_btn btn-warning ml-0">
          Add
        </button>
        <div style={{marginTop:89}}></div>
        <h3 className="register-screen__title">Delete Category </h3>
        
        <div className="form-group">
          
          <input
            type="text"
            
            name="category"
            placeholder="category"
            value={this.state.category}
            onChange={this.onChange}
            
          />
        </div>
       
        <button onClick={this.onclick} className="btn add_btn btn-warning ml-0">
          Delete
        </button>

</form>
</div>
</div>
  )}}
    

    
export default Addcategories