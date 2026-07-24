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
// Express provides built-in middleware to read incoming JSON data automatically.
app.use(express.json());

// 2) Built-in middleware: parse URL-encoded form data
// This is helpful for handling form submissions from HTML pages.
app.use(express.urlencoded({ extended: true }));

// 3) Third-party middleware: enable CORS
// cors allows your API to be accessed by different front-end applications.
app.use(cors());

// 4) Third-party middleware: add security headers
// helmet adds extra security protections to the HTTP response.
app.use(helmet());

// 5) Third-party middleware: log requests in development style
// morgan prints request details in the console for debugging.
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

// 8) Concept: Route-specific middleware
// Middleware can also be applied only to one route or a group of routes.
// This is useful for authentication, authorization, or input validation.
const checkApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];

  if (apiKey === 'my-secret-key') {
    next();
  } else {
    res.status(401).json({
      success: false,
      message: 'Unauthorized: invalid API key'
    });
  }
};

// Example of a protected route that uses route-specific middleware
app.get('/secure', checkApiKey, (req, res) => {
  res.json({
    success: true,
    message: 'You accessed a protected route successfully'
  });
});

// Mount the learning routes under /api
app.use('/api', learningRoutes);

// 9) Error-handling middleware
// This type of middleware is used to catch errors thrown in routes or other middleware.
// It receives four arguments: err, req, res, and next.
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

// Example route that triggers an error for demonstration
app.get('/error-demo', (req, res, next) => {
  const error = new Error('This is a demo error');
  next(error);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
