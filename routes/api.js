const express = require('express');
const router = express.Router();
const User = require('../models/users-model');
const Events = require('../models/events-model');
const jwt  = require('jsonwebtoken');
const secret_key = "ankitjain";

const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
// const db = 'mongodb://localhost:27017/eventsdb';
const db = 'mongodb+srv://ankit:ankitjn168@cluster0-r6d4b.mongodb.net/eventsdb?retryWrites=true&w=majority';


mongoose.connect(process.env.MONGODB_URI || db, { useNewUrlParser: true, useUnifiedTopology: true }, error => {
    if(error){
        console.error('Error '+error);
    }else{
        console.log('connected to db');
    }
})

function verify_token(req, res, next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized Request');
    }
    let token = req.headers.authorization.split(' ')[1];

    if(token === 'null'){
        return res.status(401).send('Unauthorized Request');
    }
    let payload = jwt.verify(token, secret_key);
    if(!payload){
        return res.status(401).send('Unauthorized Request');
    }
    req.userId = payload.subject;
    next();
}

router.post('/register', (req, res) =>{
    let userData = req.body;
    userData.password = bcrypt.hashSync(userData.password, 10);
    let user = new User(userData);
    // checking in database 
    User.findOne({email: user.email}, (error, dbuser) =>{
        if(error){
            var result = 'yes';
            res.status(200).send('Database Error');
        }else{
            if(dbuser == null){
                user.save((error, enteredUser) =>{
                    if(error){
                        res.status(200).send('Database Error');
                    }else{
                        let payload = {subject:enteredUser._id };
                        let token = jwt.sign(payload, secret_key);
                        res.status(200).send({token});
                    }
                })
            }else{
                res.status(200).send('Email Already Registered.');
            }
        }
    })
});

router.post('/login', (req, res) =>{
    let userData = req.body;
    let user = new User(userData);
    User.findOne({email: user.email}, (error, dbuser) =>{
        if(error){
            res.status(200).send('database error');
        }else{
            if(!dbuser){
                res.status(200).send("User Not Found.");
            }else{
                if(bcrypt.compareSync(userData.password, dbuser.password)) {
                    let payload = {subject:dbuser._id }
                    let token = jwt.sign(payload, secret_key);
                    res.status(200).send({token});
                } else {
                    res.status(200).send("Wrong Password");
                }
            }
        }
    })
});

router.get('/profile', verify_token,  (req, res) =>{
    let user_id = req.userId;
    User.findOne({_id: user_id}, (error, dbuser) =>{
        if(error){
            res.status(500).send('database error');
        }else{
            if(!dbuser){
                res.status(401).send("User Not Found.");
            }else{
                res.status(200).send(dbuser);
            }
        }
    })
});

router.get('/test',  (req, res) =>{
    res.status(200).send('testing api endpoint.');
});

router.post('/update_profile', verify_token,  (req, res) =>{
    let user_id = req.userId;
    let userData = req.body;
    var user ={
        name: userData.name,
        email: userData.email
    };
    User.updateOne({_id: user_id}, user, (error, dbuser) =>{
        if(error){
            res.status(200).send('database error');
        }else{
            res.status(200).send({"user":dbuser, "message":"User Updated"});
        }
    })
});

router.get('/events', (req, res) =>{
    let events = {};
    Events.find({special: false}, (error, events) => {
        if(error){
            res.status(200).send('database error');
        }else{
            res.status(200).send({"events": events });
        }
    });
});

router.get('/special_events', verify_token,  (req, res) =>{
    let events = {};
    Events.find({special: true}, (error, events) => {
        if(error){
            res.status(200).send('database error');
        }else{
            res.status(200).send({"events": events });
        }
    });
});

module.exports = router;

