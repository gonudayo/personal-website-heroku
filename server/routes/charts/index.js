const express = require('express');

const router = express.Router();

const ctrl = require('./charts');

router.get('/study', ctrl.get.study);
router.get('/stock', ctrl.get.stock);

module.exports = router;