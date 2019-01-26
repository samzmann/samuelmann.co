import React, { Component } from 'react';
import './styles/App.css';
import MsgForm from './components/MsgForm'
import { getAllMessages } from './utils'
import socket from './socket'

class App extends Component {

  state = {
    messages: [],
    client: socket(),
    room_id: null
  }

  componentDidMount(){

    console.log(this.state.client);

    this.state.client.receiveMsg(this.receiveMsg)

    getAllMessages()
      .then(res => {
        const newMsg = {
          type: 'system',
          msg: "welcome, let's chat",
          timestamp: Date.now()
        }
        this.addNewMessage(newMsg)
          .then(messages => {
            console.log(messages);
            console.log(res);
            this.setState({ messages: [...this.state.messages, ...res] })
          })
      })
      .catch(err => {
        console.log(err)
        const newMsg = {
          type: 'system',
          msg: 'server error, please reload page (ಥ﹏ಥ)',
          timestamp: Date.now()
        }
        this.addNewMessage(newMsg)
      })

  }

  componentWillUnmount() {
    this.state.client.unreceiveMsg()
  }

  renderMessages = () => {
    const { messages } = this.state
    return messages.map((msg, index) => {

      const d = new Date(msg.timestamp)
      const dM1 = messages[index-1] ? new Date(messages[index-1].timestamp) : null
      const showDateInfo = !dM1 || ((d - dM1) > 60000) || dM1 > d

      return <div key={msg._id} className={`App-line ${msg.type === 'user' ? "App-usrmsg" : "App-sysmsg"}`}>{showDateInfo ? `[${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.getHours() < 10 ? '0' + d.getHours() : d.getHours()}:${d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()}]` : ''} {msg.msg}</div>
    })
  }

  addNewMessage = (msg) => {
    return new Promise((resolve, reject) => {
      const { messages } = this.state
      const newMsg = {
        _id: messages.length,
        type: msg.type,
        msg: msg.msg,
        room_id: this.state.room_id,
        timestamp: msg.timestamp
      }
      this.setState({ messages: [...this.state.messages, newMsg] }, () => {
        resolve(this.state.messages)
      })
    })
  }

  sendMsg = (msg) => {
    const { messages } = this.state
    const newMsg = {
      _id: messages.length,
      type: msg.type,
      msg: msg.msg,
      room_id: this.state.room_id,
      timestamp: msg.timestamp
    }
    this.state.client.sendMsg(newMsg)
  }

  receiveMsg = (data) => {
    console.log(data);
    this.addNewMessage(data)
      .then(messages => {
        console.log('success!');
      })
  }

  joinRoom = (room_id) => {
    this.state.client.joinRoom(room_id)
  }

  render() {
    return (
      <div className="App">
        {this.renderMessages()}
        <MsgForm addNewMessage={this.addNewMessage} sendMsg={this.sendMsg}/>
        <button onClick={() => {this.joinRoom(this.state.room_id)}}>Join room</button>
      </div>
    );
  }
}

export default App;
