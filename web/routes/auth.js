const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");

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
  deletecategory,
  getworker,
  forgotPassword,
  resetPassword,
  addworkerppp,
  getworkerdetail,
  getworkerp,
  order,getorder,getworkerorder,
  orderstatus,
  orderstatuscompleted,
  Userprofile,
  Workerprofile,
  Updateprofile,
  Workerprofileupdate,
  LoginUser,
  Message,
  Getmessage,
  Rating,
  registercustomer,
  
} = require("../controllers/auth");

router.route("/registerclient").post(registerclient);
router.route("/registerworker").post(registeradmin);
router.route("/register/p").post(registerworker);
router.route("/register/customer").post(registercustomer);
router.route("/email").post(email);
router.route("/services").post(services);
router.route("/getservices").get(detail);
router.route("/delete").post(deletep);
router.route("/categories").post(categories);
router.route("/getcategories/:q").get(detailp);
router.route("/getworker/:q").get(getworker);
router.route("/getworkerp").get(getworkerp);
router.route("/getworkerdetail/:q").get(getworkerdetail);
router.route("/order/:q").post(order);
router.route("/getorder/:q").post(getorder);
router.route("/forgotpassword").post(forgotPassword),
router.route("/resetpassword/:q").put(resetPassword),


router.route("/getworkerorder/:q").post(getworkerorder);
router.route("/orderstatus/:q").post(orderstatus);
router.route("/orderstatuscompleted/:q").post(orderstatuscompleted);
router.route("/profile/:q").get(Userprofile);
router.route("/updateprofile/:q").post(Updateprofile);
router.route("/workerprofileupdate/:q").post(Workerprofileupdate);
router.route("/message").post(Message);
router.route("/getmessage/:q/:r").get(Getmessage);

router.route("/addworker/:q").get(addworkerppp);
router.route("/deletecategory").post(deletecategory);
router.route("/rating").post(Rating);



router.route("/login").post(LoginUser);

module.exports = router;
