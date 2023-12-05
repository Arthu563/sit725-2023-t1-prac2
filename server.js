const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Define a simple endpoint
app.get('/hello', (req, res) => {
  res.send('Hello, this is a simple endpoint!');
});
// Endpoint to add two numbers
app.get('/add', (req, res) => {
  const { num1, num2 } = req.query;
  if (!num1 || !num2) {
    return res.status(400).send('Please provide two numbers');
  }
  const result = parseFloat(num1) + parseFloat(num2);
  res.send(`The result of ${num1} + ${num2} is ${result}`);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

