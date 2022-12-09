import React, { Component } from 'react'
class Login extends Component {
    state = {
        email: "",
        password: ""
    }
    updateHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
            /*  email: event.target.value,
            //  password: event.target.value */
        })

    }
    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    render() {
        return <>
            <div className="container">
                <pre>{JSON.stringify(this.state)}</pre>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h3>Login Details</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.submitHandler}>
                                    <div className="form-group">
                                        <input placeholder="Email" name="email" className="form-control" type="text" onChange={this.updateHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input placeholder="Password" name="password" className="form-control" type="password" onChange={this.updateHandler} />
                                    </div>
                                    <input type="submit" />
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



        </>
    }
}

export default Login