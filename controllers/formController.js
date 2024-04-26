const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const submitProblem = async (req, res) => {
  const { name, issue, description } = req.body;

  if (!name || !issue || !description) {
    throw new CustomError.BadRequestError('Please provide all information');
  }

  res
    .status(StatusCodes.OK)
    .json({
      name,
      issue,
      description,
      msg: 'Success. Thanks for your feedback!',
    });
};

module.exports = { submitProblem };
