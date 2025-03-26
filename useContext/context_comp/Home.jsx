import React, { useContext } from 'react'
import { NameContext } from '../App'


const Home = () => {
    const color=useContext(NameContext)
  return (
    <div style={{backgroundColor:color?color:"white",color:color?"white":"black"}}>

        hello
        {/* <h1>welcome {user?user:"user"}</h1> */}
    </div>
  )
}

export default Home