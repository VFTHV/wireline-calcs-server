const sendEmail = require('./sendEmail');

const sendVerificationEmail = async ({
  emailBody,
  email,
  verificationToken,
  origin,
}) => {
  const { name, issue, description } = emailBody;

  const line1 = `<h5>Issue:</h5><p>${issue}</p>`;
  const line2 = `<h5>Description:</h5><p>${description}</p>`;

  return sendEmail({
    to: email,
    subject: 'Wireline Calcs form submission',
    html: `<h4>Name: ${name}</h4>${line1}${line2}`,
  });
};

module.exports = sendVerificationEmail;
