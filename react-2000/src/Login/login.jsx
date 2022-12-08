import React from 'react'

const Login = () => {
    let [user, setUser] = React.useState({ email: "", password: "" })
    let submitHandler = (event) => {
        //event.preventDefault();
        console.log(user)
        //Axios.post('url', user).then().catch()
    }
    return <div className="container mt-5">
        {/* <pre>{JSON.stringify(user)}</pre> */}
        <div className="row">
            <div className="col-md-5">
                <div className="card">
                    <div className="card-header">
                        <h3>Login Details</h3>
                    </div>
                    <div className="card-body">

                        <form onSubmit={submitHandler}>
                            <div className="form-group">
                                <input placeholder="Email Id" name="email" type="text" onChange={(event) => {
                                    setUser({ ...user, [event.target.name]: event.target.value })
                                }} className="form-control" />
                            </div>
                            <div className="form-group">
                                <input placeholder="Password" name="password" type="text" onChange={(event) => {
                                    setUser({ ...user, [event.target.name]: event.target.value })
                                }} className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btn btn-success" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Login