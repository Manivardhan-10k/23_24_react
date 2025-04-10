import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increment,decrement } from './Redux/action'
const Counter = () => {
    const cur=useSelector(state=>state.count)
    const dispatch=useDispatch()
  return (
    <div>
        <h1>{cur}</h1>
        <h2>hello</h2>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter