import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './components/About'

function App() {

  return (
    <>

   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/home' element={ <Home /> } />
    <Route path='/aboutus' element={<About />} />
   </Routes>
    </>
  )
}

export default App
