import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Navbar extends Component {
    render() {
        return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">Routing</Link>
            <div className="ml-auto">
                <ul className="navbar-nav">
                    <li className="nav-list"><Link to="/home" className="nav-link">Home</Link></li>
                    <li className="nav-list"><Link to="/about" className="nav-link">About</Link></li>
                    <li className="nav-list"><Link to="/contact" className="nav-link">Contact</Link></li>
                    <li className="nav-list"><Link to="/user" className="nav-link">User</Link></li>
                    <li className="nav-list"><Link to="/digital" className="nav-link">Clock</Link></li>
                    <li className="nav-list"><Link to="/salary" className="nav-link">Hike</Link></li>
                </ul>
            </div>
        </nav>
    }
}

export default Navbar