const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse JSON data
app.use(bodyParser.json());

// GET endpoint for adding two numbers using query parameters
app.get('/add', (req, res) => {
  const { num1, num2 } = req.query;

  if (!num1 || !num2) {
    return res.status(400).json({ error: 'Please provide two numbers' });
  }

  const result = parseFloat(num1) + parseFloat(num2);

  res.json({ result });
});

// POST endpoint for adding two numbers using request body
app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;

  if (!num1 || !num2) {
    return res.status(400).json({ error: 'Please provide two numbers in the request body' });
  }

  const result = parseFloat(num1) + parseFloat(num2);

  res.json({ result });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
