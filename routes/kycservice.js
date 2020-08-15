const express=require('express');
const router=express.Router();

const usercontroller=require('../controllers/usercontroller');

//router for get kyc page
router.get("/userKyc",usercontroller.kyc);
//router for create user
router.post("/create",usercontroller.create);
router.get("/detail/:id",usercontroller.detail);

module.exports=router;