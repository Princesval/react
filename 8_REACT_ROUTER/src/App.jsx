import { useState } from 'react'

// Config react router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import About from './pages/About'

// Components
import Navbar from './components/Navbar'
import Product from './pages/Product'
import Info from './pages/Info'

function App() {

  return (
    <>
      <div>
        <h1>React router</h1>
        <BrowserRouter>
          <Navbar/> 

          <Routes>
            {/* 2 - Links com react router */}
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            {/* 4 - Rota dinâmica */}
            <Route path='/products/:id' element={<Product />}/>
            {/* 6 - nested routes */}
            <Route path='/products/:id/info' element={<Info />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
