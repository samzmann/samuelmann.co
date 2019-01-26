var express = require('express');
var router = express.Router();
var Message = require('../models/message');

router.get('/', function(req, res, next) {
  Message
    .find()
    .exec((err, results) => {
      if (err) {
        console.log(err);
        res.send(err)
        return handleError(err)
      }

      console.log(results);

      res.json(results)
    })
});

router.post('/msg', function(req, res, next) {
  console.log(req.body);

  const m = new Message({
    msg: req.body.msg,
    type: req.body.type,
    timestamp: req.body.timestamp
  })

  m.save(err => {
    if (err) return handleError(err)
  })
})

module.exports = router;
