const express = require('express');
const router = express.Router();

router.get('/', require('./user-get'));
router.post('/', require('./user-post'));

module.exports = router;