import React, { useEffect, useState } from 'react'

const Auto = () => {

    const [val,setVal]=useState("")
    const [temp,setTemp]=useState("")


    const handleinpchange=(event)=>{
        setTemp(event.target.value)

    }
    const handleChange=()=>{
        setVal(temp) 
    }


    // useEffect(()=>{
        
    //     fetch("")

    // },[val])


    useEffect(()=>{
        console.log("useeffect")
        console.log(temp)
   const int= setTimeout(()=>{
        if (temp!=""){
            handleChange()
            console.log("changecalled")
        }
     },3000)


    //  return  clearTimeout(int)

},[temp])

  
  return (

    <div>
        
          <h1>{val}</h1>
    
  <input type='text' name='input' placeholder='enter the name'   onChange={handleinpchange}/>


    </div>
  )
}

export default Auto