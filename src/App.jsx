import React from 'react'
import { BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Layout from './layout/Layout'
import { Page } from './pages'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

function App() {
  const AppPage = (
    <Router>
      <Routes>
        <Route path='/' element={<Layout><Page/></Layout>}></Route>
      </Routes>
    </Router>
  )

  return AppPage
}

export default App
