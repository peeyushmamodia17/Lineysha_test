const userSchema=require("../models/user_schema");
const bookingSchema=require("../models/booking_schema");

module.exports.kyc=function(req,res){
    return res.render('user_register',{
        title:"Kyc Page"
    })
}


module.exports.create=async function(req,res){
    try{
        console.log(req.body);
        var str=req.body.lname;
        var n=str.startsWith("A");
        let user=await userSchema.findOne({email:req.body.email});
        if(n && !user){
            var name=req.body.fname+ " " + req.body.lname;
            await userSchema.create({
                name:name,
                email:req.body.email,
                country:req.body.country
            });
            req.flash('success','Welcome! User registered successfully');
            return res.redirect('/');
        }else if(!n){
            req.flash('error','Surname is not start with "A"');
            return res.redirect('back');
        }else{
            req.flash('error','Error in creating profile');
            return res.redirect('back');
        }

    }catch{
        req.flash('error',err);
        return res.redirect('back');
    }
   
}

module.exports.detail=async function(req,res){
    try{
        console.log(req.params.id);
        let user=await userSchema.findById(req.params.id);
        return res.render("detail",{
            title:"User Page",
            user:user
        })
    }catch{
        console.log("error",err);
        return;
    }
}

module.exports.booking=function(req,res){
    return res.render("booking",{
        title:"Booking page"
    })
}

module.exports.create_booking=async function(req,res){
    try{
        function parseTime(cTime)
        {
            if (cTime == '') return null;
            var d = new Date();
            var time = cTime.match(/(\d+)(:(\d\d))?\s*(p?)/);
            d.setHours( parseInt(time[1]) + ( ( parseInt(time[1]) < 12 && time[4] ) ? 12 : 0) );
            d.setMinutes( parseInt(time[3]) || 0 );
            d.setSeconds(0, 0);
            return d;
        }
        console.log(req.body);
        let user1=await userSchema.findOne({name:req.body.user1});
        let user2=await userSchema.findOne({name:req.body.user2});
        var time1=parseTime(req.body.time1);
        var time2=parseTime(req.body.time2);
        let value= (time1 - time2)/(1000*60);
        console.log(value);
        if(user1 && user2){
            if(user1.country=="foreign" && user2.country!="foreign" || user1.country!="foreign" && user2.country=="foreign" ){
                if(-(value)<=60){   
                    await bookingSchema.create({
                        user1:req.body.user1,
                        user2:req.body.user2,
                        date:req.body.date,
                        time1:req.body.time1,
                        time2:req.body.time2
                    })
                    req.flash('success','Booking created Successfully');
                    return res.redirect('/');
                }else{
                    req.flash('error','Error: Time slot are more than 1h');
                    return res.redirect('back');
                }
            }else{
                req.flash('error','Error: Both users are from foriegn Country');
                return res.redirect('back');
            }
        }else{
            req.flash('error','User not available');
            return res.redirect('back');
        }
    }catch{
       console.log("error",err);
        return;
    }
}



module.exports.show=async function(req,res){
    try{
        let bookings=await bookingSchema.find();
        console.log(bookings);
        return res.render("displayBooking",{
            title:"Show Booking",
            bookings:bookings
        })
    }catch{
        console.log("error",err);
        return;
    }
}