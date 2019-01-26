const io = require('socket.io-client')

export default function () {
  const socket = io.connect('http://localhost:3000')

  const joinRoom = (room_id) => {
    console.log('join room', room_id);
    socket.emit('join room', room_id);
  }

  const sendMsg = (data) => {
    socket.to(data.room_id).emit('send msg', data);
  }

  return {
    joinRoom,
    sendMsg
  }

}
