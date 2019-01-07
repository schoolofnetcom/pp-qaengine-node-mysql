const express = require('express');
const router = express.Router();
const isAuth = require('./../../middlewares/isAuth');

router.get('/', isAuth, require('./main'));

module.exports = router;