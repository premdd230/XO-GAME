const express = require('express');
const path = require('path');

const app = express();
const PORT = 5500;

// Serve static files from the 'TIC-TAC-TOE' folder
app.use(express.static(path.join(__dirname, 'main')));

// Default route (optional)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'main', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});