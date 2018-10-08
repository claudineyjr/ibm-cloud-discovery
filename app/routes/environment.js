const router = require('express').Router();

router.get('/', (req, res) => {
  const { env } = process;
  res.send(env);
});

module.exports = router;
