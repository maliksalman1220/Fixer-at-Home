const express = require("express");
const router = express.Router();

// Controllers
const {

  registerclient,
  registerworker,
  registeradmin,
  email,
  services,
  detail,
  deletep,
  categories,
  detailp,
  deletecategory


} = require("../controllers/auth");

router.route("/registerclient").post(registerclient);
router.route("/registerworker").post(registerworker);
router.route("/register/p").post(registeradmin);
router.route("/email").post(email);
router.route("/services").post(services);
router.route("/getservices").get(detail);
router.route("/delete").post(deletep);
router.route("/categories").post(categories);
router.route("/getcategories/:q").get(detailp);
router.route("/deletecategory").post(deletecategory);




module.exports = router;
