import React from 'react'
import Navbar from './Components/Navbar'
import Page from "./Components/Page"

const App = () => {
  return (
    <div>
      <div className="main">
          <Navbar></Navbar>
          <Page></Page>
      </div>
    </div>
  )
}

export default App
