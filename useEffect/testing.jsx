import React, { use, useState } from 'react'
// import Willunmount from './willunmount'
import C_W_U from './use_Effect/C_W_U'
const Testing = () => {
    const [show,setShow]=useState(true)


  return (
    <div> 
    <button onClick={()=>setShow(!show)}>
        {show?"unmount component":"mount component"}
    </button>

        {/* {show?<Willunmount/>:<p>component unmounted</p>} */}
        {show?<C_W_U/>:<p>component unmounted</p>}


   
    </div>


  )
}

export default Testing