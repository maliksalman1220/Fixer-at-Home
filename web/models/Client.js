const mongoose = require('mongoose');
const conn = require("../config/db");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



const ClientSchema = new mongoose.Schema({
  user_id: {
    type: String
  },
  firstname: {
    type: String,
    required: [true, "Please provide firstname"]

  },
  lastname: {
    type: String,
    required: [true, "Please provide lstname"]

  },
  username: {
    type: String,

    required: [true, "Please provide username"],
  },

  email: {
    type: String,
    required: [true, "Please provide email address"],
    //unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: 6,
    select: true,
  },


  contactnumber: {
    type: String,


  },
  dateofbirth: {
    type: Date,
  },
  address: {
    type: String,
    minlength: 20,

  },

  country: {
    type: String,
  },

  resetPasswordToken: String,
  resetPasswordExpire: Date,



});

ClientSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

ClientSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

ClientSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, '3848dda248be81a9d95ac2234af4892517521e9046c93dffb6dd55fa6d4abfdde8422c', {
    
  });
};

ClientSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hash token (private key) and save to database
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Set token expire date
  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000); // Ten Minutes

  return resetToken;
};






module.exports = Client = conn.model('client', ClientSchema);
