const express=require("express");
const cookieParser=require('cookie-parser');
const path=require("path");
const app=express();
const port=8000;
const mongoose=require("./config/mongoose");
const expressLayouts=require('express-ejs-layouts');
const sassMiddleware=require('node-sass-middleware');
const flash=require('connect-flash');
const middleware=require('./config/middleware');

app.use(sassMiddleware({
    src : './assets/scss',
    dest :'./assets/css',
    debug : true,
    outputStyle : 'extended',
    prefix : '/css'
}))

app.use(express.urlencoded());

app.use(cookieParser());
app.use(express.static('assets'));

app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use(flash());
app.use(middleware.setFlash);

app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log("error in running the server on port");
    }

    console.log("Server successfully running on port",port);
})
