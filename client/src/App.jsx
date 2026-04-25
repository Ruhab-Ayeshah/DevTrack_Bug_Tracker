import {Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Sign_in from './pages/Sign_in'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signin" element={<Sign_in />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App