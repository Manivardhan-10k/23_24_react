import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Product = () => {
    // console.log(useParams())

    const navigate=useNavigate()
    const {id}=useParams()
    // console.log(id)

    const [pro,setPro]=useState(null)
    // const [p_id,setId]=useState(null)

    useEffect(()=>{
        if (id){
            navigate(`/product/${id}`)
        }

    },[])
   

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(json=>setPro(json)).catch((err)=>setPro())
    },[id])

  return (
    <div>Product



<hr />

<h1>{pro?.title}</h1>
<img src={pro?.image} alt="product image" />
<hr />

      {/* <button><Link to={`/product/${15}`}>go to product 15</Link></button> */}
    </div>




  )
}

export default Product