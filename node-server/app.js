require('dotenv').config();
require('express-async-errors');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const express = require('express');
const app = express();

// controller
const stripeController = require('./controllers/stripeController');
// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());
app.use(express.static('./public'));

// stripe
app.post('/stripe', stripeController);

// Test endpoint
app.get('/ledgers', cors(), (req, res) => {
  const directoryPath = path.join(__dirname, 'data');
  const directoryNames = fs
    .readdirSync(directoryPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  res.json(directoryNames);
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5001;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`A shit-show is happening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
