const express = require("express");
const router = express.Router();

// Controllers
const {

  registerclient,
  registerworker,
  registeradmin,
  email,
  LoginUser,
  
} = require("../controllers/auth");

router.route("/registerclient").post(registerclient);
router.route("/registerworker").post(registerworker);
router.route("/register/p").post(registeradmin);
router.route("/email").post(email);
router.route("/login").post(LoginUser);

module.exports = router;
