

import React, { useState,useReducer } from 'react'


const Reduce=(state,action)=>{
    console.log("dispatch",action.type)
    console.log(state.count)

    switch (action.type){
        case "increase":
            return {count:state.count+1}
        case "decrease":
            return {count:state.count-1}
        case "reset":
            return {count:0}
        default:
            return {count:state.count}
    }

}

const Reducer = () => {

    // const [state,setState]=useState(0)

    const [state,dispatch]=useReducer(Reduce,{count:1})
  return (
    <div>
        
    {/* <button onClick={handleIncrement}>increment</button>
    <button onClick={handleDecrement}>decrement</button> */}

             <h1>{state.count}</h1>
    <button onClick={()=>dispatch({type:"increase"})}>increase</button>
    <button onClick={()=>dispatch({type:"decrease"})}>decrease</button>
    <button onClick={()=>dispatch({type:"reset"})}>reset</button>


    </div>
  )
}

export default Reducer


