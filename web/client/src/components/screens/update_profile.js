import React, { useState, useEffect} from 'react'
import '../screens/styles/update_profile.css'

function Update_profile() {
// error handling still to be done
    const initialValues = { firstname: "", lastname: "", email: "", confirm_password:"", phonenumber: "", password: "" , verification_code : "", address: "", catagory: "", experience: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };

  return (
      <div>
    <div class="container mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center "><img class="rounded-circle mt-5" width="150px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWo3luud5KPZknLR5zdUUwzvYBztWgTxrkbA&usqp=CAU"/><span>Username</span> <span class="text-black-50">abc@emailaddress.com</span></div>
        </div>
        <div class = "col-md-7">
            <div class="p-3 py-5">
                <div class="d-flex mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels"> First Name</label><input type="text" class="form-control" placeholder=" Enter First Name" 
                        name = "firstname"
                        value = {formValues.firstname}
                        onChange = {handleChange}/></div>
                    <div class="col-md-6"><label class="labels">Last Name</label><input type="text" class="form-control" 
                        name = "lastname"
                        value = {formValues.lastname}
                        onChange = {handleChange} placeholder=" Enter Last Name"/></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Phone Number</label><input type="text" class="form-control" placeholder=" Enter phone number" 
                        name = "phonenumber"
                        value = {formValues.phonenumber}
                        onChange = {handleChange}/></div>
                    <div class="col-md-12"><label class="labels">Address</label><input type="text" class="form-control" placeholder=" Enter address" 
                        name = "address"
                        value = {formValues.address}
                        onChange = {handleChange}/></div>
                    <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder=" Enter email id" 
                        name = "email"
                        value = {formValues.email}
                        onChange = {handleChange}/></div>
                    <div class="col-md-12"><label class="labels">Experience</label><input type="text" class="form-control" placeholder="Experience" 
                        name = "experience"
                        value = {formValues.experience}
                        onChange = {handleChange}/></div>
                    <div class="col-md-12"><label class="labels">Catagory</label><input type="text" class="form-control" placeholder="Category" 
                        name = "catagory"
                        value = {formValues.catagory}
                        onChange = {handleChange}/></div>
                    <div class="col-md-12"><label class="labels">Password</label><input type="text" class="form-control" placeholder="Password" 
                        name = "password"
                        value = {formValues.password}
                        onChange = {handleChange}/></div>

                    <div class="col-md-12 text-right">
                <button type="button"  class="btn hello btn-primary">Cancel</button>
                <button type="button" class="btn btn-warning ml-2">Save</button>
            </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default Update_profile
