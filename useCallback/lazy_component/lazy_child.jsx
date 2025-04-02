import React, { useEffect, useState } from 'react'

const Lazy_child = () => {

    const [prod,setProducts]=useState(null)


useEffect(()=>{
    console.log("child called")

    fetch("https://fakestoreapi.com/products").then((data)=>data.json()).then(res=>setProducts(res)).catch((err)=>console.log(err))

},[])
  return (
    <div>

        {prod?.map((ele,ind)=>{
            return <div key={ind}>
                <h1>{ele.title}</h1>
                <p>{ele.description}</p>
                <p>{ele.price}</p>
                <p><img src={ele.image} alt=""  height={"150px"} width={"200px"}/></p>
            </div>

        })}
        





    </div>
  )
}

export default Lazy_child