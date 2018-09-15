import React from 'react'
import { hot } from 'react-hot-loader'
import {HashRouter as Router, Route} from 'react-router-dom'
import Index from './index'

const App = () => (
  <Router>
    <div className="container">
      <Route exact path="/" component={Index}/>
    </div>
  </Router>
)

export default hot(module)(App)