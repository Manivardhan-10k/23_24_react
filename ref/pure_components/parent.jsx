import React, { useState } from 'react'
import Child from './child'

const Parent = () => {

    const [val,setVal]=useState(0)
    const [count,setCount]=useState(0)
  return (
    <div>
        Parent
        <h1>{val}</h1>
          <button  onClick={()=>setVal(val+1)}>inc</button>

        <Child prop={count}/>
    </div>
  )
}

export default Parent