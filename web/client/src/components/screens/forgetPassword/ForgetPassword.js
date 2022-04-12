import {useState, useEffect, React} from 'react';
import ForgetCSS from "./ForgetPassword.module.css"
//Right now, all error messages are displayed after submitting

function ForgetPassword  ({submitForm}){
    function validateInfo(values) { 
        let errors = {}
        const emailRegex = /\S+@\S+\.\S+/;
        //Email
        if(!values.email){ 
            errors.email = "Email required."
        } else if (!emailRegex.test(values.email)) {
            errors.email = "Email address is invalid."
        }
        return errors;
    }


    const useForm = (callback, validate) => {
        const [values, setValues] = useState({ //sets initial values of all our fields being used. Its better to name them same as the name = 'xyz' from form
            email : ''
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
            <form className = {ForgetCSS.form} onSubmit={handleSubmit}> 
               <h1 className= {ForgetCSS.h1} >
                    Forget Password</h1>
                    
                <div className = {ForgetCSS.form_input}>                                  
                    <label htmlFor='email' className= {ForgetCSS.form_label} >
                    Please enter your email, so we can send a link to reset your password.
                    </label>
                
                    <input 
                        id = 'email'
                        type = "email"
                        name = "email"
                        placeholder= 'Enter your email'
                        className= {ForgetCSS.form_label}
                        value = {values.email}
                        onChange = {handleChange}
                        style={{width: "30%"}}

                    />

                    {errors.email && <p className= {ForgetCSS.error_msg} >{errors.email}</p>} 
                </div>
                <button 
                    className= {ForgetCSS.btn}
                    style={{width: "300px"}}
                    type='submit'>
                    Send My Password
                </button>
            </form>
  )
}

export default ForgetPassword