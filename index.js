//express server
const express=require("express");
const cookieParser=require('cookie-parser');
const path=require("path");
const app=express();
//port address 
const port=8000;
//add mongoose for database
const mongoose=require("./config/mongoose");
//body parser for get body data
const bodyParser=require('body-parser');
//express-ejs-layouts for  layouts
const expressLayouts=require('express-ejs-layouts');
const session=require('express-session');

const sassMiddleware=require('node-sass-middleware');
//for flash message
const flash=require('connect-flash');
const middleware=require('./config/middleware');


//convert css in sass
app.use(sassMiddleware({
    src : './assets/scss',
    dest :'./assets/css',
    debug : true,
    outputStyle : 'extended',
    prefix : '/css'
}))

//it is a bodyparser
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'})); 


app.use(express.urlencoded());

app.use(cookieParser());
app.use(express.static('assets'));

//layouts for style and script
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//for writing the frontend code
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


//session for store the flash message
app.use(session({
    name:'codieal',
    //todo change the secret before deployment
    secret:'peeyush',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    },
}));

app.use(flash());
app.use(middleware.setFlash);

app.use('/',require('./routes'));

//listen the code or run the code on 8000 port
app.listen(port,function(err){
    if(err){
        console.log("error in running the server on port");
    }

    console.log("Server successfully running on port",port);
})

module.exports=app;