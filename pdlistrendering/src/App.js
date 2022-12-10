import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
 import Product from './Product/Product'
 import CompA from './Propsdrilling/CompA'
import Employee from './Employee/Employee'
class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Employee />
                <CompA />
                <Product />
            </div>
        )
    }
}

export default App