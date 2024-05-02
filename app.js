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

// error handlers
const notFoundMiddleWare = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// extra packages
app.use(morgan('tiny'));
app.use(express.json());
app.use(cors());

// route usage
// form route
// form route
// form route
// form route
// form route
// form route
app.use('/api/v1/form', formRouter);

// middleware
app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleware);

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
