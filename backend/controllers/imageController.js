const Product = require('./models/product');
const fs = require('fs');
const path = require('path');

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  const { name, description, category, material, availability } = req.body;
  const image = req.file.filename; // Store only the filename

  const newProduct = new Product({
    name,
    description,
    image,
    category,
    material,
    availability
  });

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        console.log(`Product with id ${req.params.id} not found`);
        return res.status(404).json({ message: 'Product not found' });
      }
  
      // Delete the image file from the uploads folder
      const imagePath = path.join(__dirname, '..', 'uploads', product.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
        console.log(`Deleted image file: ${imagePath}`);
      } else {
        console.log(`Image file not found: ${imagePath}`);
      }
  
      await product.remove();
      console.log(`Deleted product with id ${req.params.id}`);
      res.json({ message: 'Product deleted' });
    } catch (error) {
      console.error(`Error deleting product with id ${req.params.id}:`, error);
      res.status(500).json({ message: error.message });
    }
  };

module.exports = {
  getProducts,
  createProduct,
  deleteProduct
};