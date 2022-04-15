import {useState, useEffect, React} from 'react';
import "./employeeDashboard.css"
//Right now, all error messages are displayed after submitting

function EmployeeDashboard ({submitForm})  {
    const [values] = useState({ 
        workerName : 'Fake Man',
        starRating : 4.5,
        phoneNum : '0300-4312092',
        city : 'RandomCity',
        cnic : '34201-22335691',
        ordersCompleted : '24',
        expertise : 'Mechanic' 
        
    })
    
    return (
        <div  class = "container Econtain mt-5 mb-5 pt-3 pb-4 ">
            <div class="row">
                <div class="col-md-3 border-right">
                    <div class="d-flex flex-column align-items-center "><img class="rounded-circle mt-5" width="150px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWo3luud5KPZknLR5zdUUwzvYBztWgTxrkbA&usqp=CAU"/>
                    <span>Username</span> 
                    <span class="text-black-50">fakeman@emailaddress.com</span></div>
                </div>
                <div class = "col-md-7">
                    <div class="p-3 py-5">
                        <div class="d-flex mb-3">
                            <h4 class="text-right">Worker Dashboard</h4>
                        </div>

                        <div class="row mt-2 d-flex flex-row">
                            <div class="col-md-6 d-flex flex-column">
                                    <label class="labels"> Worker Name</label>
                                    <input 
                                    type="text" 
                                    name = "workername"
                                    class = 'p-1'
                                    value = {values.workerName}
                                    />
                            </div>
                            
                            <div class="col-md-6 d-flex flex-column">
                                    <label class="labels">CNIC Number</label>
                                    <input type="text" 
                                    name = "cnic"
                                    class = 'p-1'
                                    value = {values.cnic}
                                />
                            </div>
                        </div>

                        <div class = "row mt-2  d-flex flex-row">
                            <div class="col-md-6 d-flex flex-column">
                                    <label class="labels">Phone Number</label>
                                    <input 
                                    type="text" 
                                    name = "phoneNum"
                                    class = 'p-1'
                                    value = {values.phoneNum}
                                    />
                                </div>
                                
                                <div class="col-md-6 d-flex flex-column">
                                    <label class="labels">City</label>
                                    <input 
                                    type="text" 
                                    name = "city"
                                    class = 'p-1'
                                    value = {values.city}
                                    />
                            </div>
                        </div>
                        
                        <div class="row mt-2  d-flex flex-row">
                            
                            <div class="col-md-6 d-flex flex-column">
                                    <label class="labels">Expertise</label>
                                    <input 
                                    type="text" 
                                    name = "Expertise"
                                    class = 'p-1'
                                    value = {values.expertise}
                                    />
                            </div>
                            
                            <div class="col-md-6 d-flex flex-column">
                                    <label class="labels">Orders Completed</label>
                                    <input 
                                    type="text" 
                                    name = "ordersCompleted"
                                    class = 'p-1'
                                    value = {values.ordersCompleted}
                                    />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}
export default EmployeeDashboard