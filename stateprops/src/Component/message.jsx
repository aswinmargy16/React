import React from 'react'
class Message extends React.Component {

    state = {
        msg: "Hello...."
    }
    gmHandler = () => {
        this.setState({ msg: "Good MoRnInG SiR" })
    }
    gnHandler = () => {
        this.setState({ msg: "GoOd NiGhT SiR" })
    }
    render() {
        console.log("Render Method -executing")
        return <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header bg-dark text-white">
                            <h2>Message Value:{this.state.msg} </h2>
                        </div>
                        <div className="card-body">
                            <button className="btn btn-success" onClick={this.gmHandler}>GM  </button>
                            <button className="btn btn-primary" onClick={this.gnHandler}>GN </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Message