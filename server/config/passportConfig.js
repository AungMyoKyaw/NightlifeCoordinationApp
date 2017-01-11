"use strict";

const passport = require('passport');
const Strategy = require('passport-twitter').Strategy;
const User = require('../model/user');

passport.use(new Strategy({
	consumerKey:'Hokpj8uNCwThKFtgkTiUp9Dko',
	consumerSecret:'VJgiQsOQvZi7f7jafCcFR8d4dlYrsFxRDRQAZTwGqgtAI7PAtY',
	callbackURL:'http://127.0.0.1:4444/twitter/callback'
},(token,tokenSecret,profile,cb)=>{
  User.findOne({'twitter.id':profile.id})
    .exec((err,user)=>{
      if(user!==null){
        // console.log(user);
        return cb(null,user);
      } else {
        let newUser = new User({
          twitter:{
            id : profile.id,
            token : token,
            displayName : profile.displayName,
            userName : profile.userName
          }
        });
        newUser.save((err,data)=>{
          if(err){
            return cb(err);
          } else {
            return cb(null,data);
          }
        });
      }
    });
}));

passport.serializeUser((user,cb)=>{
	cb(null,user);
});

passport.deserializeUser((obj,cb)=>{
	cb(null,obj);
});
