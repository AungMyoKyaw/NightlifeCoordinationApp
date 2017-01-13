'use strict';

const GoingActi = require('../model/going');

function addToGoingList(req,res){
  let yelpId = req.params.yelpID;
  let userId = req.user._id;
  let yelpInfo = req.body.yelp;
  yelpInfo.id = yelpId;

  let newGoingActi = new GoingActi({
    userId: userId,
    yelp:yelpInfo
  });
  newGoingActi.save()
    .then((goingActiData)=>{
      let objtoreturn = {};
      objtoreturn[goingActiData.yelp.id] = goingActiData._id;
      res.status(200).json(objtoreturn);
    })
    .catch((err)=>{
      console.log(err);
      res.status(500).send(err);
    });
}

function removeFromGoingList(req,res){
  let actiId = req.params.actiId;
  let userId = req.user._id;

  GoingActi.findByIdAndRemove(actiId,(err,data)=>{
    if(err){
      res.status(500).send(err);
    } else {
      res.status(200).json(data);
    }
  })
}

function getGoingList(req,res){
  let userId = req.user._id;
  let id = req.query.id ? true : false;

  let timeToQuery = new Date();
  timeToQuery.setHours(timeToQuery.getHours()-24);

  if(id){
    // console.log(id,' is calling now');
    GoingActi.find({userId:userId})
              .where('startedDate').gte(timeToQuery)
              .distinct('yelp.id')
              .exec((err,data)=>{
                if(err){
                  res.status(500).send(err);
                } else {
                  // console.log(data);
                  res.json(data);
                }
              });
  } else {
    GoingActi.find({userId:userId})
              .where('startedDate').gte(timeToQuery)
              .select('yelp')
              .sort({_id:-1})
              .exec((err,data)=>{
                if(err){
                  res.status(500).send(err);
                } else {
                  res.json(data);
                }
              });
  }
}

module.exports = {
  addToGoingList,
  removeFromGoingList,
  getGoingList
}
