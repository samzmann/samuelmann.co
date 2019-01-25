var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  obj = {
    route: '/api'
  }
  res.json(obj);
});

module.exports = router;
