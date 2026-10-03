const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse form data and serve static files
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Server-side validation (Defense in Depth)
    if (!email || !password) {
        return res.status(400).send('<h2>400 Bad Request: Missing fields</h2><a href="/">Go back</a>');
    }
    if (!email.includes('@')) {
        return res.status(400).send('<h2>400 Bad Request: Invalid email format</h2><a href="/">Go back</a>');
    }
    if (password.length < 8) {
        return res.status(400).send('<h2>400 Bad Request: Password too short</h2><a href="/">Go back</a>');
    }

    // If validation passes
    res.send('<h2>Login successful! Server-side validation passed.</h2>');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});