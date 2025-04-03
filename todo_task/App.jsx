import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todo,setTodo]=useState([])
  const [addtodo,setAddtodo]=useState("")

const handleChange =(event)=>{
  // event.preventDefault()
  let task=event.target.value
  if (task.length>0){
    setAddtodo(task)
  }
}
const adduserTodo=()=>{
  if (addtodo.length>0){
    setTodo([...todo,addtodo])
    setAddtodo("")
  }

}


const handleDelete=(ind)=>{
  console.log("delete called")
  let arr=todo.filter((ele,i)=>{
    return  i!==ind
  })
  setTodo(arr)
}
  return (
    <div className='bg-dark'>
    {/* <form onSubmit={handleChange}>  */}
    <input type="text" name='todo'  placeholder='enter the todo' value={addtodo} onChange={handleChange} />
<button   onClick={adduserTodo}>add Todo</button>
      {/*   </form> */}
      <div className='d-flex '>
    {todo?.map((ele,ind)=>{
      return <div key={ind} className='card m-3'>
        <p>{ele}  </p>  <button style={{color:"red"}} onClick={()=>handleDelete(ind)}>delete</button>
      </div>

    })}
    </div>
    </div>
  )
}
export default App
