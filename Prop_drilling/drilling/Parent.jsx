import React from 'react'
import Child from './Child'

const Parent = (props) => {

  return (
    <div>Parent

        <Child  prop={props.p}/>
    </div>
  )
}

export default Parent