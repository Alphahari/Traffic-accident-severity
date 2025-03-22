import HomePage from './pages/HomePage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contact from './pages/Contact'
// import Features from './pages/Features'
// import Visualizations from './pages/Visualizations'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/features" element={<Features />} /> */}
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/visualizations" element={<Visualizations />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

  

export default App