import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Message from './Message/message'
import Navbar from "./Navbar/navbar"
import Product from './Components/Product/product'
import Digital from "./Digital/digital"
import Login from './Login/login'

let App = () => {
  return <div>
    <Router>
      <Navbar />
        <Switch>
        <Route path="/product" component={Product} />
        <Route path="/digital" component={Digital} />
        <Route path="/formhandling" component={Login} />
      </Switch>
      {/* <Message /> */}
      {/* <Product /> */}
      {/* <Login /> */}
      {/* <Digital /> */}
    </Router>
  </div>
}
export default App