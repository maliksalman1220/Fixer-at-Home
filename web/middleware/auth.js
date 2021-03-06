const jwt = require("jsonwebtoken");
const ErrorResponse = require("../utils/errorResponse");
const  Client = require("../models/Client");

const  Admin = require("../models/Admin");
const  Worker = require("../models/Worker");

exports.protectworker = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }




  console.log(req.headers.authorization)

  if (!token) {
    return   res.status(200).json({ error: 'please login' })
  }
  console.log(token)

  
    const decoded = jwt.verify(token,'3848dda248be81a9d95ac2234af4892517521e9046c93dffb6dd55fa6d4abfdde8422c');

    const user = await Worker.findById(decoded.id);

    if (!user) {
      res.status(200).json({ error: 'only worker' })
    }
    console.log(user)

    req.user = user;
    
    
    
};

exports.protectadmin = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }




  console.log(req.headers.authorization)

  if (!token) {
    res.status(200).json({ error: 'please login' })
  }

  
    const decoded = jwt.verify(token,'3848dda248be81a9d95ac2234af4892517521e9046c93dffb6dd55fa6d4abfdde8422c');

    const user = await Admin.findById(decoded.id);

    if (!user) {
      res.status(200).json({ error: 'only admin' })
    }

    req.user = user;

    
};
exports.protectclientp = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }




  console.log(req.headers.authorization)

  if (!token) {
    return next(new ErrorResponse("Not authorized to access this routep", 401));
  }

  
    const decoded = jwt.verify(token,'3848dda248be81a9d95ac2234af4892517521e9046c93dffb6dd55fa6d4abfdde8422c');

    const user = await Client.findById(decoded.id);

    if (!user) {
      return next(new ErrorResponse("No user found with this id", 404));
    }

    req.user = user;

    
};