import React, { useEffect, useState } from 'react'

const C_W_U = () => {
    let [count,setCount]=useState()

    useEffect(()=>{
//    count=setInterval(()=>{
//     console.log("interval")
//    },2000)
  window.sessionStorage.setItem("key","manivardhan")

      return ()=>{
        // clearInterval(count)
        window.sessionStorage.removeItem("key")
      }

 
    },[])
  return (
    <div>C_W_U</div>
  )
}

export default C_W_U