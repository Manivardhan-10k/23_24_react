import React, { memo } from 'react'

const Child = memo((props) => {
    console.log(props.prop)
    console.log("child")
  return (
    <div>Child</div>
  )
})

export default Child