import React, { Component } from 'react'

class Salary extends Component {
    state = {
        salary: 400000
    }
    updateSalaryHandler = (hike) => {
        this.setState({ salary: this.state.salary + hike })
    }
    componentDidUpdate() {
        
    }
    render() {
        return (
            <div>
                <h2>Employee Salary: {this.state.salary} </h2>
                <button onClick={this.updateSalaryHandler.bind(this, 50000)}>Hike 50k</button>
                <button onClick={this.updateSalaryHandler.bind(this, 100000)}>Hike 100k</button>
                <button onClick={this.updateSalaryHandler.bind(this, 0)}>Hike - No</button>
            </div>
        )
    }
}

export default Salary