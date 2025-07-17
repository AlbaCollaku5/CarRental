import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav/Nav'
import Index from './Components/Pages/Index'
import CarsDetails from './Components/Pages/CarsDetails'


function App() {
  return (
    <Router>
      <Nav />  {/* ✅ The Nav always shows */}
      <Routes>
        <Route path="/" element={<Index />} /> {/* ✅ Your landing page */}
        <Route path="/car/:id" element={<CarsDetails />} /> {/* CarsDetails Page */}
      </Routes>
    </Router>
  )
}

export default App
