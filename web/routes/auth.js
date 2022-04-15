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
  addworkerppp,
  getworkerdetail,
  getworkerp,
  order,getorder,getworkerorder,
  orderstatus,
  orderstatuscompleted,


  LoginUser,
  
} = require("../controllers/auth");

router.route("/registerclient").post(registerclient);
router.route("/registerworker").post(registeradmin);
router.route("/register/p").post(registerworker);
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


router.route("/getworkerorder/:q").post(getworkerorder);
router.route("/orderstatus/:q").post(orderstatus);
router.route("/orderstatuscompleted/:q").post(orderstatuscompleted);





router.route("/addworker/:q").get(addworkerppp);
router.route("/deletecategory").post(deletecategory);



router.route("/login").post(LoginUser);

module.exports = router;
