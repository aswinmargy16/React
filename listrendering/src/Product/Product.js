import React, { Component } from 'react'

class Product extends Component {
    state = {
        product: {
            p_Name: 'MOTOROLA g22 (Cosmic Black, 64 GB)',
            price: 25000,
            image: 'https://rukminim1.flixcart.com/image/224/224/l1qrjbk0/mobile/d/w/h/-original-imagd8pyfk7wbdkg.jpeg?q=90',
            qty: 1
        }


    }
    decrHandler = () => {
        this.setState({
            qty: this.state.qty - 1
        })
    }
    incrHandler = () => {
        this.setState({
            product: { ...this.state.product, qty: this.state.product.qty + 1 }
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
                                <td>{this.state.product.p_Name}</td>
                                <td><img src={this.state.product.image} height="100px" /></td>
                                <td>{this.state.product.price}</td>
                                <td> <i onClick={this.decrHandler} className="fa fa-minus-circle"></i> {this.state.product.qty} <i onClick={this.incrHandler} className="fa fa-plus-circle"></i></td>
                                <td>{this.state.product.qty * this.state.product.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    }
}

export default Product