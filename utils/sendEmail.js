const nodemailer = require('nodemailer');
const nodemailerConfig = require('./nodemailerConfig');

const sendEmail = async ({ name, issue, description }) => {
  console.log('send email triggered');
  let testAccount = await nodemailer.createTestAccount();

  const line1 = `<h5>Issue: </h5><span>${issue}</span>`;
  const line2 = `<h5>Description: </h5><span>${description}</span>`;
  const html = `<h4>Name: ${name}</h4>${line1}${line2}`;

  const transporter = nodemailer.createTransport(nodemailerConfig);

  const info = await transporter.sendMail({
    from: 'Wireline Calcs', // sender address
    to: 'vadfthv@gmail.com', // list of receivers
    subject: 'Wireline Calcs form submission', // Subject line
    html,
    // text: 'SDG back end?', // plain text body
  });
};

module.exports = sendEmail;
