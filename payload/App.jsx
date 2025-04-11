import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector } from 'react-redux'
import {increment,decrement,add_products} from "./REDUX/action"
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  const count=useSelector(state=>state.count)
  const dispatch=useDispatch()
  const [products,setProducts]=useState(null)
  const store_products=useSelector(store=>store.products)

  useEffect(()=>{

    axios.get("https://fakestoreapi.com/products").then(res=>setProducts(res.data)).catch((err)=>console.log(err))

  },[])

  return (
    <>
      <h1>{count}</h1>

{/* 

      <button onClick={()=>{dispatch(increment(50))}}>Add number 50</button>
      <button onClick={()=>{dispatch(decrement(25))}}>remove number 25</button> */}
      <button onClick={()=>{dispatch(add_products(products))}}>Add Products to store</button>
      <button onClick={()=>{dispatch({type:"remove_products"})}}>Remove Products from store</button>


      {store_products?.map((ele,ind)=>{
        return <h1 key={ind}>{ele.title}</h1>
      })
      }
    </>
  )
}

export default App
