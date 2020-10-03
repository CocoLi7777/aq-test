import React from 'react'
import { Router } from '@reach/router'
import Home from './Home'
import Header from './components/elements/Header'

const App = () => (
  <>
    <Header />
    <Router>
      <Home path="/" />
    </Router>
  </>
)

export default App
