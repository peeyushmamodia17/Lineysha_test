process.env.NODE_ENV = 'test';
const mongoose=require('mongoose');

const userSchema=require("../models/user_schema");
const bookingSchema=require("../models/booking_schema");

//import chai and chai-http
const chai = require('chai');
const chaiHttp = require('chai-http');
//import server file index.js
const server=require("../index");
const should = chai.should();
chai.use(chaiHttp);

//test for user registration
describe('/POST register',()=>{
    it('It should register the user',(done)=>{
        let user={
            fname:"vikash",
            lname:"Asharna",
            email:"vikash@gmail.com",
            country:"india"
        }

        chai.request(server)
        //url
        .post('/user/create')
        //send data
        .send(user)
        .end((err,res)=>{
            res.should.have.status(200);
            res.body.should.be.a('object');

            done();
            console.log(err);
        });
    });
});


//test for get the user
describe('/GET User',()=>{
    it('It should get the user detail',(done)=>{

        chai.request(server)
        //url
        .get('/user/detail/5f3781388101383c1484f21f')
        .end((err,res)=>{
            res.should.have.status(200);
            res.body.should.be.a('object');
            
            done();
            console.log(err);
        });
    });
});

//test for get all the bookings
describe('/GET All Bookings',()=>{
    it('It should get all the user bookings',(done)=>{

        chai.request(server)
        //url
        .get('/booking/show')
        .end((err,res)=>{
            res.should.have.status(200);
            res.body.should.be.a('object');
            
            done();
            console.log(err);
        });
    });
});

//test for get all the user
describe('/GET All user',()=>{
    it('It should get all the user bookings',(done)=>{

        chai.request(server)
        //url
        .get('/')
        .end((err,res)=>{
            res.should.have.status(200);
            res.body.should.be.a('object');
            
            done();
            console.log(err);
        });
    });
});

//test for create booking
describe('/POST Booking',()=>{
    it('It should register the user booking',(done)=>{
        let booking={
            user1:"Peeyush Aamodia",
            user2:"Chetan Awami",
            date:"08/27/2020",
            time1:"08:24 PM",
            time2:"08:35 PM",
        }
        console.log("Dont know how to give date and time input")
        chai.request(server)
        //url
        .post('/booking/createBooking')
        //send data
        .send(booking)
        .end((err,res)=>{
            res.should.have.status(200);
            res.body.should.be.a('object');

            done();
            console.log(err);
        });
    });
});
