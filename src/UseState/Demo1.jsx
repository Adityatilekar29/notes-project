import React, { useState } from 'react'

const Demo1 = () => {
    const [inputvalue, setinputvalue] = useState("")
    return (
        <div>
            <input type="text" value={inputvalue} onChange={(e) => setinputvalue(e.target.value)} />

            <p> You Typed : <strong>{inputvalue}</strong></p>
        </div>
    )
}

export default Demo1

