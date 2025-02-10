import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
const [products, setProducts] = useState([]);

useEffect(() => {
const fetchProducts = async () => {
try {
const response = await axios.get('http://localhost:5000/api/products');
console.log('Fetched products:', response.data);
setProducts(response.data);
} catch (error) {
console.error('Error fetching products:', error);
}
};
fetchProducts();
}, []);

if (!Array.isArray(products)) {
return <div>Error: Products data is not an array</div>;
}

return (
<div className="p-6 bg-gray-100 min-h-screen">
<header className="bg-green-800 text-white py-4 text-center">
<h1 className="text-3xl font-bold">Welcome to Dayal Engineering</h1>
<p className="text-lg">Hajipur, Bihar 844101</p>
</header>
<main className="mt-6">
{/* Hero Section */}
<section className="relative bg-cover bg-center h-96" style={{ backgroundImage: 'url(https://via.placeholder.com/1200x600)' }}>
<div className="absolute inset-0 bg-black opacity-50"></div>
<div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
<h2 className="text-4xl font-bold mb-4">Quality Products for Your Home</h2>
<p className="text-lg mb-6">Explore our wide range of gates, windows, and railings.</p>
<a href="/products" className="bg-green-800 text-white py-2 px-4 rounded-lg">Shop Now</a>
</div>
</section>


Collapse
    {/* Featured Products Section */}
    <section className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map(product => (
          <div key={product._id} className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={`http://localhost:5000/${product.image}`}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-2">{product.description}</p>
            <p className="text-gray-600 mb-2">Category: {product.category}</p>
            <p className="text-gray-600 mb-2">Material: {product.material}</p>
            <p className={`font-semibold ${product.availability === 'In Stock' ? 'text-green-500' : 'text-red-500'}`}>
              {product.availability}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <p className="text-gray-700 mb-2">"Dayal Engineering provided excellent service and high-quality products. Highly recommend!"</p>
          <p className="text-gray-600 font-semibold">- Customer 1</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <p className="text-gray-700 mb-2">"The gates and railings we purchased are top-notch. Great craftsmanship!"</p>
          <p className="text-gray-600 font-semibold">- Customer 2</p>
        </div>
      </div>
    </section>

    {/* Categories Section */}
    <section className="mt-6 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-bold mb-2">Gates</h3>
          <p className="text-gray-700">Explore our range of sturdy and stylish gates.</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-bold mb-2">Windows</h3>
          <p className="text-gray-700">Discover our collection of durable and elegant windows.</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-bold mb-2">Railings</h3>
          <p className="text-gray-700">Check out our selection of high-quality railings.</p>
        </div>
      </div>
    </section>
  </main>
</div>
);
}

export default Home;