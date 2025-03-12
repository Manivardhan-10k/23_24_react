import React from 'react'
import Firstcomp from './comp1'
import Secondcomp from "./comp2"

const Fun_comp = () => {

    let num=7
  return (
    <div>

    <Secondcomp  n={num}/>
    </div>
  )
}

export default Fun_comp