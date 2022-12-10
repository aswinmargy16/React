import React, { Component } from 'react'

class Product extends Component {
    //qty = 1
    state = {
        qty: 1
    }
    decrHandler = () => {
        this.setState({ qty: this.state.qty - 1 })
    }
    incrHandler = () => {
        this.setState({ qty: this.state.qty + 1 })
    }
    render() {
        return (
            <div>
                <h1>Product Comp</h1>
                <pre>{JSON.stringify(this.state)}</pre>
                <h2>QTY:{this.state.qty}</h2>
                <button onClick={this.decrHandler}>DECR</button>
                <button onClick={this.incrHandler}>INCR</button>
            </div>
        )
    }
}

export default Product