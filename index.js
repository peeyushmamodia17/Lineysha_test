const express=require("express");
const path=require("path");
const app=express();
const port=8000;


app.listen(port,function(err){
    if(err){
        console.log("error in running the server on port");
    }

    console.log("Server successfully running on port",port);
})
