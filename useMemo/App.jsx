// import { useReducer } from 'react'
// import "./App.css"


// const reducer=(state,action)=>{

//   switch (action.type){
//     case "inc":
//       return {count:state.count+1}
//     case "dec":
//       return {count:state.count-1}
//       default:
//         return{count}
//   }

// }

// function App() {

//   const [state,dispatch]=useReducer(reducer,{items:[{id:"1",count:20}]})
//   return (
//     <>
//     <h1>{state.count}</h1>

//     <button onClick={()=>{dispatch({type:"inc"})}}>inc</button>
//     <button onClick={()=>{dispatch({type:"dec"})}}>dec</button>
//     </>
//   )
// }

// export default App



//use memo





import React, { useState } from 'react'
import { useMemo } from 'react'
import { data } from './data'



const App = () => {
  const [count,setCount]=useState(0)
  const [count2,setCount2]=useState(0)


  const memo=useMemo(()=>{
    let new_data=data.filter((ele)=>{
      return ele.id===1
    })
    console.log(new_data)

  },[count])





  return (
    <div>
      App

      <h1>{count}</h1>
      <button  onClick={()=>{setCount(count+1)}}>increment</button>
       <h1>{count2}</h1>
      <button  onClick={()=>{setCount2(count2+1)}}>increment count2</button>



    </div>
  )
}

export default App
