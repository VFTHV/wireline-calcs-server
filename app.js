require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

// rest of packages
const cors = require('cors');
const morgan = require('morgan');
const rateLimiter = require('express-rate-limit');

// routes
const formRouter = require('./routes/formRouter');

// route usage
app.use('/api/v1/form', formRouter);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    console.log(`Server is listening on port ${port}...`);
    app.listen(3000, () => {});
  } catch (error) {
    console.log(error);
  }
};

start();
