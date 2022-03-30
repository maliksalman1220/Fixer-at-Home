const crypto = require("crypto");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");
const Client = require("../models/Client");
const worker = require("../models/Worker");
const Admin = require("../models/Admin");
const sendEmail = require("../utils/sendEmail");
const bcrypt = require("bcryptjs");

exports.registerclient = async (req, res, next) => {
  const { firstname, lastname, username, email, password, contactnumber, dateofbirth, address } = req.body;

  console.log(req.body);

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

    sendToken(user, 200, res)
    return (res.json({ 'msg': x }));
  } catch (err) {
    next(err);
  }
};

exports.registerworker = async (req, res, next) => {
  const { firstname, lastname, username, email, password, contactnumber, dateofbirth, address, category, servicep, status, experience, rating } = req.body;

  try {
    const user = await Worker.create({
      firstname,
      lastname,
      username,
      email,
      password,
      contactnumber,
      dateofbirth,
      address,
      category, servicep, status, experience, rating
    });

    sendToken(user, 200, res)
    return (res.json({ 'msg': x }));
  } catch (err) {
    next(err);
  }
};

exports.registeradmin = async (req, res, next) => {
  const { firstname, lastname, username, email, password, contactnumber, dateofbirth, address } = req.body;

  try {
    const user = await Admin.create({
      firstname,
      lastname,
      username,
      email,
      password,
      contactnumber,
      dateofbirth,
      address,
    });

    sendToken(user, 200, res)
    return (res.json({ 'msg': x }));
  } catch (err) {
    next(err);
  }
};

exports.LoginUser = async (req, res, next) => {

  const user = await Client.findOne({
    email: req.body.email,
  });

  if (!user) 
  { 
    console.log('user not found'); 
    return res.json({ status: 'error', error: 'User not found' }); 
  }

  const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

  if (!isPasswordValid) 
  {
    console.log('password not valid');
    return res.json({ status: 'error', error: 'Password not valid' });
  }
  else 
  {
    return res.json({ status: 'ok'});
  }
};


exports.email = async (req, res, next) => {
  const { email, contactnumber } = req.body;

  x = contactnumber.substr(0, 5);

  const message = `
        <h1>You have requested a password reset</h1>
        
        <p>${x}</p>
      `;

  try {

    await sendEmail({
      to: email,
      subject: "Password Reset Request",
      text: message,
    })

  } catch (err) {
    console.log(err);
    return next(new ErrorResponse("Email could not be sent", 500));
  }

  res.status(200).json({ msg: x });
};


const sendToken = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();
  res.status(statusCode).json({ sucess: true, token });
};
