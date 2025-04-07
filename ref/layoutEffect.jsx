import React, { useEffect, useLayoutEffect } from 'react'

const LayoutEffect = () => {


let arr=[]
     for (let i=0;i<50000;i++){
        arr.push(i+1)

     }

    useEffect(()=>{
        console.log("use Effect")
    },[])


    useLayoutEffect(()=>{
        console.log("layout effect")
    },[])
  return (
    <div>

     
         {arr?.map((ele,ind)=>{
             return <p key={ind}>{ele}</p>
            })}
            {console.log("content")}
       
        
        layoutEffect



    </div>
  )
}

export default LayoutEffect