import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import fs from 'fs';

// Create an instance of express
const app = express();
const port = 3000;

// Middleware to parse JSON body requests
app.use(express.json());

// Use CORS middleware to allow requests from your frontend
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from your frontend
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

// Set up storage for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

// Initialize multer
const upload = multer({ storage });

// Ensure uploads directory exists
const uploadsDir = './uploads';
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Define the location for form.json
const orderDbLoc = path.join(__dirname, './src/db/form.json');

// Ensure the form database file exists
if (!fs.existsSync(orderDbLoc)) {
    fs.writeFileSync(orderDbLoc, JSON.stringify([])); // Initialize with an empty array
}

// Function to safely read JSON file
const safeReadJSON = (filePath) => {
    try {
        const fileData = fs.readFileSync(filePath, 'utf8');
        return fileData ? JSON.parse(fileData) : []; // If empty, return an empty array
    } catch (error) {
        console.error('Error parsing JSON:', error);
        return []; // If an error occurs, return an empty array
    }
};

// Endpoint to handle file uploads and form data
app.post('/upload', upload.single('image'), (req, res) => {
    console.log('Request Body:', req.body);

    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    const { name, email, phoneNumber, productType, quantity } = req.body;

    const orderData = {
        name,
        email,
        phoneNumber,
        productType,
        quantity,
        fileName: req.file.filename,
        filePath: path.join('uploads', req.file.filename),
    };

    // Safely read and parse form.json
    const existingData = safeReadJSON(orderDbLoc);

    // Push new order data into the existing data array
    existingData.push(orderData);

    try {
        // Write updated data back to the JSON file
        fs.writeFileSync(orderDbLoc, JSON.stringify(existingData, null, 2)); // Pretty print JSON
        console.log('Updated form.json:', existingData);
        res.json({ message: 'Order submitted successfully', order: orderData });
    } catch (error) {
        console.error('Error writing to form.json:', error);
        return res.status(500).json({ message: 'Internal server error during order submission' });
    }
});

// Serve uploaded files
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
