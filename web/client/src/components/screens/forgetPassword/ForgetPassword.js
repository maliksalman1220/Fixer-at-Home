import {useState, useEffect, React} from 'react';
import "./forgetPassword.css"

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
        
        <div class = "container Pcontain mt-5 mb-5 pt-3 pb-4"> 
            <form  
            class = "d-flex flex-column align-items-center pb-1"
            onSubmit={handleSubmit}
            
            > 
               <h1
               class = "text-center"
               >
                Forget Password</h1>             
                    <label 
                    class = "text-center "
                    >
                    Please enter your email, so we can send a link to reset your password.
                    </label>
                
                    <input 
                        name = "email"
                        class = "text-center"
                        placeholder= 'Enter your email'
                        value = {values.email}
                        onChange = {handleChange}
                        style={{width: "30%"}}

                    />

                    {errors.email && <p class ="text-danger text-center">{errors.email}</p>} 
                <div 
                class = "d-flex flex-column align-items-center pt-2">
                    <button 
                        class="btn btn-warning ml-2"
                        style={{width: "300px"}}
                        type='submit'>
                        Send My Password
                    </button>
                </div>
            </form>

            
        </div>
  )
}

export default ForgetPassword