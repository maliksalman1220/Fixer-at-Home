require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express();
const conn = require("./config/db");
const path = require("path");

const errorHandler = require("./middleware/error");

conn;



app.use(express.json());



// Connecting Routes
app.use("/api/auth", require("./routes/auth"));
//app.use("/api/books", require("./routes/books"));
//app.use("/api/private", require("./routes/private"));

// Error Handler Middleware
app.use(errorHandler);

const PORT = process.env.PORT;

if(process.env.Node_ENV === "production")
{
  app.use(express.static(path.join(__dirname,"/client/build")))

  app.get("*",(req,res) =>{
    res.sendFile(path.join(__dirname,"client","build","index.html"))
  })
}

else

{
  app.get("/",(req,res) => {
    res.send("Api running")
  })
}

const server = app.listen(5000, () =>
  console.log(`Sever running on port 5000`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});
