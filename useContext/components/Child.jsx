import React from 'react'
import { useContext } from 'react'
import { PropContext } from '../App'
import Child2 from './Child2'

const Child = () => {
    const prop=useContext(PropContext)
    // console.log(useContext(PropContext))
    console.log(prop)
  return (
    <div>Child
        <hr />
        <h1>you got property of {prop.name} rupees</h1>
        <Child2 />
    </div>
  )
}

export default Child