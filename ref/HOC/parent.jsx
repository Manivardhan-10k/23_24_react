import React from 'react'
import Child_comp from './child'
import Higher_comp from './higher'


const UpdatedCompenent=Higher_comp(Child_comp)
const Parent_comp = () => {
  return (
    <div>Parent
        <UpdatedCompenent />
    </div>
  )
}

export default Parent_comp