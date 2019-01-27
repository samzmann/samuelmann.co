const axios = require('axios')

exports.getAllMessages = () => {
  return new Promise((resolve, reject) => {
    axios.get('/api')
      .then(res => resolve(res.data))
      .catch(err => reject(err))
  })
}

exports.postMessage = (data) => {
  return new Promise((resolve, reject) => {
    axios.post('/api/msg', data)
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}

exports.checkIfChatExists = (room_id) => {
  return new Promise((resolve, reject) => {
    const data = {room_id}
    axios.post('/api/chat', data)
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}
