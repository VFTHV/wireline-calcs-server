const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const submitProblem = async (req, res) => {
  const { name, issue, description } = req.body;

  // FOR DEV ONLY!!!
  // const wait = (delay) => {
  //   return new Promise((res) => {
  //     setTimeout(() => {
  //       res();
  //     }, delay);
  //   });
  // };
  // await wait(2000);

  if (!name || !issue || !description) {
    throw new CustomError.BadRequestError('Please provide all information');
  }

  res.status(StatusCodes.OK).json({
    name,
    issue,
    description,
    msg: 'Success. Thanks for your feedback!',
  });
};

module.exports = { submitProblem };
