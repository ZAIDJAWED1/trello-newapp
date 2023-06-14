import {React, useState} from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'


const App = () => {

const [todo, setTodo] = useState([
  {
    sno:1,
    title: "hello world"
  },
  {
    sno:2,
    title: "hello world 2"
  },
  {
    sno:3,
    title: "hello world 3"
  },
]) 




function addTodo(title){
 
const newTodo = {
  sno: todo[todo.length].sno + 1, 
  title: title
}
setTodo([...todo,newTodo])

}

const onDelet = (item)=>{
setTodo(todo.filter((e)=> 
{return e!== item;}
  ))
}


  return (
   <>
  
    <Navbar />
     <Home todo={todo} setTodo={setTodo} onDelet={onDelet} addTodo={addTodo} />
   </>

  )
}

export default App
