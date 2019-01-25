import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount(){
    console.log('mounted');
    fetch('/api')
      .then(res => res.json())
      .then(resJson => { console.log(resJson) })
      .catch(err => { console.log(err) })
  }

  render() {
    return (
      <div className="App">
        <div className="App-sysmsg">welcome, let's chat</div>
        <div className="App-usrmsg">hi</div>
      </div>
    );
  }
}

export default App;
