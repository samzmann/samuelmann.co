var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
  msg             : { type: String },
  type            : { type: String },
  room_id         : { type: String },
  timestamp       : { type: Number }
})

module.exports = mongoose.model('Message', MessageSchema);
