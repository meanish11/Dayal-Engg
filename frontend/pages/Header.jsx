import  { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`/products?search=${searchTerm}`)
  }

  return (
    <header className="bg-green-800 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dayal Engineering</h1>
        <ul className="flex space-x-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
        <form onSubmit={handleSearch} className="flex space-x-2 ">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="p-2 rounded-lg text-black"
          />
          <button type="submit" className="bg-white text-green-800 py-2 px-4 rounded-lg">Search</button>
        </form>
      </nav>
    </header>
  )
}

export default Header