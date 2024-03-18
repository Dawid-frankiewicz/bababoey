import React,{useState} from "react";

const ContactForm = (props)=>
{
    const [email, setEmail] = useState('');
    const [Message, setMessage] = useState('');

    const handleSubmit = (e) => 
    {
        e.preventDefault(); /* pozwala na nie przeładowanie strony */
        
    }
    return(
        <div className="formContainer" >
        <form className="loginForm" onSubmit={handleSubmit}>
            <label for="email"><h3>E-mail</h3> </label>
            <input  defaultValue={email} type="email" placeholder="Shreklogin@o2.pl" id="email" name="email"></input>
            <label for="Message"><h3> Message</h3> </label><br></br>
        <textarea    type="Message" placeholder="email...." id="Message" name="Message" rows="20" cols="40">
            dadsa
        </textarea>
            <button className="px-6 py-2 bg-redish font-bold rounded-lg text-white">Send</button>
        </form>
        
       </div>
    )
}
export default ContactForm;