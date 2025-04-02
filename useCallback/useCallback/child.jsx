import React from 'react'

const Child = (props) => {
    console.log("child")
  return (
    <div>


        <button onClick={props.decrement}>decrement</button>



    </div>
  )
}

export default Child