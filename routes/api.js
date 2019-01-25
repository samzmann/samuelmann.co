var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  obj = {
    route: '/api',
    messages: [
      { id: '0', type: 'system', msg: 'session loading...' },
      { id: '1', type: 'system', msg: 'session started!' },
      { id: '2', type: 'user', msg: 'hey!' },
      { id: '3', type: 'user', msg: "what's up?" },
    ]
  }
  res.json(obj);
});

module.exports = router;
