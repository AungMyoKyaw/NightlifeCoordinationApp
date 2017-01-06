"use strict";
const router = require('express').Router();
const test = require('../controller/test');

router.route('/')
			.all(test);

module.exports = router;
