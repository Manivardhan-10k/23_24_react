import React from 'react'

const Higher_comp = (Component) => {
    let name="manivardhan"
    let color="aqua"
  return ()=>{
    return ( <Component prop={name} col={color}/>)
  }
}

export default Higher_comp