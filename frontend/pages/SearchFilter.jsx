import React, { useState } from 'react'

function SearchFilter({ onSearch, onFilter }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('')
  const [priceRange, setPriceRange] = useState('')
  const [availability, setAvailability] = useState('')

  const handleSearch = () => {
    onSearch(searchTerm)
  }

  const handleFilter = () => {
    onFilter({ category, priceRange, availability })
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded-lg w-full mb-4"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 rounded-lg w-full mb-4"
      >
        <option value="">All Categories</option>
        {/* Add category options here */}
      </select>
      <select
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
        className="border p-2 rounded-lg w-full mb-4"
      >
        <option value="">All Price Ranges</option>
        {/* Add price range options here */}
      </select>
      <select
        value={availability}
        onChange={(e) => setAvailability(e.target.value)}
        className="border p-2 rounded-lg w-full mb-4"
      >
        <option value="">All Availability</option>
        <option value="In Stock">In Stock</option>
        <option value="Out of Stock">Out of Stock</option>
      </select>
      <button onClick={handleSearch} className="bg-green-800 text-white py-2 px-4 rounded-lg mr-2">Search</button>
      <button onClick={handleFilter} className="bg-green-800 text-white py-2 px-4 rounded-lg">Filter</button>
    </div>
  )
}

export default SearchFilter