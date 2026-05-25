import { useState } from 'react'

// Config react router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Info from './pages/Info'
import NotFound from './pages/NotFound'
import Search from './pages/Search'

// Components
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'

function App() {

  return (
    <>
      <div>
        <h1>React router</h1>
        <BrowserRouter>
          <Navbar/> 
          {/* 9- search params */}
          <SearchForm />
          <Routes>
            {/* 2 - Links com react router */}
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            {/* 4 - Rota dinâmica */}
            <Route path='/products/:id' element={<Product />}/>
            {/* 6 - nested routes */}
            <Route path='/products/:id/info' element={<Info />}/>
            {/* 9 - search */}
            <Route path='/search' element={<Search />} />
            {/* 10 - redirect */}
            <Route path="/company" element={<Navigate to="/about"/>}/>
            {/* 7 - no match route (404) */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
