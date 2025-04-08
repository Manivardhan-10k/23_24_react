import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState(null)
  console.log(count)
  // console.log(axios)

  useEffect(()=>{
    // fetch("https://fakestoreapi.com/product").then((res)=>res.json()).then(data=>setCount(data)).catch((err)=>console.log(err))
    // axios.get("https://fakestoreapi.com/products").then(res=>setCount(res.data)).catch((err)=>console.log(err))

    // axios.post("https://fakestoreapi.com",{
    //   product:{id:1,name:"mobile"}
    // }).then(res=>console.log(res.data)).catch((err)=>console.log(err)) 
     

    // axios.patch( )

    // axios.delete()

    // axios.put()

    // axios({
    //   method:"POST",
    //   url:"http://"
    // }).then
    //interceptors


  },[])



  return (
    <>


    {count?.map((ele,ind)=>{
      return <h6 key={ind}>{ele.title}</h6>
    })}
    <h6>hello</h6>
    </>
  )
}

export default App
