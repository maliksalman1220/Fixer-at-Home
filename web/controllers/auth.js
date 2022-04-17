const crypto = require("crypto");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");
const Client = require("../models/Client");
const Services = require("../models/Services");
const Categories = require("../models/Categories");
const Worker = require("../models/Worker");
const Order = require("../models/Order");
const Admin = require("../models/Admin");
const sendEmail = require("../utils/sendEmail");
const bcrypt = require("bcryptjs");
const nodemailer = require('nodemailer');
const Message = require("../models/message.model.js");
const { ObjectId } = require('mongodb');

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

exports.registeradmin = async (req, res, next) => {
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

exports.registerworker = async (req, res, next) => {
  const { firstname, lastname, username, email, password, contactnumber, dateofbirth, address, experience, category } = req.body;

  console.log(firstname, lastname, username, email, password, contactnumber, dateofbirth, address, experience)
  if (!firstname || !lastname || !username || !email || !password || !contactnumber || !dateofbirth || !address || !experience || !category) {
    return next(new ErrorResponse("Please fill in form", 400));
  }
  if (experience.split(" ").length >= 17) {
    console.log("p")
    return next(new ErrorResponse("experince word limit exceed", 401));
  }
  if (password.length <= 5) {
    console.log("p")
    return next(new ErrorResponse("short password", 401));
  } const emailp = email
  console.log(emailp)
  workerp = await Worker.findOne({ email: emailp })
  console.log(workerp)
  if (workerp) { return next(new ErrorResponse("email exist", 401)) }
  workerp = await Categories.findOne({ name: category })

  if (!workerp) { return next(new ErrorResponse("category doesn't exist", 401)) }

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
      category,
      experience,



    });

    sendToken(Client, 200, res)
    return (res.json({ 'msg': x }));
  } catch (err) {
    next(err);
  }
};

exports.registercustomer = async (req, res, next) => {
  const { firstname, lastname, username, email, password, contactnumber, dateofbirth, address} = req.body;

  console.log(firstname, lastname, username, email, password, contactnumber, dateofbirth, address)
  if (!firstname || !lastname || !username || !email || !password || !contactnumber || !dateofbirth || !address) {
    return next(new ErrorResponse("Please fill in form", 400));
  }

  if (password.length <= 5) {
    console.log("p")
    return next(new ErrorResponse("short password", 401));
  } 
  const emailp = email
  console.log(emailp)

  emailcheck = await Client.findOne({ email: emailp })
  console.log(emailcheck)
  if (emailcheck) { return next(new ErrorResponse("email exist", 401)) }

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
    return (res.json({ 'msg': x }));
  } catch (err) {
    next(err);
  }
};

exports.LoginUser = async (req, res, next) => {

  var type = "";
  user = await Client.findOne({
    email: req.body.email,
    if(user) { sendToken(Client, 200, res) }
  });

  if (user) {
    type = "client";
  }
  else {
    user = await Worker.findOne({
      email: req.body.email,
    });
    if (user) {
      type = "worker";
    }
    else {
      user = await Admin.findOne({
        email: req.body.email,
      });
      if (user) {
        type = "admin";
      }
      else {
        return next(new ErrorResponse("email doesn't exist", 401));
      }
    }
  }

  const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

  if (!isPasswordValid) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }


    const x= await user.getSignedJwtToken();
    return res.json({ status: 'success', error: user.id,token:x, type: type, username: user.username}); 
};


exports.email = async (req, res, next) => {
  const { email, contactnumber } = req.body;

  x = contactnumber.substr(0, 5);


  let transporter = nodemailer.createTransport({
    service: 'gmail',
    // true for 465, false for other ports
    auth: {
      user: 'fixerathome@gmail.com', // generated ethereal user
      pass: 'fixer_at_home'  // generated ethereal password
    },

  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: 'fixerathome@gmail.com', // sender address
    to: email, // list of receivers
    subject: 'Node Contact Request', // Subject line
    text: 'email verification code_' + x, // plain text body
    // html body
  };
  console.log("p")
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    res.render('contact', { msg: 'Email has been sent' });

  });

  res.status(200).json();
};

exports.services = async (req, res, next) => {
  const { name, pic } = req.body;







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




exports.detail = async (req, res, next) => {
  Services.find()
    .then(book => res.json(book))
    .catch(err => res.status(404).json({ nobookfound: 'No Book found' }))
}
exports.deletep = async (req, res, next) => {
  const { service } = req.body;

  Services.deleteOne({ name: service })
    .then(book => res.json(book))
    .catch(err => res.status(404).json({ nobookfound: 'No Book found' }))
}
exports.categories = async (req, res, next) => {
  const { name, service } = req.body;
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




exports.detailp = async (req, res, next) => {
  category = req.params.q
  console.log(category)
  Categories.find({ service: category })
    .then(book => res.json(book))
    .catch(err => res.status(404).json({ nobookfound: 'No Book found' }))
}
exports.deletecategory = async (req, res, next) => {
  const { category } = req.body;

  console.log(category)

  Categories.deleteOne({ name: category })
    .then(book => res.json(book))
    .catch(err => res.status(404).json({ nobookfound: 'No Book found' }))
}



exports.getworkerp = async (req, res, next) => {

  Worker.find()
    .then(book => res.json(book))
    .catch(err => res.status(404).json({ nobookfound: 'No Book found' }))
}
exports.getworker = async (req, res, next) => {
  categoryppp = req.params.q
  console.log(categoryppp)
  Worker.find({ category: categoryppp, status: "accepted" })
    .then(book => res.json(book))
    .catch(err => res.status(404).json({ nobookfound: 'No Book found' }))
}
exports.getworkerdetail = async (req, res, next) => {
  categoryp = req.params.q
  console.log(categoryp)
  Worker.find({ _id: categoryp })
    .then(book => res.json(book))
    .catch(err => res.status(404).json({ nobookfound: 'No Book found' }))
}
exports.addworkerppp = async (req, res, next) => {
  categoryp = req.params.q
  console.log(categoryp)
  let p = await Worker.findByIdAndUpdate(categoryp, { status: "accepted" })
  console.log(p)
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    // true for 465, false for other ports
    auth: {
      user: 'fixerathome@gmail.com', // generated ethereal user
      pass: 'fixer_at_home'  // generated ethereal password
    },

  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: 'fixerathome@gmail.com', // sender address
    to: p.email, // list of receivers
    subject: 'Account approved', // Subject line
    text: 'dear ' + p.firstname + ' ' + 'your account got approved', // plain text body
    // html body
  };
  console.log("p")
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    res.render('contact', { msg: 'Email has been sent' });

  })
}


exports.services = async (req, res, next) => {
  const { name, pic } = req.body;







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
}
exports.order = async (req, res, next) => {


  const { client, time, information } = req.body;
  worker = req.params.q
  console.log(worker)
  let pq = await Worker.findOne({ _id: worker })
  let workername = pq.firstname
  let detail = await Client.findOne({ _id: client })
  let clientname = detail.firstname
  let price = 1000
  const status = "pending"









  const user = await Order.create({
    client,
    worker,
    time,
    price,
    status,
    workername,
    clientname,
    information



  });

  sendToken(user, 200, res)
  return (res.json());

}
exports.getorder = async (req, res, next) => {
  categoryppp = req.params.q
  console.log(categoryppp)
  Order.find({ client: categoryppp })
    .then(book => res.json(book))
    .catch(err => res.status(404).json({ nobookfound: 'No Book found' }))
}
exports.getworkerorder = async (req, res, next) => {
  categoryppp = req.params.q
  console.log(categoryppp)
  Order.find({ worker: categoryppp })
    .then(book => res.json(book))
    .catch(err => res.status(404).json({ nobookfound: 'No Book found' }))
}
exports.getorderdetail = async (req, res, next) => {
  categoryppp = req.params.q
  console.log(categoryppp)
  x = await Order.find({ workerp: categoryppp })
  Client.find({ _id: x })
    .then(book => res.json(book))
    .catch(err => res.status(404).json({ nobookfound: 'No Book found' }))
}
exports.orderstatus = async (req, res, next) => {
  categoryppp = req.params.q
  console.log(categoryppp)
  Order.findByIdAndUpdate(categoryppp, { status: "accepted" })


    .catch(err => res.status(404).json({ nobookfound: 'No Book found' }))
}
exports.orderstatuscompleted = async (req, res, next) => {
  categoryppp = req.params.q
  console.log(categoryppp)
  Order.findByIdAndUpdate(categoryppp, { status: "completed" })


    .catch(err => res.status(404).json({ nobookfound: 'No Book found' }))
}
const sendToken = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();
  res.status(statusCode).json({ sucess: true, token });
};

exports.Userprofile = async (req, res) => {
  console.log('here');
  const id = JSON.parse(req.params.q);
  const _id = ObjectId(id);

  try {

    const user = await Client.findOne({
      _id: _id
    });
    if (user) {
      res.json({ status: 'ok', user: user });
    } else {
      const user = await Worker.findOne({
        _id: _id
      });
      if (user) {
        res.json({ status: 'ok', user: user });
      } else {
        const user = await Admin.findOne({
          _id: _id
        });
        if (user) {
          res.json({ status: 'ok', user: user });
        } else {
          res.json({ status: 'error', msg: "user not found" });
        }
      }
    }

  } catch (error) {
    console.log(error);
    res.json({ status: 'error', error: 'invalid token' })
  }
}


exports.Updateprofile = async (req, res) => {

  const id = JSON.parse(req.params.q);
  const _id = ObjectId(id);

  try {

    await Client.updateOne(
      { _id: _id },
      {
        $set:
        {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          contactnumber: req.body.phonenumber,
          dateofbirth: req.body.dob,
          address: req.body.address,
          country: req.body.country,
        }
      }
    )

    return res.json({ status: 'ok' });
  }
  catch (error) {
    console.log(error);
    res.json({ status: 'error', error: 'invalid token' })
  }
}

exports.Workerprofileupdate = async (req, res) => {
  const id = JSON.parse(req.params.q);
  const _id = ObjectId(id);

  try {

    await Worker.updateOne(
      { _id: _id },
      {
        $set:
        {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          contactnumber: req.body.phonenumber,
          dateofbirth: req.body.dob,
          address: req.body.address,
          country: req.body.country,
          experience: req.body.experience,
          category: req.body.category,
          price: req.body.price,
        }
      }
    )

    return res.json({ status: 'ok' });
  }
  catch (error) {
    console.log(error);
    res.json({ status: 'error', error: 'invalid token' })
  }
}

exports.Rating = async (req, res) => {
  const _id = ObjectId(JSON.parse(req.body.id));
  try {

    await Worker.updateOne(
      { _id: _id },
      {
        $set:
        {
          rating: req.body.rating,
        }
      }
    )
    
    const worker = await Worker.findOne({ _id: _id });
    console.log(worker);
    
    return res.json({ status: 'ok' });
  }
  catch (error) {
    console.log(error);
    res.json({ status: 'error', error: 'invalid token' })
  }
}

exports.Message = async (req, res) => {

  const s = JSON.parse(req.body.sender_id);
  const r = JSON.parse(req.body.receiver_id);
  const sender_id = ObjectId(s);
  const receiver_id = ObjectId(r);

  try {
    await Message.insertMany({
      'sender': sender_id,
      'receiver': receiver_id,
      'sender_name': req.body.sender_username,
      'receiver_name': req.body.receiver_username,
      'content': req.body.message,
      'timestamp': new Date(),
    });

    return res.json({ status: 'ok' });
  }
  catch (error) {
    console.log(error);
    res.json({ status: 'error', error: 'invalid token' });
  }
}

exports.Getmessage = async (req, res) => {
  const s = JSON.parse(req.params.q);
  const r = JSON.parse(req.params.r);
  const sender_id = ObjectId(s);
  const receiver_id = ObjectId(r);

  try {
    const messages = await Message.find({
      $or : [
        { $and: [{ sender: sender_id }, { receiver: receiver_id }] },
        { $and: [{ sender: receiver_id }, { receiver: sender_id }] },
      ]
    });
    return res.json({ status: 'ok', messages: messages });
  }
  catch (error) {
    console.log(error);
    res.json({ status: 'error', error: 'invalid token' });
  }
}

exports.forgotPassword = async (req, res, next) => {
  // Send Email to email provided but first check if user exists
  const { email } = req.body;

  
     user = await Client.findOne({ email });

    if (!user) {
      user = await Worker.findOne({ email });}
    
    const resetToken = user.getResetPasswordToken();

    await user.save();

    // Create reset url to email to provided email
    const resetUrl = `http://localhost:3000/resetPassword/${resetToken}`;

    // HTML Message
    const message = `
      <h1>You have requested a password reset</h1>
      <p>Please make a put request to the following link:</p>
      <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
    `;
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      // true for 465, false for other ports
      auth: {
        user: 'fixerathome@gmail.com', // generated ethereal user
        pass: 'fixer_at_home'  // generated ethereal password
      },
  
    });
  
    // setup email data with unicode symbols
    let mailOptions = {
      from: 'fixerathome@gmail.com', // sender address
      to: email, // list of receivers
      subject: 'Account approved', // Subject line
      text: message // plain text body
      // html body
    };
    console.log("p")
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
      res.render('contact', { msg: 'Email has been sent' });
  
    })
    // Reset Token Gen and add to database hashed (private) version of token
    


      

      await user.save();

      return next(new ErrorResponse("Email could not be sent", 500));
    
  
};
exports.resetPassword = async (req, res, next) => {
  // Compare token in URL params to hashed token
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.q)
    .digest("hex");
    console.log(req.params.q)

  
    user = await Client.findOne({
      resetPasswordToken,
      
    });

    if (!user) {
      user = await Worker.findOne({
        resetPasswordToken,
      
    })}

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(201).json({
      success: true,
      data: "Password Updated Success",
      token: user.getSignedJwtToken(),
    });
  }
