import HomePage from './pages/HomePage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contact from './pages/Contact'
import Features from './pages/Features'
import Visualizations from './pages/Visualizations'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/visualizations" element={<Visualizations />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

  

export default App