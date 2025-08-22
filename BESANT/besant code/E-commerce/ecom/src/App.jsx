import { useState } from 'react'
import { Routes,Route} from 'react-router-dom'
import NavbarPage from './page/navbarpage.jsx'


function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<NavbarPage />} />
      </Routes>
    </>
  )
}

export default App;
