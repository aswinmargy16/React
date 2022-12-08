import React, { Component } from 'react'

class Product extends Component {
    state = {
        p_Name: 'MOTOROLA g22 (Cosmic Black, 64 GB)',
        price: 25000,
        image: 'https://rukminim1.flixcart.com/image/224/224/l1qrjbk0/mobile/d/w/h/-original-imagd8pyfk7wbdkg.jpeg?q=90',
        qty: 1
    }
    decrHandler = () => {
        this.setState({
            qty: this.state.qty - 1
        })
    }
    incrHandler = () => {
        this.setState({
            qty: this.state.qty + 1

        })

    }
    render() {
        return <div className="container mt-5">
            <div className="row">
                <div className="col-md-8">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>QTY</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.p_Name}</td>
                                <td><img src={this.state.image} height="100px" alt="image1"/></td>
                                <td>{this.state.price}</td>
                                <td> <i onClick={this.decrHandler} className="fa fa-minus-circle"></i> {this.state.qty} <i onClick={this.incrHandler} className="fa fa-plus-circle"></i></td>
                                <td>{this.state.qty * this.state.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    }
}

export default Product