const express = require('express');
const app = express();

// Endpoint for adding two numbers using query parameters
app.get('/add', (req, res) => {
  const { num1, num2 } = req.query;

  // Check if both numbers are provided
  if (!num1 || !num2) {
    return res.status(400).json({ error: 'Please provide two numbers' });
  }

  // Perform addition
  const result = parseFloat(num1) + parseFloat(num2);

  // Send the result as JSON response
  res.json({ result });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
