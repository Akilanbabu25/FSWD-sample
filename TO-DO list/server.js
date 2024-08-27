const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));

// Dummy user data
const users = [{ username: 'user1', password: 'password1' }];

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        req.session.user = user;
        res.redirect('/dashboard');
    } else {
        res.send('Invalid credentials');
    }
});

app.get('/dashboard', (req, res) => {
    if (req.session.user) {
        res.send('Welcome to your dashboard');
    } else {
        res.redirect('/login');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
