'use strict';

const Yelp = require('yelp');
const yelpConfig = require('../../config/yelpApiConfig');

const yelp = new Yelp({
  consumer_key: yelpConfig.ConsumerKey,
  consumer_secret: yelpConfig.ConsumerSecret,
  token: yelpConfig.Token,
  token_secret: yelpConfig.TokenSecret,
});

function searchBar(req,res){
  let queryList =  Object.keys(req.query);
  let yelpSearchQuery = {};
  queryList.forEach((query)=>{
    yelpSearchQuery[query] = req.query[query];
  });
  yelp.search(yelpSearchQuery)
      .then((places)=>{
        res.json(places);
      })
      .catch((err)=>{
        res.status(500).json(err);
      });
  //The following query should be provided;
  /*
    limit
    offset
    location
  */
}

module.exports = searchBar;
