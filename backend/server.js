// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

dotenv.config(); // Load .env variables

const app = express();

// Middleware
app.use(cors()); // Enable all CORS requests
app.use(express.json()); // Parse JSON bodies

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// ✅ Root route to confirm server is running
app.get('/', (req, res) => {
  res.send('✅ API is running...');
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Fallback for unknown routes
app.use((req, res) => {
  res.status(404).json({ message: '❌ Route not found' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
