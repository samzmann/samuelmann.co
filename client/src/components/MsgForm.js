import React, { Component } from 'react';
import '../styles/MsgForm.css';
import { postMessage } from '../utils'

export default class MsgForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
  }

  componentDidMount(){
    this._input.focus();
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  handleSubmit = (event) => {
    if (this.state.value.length > 0) {

      const data = {
        msg: this.state.value,
        type: 'user',
        timestamp: Date.now()
      }

      this.props.addNewMessage(data)

      postMessage(data)
        .then(() => this.setState({ value: '' }))
        .catch(err => console.log(err))
      this.setState({ value: '' })
    }
    event.preventDefault();
  }

  render() {
    return (
      <form className="MsgForm-form" onSubmit={this.handleSubmit}>
        <label className="MsgForm-inputHolder">
        {'>'}
        <div style={{width: '10px'}}/>
        <input
          ref={r => { this._input = r }}
          className="MsgForm-input"
          type="text"
          // autofocus="true"
          value={this.state.value}
          onChange={this.handleChange}
        />
        </label>
      </form>
    );
  }
}
