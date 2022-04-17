const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });

const conn = mongoose.createConnection(process.env.MONGO_URI
  , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});



  

  console.log("MongoDB Connected");


module.exports = conn;
