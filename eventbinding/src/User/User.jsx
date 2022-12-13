import React, { Component } from 'react'
import Axios from 'axios'
class User extends Component {
    state = {
        user: {}
    }
    componentDidMount() {
        Axios.get('https://dummyjson.com/users')
            .then((response) => {
                console.log(response.data)
                this.setState({
                    user: response.data
                })
            })
            .catch()
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(this.state.user).length > 0 ?
                                        <>
                                            {
                                                this.state.user.users.map((userObj) => {
                                                    return <tr>
                                                        <td>{userObj.id}</td>
                                                        <td>{userObj.firstName}</td>
                                                        <td>{userObj.email}</td>
                                                        <td>{userObj.gender}</td>
                                                    </tr>
                                                })
                                            }
                                        </> : null
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                <pre>{JSON.stringify(this.state.user)}</pre>

            </div>
        )
    }
}
export default User