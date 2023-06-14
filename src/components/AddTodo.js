import React, { useState } from 'react'

const AddTodo = ({addTodo}) => {

const [title, setTitle] = useState("")

const onSubmit=(e)=>{
e.preventDefault();
addTodo(title)
setTitle("");
}
 
  return (
   <>
   <form onSubmit={onSubmit}>
    <input type="text"  value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder = "Input Title Here" required  />
    <button type='submit'>Add</button>
   </form>
   </>
  )
}

export default AddTodo
