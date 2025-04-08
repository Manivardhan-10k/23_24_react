import React from 'react'
import { useCounter, useProduct } from './useCounter'

const Sample = () => {

    const {count,decrement,increment,reset}=useCounter(100)

    const  pro=useProduct(20)
    console.log(pro)

    // console.log(count)
    // console.log(decrement)
    // console.log(increment)
    // console.log(reset)
  return (
    <div>
        
         {/* <h1>{count}</h1>
         <button onClick={decrement}>decrement</button>
         <button onClick={increment}>increment</button>
         <button onClick={reset}>reset</button> */}



    </div>
  )
}

export default Sample