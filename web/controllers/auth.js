const crypto = require("crypto");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");
const Client = require("../models/Client");
const sendEmail = require("../utils/sendEmail");


exports.register = async (req, res, next) => {
  const {firstname,lastname,username, email, password,contactnumber,dateofbirth,address } = req.body;


  try {
    const user = await Client.create({
      firstname,
      lastname,
      username,
      email,
      password,
      contactnumber,
      dateofbirth,
      address,
    });

    sendToken(user, 200, res);
  } catch (err) {
    next(err);
  }
};


const sendToken = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();
  res.status(statusCode).json({ sucess: true, token });
};
