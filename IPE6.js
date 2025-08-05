const express = require('express');
const session = require('express-session');
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('.', { index: 'index.html' }));

// Session middleware setup
app.use(session({
  secret: 'secretKey123',   // change this in real apps
  resave: false,
  saveUninitialized: true
}));

// Route 1: Save session and redirect to /fetchsession
app.post('/savesession', (req, res) => {
  req.session.username = req.body.username;
  res.redirect('/fetchsession');
});

// Route 2: Fetch session and display user with logout link
app.get('/fetchsession', (req, res) => {
  if (req.session.username) {
    res.send(`
      <h2>Welcome, ${req.session.username}</h2>
      <a href="/deletesession">Logout</a>
    `);
  } else {
    res.redirect('/');
  }
});

// Route 3: Destroy session and go back to home
app.get('/deletesession', (req, res) => {
  req.session.destroy(err => {
    if (err) return res.send('Error logging out');
    res.redirect('/');
  });
});

// Start server
app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});
