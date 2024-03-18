import React from 'react'
import './App.css'

interface Props 
{
  todo: string;
  setTodo:React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent)=> void; //jak sa bledy to oznacza ze tego nie ma 
  
}
const InputField = ({todo, setTodo, handleAdd}: Props) => {
  return (
   <form action="input" onSubmit={handleAdd}>

    <input type='input' 
    value={todo}
    onChange={(e) => setTodo(e.target.value)}
    placeholder='Enter text' className='input__box'>
    </input>
    <button type='submit' className='input_submit'>GO</button>
   </form>
  )
}

export default InputField;