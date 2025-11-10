const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mysql@123', // change if your password is different
  database: 'shopdb'
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('❌ Database connection failed:', err);
  } else {
    console.log('✅ Connected to MySQL database');
  }
});

// Simple route
app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});

// API to get all items
app.get('/api/items', (req, res) => {
  db.query('SELECT * FROM items', (err, results) => {
    if (err) {
      console.error('Error fetching items:', err);
      res.status(500).send('Error fetching items');
    } else {
      res.json(results);
    }
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
