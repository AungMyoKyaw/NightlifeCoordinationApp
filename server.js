const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const glob = require('glob');

const app = express();

const config = require('./server/config/config');
const dbUrl = config.db;
const port = config.port;

//connecting to mongodb
mongoose.connect(dbUrl);
mongoose.connection.on('connected',()=>{
	console.log(`App is using the following db \n${dbUrl}`);
});
mongoose.connection.on('error',()=>{
	console.log(`Error on connecting to ${dbUrl}`);
});
mongoose.connection.on('disconnected',()=>{
	console.log(`Succefully disconnected from \n${dbUrl}`);
});
process.on('SIGINT',()=>{
	mongoose.connection.close(()=>{
		console.log(`Disconnected from db through app Termination`);
		process.exit(0);
	});
})

//needed middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(session({secret:'Aung Myo Kyaw',resave:true,saveUninitialized:true}));

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//passport config
require('./server/config/passportConfig');
app.get('/login/twitter',passport.authenticate('twitter'))
app.get('/twitter/callback',
  passport.authenticate('twitter',{failureRedirect:'/login/twitter'}),
  (req,res)=>{
    res.redirect('/');
  }
);

//launch angular
app.use(express.static('./dist'));

//api list
app.use(require('connect-ensure-login').ensureLoggedIn('/login/twitter'));
const routes = glob.sync('./server/route/*.js');
routes.forEach((route)=>{//api list
	app.use('/api',require(route));
});

//404 redirect
app.get('*',(req,res)=>{
	res.redirect('/');
})

//starting app
app.listen(port,()=>{
	console.log(`My app is running on port ${port}`);
});
