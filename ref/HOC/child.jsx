import React from 'react'

const Child_comp = (props) => {
    console.log(props)
    let size="100px"
  return (
    <div>Child


        <h1 style={{color:props.col,fontSize:size}}> {props.prop}</h1>
    </div>
  )
}

export default Child_comp