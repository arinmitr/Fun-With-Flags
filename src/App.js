import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/homepage'
import { Navbar } from './components/navbar.component'
import Details from './pages/details'

import './App.css'
import './../src/components/searchBox.styles.css'
import './dark.css'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/Fun-With-Flags' exact component={Home} />
          <Route path='/Fun-With-Flags/:name' component={Details} />
        </Switch>
      </Router>
    </>
  )
}

export default App
