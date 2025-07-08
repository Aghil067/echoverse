const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db');
const postRoutes = require('./routes/posts');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Use post routes
app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
