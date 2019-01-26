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
      .then(res => this.setState({ messages: res }))
      .catch(err => console.log(err))

  }

  renderMessages = () => {
    const { messages } = this.state
    return messages.map((msg, index) => {

      const d = new Date(msg.timestamp)
      const dM1 = messages[index-1] ? new Date(messages[index-1].timestamp) : null
      const showDateInfo = !dM1 || ((d - dM1) > 60000)

      return (
        <div key={msg._id}>
          {showDateInfo &&
            <div className="App-line">{`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}`}</div>
          }
          <div className={`App-line ${msg.type === 'user' ? "App-usrmsg" : "App-sysmsg"}`}>{msg.msg}</div>
        </div>
      )
    })
  }

  addNewMessage = (msg) => {
    const { messages } = this.state
    const newMsg = {
      _id: messages.length,
      type: msg.type,
      msg: msg.msg,
      timestamp: msg.timestamp
    }
    this.setState({ messages: [...this.state.messages, newMsg] })
  }

  render() {
    return (
      <div className="App">
        <div className="App-line App-sysmsg">welcome, let's chat</div>
        {this.renderMessages()}
        <MsgForm addNewMessage={this.addNewMessage}/>
      </div>
    );
  }
}

export default App;
