import React from 'react'

const Form = ({todolist, deleteHandler}) => {
    return (
        <div>
            {todolist.map((todo,index) =>
            <div  key={index}>
                <h1><b><u>{todo}</u></b> &nbsp; 
                 <button  className='remove-btn' onClick={() => deleteHandler(index)} >Remove</button> </h1>
            </div>)}
        </div>
    )
}

export default Form