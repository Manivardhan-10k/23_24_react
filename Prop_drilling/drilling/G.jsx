import React from 'react'
import Parent from './Parent'

const G = (props) => {
    console.log(props)
  return (
    <div>G

        <Parent  p={props.p}/>
    </div>
  )
}

export default G