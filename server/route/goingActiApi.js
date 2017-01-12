'use strict';

const router = require('express').Router();
const goingActiApi = require('../controller/goingActiController');

router.route('/goingList')
      .get(goingActiApi.getGoingList);

router.route('/add/:yelpID')
      .post(goingActiApi.addToGoingList);

router.route('/delete/:actiId')
      .post(goingActiApi.removeFromGoingList);

module.exports = router;
