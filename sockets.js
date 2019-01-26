var sockets = {}

sockets.init = (server) => {
  var io = require('socket.io')(server)

  io.on('connection', (socket) => {
    console.log('a new user connected');

    socket.on('join room', room_id => {
      console.log(`${socket.id} joined room ${room_id}`);
      socket.join(room_id);
    })

    io.on('disconnect', () => {
      console.log('user disconnected');
    })
  })
}

module.exports = sockets
