const mongoose=require('mongoose');

//it is a booking schema
const bookingSchema=new mongoose.Schema({
    user1:{
        type:String,
        required:true
    },
    user2:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true   
    },
    time1:{
        type:String,
        required:true 
    },
    time2:{
        type:String,
        required:true 
    }
},
    {
        timestamps: true
    }
);

const booking=mongoose.model('booking',bookingSchema);


module.exports=booking;