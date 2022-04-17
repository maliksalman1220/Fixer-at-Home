import React, { useState, useEffect } from 'react'
import '../screens/styles/update_profile.css';
import { format, parseISO } from 'date-fns';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Navbar from './navbar';
import axios from "axios";

export const Workerprofile = (props) => {
    const [username, setusername] = useState("");
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [phonenumber, setphonenumber] = useState("");
    const [address, setadress] = useState("")
    const [country, setcountry] = useState("");
    const [dateOfBirth, setdateOfBirth] = useState("");
    const [rating, setrating] = useState("");
    const [category, setcategory] = useState("");
    const [experience, setexperience] = useState("");
    const [price, setprice] = useState("");
    const [error,seterror]=useState("");

    var new_date = "";
    var history = useHistory();
    const params = useParams();

    const user_type = localStorage.getItem('user_type');
    

    async function ViewProfile() {
       
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        };
        try{
  
            axios.get("/api/private/Admin", config)
            .catch(err=>{console.log(err)})
           .then(res=>{if(res.data.error!=""){console.log(res.data.error);seterror(res.data.error)}})
     }
           
         catch (error) {
           console.log(error,"p")
           
           
       
     
         
     
       
           
       }
      
  
     
        const req = await fetch('http://localhost:5000/api/auth/profile/'+params.q, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await req.json();

        if (data.user.dateofbirth != null) {
            new_date = format(parseISO(data.user.dateofbirth), 'yyyy-MM-dd');
        }

        if (data.status === 'ok') {
            
            setusername(data.user.username);
            setfirstname(data.user.firstname);
            setlastname(data.user.lastname);
            setemail(data.user.email);
            setphonenumber(data.user.contactnumber);
            setadress(data.user.address);
            setdateOfBirth(new_date);
            setcountry(data.user.country);
            setrating(data.user.rating);
            setcategory(data.user.category);
            setexperience(data.user.experience);
            setprice(data.user.price);
        }
        else {
            alert(data.error);
        }
    }

    function sendMessage() {
        history.push('/message/'+params.q);
    }

    useEffect(() => {
        ViewProfile();
    }, [])

    function handleClick() {
        history.push("/workerupdateprofile/"+params.q);
    }

    return error ? (
        <span className="error-message">{error}</span>
      ) : (
        <div>
            <Navbar/>
            <div className="container ucontain mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center "><img className="rounded-circle mt-5" width="150px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWo3luud5KPZknLR5zdUUwzvYBztWgTxrkbA&usqp=CAU" /><span>{username}</span> <span className="text-black-50">{email}</span></div>
                        <div className="d-flex flex-column align-items-center "><button type="button" class="btn bello btn-warning ml-2" onClick={sendMessage}>Send Message</button></div>
                    </div>
                    <div className="col-md-7">
                        <div className="p-3 py-5">
                            <div className="d-flex mb-3">
                                <h4 className="text-right">Profile Settings</h4>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6"><label className="labels"> First Name</label><input type="text" className="form-control" placeholder="First Name"
                                    name="firstname"
                                    value={firstname}
                                    readOnly
                                /></div>
                                <div className="col-md-6"><label className="labels">Last Name</label><input type="text" className="form-control" placeholder="Last Name"
                                    name="lastname"
                                    value={lastname}
                                    readOnly
                                /></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12"><label className="labels">Phone Number</label><input type="text" className="form-control" placeholder=" Enter phone number"
                                    name="phonenumber"
                                    value={phonenumber}
                                    readOnly
                                /></div>
                                <div className="col-md-12"><label className="labels">Address</label><input type="text" className="form-control" placeholder=" Enter address"
                                    name="address"
                                    value={address}
                                    readOnly
                                /></div>
                                <div className="col-md-12"><label className="labels">Email ID</label><input type="text" className="form-control" placeholder=" Enter email id"
                                    name="email"
                                    value={email}
                                    readOnly
                                /></div>
                                <div className="col-md-12"><label className="labels">Date of Birth</label><input type="date" className="form-control" placeholder=" Enter date of birth"
                                    name="dateOfBirth"
                                    value={dateOfBirth}
                                    readOnly
                                /></div>
                                <div className="col-md-12"><label className="labels">Country</label><input type="text" className="form-control" placeholder="Country"
                                    name="country"
                                    value={country}
                                    readOnly
                                /></div>
                                <div className="col-md-12"><label className="labels">Rating</label><input type="text" className="form-control" placeholder="rating"
                                    name="rating"
                                    value={rating}
                                    readOnly
                                /></div>
                                <div className="col-md-12"><label className="labels">Category</label><input type="text" className="form-control" placeholder="category"
                                    name="category"
                                    value={category}
                                    readOnly
                                /></div>
                                <div className="col-md-12"><label className="labels">Experience</label><input type="text" className="form-control" placeholder="experience"
                                    name="experience"
                                    value={experience}
                                    readOnly
                                /></div>
                                <div className="col-md-12"><label className="labels">Price</label><input type="text" className="form-control" placeholder="price"
                                    name="price"
                                    value={price}
                                    readOnly
                                /></div>

                                <div class="col-md-12 udiv text-right">
                                    <button type="button" class="btn bello btn-warning mt-3 ml-2" onClick={handleClick}>Edit Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
