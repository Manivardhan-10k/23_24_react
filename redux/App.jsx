import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './Redux/action'

function App() {
  // const [count, setCount] = useState(0)
  const val=useSelector(state=>state.count)
  const dispatch=useDispatch()

  return (
    <>
      <h1>{val}</h1>
      <button onClick={()=>dispatch(increment())}>increment</button>
      
    </>
  )
}

export default App
