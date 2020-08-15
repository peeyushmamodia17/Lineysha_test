const mongoose=require('mongoose');

//it is a user schema
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    country:{
        type:String,
        required:true   
    },
},
    {
        timestamps: true
    }
);

const user=mongoose.model('user',userSchema);


module.exports=user;