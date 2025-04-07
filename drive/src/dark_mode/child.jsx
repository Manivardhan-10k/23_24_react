import React, { useState } from 'react'
import { themeContext } from './parent'
import { useContext } from 'react'


const Child = (prop) => {

    const arr=useContext(themeContext)
    
    console.log(arr[0])
    const bg=(arr[0]==="light")?"white":"black"
    const col=(arr[0]=="light")?"black":"white"
  return (
    <div  style={{ backgroundColor:bg ,height:"500px",width:"500px" }}>
    <p style={{color:col}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta nihil maxime eligendi nostrum omnis eius, iste praesentium optio aut ab facilis odio voluptates quasi id numquam. Quod reiciendis cupiditate ea.</p>
        <button onClick={arr[1]}>
            change mode
        </button>
        </div>
  )
}

export default Child