import React, { useState } from 'react'

const Form = () => {
  const[myval,setmyval]=useState("")
  const [todo,setTodo]=useState([])

  const handleSubmit=(e)=>{
    e.preventDefault()
    const newarr={id:new Date().getTime().toString(),myval}
    setTodo([...todo,newarr])
    setmyval("")
  }
  const handleRemove=(id)=>{
    const removed=todo.filter((elem)=>{
      return elem.id!==id
    })
    setTodo(removed)
  }
  const handleEdit=(id)=>{
  const edit=todo.filter((elem)=>{
    return elem.id===id
  })
  setmyval(edit[0].myval)
  const removed=todo.filter((elem)=>{
    return elem.id!==id
  })
  setTodo(removed)
  }
  return (
    <div>
    <h2>Todo App</h2>
    <form onSubmit={handleSubmit}>
      <input
       className='input-text'
       placeholder='Enter Todo'
        type="text"
        value={myval}
        onChange={(e)=>setmyval(e.target.value)}
      />&nbsp;
      <button className='addBtn'>+</button>
    </form>
    {
      todo.map((elem)=>{
        return(
          <div key={elem.id}>
            <p>{elem.myval}&nbsp;
            <button className='remove-btn'
            onClick={()=>handleRemove(elem.id)}>Remove</button>&nbsp;
            <button className='edit-btn'
             onClick={()=>handleEdit(elem.id)}>Edit</button></p>
          </div>
        )
      })
    }
    </div>
  )
}

export default Form

