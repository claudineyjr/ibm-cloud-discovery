const router = require('express').Router();

router.use('/environment', require('./environment'));

module.exports = router;
