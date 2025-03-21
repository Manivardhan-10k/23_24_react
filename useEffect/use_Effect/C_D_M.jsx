import React, { useEffect, useState } from 'react'

const C_D_M = () => {
    const [value, setValue] = useState(0)

    useEffect(() => {
        console.log("Component Did Mount")
        setValue(value + 1)
    }, [])
    return (

        <div>
            C_D_M

            {console.log("from jsx")}
        </div>
    )
}

export default C_D_M