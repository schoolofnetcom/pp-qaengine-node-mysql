const express = require('express');
const router = express.Router();
const isAuth = require('./../../middlewares/isAuth');

router.get('/', isAuth, require('./move-to-main'));
router.get('/t/:username', isAuth, require('./main'));

module.exports = router;