import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Home1 from './pages/Home1';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/home1" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App