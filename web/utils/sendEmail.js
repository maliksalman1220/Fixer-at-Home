const nodemailer = require("nodemailer");
require("dotenv").config({ path: "./config.env" });

const sendEmail = (options) => {
  const transporter = nodemailer.createTransport({
    service:"sendgrid",
    auth: {
      user:"apikey",
      pass:"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",
    },
  });

  const mailOptions = {
    from: "alihashim12888@gmail.com",
    to: options.to,
    subject: options.subject,
    html: options.text,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = sendEmail;
