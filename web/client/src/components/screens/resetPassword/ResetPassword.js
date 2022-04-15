import {useState, useEffect, React} from 'react';
import "./resetPassword.css";
//Right now, all error messages are displayed after submitting

function ResetPassword ({submitForm}) {
    function validateInfo(values) { 
        let errors = {}
        const oneNum = /\d/;
        const oneUpper = /[A-Z]/;
        const oneSpecial = /[^A-Za-z0-9]/;
       
        //Password
        if(!values.password) {
            errors.password = 'Password is required'
        } else if (values.password.length < 6) {
            errors.password = 'Password needs to be 6 characters, or more.'
        } else if (!oneNum.test(values.password)) {
            errors.password = 'Password needs to have at least 1 number.'
        } else if (!oneUpper.test(values.password)) {
            errors.password = 'Password needs to have at least 1 uppercase.'
        } else if (!oneSpecial.test(values.password)) {
            errors.password = 'Password needs to have at least 1 special character.'
        }
    
        if(!values.confirmPassword) {
            errors.confirmPassword = "Please re-enter your password"
        } else if (values.password !== values.confirmPassword){
            errors.confirmPassword = "Passwords do not match"
        } 
        return errors;
    }


    const useForm = (callback, validate) => {
        const [values, setValues] = useState({ //sets initial values of all our fields being used. Its better to name them same as the name = 'xyz' from form
            password : '',
            confirmPassword : ''
        })

        const [errors, setErrors] = useState({}) // ({}) creates an empty object, will be used to track errors

        const [isSubmitting, setIsSubmitting] = useState(false);


        const handleChange = e => { //updates values of all our inputs
            const {name, value} = e.target
            setValues({
                ...values,
                [name] : value
            })
        }

        const handleSubmit = e => {
            e.preventDefault();

            setErrors(validate(values));
            setIsSubmitting(true);
        }

        useEffect(() => {
            if(Object.keys(errors).length === 0 && 
            isSubmitting) {
                callback()
            };
        }, [errors]);
        return {handleChange, handleSubmit, values, errors};
    }
    

    const {handleChange, handleSubmit, values, errors} = 
    useForm(
        submitForm,
        validateInfo);
 
    console.log(values)
    return (

        <div class = "container Rcontain mt-5 mb-5 pt-3 pb-4">
            <form 
            class = "d-flex flex-column align-items-center pb-1"
            onSubmit={handleSubmit}
            > 
                  <h1>
                    Reset Password</h1>
                    <label htmlFor='password' >
                    Password
                    </label>

                    <input 
                        name = "password"
                        class = "text-center"
                        placeholder= 'Enter your password'
                        value = {values.password}
                        onChange = {handleChange}
                    />

                    {errors.password && <p class ="text-danger text-center">{errors.password}</p>} 

                
                    <label>
                    Confirm Password
                    </label>

                    <input 
                        name = "confirmPassword"
                        class = "text-center"
                        placeholder= 'Re-enter your password'
                        value = {values.confirmPassword}
                        onChange = {handleChange}
                    />
                    {errors.confirmPassword && <p class ="text-danger text-center" >{errors.confirmPassword}</p>} 
                    <div
                    class = "d-flex flex-column align-items-center pt-2">
                        <button 
                            type='submit'
                            class="btn btn-warning ml-2"
                            style={{width: "300px"}}
                            >
                            Confirm Password
                        </button>
                    </div>
            </form>        
           
        </div>
  )
}

export default ResetPassword