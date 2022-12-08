import React, { useEffect } from 'react'

const Digital = () => {
    //let time = new Date().toLocaleTimeString()
    let [ct, setCT] = React.useState(new Date().toLocaleTimeString())
    useEffect(() => {

        setInterval(() => {
            setCT(new Date().toLocaleTimeString())
        }, [1000])
        return () => {
            console.log("UnMouting Time")
        }
    }, []);
    return (
        <div>

            <h1>{ct}</h1>
        </div>
    )
}

export default Digital