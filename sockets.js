var sockets = {}

sockets.init = (server) => {
  var io = require('socket.io')(server)

  io.on('connection', (socket) => {
    console.log('a new user connected');

    socket.on('join room', data => {
      console.log(`${socket.id} joined room ${data.room_id}`);
      socket.join(data.room_id);
      socket.broadcast.to(data.room_id).emit('receive msg', data);
    })

    socket.on('send msg', data => {
      console.log(data.msg);
      socket.broadcast.to(data.room_id).emit('receive msg', data);
      // socket.broadcast.emit('receive msg', data);
    })

    io.on('disconnect', () => {
      console.log('user disconnected');
    })
  })
}

module.exports = sockets
