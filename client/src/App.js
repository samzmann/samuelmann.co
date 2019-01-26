import React, { Component } from 'react';
import './styles/App.css';
import MsgForm from './components/MsgForm'
import { getAllMessages } from './utils'

class App extends Component {

  state = {
    messages: [],
    msgInProgress: 'hey'
  }

  componentDidMount(){

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

  renderMessages = () => {
    const { messages } = this.state
    return messages.map((msg, index) => {

      const d = new Date(msg.timestamp)
      const dM1 = messages[index-1] ? new Date(messages[index-1].timestamp) : null
      const showDateInfo = !dM1 || ((d - dM1) > 60000) || dM1 > d

      return <div key={msg._id} className={`App-line ${msg.type === 'user' ? "App-usrmsg" : "App-sysmsg"}`}>{showDateInfo ? `[${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}]` : ''} {msg.msg}</div>
    })
  }

  addNewMessage = (msg) => {
    return new Promise((resolve, reject) => {
      const { messages } = this.state
      const newMsg = {
        _id: messages.length,
        type: msg.type,
        msg: msg.msg,
        timestamp: msg.timestamp
      }
      this.setState({ messages: [...this.state.messages, newMsg] }, () => {
        resolve(this.state.messages)
      })
    })
  }

  render() {
    return (
      <div className="App">
        {this.renderMessages()}
        <MsgForm addNewMessage={this.addNewMessage}/>
      </div>
    );
  }
}

export default App;
