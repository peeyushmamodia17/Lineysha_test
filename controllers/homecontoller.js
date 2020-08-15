const userSchema=require("../models/user_schema");

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