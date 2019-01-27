import React, { Component } from 'react';
import './styles/App.css';
import MsgForm from './components/MsgForm'
import { getAllMessages, postMessage, checkIfChatExists } from './utils'
import socket from './socket'
import uuidv4 from 'uuid/v4'

class App extends Component {

  state = {
    messages: [],
    client: socket(),
    room_id: null,
    chatInitialized: false,
    initLevel: 0
  }

  componentDidMount(){
    this.state.client.receiveMsg(this.receiveMsg)

        const newMsg = {
          _id: uuidv4(),
          type: 'system',
          msg: "welcome, do you want to create (C) or join (J) a chat?",
          timestamp: Date.now()
        }
        this.renderMsg(newMsg)


    // getAllMessages()
    //   .then(res => {
    //     const newMsg = {
    //       type: 'system',
    //       msg: "welcome, let's chat",
    //       timestamp: Date.now()
    //     }
    //     this.renderMsg(newMsg)
    //       .then(messages => {
    //         console.log(messages);
    //         console.log(res);
    //         this.setState({ messages: [...this.state.messages, ...res] })
    //       })
    //   })
    //   .catch(err => {
    //     console.log(err)
    //     const newMsg = {
    //       type: 'system',
    //       msg: 'server error, please reload page (ಥ﹏ಥ)',
    //       timestamp: Date.now()
    //     }
    //     this.renderMsg(newMsg)
    //   })

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

  handleSubmitMsg = (msg) => {
    const { messages } = this.state
    const newMsg = {
      _id: uuidv4(),
      type: msg.type,
      msg: msg.msg,
      room_id: this.state.room_id,
      timestamp: msg.timestamp
    }
    this.renderMsg(newMsg)
      .then(() => {
        if (this.state.chatInitialized) {
          this.sendMsg(newMsg)
        } else {
          this.chatInit(msg.msg)
        }
      })
  }

  renderMsg = (msg) => {
    return new Promise((resolve, reject) => {
      this.setState({ messages: [...this.state.messages, msg] }, () => {
        resolve(this.state.messages)
      })
    })
  }

  chatInit = (msg) => {
    switch (this.state.initLevel) {
      case 0:
        if (msg === 'C' || msg === 'c') {
          console.log('create');

          var room_id = ''
          const chars = '0123456789abcdefghijklmnopqrstuvwxyz'
          for (var i = 0; i < 5; i++) {
            room_id += chars[Math.floor(Math.random() * chars.length)]
          }

          const newMsg = {
            _id: uuidv4(),
            type: 'system',
            msg: `set a username:`,
            timestamp: Date.now()
          }
          this.renderMsg(newMsg)

          this.setState({ room_id, initLevel: 2 })

        } else if (msg === 'J' || msg === 'j') {
          console.log('join');

          this.setState({ initLevel: 1 })
          const newMsg = {
            _id: uuidv4(),
            type: 'system',
            msg: `enter the code of the chat you want to join.`,
            timestamp: Date.now()
          }
          this.renderMsg(newMsg)

        } else {
          console.log('wrong input');

          const newMsg = {
            _id: uuidv4(),
            type: 'system',
            msg: `error: please enter C to create a chat or J to join a chat.`,
            timestamp: Date.now()
          }
          this.renderMsg(newMsg)
        }
        break;
      case 1:
        console.log('make api request to see if chat exists');

        checkIfChatExists(msg)
          .then(res => {
            console.log(res)
            if (res.data.length > 0) {
              // chat exists

              const room_id = msg

              const newMsg = {
                _id: uuidv4(),
                type: 'system',
                msg: `set a username:`,
                timestamp: Date.now()
              }
              this.renderMsg(newMsg)

              this.setState({ room_id, initLevel: 2 })

            } else {
              // chat does not exists
              const newMsg = {
                _id: uuidv4(),
                type: 'system',
                msg: `this chat does not exist. please enter C to create a chat or J to join a chat.`,
                timestamp: Date.now()
              }
              this.renderMsg(newMsg)
              this.setState({ initLevel: 0 })
            }
          })
          .catch(err => {
            console.log(err)
            // chat does not exists
            const newMsg = {
              _id: uuidv4(),
              type: 'system',
              msg: `error: please enter C to create a chat or J to join a chat.`,
              timestamp: Date.now()
            }
            this.renderMsg(newMsg)
            this.setState({ initLevel: 0 })
          })
        break;
      case 2:
        console.log('set username', msg);

        const username = msg

        const newMsg = {
          _id: uuidv4(),
          type: 'system',
          msg: `success! ${username}, you are now in chat ${this.state.room_id} (use this code for invites)`,
          timestamp: Date.now()
        }
        this.renderMsg(newMsg)

        this.setState({ username, chatInitialized: true })

        const joinMsg = {
          _id: uuidv4(),
          type: 'system',
          msg: `${username} just joined`,
          room_id: this.state.room_id,
          timestamp: Date.now()
        }

        this.joinRoom(joinMsg)

        break;
      default:

    }
  }

  sendMsg = (msg) => {
    console.log('sending', msg);
    this.state.client.sendMsg(msg)
    postMessage(msg)
  }

  receiveMsg = (data) => {
    console.log(data);
    this.renderMsg(data)
      .then(messages => {
        console.log('success!');
      })
  }

  joinRoom = (msg) => {
    this.state.client.joinRoom(msg)
  }

  render() {
    return (
      <div className="App">
        {this.renderMessages()}
        <MsgForm handleSubmitMsg={this.handleSubmitMsg} chatInitialized={this.state.chatInitialized}/>
      </div>
    );
  }
}

export default App;
