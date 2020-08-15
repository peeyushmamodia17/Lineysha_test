const express=require('express');
const router=express.Router();

//add user controller
const usercontroller=require('../controllers/usercontroller');

//router for get booking page 
router.get("/booking",usercontroller.booking);
//router for create booking
router.post("/createBooking",usercontroller.create_booking);
//for show booking
router.get("/show",usercontroller.show);

module.exports=router;