const express=require("express");
const router=express.Router();

const homecontroller=require('../controllers/homecontoller');

//router for home page
router.get("/",homecontroller.home);
//it will go to kyc service page when /user come
router.use("/user",require("./kycservice"));
router.use("/booking",require("./calendar"));

module.exports=router;