import React from 'react'

function Contact() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="bg-green-800 text-white py-4 text-center">
        <h1 className="text-3xl font-bold">Contact Dayal Engineering</h1>
      </header>
      <main className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-700">
          If you have any questions or need further information, please feel free to contact us at:
        </p>
        <p className="text-gray-700 mt-4">
          Address: Hajipur, Bihar 844101
        </p>
        <p className="text-gray-700 mt-2">
          Phone: +91-1234567890
        </p>
        <p className="text-gray-700 mt-2">
          Email: info@dayalengineering.com
        </p>
      </main>
    </div>
  )
}

export default Contact