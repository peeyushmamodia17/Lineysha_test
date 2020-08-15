const express=require("express");
const router=express.Router();

const homecontroller=require('../controllers/homecontoller');

router.get("/",homecontroller.home);
router.use("/user",require("./user"));
router.use("/booking",require("./user"));

module.exports=router;