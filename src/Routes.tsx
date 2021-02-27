import React from 'react'
import Landing from './pages/Landing'
import CartView from './pages/CartView'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/cart">
          <CartView />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
