const express = require("express");
const router = express.Router();
const { getPrivateRoute } = require("../controllers/private");
const { protectadmin } = require("../middleware/auth");

router.route("/Admin").get(protectadmin);
module.exports = router;
