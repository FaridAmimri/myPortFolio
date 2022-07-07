/** @format */

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
