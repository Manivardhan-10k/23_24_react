import React, { useCallback, useState } from 'react'
import Child from './child'

const Parent = () => {


    const[num,setnum]=useState(0)

    const handleDec=useCallback(()=>{
        setnum(prev=>prev-1)
    },[])
  return (
    <div>
        
        Parent
            <h1>
                {num}
            </h1>
    
        <button onClick={()=>setnum(prev=>prev+1)}>inc</button>
        <Child  fun={handleDec}/>
    </div>
  )
}

export default Parent