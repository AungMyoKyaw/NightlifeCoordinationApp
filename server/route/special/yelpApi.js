'use strict';

const router = require('express').Router();
const yelpApi = require('../../controller/special/yelpApiController');

router.route('/yelp')
      .get(yelpApi);

module.exports = router;
