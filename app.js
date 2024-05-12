// app.js
const express = require('express');
const app = express();
const bookRoutes = require('./routes/bookRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/api/books', bookRoutes); // API path for books

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
