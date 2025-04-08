import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
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

            {/* Featured Products */}
            <section className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {products.map(product => (
                        <div key={product._id} className="bg-white p-6 rounded-lg shadow-md">
                            <img
                                src={product.imageUrl} // Fetch from Cloudinary
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
        </div>
    );
}

export default Home;
