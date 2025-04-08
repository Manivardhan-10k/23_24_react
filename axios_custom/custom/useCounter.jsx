import { useEffect, useState } from "react"
import axios from "axios"


export const useCounter=(init=0)=>{

    let [count,setCount]=useState(init)

    const decrement=()=>{
        setCount((prev)=>prev-1)
    }
    const increment=()=>{
        setCount(prev=>prev+1)
    }
    const reset=()=>{
        setCount(50)
    }

    return {count,decrement,increment,reset}
}




export const useProduct=(init)=>{
const [pro,setpro]=useState(null)
const allproducts=()=>{
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/`).then( res=>setpro(res.data)).catch(err=>console.log(err))
       },[init]) 
}

const singleProduct=()=>{
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${init}`).then( res=>setpro(res.data)).catch(err=>console.log(err))
       },[init])
}

if (init>20||init<1){
    return false
}
if (init){
    singleProduct()
    return pro
}else{
     allproducts()
     return pro
}

}




