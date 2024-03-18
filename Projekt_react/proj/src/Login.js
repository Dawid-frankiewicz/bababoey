import React,{useState} from "react";
import { useFormik } from "formik";
import { basicSchema } from "./Schemas";


const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };
export const Login = (props)=>
{
    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
      } = useFormik({
        initialValues: {
          email: "",
          age: "",
          password: "",
          confirmPassword: "",
          name: ""
        },
        validationSchema: basicSchema,
        onSubmit,
      });


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  
    return(
        <div className="formContainer">
        <form className="loginForm" onSubmit={handleSubmit}>
            <label htmlFor="email"><h3>E-mail</h3> </label>
            <input
              defaultValue={email} 
              
             type="email"
            placeholder="Shreklogin@o2.pl"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email ? "input-error" : ""}></input>
             {errors.email && touched.email && <p className="error">{errors.email}</p>}
            <label htmlFor="password"><h3> Password</h3> </label>
            <input  
            type="password"
            placeholder="********" 
            id="password" 
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password ? "input-error" : ""}></input>
            {errors.password && touched.password && (<p className="error">{errors.password}</p>)}

            <button className="px-6 py-2 bg-redish font-bold rounded-lg text-white">Log in </button>
        </form>
        <button className="font-medium" onClick={()=> props.onFormSwitch('Register')}><span className="hover:text-wheat">Don't have an account? Register here</span> </button>
       </div>
    )
}
