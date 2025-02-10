import  { useState, useEffect } from 'react';
import axios from 'axios';


function ProductList() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    category: '',
    material: '',
    availability: 'In Stock',
    image: null
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewProduct({ ...newProduct, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', newProduct.name);
    formData.append('description', newProduct.description);
    formData.append('image', newProduct.image);
    formData.append('category', newProduct.category);
    formData.append('material', newProduct.material);
    formData.append('availability', newProduct.availability);

    try {
      const response = await axios.post(`http://localhost:5000/api/products`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setProducts([...products, response.data]);
      setNewProduct({
        name: '',
        description: '',
        category: '',
        material: '',
        availability: 'In Stock',
        image: null
      });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      setProducts(products.filter(product => product._id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="bg-green-800 text-white py-4 text-center">
        <h1 className="text-3xl font-bold">Product List</h1>
      </header>
      <main className="mt-6">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={newProduct.description}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="image">Image</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              value={newProduct.category}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="material">Material</label>
            <input
              type="text"
              id="material"
              name="material"
              value={newProduct.material}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="availability">Availability</label>
            <select
              id="availability"
              name="availability"
              value={newProduct.availability}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            >
              <option value="In Stock">In Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>
          <button type="submit" className="bg-green-800 text-white py-2 px-4 rounded-lg">Add Product</button>
        </form>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map(product => (
            <div key={product._id} className="bg-white p-6 rounded-lg shadow-md">
              <img src={`http://localhost:5000/api/products/${product.image}`} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-2">{product.description}</p>
              <p className="text-gray-600 mb-2">Category: {product.category}</p>
              <p className="text-gray-600 mb-2">Material: {product.material}</p>
              <p className={`font-semibold ${product.availability === 'In Stock' ? 'text-green-500' : 'text-red-500'}`}>
                {product.availability}
              </p>
              <button
                onClick={() => handleDelete(product._id)}
                className="bg-red-500 text-white py-2 px-4 rounded-lg mt-4"
              >
                Delete
              </button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default ProductList;