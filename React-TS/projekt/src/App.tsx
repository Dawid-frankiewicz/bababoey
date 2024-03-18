import React, { useState } from 'react';

import './App.css';
import InputField from './InputField';
import { Todo } from './model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
 
  const handleAdd = (e: React.FormEvent)=> {
    e.preventDefault();


    if (todo){
    setTodos(...todos, [id:])}
  };
  return (
    <div className="App">
   <span className='heading'>Tasks</span>
   <InputField todo = {todo} setTodo = {setTodo} handleAdd = {handleAdd}></InputField>
    </div>
  );
}

export default App;
