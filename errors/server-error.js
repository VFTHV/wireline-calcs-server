const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./custom-api');

class ServerError extends CustomAPIError {
  // custom server error
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  }
}

module.exports = ServerError;
