import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Home1 from './pages/Home1';
import Signin from './pages/Signin';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID!}>
    <Router>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/home1" element={<Home />} />
        <Route path='/signin' element={<Signin/>}/>
      </Routes>
    </Router>
    </GoogleOAuthProvider>
  )
}

export default App