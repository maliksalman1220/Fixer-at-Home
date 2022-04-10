import {useState, useEffect, React} from 'react';
import EmployeeCSS from './EmployeeDashboard.module.css';
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
        <form className= {EmployeeCSS.form}>        
            <h1>Worker Dashboard</h1>
            <div  className= {EmployeeCSS.align_row}>
                    <div className= {EmployeeCSS.form_align_col}>
                        <h1>Full Name</h1>
                        <input 
                            id = 'name'
                            className = {EmployeeCSS.form_label}
                            type = "text"
                            name = "name"
                            value = {values.workerName}
                            // style={{width: "30%"}}
                        />
                    </div>
                    
                    <div className= {EmployeeCSS.form_align_col}>
                        <h1>CNIC</h1>
                        <input 
                            id = 'cnic'
                            className = {EmployeeCSS.form_align_col}
                            type = "text"
                            name = "cnic"
                            value = {values.cnic}
                            // style={{width: "30%"}}
                        />
                    </div>

                    <div className= {EmployeeCSS.form_align_col}>
                        <h1>Expertise</h1>
                        <input 
                            id = 'expertise'
                            className = {EmployeeCSS.form_label}
                            type = "text"
                            name = "expertise"
                            value = {values.expertise}
                            // style={{width: "30%"}}
                        />
                    </div>
            </div>


            <div className= {EmployeeCSS.align_row}>
                               
                <div className= {EmployeeCSS.form_align_col}>
                    <h1>Rating</h1>
                    <input 
                        id = 'starRating'
                        className = {EmployeeCSS.form_label}
                        type = "text"
                        name = "starRating"
                        value = {values.starRating}
                        // style={{width: "30%"}}
                    />
                </div>

                <div className= {EmployeeCSS.form_align_col}>
                    <h1>Orders Completed</h1>
                    <input 
                        id = 'ordersCompleted'
                        className = {EmployeeCSS.form_label}
                        type = "text"
                        name = "ordersCompleted"
                        value = {values.ordersCompleted}
                        style={{width: "30%"}}
                    />
                </div>
                
            </div>


        </form>
    )

}
export default EmployeeDashboard