const express = require("express");
const router = express.Router();
const { getPrivateRoute } = require("../controllers/private");
const { protectadmin,protectworker } = require("../middleware/auth");

router.route("/Admin").get(protectadmin);
router.route("/Worker").get(protectworker);
module.exports = router;
