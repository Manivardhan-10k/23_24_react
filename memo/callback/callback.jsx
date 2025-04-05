import React, { useCallback, useState } from 'react'


const arr=[]
const Callback = () => {
    const [count,setcount]=useState(0)

console.log(useCallback)

    const handleIncrement= useCallback(()=>{
        setcount(count+1)
    },[count])


arr.push(handleIncrement)
console.log(arr)


if (arr.length>0){
    console.log(arr[0]==arr[1])
}

// const fun=function(){
//     console.log("hello")
// }

// const fun2=fun

// console.log(fun2==fun)



  return (
    <div>
        
  <h1>{count}</h1>


        <button onClick={handleIncrement}>increment</button>
    </div>
  )
}

export default Callback

