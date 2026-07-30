import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Valentine from './Valentine'
import Birthday from './Birthday'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Valentine />} />
        <Route path="/birthday" element={<Birthday />} />
      </Routes>
    </Router>
  )
}

export default App
