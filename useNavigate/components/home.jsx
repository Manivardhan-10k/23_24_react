import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        
        Home
        <hr/> 
        <Link to={"/about"}>About</Link><br/>
        <Link  to={'/products'}> Products</Link><br/>
        <Link  to={"/cart"}>Cart</Link>
        <Link  to={"/login"}>Login</Link>



    </div>
  )
}

export default Home