import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import multer from 'multer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const registerDbLoc = path.join(__dirname, './src/db/register.json');
const orderDbLoc = path.join(__dirname, './src/db/order.json');

const app = express();
const port = 3000;

// Use CORS middleware to allow requests from your frontend
app.use(cors({
    origin: 'http://localhost:5173', // Specify the frontend URL
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

// Route to handle registration and save data to register.json
app.post('/register', async (req, res) => {
    console.log('Received registration data:', req.body);
    const newUser = req.body;

    if (!newUser.name || !newUser.email || !newUser.phoneNumber) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    let users = [];
    try {
        const fileData = await fs.readFile(registerDbLoc, 'utf8');
        users = JSON.parse(fileData);
    } catch (err) {
        if (err.code !== 'ENOENT') {
            console.error('Error reading file:', err);
            return res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }

    const existingUser = users.find(user => user.email === newUser.email);
    if (existingUser) {
        return res.status(400).json({ success: false, message: 'Email already exists' });
    }

    users.push(newUser);

    try {
        await fs.writeFile(registerDbLoc, JSON.stringify(users, null, 2), 'utf8');
    } catch (writeError) {
        console.error('Error writing to register.json:', writeError);
        return res.status(500).json({ success: false, message: 'Failed to save user data' });
    }

    console.log('User registered successfully');
    res.status(200).json({ success: true, message: 'Registration successful!' });
});

const upload = multer({ dest: 'uploads/' });

// Route to handle orders and save data to order.json
app.post('/submitOrder', (req, res) => {
    const orderData = req.body;

    // Append orderData to a JSON file locally
    fs.readFile('orders.json', (err, data) => {
        if (err && err.code === 'ENOENT') {
            // If file does not exist, create it with the new order
            fs.writeFile('orders.json', JSON.stringify([orderData], null, 2), (writeErr) => {
                if (writeErr) {
                    return res.status(500).json({ success: false, message: 'Error writing file' });
                }
                res.json({ success: true, message: 'Order saved successfully' });
            });
        } else if (data) {
            // If file exists, read and append new data
            const orders = JSON.parse(data);
            orders.push(orderData);

            fs.writeFile('orders.json', JSON.stringify(orders, null, 2), (writeErr) => {
                if (writeErr) {
                    return res.status(500).json({ success: false, message: 'Error writing file' });
                }
                res.json({ success: true, message: 'Order saved successfully' });
            });
        } else {
            res.status(500).json({ success: false, message: 'Error reading file' });
        }
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


// Route to serve the content of order.json (for viewing all orders)
app.get('/orders', async (req, res) => {
    try {
        const fileData = await fs.readFile(orderDbLoc, 'utf8');
        const orders = JSON.parse(fileData);
        res.status(200).json(orders);
    } catch (err) {
        console.error('Error reading order file:', err);
        res.status(500).json({ success: false, message: 'Failed to retrieve orders' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
