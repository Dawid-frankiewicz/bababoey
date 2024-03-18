
import { Login } from "./Login";
import Register from "./Register";
import React,{useState} from "react";
const LogReg = ({toggleModal}) =>
{

   const [currentForm, setCurrentForm] =  useState('Login');
     const toggleForm = (formName) =>
     {
         setCurrentForm(formName);
      } 
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) { //target pozwala na bezposrednie klikniecie a nie logregcontainer
            toggleModal();
        }}
  
        
    return(
    <div className="logRegWrapper">
        <div className="overlay"  onClick={handleOverlayClick}></div>
        <div className="logRegContainer">
        
            <div className="backgroundContainer">
            
    <div className="logRegBox">
      {
    currentForm === 'Login' ? <Login onFormSwitch ={toggleForm}/> : <Register onFormSwitch ={toggleForm}/>
      }

    </div></div></div>

</div>   
    );
        
    
}

export default LogReg;