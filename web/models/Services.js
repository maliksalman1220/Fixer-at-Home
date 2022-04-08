const crypto = require("crypto");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const conn = require("../config/db");

const ServicesSchema = new mongoose.Schema({
  name: {
    type: String
    
  },

  pic: {
    type: String,
  }}
  );

  ServicesSchema.methods.getSignedJwtToken = function () {
    return jwt.sign({ id: this._id }, '3848dda248be81a9d95ac2234af4892517521e9046c93dffb6dd55fa6d4abfdde8422c', {
      expiresIn: "10min",
    });
  };






const Services = conn.model("Services", ServicesSchema);

module.exports = Services;
