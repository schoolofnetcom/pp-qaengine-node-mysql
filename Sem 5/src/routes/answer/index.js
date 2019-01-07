const express = require('express');
const router = express.Router();
const isAuth = require('./../../middlewares/isAuth');

router.get('/', isAuth, require('./answer-get'));
router.post('/', isAuth, require('./answer-post'));
router.put('/:id', isAuth, require('./answer-put'));
router.delete('/:id', isAuth, require('./answer-delete'));

module.exports = router;