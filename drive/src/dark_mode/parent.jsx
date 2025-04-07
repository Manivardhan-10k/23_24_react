import React, { use, useState } from 'react'
import { createContext } from 'react'
import Child from './child'

export const themeContext=createContext()
export const Parent = () => {
    const [mode,setMode]=useState("dark")

    const toggleMode=()=>{
        mode==="light"?setMode("dark"):setMode("light")
    }
  return (
    <div>
        
        <themeContext.Provider value={[mode,toggleMode]} >
          <Child />
        </themeContext.Provider>




    </div>
  )
}
