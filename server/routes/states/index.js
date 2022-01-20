const express = require('express');

const router = express.Router();

const ctrl = require('./states');

router.get('/arsenal', ctrl.get.arsenal);
router.get('/weather', ctrl.get.weather);

module.exports = router;