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
    id:{type:String,required:true},
    name:{type:String,required:true},
    url:{type:String,required:true},
    image_url:{type:String},
    snippet_text:{type:String},
    display_address:[{type:String,required:true}],
    phone:{type:String}
  }
});

module.exports = mongoose.model('GoingActi',goingSchema);
