import React,{useState} from 'react'
import Form  from './Form';
import './App.css'

const App = () => {
  const[task,setTask] = useState(""); 
  const[todos,setTodos] = useState([]);

  const changeHandler =e =>{
    setTask(e.target.value)
  }
  const submitHandler = e => {
    e.preventDefault();
    const newTodos = [...todos,task];
    setTodos(newTodos);
    if(task===''){
      alert('Enter a todo first!')
      return(task);
    
    }
    setTask("");
  }
  const deleteHandler = (indexValue) => {
    const newTodos = todos.filter((todo,index) => index !== indexValue);
    if(deleteHandler){
      alert('Would you like to delete?')
      
    }
    setTodos(newTodos);


  }
  return(
    <div>
      <center>
            <h2 >Todo List</h2>
            <form onSubmit={submitHandler}>
              <input className='input-text' 
              type="text" placeholder='Enter the text' 
              name= "task" value={task} onChange={changeHandler}/> &nbsp;&nbsp;
              <input className='add' type="submit" value="+" name="Add" />
            </form>
            </center>
            <Form todolist={todos} deleteHandler={deleteHandler}/>
          
     </div>

  )

}

export default App