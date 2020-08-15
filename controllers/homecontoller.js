//add user schema
const userSchema=require("../models/user_schema");


//get the home page with all the users 
module.exports.home=async function(req,res){
   try{
       let users=await userSchema.find({});
        return res.render('home',{
            title:'Home Page',
            users:users
        });
   }catch{
        console.log("error",err);
        return;
   }
    

  
}