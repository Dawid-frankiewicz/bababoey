import React,{useState} from "react"
import { useFormik } from "formik";
import { basicSchema } from "./Schemas";




const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

export const Register = (props)=>

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
    const [name,setName]= useState('');

 
    return(
        <>
        <form  className="registerForm" onSubmit={handleSubmit} autoComplete="off">
            <label htmlFor="name"><h3>Full Name</h3></label>
            <input 
            name="name" 
            id="name" 
            placeholder="Jan"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name && touched.name ? "input-error" : ""}
            />
            {errors.name && touched.name && <p className="error">{errors.name}</p>}

            <label htmlFor="email"><h3>E-mail</h3> </label>
            <input defaultValue={email} 
            type="email"
            placeholder="Shreklogin@o2.pl"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email ? "input-error" : ""} //to moze byc zle
             ></input>
             {errors.email && touched.email && <p className="error">{errors.email}</p>}
             
            <label htmlFor="password"><h3> Password </h3></label>
            <input 
             
             type="password"
              placeholder="********" 
              id="password" 
              name="password"
            
             
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.password && touched.password ? "input-error" : ""} ></input> 

            {errors.password && touched.password && (<p className="error">{errors.password}</p>)}
                    
            <button className="px-6 py-2 bg-redish font-bold rounded-lg text-white" >Register</button>
        </form>
        <button  className="font-medium" onClick={()=> props.onFormSwitch('Login')}><span className="hover:text-wheat">Already have an account? Login here</span>  </button>
        </>
    )
}