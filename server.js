const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Define a simple endpoint for experimentation
app.get('/api/sample', (req, res) => {
    res.send('This is a sample endpoint with no functionalty defined!');
});

// Define a route to serve the HTML form
app.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define a route to handle form submission and perform addition
app.get('/api/add', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Please provide valid numbers.');
    }

    const result = num1 + num2;

    res.send(`The sum of ${num1} and ${num2} is: ${result}`);
});

// Start the server
const port = 3000; // Set your desired port number
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
