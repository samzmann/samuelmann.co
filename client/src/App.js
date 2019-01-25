import React, { Component } from 'react';
import './styles/App.css';
import MsgForm from './components/MsgForm'
import { callApi } from './utils'

class App extends Component {

  state = {
    messages: [],
    msgInProgress: 'hey'
  }

  componentDidMount(){

    callApi()
      .then(res => {
        console.log(res)
        this.setState({ messages: res.messages })
      })
      .catch(err => {console.log(err)})

  }

  renderMessages = () => {
    const { messages } = this.state
    return messages.map(msg => {
      return <div key={msg.id} className={`App-line ${msg.type == 'user' ? "App-usrmsg" : "App-sysmsg"}`}>{msg.msg}</div>
    })
  }

  addNewMessage = (msg) => {
    const { messages } = this.state
    const newMsg = {
      id: messages.length,
      type: 'user',
      msg
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
