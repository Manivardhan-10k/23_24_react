import React, { useCallback, useState } from 'react'
import Child from './child'
import { memo } from 'react'

const Parent = () => {

    const [count,setcount]=useState(0)
    const handleDecrement= useCallback(()=>{
        setcount((prev)=>prev-1)
    },[])
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setcount(count+1)}>Increment</button> 
        <Child   decrement={handleDecrement}/>
    </div>
  )
}

export default Parent