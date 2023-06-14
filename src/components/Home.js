import React from 'react'
import AddTodo from './AddTodo'

const Home = ({todo, setTodo, onDelet, addTodo}) => {
  return (
    <>
    <div class="row row-cols-1 row-cols-md-5 g-4 mt-3">
<div class="col">
  <div class="card">


    <img src="https://trello.com/1/cards/64883a1fe2dd20f3dadf2fe9/attachments/64883a20e2dd20f3dadf31a2/previews/64883a20e2dd20f3dadf31a8/download/Backlog.png" class="card-img-top" alt="..."/>
    {todo.map((item)=>{
      return (
        <div class="card-body" key={item.sno}>
          <h5 class="card-title">{item.title}</h5>
          <button onClick = {()=>{onDelet(item)}}>Delet</button>
          
        </div>
  )  })}

        <AddTodo addTodo={addTodo} />
   
  </div>
</div>
<div class="col">
  <div class="card">
    <img src="https://trello.com/1/cards/64883a1fe2dd20f3dadf2feb/attachments/64883a20e2dd20f3dadf31ab/previews/64883a20e2dd20f3dadf31b1/download/Design.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
</div>
<div class="col">
  <div class="card">
    <img src="https://trello.com/1/cards/64883a1fe2dd20f3dadf2fed/attachments/64883a20e2dd20f3dadf31b4/previews/64883a20e2dd20f3dadf31ba/download/To-Do.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      <div class="card-footer">
      <button class="text-body-secondary">Add</button>
    </div>

    
    </div>
  </div>
</div>

</div>
  </>
  )
}

export default Home
