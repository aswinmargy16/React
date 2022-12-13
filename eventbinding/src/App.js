import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import DigitalClock from './Components/DigitalClock'
import User from './User/User'
import Salary from './Eventbinding/Salary'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const App = () => {
    return <React.Fragment>
        <Router>
            <Navbar />
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/user" component={User} />
                <Route path="/digital" component={DigitalClock} />
                <Route path="/salary" component={Salary} />
            </Switch>
        </Router>
    </React.Fragment>
}

export default App