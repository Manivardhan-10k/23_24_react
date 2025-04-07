import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
    console.log(count)
    },[count])
  return (
    <div>Effect
 <h1>{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>inc</button>
    </div>
  )
}
export default Effect