import React, { Component } from 'react'
import Navbar from './Navbar/navbar'
import Login from './components/Login'
import Location from './components/Location'
class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Login />
                <Location />
            </div>
        )
    }
}

export default App