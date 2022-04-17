import React, { useState, useEffect } from 'react'
import { format, parseISO } from 'date-fns';
import { useHistory } from 'react-router-dom';
import '../screens/styles/update_profile.css'
import { useParams } from 'react-router-dom';
import Navbar from './navbar';

function Workerprofileupdate(props) {
    // error handling still to be done
    const initialValues = { firstname: "", lastname: "", email: "", phonenumber: "", address: "", dob: "", country: "", experience: "", rating: "", category: "", price:"" };
    const [formValues, setFormValues] = useState(initialValues);
    var new_date = "";
    const history = useHistory();
    const params = useParams();
    
    async function getUser() {

        const response = await fetch('http://localhost:5000/api/auth/profile/'+params.q, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        if (data.status === 'ok') {  
            console.log(data.user.dateofbirth);  

            if (data.user.dateofbirth != null) {
                new_date = format(parseISO(data.user.dateofbirth), 'yyyy-MM-dd');
            }

            setFormValues({
                username: data.user.username,
                firstname: data.user.firstname,
                lastname: data.user.lastname,
                email: data.user.email,
                phonenumber: data.user.contactnumber,
                address: data.user.address,
                dob: new_date,
                country: data.user.country,
                experience: data.user.experience,
                rating: data.user.rating,
                category: data.user.category,
                price: data.user.price
            }); 
        }
        else {
            alert(data.error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };


    function handleClick() {
        history.push("/workerprofile/"+params.q);
    }

    useEffect(() => {
        const user_id = localStorage.getItem('user');
        if (user_id !== params.q) {
            history.push("/");
        }
        else {
            getUser();
        }
    }, [])


    async function workerupdateProfile(e) {
        console.log(props.username);
        e.preventDefault();

        const response = await fetch('http://localhost:5000/api/auth/workerprofileupdate/'+params.q, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstname: formValues.firstname,
                lastname: formValues.lastname,
                email: formValues.email,
                phonenumber: formValues.phonenumber,
                address: formValues.address,
                dob: formValues.dob,
                country: formValues.country,
                experience: formValues.experience,
                rating: formValues.rating,
                category: formValues.category,
                price: formValues.price,
            }),
        })
        const data = await response.json();
        if (data.status === 'ok') {
            console.log("Updated Successfully")
            handleClick();
        }
        else
        {
            console.log(data.error);
        }
    }

    return (
        <div>
            <Navbar/>
            <div class="container ucontain mt-5 mb-5">
                <div class="row">
                    <div class="col-md-3 border-right">
                        <div class="d-flex flex-column align-items-center "><img class="rounded-circle mt-5" width="150px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWo3luud5KPZknLR5zdUUwzvYBztWgTxrkbA&usqp=CAU" /><span>{formValues.username}</span> <span class="text-black-50">{formValues.email}</span></div>
                    </div>
                    <div class="col-md-7">
                        <div class="p-3 py-5">
                            <div class="d-flex mb-3">
                                <h4 class="text-right">Profile Settings</h4>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-6"><label class="labels"> First Name</label><input type="text" class="form-control" placeholder=" Enter First Name"
                                    name="firstname"
                                    value={formValues.firstname || ''}
                                    onChange={handleChange} /></div>
                                <div class="col-md-6"><label class="labels">Last Name</label><input type="text" class="form-control"
                                    name="lastname"
                                    value={formValues.lastname  || ''}
                                    onChange={handleChange} placeholder=" Enter Last Name" /></div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-12"><label class="labels">Phone Number</label><input type="text" class="form-control" placeholder=" Enter phone number"
                                    name="phonenumber"
                                    value={formValues.phonenumber  || ''}
                                    onChange={handleChange} /></div>
                                <div class="col-md-12"><label class="labels">Address</label><input type="text" class="form-control" placeholder=" Enter address"
                                    name="address"
                                    value={formValues.address  || ''}
                                    onChange={handleChange} /></div>
                                <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder=" Enter email id"
                                    name="email"
                                    value={formValues.email  || ''}
                                    readOnly /></div>
                                <div class="col-md-12"><label class="labels">Date of Birth</label><input type="date" class="form-control" placeholder="Date of Birth"
                                    name="dob"
                                    value={formValues.dob  || ''}
                                    onChange={handleChange} /></div>
                                <div class="col-md-12"><label class="labels">Country</label><input type="text" class="form-control" placeholder="Country"
                                    name="country"
                                    value={formValues.country  || ''}
                                    onChange={handleChange} /></div>
                                <div className="col-md-12"><label className="labels">Rating</label><input type="text" className="form-control" placeholder="rating"
                                    name="rating"
                                    value={formValues.rating  || ''}
                                    onChange={handleChange}
                                /></div>
                                <div className="col-md-12"><label className="labels">Category</label><input type="text" className="form-control" placeholder="category"
                                    name="category"
                                    value={formValues.category  || ''}
                                    onChange={handleChange}
                                /></div>
                                <div className="col-md-12"><label className="labels">Experience</label><input type="text" className="form-control" placeholder="experience"
                                    name="experience"
                                    value={formValues.experience  || ''}
                                    onChange={handleChange}
                                /></div>
                                <div className="col-md-12"><label className="labels">Price</label><input type="text" className="form-control" placeholder="price"
                                    name="price"
                                    value={formValues.price  || ''}
                                    onChange={handleChange}
                                /></div>
                                <div class="button mt-0 d-flex flex-row align-items-center">
                                    <button style={{padding:"1.5%"}} type="button" class="btn workercard_button2 btn-sm btn-primary  ml-3" onClick={handleClick}>Cancel</button>
                                    <button style={{padding:"1.5%"}} type="button" class="btn workercard_button btn-sm btn-primary  ml-3" onClick={workerupdateProfile}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Workerprofileupdate;
