import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from './workercard';
import axios from 'axios';
import { Form, Option, Button, Container, Navbar, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./catagorycard.css"
import {BiCurrentLocation} from "react-icons/bi";
import {GoLocation} from "react-icons/go";
import NavbarCustomer from './navbarCustomer';

class workerlist extends Component {

  constructor() {
    super();
    this.state = {
      x: [],
      customerLocation: "",
    };
  }

 


  async componentDidMount() {

    await this.getCustomerLocation();








    axios

      .get('/api/auth/getworker/' + this.props.match.params.q)
      .then(res => {

        this.setState({
          x: res.data


        })






      })

  };

  async getCustomerLocation() {
    const response = await axios.get('http://localhost:5000/api/auth/profile/' + localStorage.getItem('user'));
    
    this.setState({
      customerLocation: response.data.user.address,
    });
  }

  qqqq = e => {
    e.preventDefault();



    axios
      .put('/api/auth/qqqq/')
      .then(res => {







      })
      .catch(err => {
        this.setState({ error: err.response.data.error });
      })
  };

  render() {
    const books = this.state.x
    console.log("PrintBook: " + books);
    let bookList;

    if (!books) {
      bookList = "there is no book recored!";
    } else {

      bookList = books.map((book, k) =>
        <List book={book} key={k} />
      );
    }



    return (

      <div>
        <NavbarCustomer/>
        <div class="container ">
          <div class="row">
            <div class="col-sm locatindiv mr-0">
              <h3 className="register-screen__title mt-4 mb-5 ml-5" style={{ fontWeight: "bold" }}>Book a Worker</h3>
              <div class="mb-3 ">
                <BiCurrentLocation size="30" style={{ marginRight: "3%", color: "#004c8c" }} />
                <label class="form-label labell">Worker location</label>
                <input type="text" class="form-control locationss ml-5" placeholder="Defence Phase 4" />
              </div>
              <div class="mb-3">
                <GoLocation size="30" style={{ marginRight: "3%", color: "#004c8c" }} />
                <label class="form-label labell">Customer Location</label>
                <input type="text" class="form-control locationss ml-5" placeholder="LUMS" value={this.state.customerLocation}/>
              </div>
            </div>
            <div class="col-sm ">
              <div class="cards-list cards-listt">
                {bookList}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default workerlist;