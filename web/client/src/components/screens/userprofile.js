import React, { useState, useEffect } from 'react'
import '../screens/styles/update_profile.css';
import { format, parseISO } from 'date-fns';
import { useHistory } from 'react-router-dom';

export const Userprofile = (props) => {
    const [values, setValues] = useState({username:"",firstname:"",lastname:"",email:"",phonenumber:"",address:"",country:"",dob:""});
    var new_date = "";
    var history = useHistory();

    const user_type = localStorage.getItem('user_type');
    const user_id = localStorage.getItem('user');

    async function ViewProfile() {

        const req = await fetch('http://localhost:5000/api/auth/profile/'+user_id, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await req.json();  

        if (data.user.dateofbirth != null) {
            new_date = format(parseISO(data.user.dateofbirth), 'yyyy-MM-dd');
        }

        if (data.status === 'ok') {
            
            setValues({
                username: data.user.username,
                firstname: data.user.firstname,
                lastname: data.user.lastname,
                email: data.user.email,
                phonenumber: data.user.contactnumber,
                address: data.user.address,
                dob: new_date,
                country: data.user.country
            }); 
        }
        else {
            alert(data.error);
        }
    }

    useEffect(() => {
        ViewProfile();
    }, [])

    function handleClick() {
        history.push("/updateprofile");
    }

    return (
        <div>
            <div className="container ucontain mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center "><img className="rounded-circle mt-5" width="150px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWo3luud5KPZknLR5zdUUwzvYBztWgTxrkbA&usqp=CAU" /><span>{values.username}</span> <span className="text-black-50">{values.email}</span></div>
                    </div>
                    <div className="col-md-7">
                        <div className="p-3 py-5">
                            <div className="d-flex mb-3">
                                <h4 className="text-right">Profile Settings</h4>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6"><label className="labels"> First Name</label><input type="text" className="form-control" placeholder="First Name"
                                    name="firstname"
                                    value={values.firstname || ''}
                                    readOnly
                                    /></div>
                                <div className="col-md-6"><label className="labels">Last Name</label><input type="text" className="form-control" placeholder="Last Name"
                                    name="lastname"
                                    value={values.lastname || ''}
                                    readOnly
                                    /></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12"><label className="labels">Phone Number</label><input type="text" className="form-control" placeholder=" Enter phone number"
                                    name="phonenumber"
                                    value={values.phonenumber || ''}
                                    readOnly
                                    /></div>
                                <div className="col-md-12"><label className="labels">Address</label><input type="text" className="form-control" placeholder=" Enter address"
                                    name="address"
                                    value={values.address || ''}
                                    readOnly
                                    /></div>
                                <div className="col-md-12"><label className="labels">Email ID</label><input type="text" className="form-control" placeholder=" Enter email id"
                                    name="email"
                                    value={values.email || ''}
                                    readOnly
                                    /></div>
                                <div className="col-md-12"><label className="labels">Date of Birth</label><input type="date" className="form-control" placeholder=" Enter date of birth"
                                    name="dateOfBirth"
                                    value={values.dob || ''}
                                    readOnly
                                    /></div>
                                <div className="col-md-12"><label className="labels">country</label><input type="text" className="form-control" placeholder="Country"
                                    name="country"
                                    value={values.country || ''}
                                    readOnly
                                    /></div>

                                <div class="col-md-12 udiv text-right">
                                    <button type="button" class="btn bello btn-warning ml-2" onClick={handleClick}>Edit Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
