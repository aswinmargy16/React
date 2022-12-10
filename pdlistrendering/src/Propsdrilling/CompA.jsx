import React, { Component } from 'react'
import CompB from './CompB'
class CompA extends Component {
    ename = "Rahul Gandhi - Jadoo"
    render() {
        return (
            <div>
                <h1>Component A</h1>
                <h5>Employee Name: {this.ename} </h5>
                <hr />
                <CompB name={this.ename} />
            </div>
        )
    }
}

export default CompA