// create web server
const express = require('express');
const app = express();
const port = 3000;

// store comments
let comments = [];

// middleware
app.use(express.static('public'));
app.use(express.json());

// get comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// post comments
app.post('/comments', (req, res) => {
  const { name, message } = req.body;
  comments.push({ name, message });
  res.json({ status: 'success' });
});

// start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});