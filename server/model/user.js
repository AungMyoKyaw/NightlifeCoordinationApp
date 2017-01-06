"use strict";

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	twitter:{
		id:String,
		token:String,
		displayName:String,
		userName:String
	}
});

module.exports = mongoose.model('User',userSchema);
