import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import './assets/tailwind.css'
import ComingSoon from './views/coming-soon'
import Profile from './views/profile'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={ComingSoon} exact path="/coming-soon" />
        <Route component={Profile} exact path="/profile" />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
