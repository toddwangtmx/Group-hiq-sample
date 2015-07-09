var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  if(req.body.zipCode && req.body.state) {
    res.send({
      status: 'success'
    });
  }
  else {
    res.status(400).send({
      error: 'Missing zip code or state'
    });
  }
});

module.exports = router;
