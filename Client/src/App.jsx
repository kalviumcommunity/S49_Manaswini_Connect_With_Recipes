import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/home'
import Auth from './Pages/auth'
function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/auth' element={<Auth/>} />
        </Routes>
      </Router>

    </>
  )
}

export default App
