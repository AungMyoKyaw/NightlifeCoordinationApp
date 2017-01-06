'use strict';

const mongoose = require('mongoose');

const goingSchema = new mongoose.Schema({
  userId:{
    type:String,
    required:true
  },
  startedDate:{
    type:Date,
    default:Date.now,
    required:true
  },
  yelp:{
    id:String,
    name:String,
    url:String,
    snippet_image_url:String,
    snippet_text:String,
    display_address:String,
    phone:Number
  }
});

module.exports = mongoose.model('GoingActi',goingSchema);
