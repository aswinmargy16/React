import React, { Component } from 'react'
import Navbar from './Navbar/navbar'

import Login from './Formhandling/Login'
// import Login from './Formhandling/Login-1'
class App extends Component {
   
    render() {
        return (
            <div>
                <Navbar />
                <Login />
                {/* <Login-1 /> */}
            </div>
        )
    }
}

export default App