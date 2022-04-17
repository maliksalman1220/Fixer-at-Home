const mongoose = require('mongoose');
const conn = require("../config/db");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



const OrderSchema = new mongoose.Schema({
  user_id:{
    type:String
  },
  client: {
    type: String,
    required: [true, "Please provide firstname"]
    
  },
   worker: {
    type: String,
    required: [true, "Please provide lstname"]
   
  },
  time: {
    type: String,
    
  
  },price:{type:String},status:{type:String},
  workername:{
    type:String
  },clientname:{type:String},

  


  information:{
    type: String,
    
    
  },

  resetPasswordToken: String,
  resetPasswordExpire: Date,



});

OrderSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

OrderSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

OrderSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, '3848dda248be81a9d95ac2234af4892517521e9046c93dffb6dd55fa6d4abfdde8422c', {
    expiresIn: "10min",
  });
};

OrderSchema.methods.getResetPasswordToken = function () {
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






module.exports = Order = conn.model('Order',OrderSchema);
