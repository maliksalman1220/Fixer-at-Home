const express = require("express");
const router = express.Router();
const { getPrivateRoute } = require("../controllers/private");
const { protect } = require("../middleware/auth");


module.exports = router;
