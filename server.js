const express = require('express');
const cors = require('cors');
const router = require('./api');
const connectDB = require('./db');
const app = express();
const port = 5000;

app.use(
  express.urlencoded({ extended: true })
);
  
app.use(cors());
app.use(express.json());

connectDB();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/api', router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});