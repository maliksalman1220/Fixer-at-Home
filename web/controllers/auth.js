const crypto = require("crypto");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");
const Client = require("../models/Client");
const Services = require("../models/Services");
const Categories = require("../models/Categories");
const worker = require("../models/Worker");
const Admin= require("../models/Admin");
const sendEmail = require("../utils/sendEmail");



exports.registerclient = async (req, res, next) => {
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

    sendToken(user, 200, res)
    return (res.json({ 'msg': x }));
  } catch (err) {
    next(err);
  }
};




exports.registerworker = async (req, res, next) => {
  const {firstname,lastname,username, email, password,contactnumber,dateofbirth,address,category,servicep,status,experience,rating } = req.body;



    
    
  
      
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
          category,servicep,status,experience,rating
        });

    sendToken(user, 200, res)
    return (res.json({ 'msg': x }));
  } catch (err) {
    next(err);
  }
};






exports.registeradmin = async (req, res, next) => {
  const {firstname,lastname,username, email, password,contactnumber,dateofbirth,address } = req.body;



    
    
  
      
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






exports.email = async (req, res, next) => {
  const {email,contactnumber} = req.body;



    x=contactnumber.substr(0,5);
    
    
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
        
      }catch (err) {
        console.log(err);

  
        
  
        
  
        return next(new ErrorResponse("Email could not be sent", 500));
      }
     

    
    res.status(200).json({ msg: x});
  };

exports.services = async (req, res, next) => {
  const {name,pic } = req.body;



    
    
  
      
      try {
        const user = await Services.create({
          name,
          pic
          
          
        });

    sendToken(user, 200, res)
    return (res.json({ 'msg': x }));
  } catch (err) {
    next(err);
  }
};




exports.detail = async(req, res,next) => {
  Services.find()
    .then( book => res.json(book))
    .catch(err => res.status(404).json({ nobookfound: 'No Book found' }))
}
exports.deletep = async(req, res,next) => {
  const {service } = req.body;
  
    Services.deleteOne({name:service})
    .then( book => res.json(book))
    .catch(err => res.status(404).json({ nobookfound: 'No Book found' }))
}
exports.categories = async (req, res, next) => {
  const {name,service } = req.body;
  console.log(req.body)



    
    
  
      
      try {
        const user = await Categories.create({
          name,
          service
          
          
        });

    sendToken(user, 200, res)
    return (res.json());
  } catch (err) {
    next(err);
  }
};




exports.detailp = async(req, res,next) => {
  category=req.params.q
  console.log(category)
  Categories.find({service:category})
    .then( book => res.json(book))
    .catch(err => res.status(404).json({ nobookfound: 'No Book found' }))
}
exports.deletecategory = async(req, res,next) => {
  const {category } = req.body;

  console.log(category)
  
    Categories.deleteOne({name:category})
    .then( book => res.json(book))
    .catch(err => res.status(404).json({ nobookfound: 'No Book found' }))
}

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();
  res.status(statusCode).json({ sucess: true, token });
};
