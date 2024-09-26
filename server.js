import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config(); // Load .env variables

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' })); // Increase limit here

// Routes
app.use('/api/users', userRoutes);
// Test Route
app.get('/api/test', (req, res) => {
  res.status(200).json({ message: 'The server is running and this is a test route!' });
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
