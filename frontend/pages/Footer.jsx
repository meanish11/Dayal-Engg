import React from 'react'

function Footer() {
  return (
    <footer className="bg-green-800 text-white py-4 text-center  bottom-0 w-full">
      <p>&copy; 2023 Dayal Engineering. All rights reserved.</p>
      <p>Hajipur, Bihar 844101</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="text-white">Facebook</a>
        <a href="#" className="text-white">Twitter</a>
        <a href="#" className="text-white">Instagram</a>
      </div>
    </footer>
  )
}

export default Footer