import React from 'react'
import G from './G'

const GG = (props) => {
    console.log(props)
  return (
    <div>GG
<G  p={props.property}/>

    </div>
  )
}

export default GG