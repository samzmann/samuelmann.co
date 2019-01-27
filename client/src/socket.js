const io = require('socket.io-client')

export default function () {
  const socket = io.connect('http://localhost:3001')

  const joinRoom = (data) => {
    console.log('join room', data.room_id);
    socket.emit('join room', data);
  }

  const sendMsg = (data) => {
    socket.emit('send msg', data);
  }

  const receiveMsg = (handler) => {
    socket.on('receive msg', handler)
  }

  const unreceiveMsg = (handler) => {
    socket.off('receive msg')
  }

  return {
    joinRoom,
    sendMsg,
    receiveMsg,
    unreceiveMsg
  }

}
