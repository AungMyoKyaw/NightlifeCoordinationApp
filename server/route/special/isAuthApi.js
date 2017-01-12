"use strict";

const router = require('express').Router();
const isAuthApi = require('../../controller/special/isAuthController');

router.route('/isauth')
      .get(isAuthApi)

module.exports = router;
