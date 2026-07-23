const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

const logger = require('./middleware/logger');
const learningRoutes = require('./routes/learningRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// 1) Built-in middleware: parse JSON request bodies
app.use(express.json());

// 2) Built-in middleware: parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// 3) Third-party middleware: enable CORS
app.use(cors());

// 4) Third-party middleware: add security headers
app.use(helmet());

// 5) Third-party middleware: log requests in development style
app.use(morgan('dev'));

// 6) Custom middleware: log every request
app.use(logger);

// 7) Static middleware: serve files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Example of a simple custom middleware
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Middleware Learning App!');
});

// Health check route
app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is healthy'
  });
});

// Mount the learning routes under /api
app.use('/api', learningRoutes);

// Error handling middleware example
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
