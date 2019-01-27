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
      res.json(results)
    })
});

router.post('/chat', function(req, res, next) {
  console.log(req.body);
  Message.find({"room_id": req.body.room_id}).exec((err, results) => {
    if (err) {
      console.log(err);
      res.send(err)
      return handleError(err)
    }
    res.json(results)
  })
});

router.post('/msg', function(req, res, next) {
  console.log(req.body);

  const m = new Message({
    msg       : req.body.msg,
    type      : req.body.type,
    room_id   : req.body.room_id,
    timestamp : req.body.timestamp
  })

  m.save(err => {
    if (err) return handleError(err)
  })
})

module.exports = router;
