
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../pages/Header'
import Footer from '../pages/Footer'
import Home from '../pages/Home'
import ProductList from '../pages/ProductList'

import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/login'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App