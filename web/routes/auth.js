const express = require("express");
const router = express.Router();

// Controllers
const {

  registerclient,
  registerworker,
  registeradmin,
  email,


} = require("../controllers/auth");

router.route("/registerclient").post(registerclient);
router.route("/registerworker").post(registerworker);
router.route("/register/p").post(registeradmin);
router.route("/email").post(email);




module.exports = router;
