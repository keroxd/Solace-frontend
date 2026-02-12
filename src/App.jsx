import { useState } from 'react'
import AppRoutes from './app-routes'
import {BrowserRouter as Router} from 'react-router-dom'
import NavBar from './navbar'

function App() {
  

  return (
    <>
      <Router>
        <NavBar></NavBar>
        <main>
          <AppRoutes></AppRoutes>
        </main>
      </Router>
    </>
  )
}

export default App
