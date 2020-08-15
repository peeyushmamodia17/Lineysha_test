const express=require('express');
const router=express.Router();

const usercontroller=require('../controllers/usercontroller');

router.get("/userKyc",usercontroller.kyc);
router.post("/create",usercontroller.create);
router.get("/detail/:id",usercontroller.detail);
router.get("/booking",usercontroller.booking);
router.post("/createBooking",usercontroller.create_booking);
router.get("/show",usercontroller.show);

module.exports=router;