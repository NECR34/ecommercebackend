const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "allan28naranjo1988@gmail.com",
    pass: "esdmhvjfdwsd",
  },
});

module.exports = transporter;
