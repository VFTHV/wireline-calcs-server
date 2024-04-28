const nodemailer = require('nodemailer');
const nodemailerConfig = require('./nodemailerConfig');

const sendEmail = async ({ to, subject, html }) => {
  console.log('send email triggered');
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport(nodemailerConfig);

  const info = await transporter.sendMail({
    from: 'Wireline Calcs', // sender address
    to, // list of receivers
    subject, // Subject line
    html,
    // text: 'SDG back end?', // plain text body
  });
};

module.exports = sendEmail;
