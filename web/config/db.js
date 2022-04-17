const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });

const conn = mongoose.createConnection("mongodb://hashim:h1uWrJjhLmJ4KTsO@cluster0-shard-00-00.r08oe.mongodb.net:27017,cluster0-shard-00-01.r08oe.mongodb.net:27017,cluster0-shard-00-02.r08oe.mongodb.net:27017?ssl=true&replicaSet=atlas-5esi44-shard-0&authSource=admin&retryWrites=true&w=majority"

  , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

  console.log("MongoDB Connected");


module.exports = conn;
