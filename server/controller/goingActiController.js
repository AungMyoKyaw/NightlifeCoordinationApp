'use strict';

const GoingActi = require('../model/going');

function addToGoingList(req,res){
  let yelpId = req.params.yelpID;
  let userId = req.user._id;
  let yelpInfo = req.body.yelp;
  yelpInfo.id = yelpId;
  // console.log(req.user);
  let newGoingActi = new GoingActi({
    userId: userId,
    yelp:yelpInfo
  });
  newGoingActi.save()
    .then((goingActiData)=>{
      res.status(200).json(goingActiData);
    })
    .catch((err)=>{
      res.status(500).send(err);
    });
}

function removeFromGoingList(req,res){
  let yelpId = req.params.yelpID;
  let userId = req.user._id;

  let timeToQuery = new Date();
  timeToQuery.setHours(timeToQuery.getHours()-24);

  GoingActi.find({userId:userId,'yelp.id':yelpId})
              .where('startedDate').gte(timeToQuery)
              .remove()
              .exec((err,success)=>{
                res.json(success);
              })
              .catch((err)=>{
                res.status(500).send(err);
              });
}

function getGoingList(req,res){
  let userId = req.user._id;

  let timeToQuery = new Date();
  timeToQuery.setHours(timeToQuery.getHours()-24);

  GoingActi.find({userId:userId})
            .where('startedDate').gte(timeToQuery)
            .exec((err,data)=>{
              if(err){
                res.status(500).send(err);
              } else {
                res.json(data);
              }
            });
}

module.exports = {
  addToGoingList,
  removeFromGoingList,
  getGoingList
}
