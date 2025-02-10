const express = require('express');
const multer = require('multer');
const { getProducts, createProduct, deleteProduct } = require('../controllers/imageController');
const path = require('path');
const fs = require('fs');

const router = express.Router();

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

router.get('/products', getProducts);
router.post('/products', upload.single('image'), createProduct);
router.delete('/products/:id', deleteProduct);

module.exports = router;
