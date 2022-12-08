import React, { useState } from 'react'

const Message = () => {
    let [msg, setMsg] = useState("Hello....");

    return (
        <div>
            <h1>{msg}</h1>
            <button onClick={() => {
                setMsg("Good Mornng")
            }}>GM</button>
            <button onClick={() => {
                setMsg("Good Night")
            }}>GN</button>
        </div>
    )
}

export default Message