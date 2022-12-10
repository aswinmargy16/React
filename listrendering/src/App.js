import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import Product from './Product/Product-withoutboot'
import CompA from './Propsdrilling/CompA'
import Employee from './Employee/Employee'
class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Employee />
                <Product/>
                <CompA/>
            </div>
        )
    }
}

export default App