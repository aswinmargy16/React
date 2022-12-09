import React, { Component } from 'react'
class Login extends Component {
    state = {
        email: "",
        password: ""
    }
    emailHandler = (event) => {
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({ email: event.target.value })
    }
    passwordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    render() {
        return <>
            {/* <pre>{JSON.stringify(this.state)}</pre> */}
            <h1>Login Details</h1>
            <form onSubmit={this.submitHandler}>
                <label >Email Id:</label>
                <input type="text" onChange={this.emailHandler} /> <br /><br />
                <label >Password</label>
                <input type="password" onChange={this.passwordHandler} /> <br /><br />
                <input type="submit" />
            </form>
        </>
    }
}

export default Login