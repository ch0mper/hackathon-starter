import React from 'react'
import { Router, navigate } from '@reach/router'

import MissingPage from 'Common/MissingPage'

import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Somewhere from './Pages/Somewhere'

export default function App() {
  return (
    <div className="page-content">
      <Header />

      <Router className="main">
        <Somewhere path="somewhere" />
        <MissingPage default />
      </Router>

      <Footer />
    </div>
  )
}
