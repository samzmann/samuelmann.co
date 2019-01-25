import React, { Component } from 'react';
import '../styles/MsgForm.css';

export default class MsgForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    this.props.addNewMessage(this.state.value)
    this.setState({ value: '' })
    event.preventDefault();
  }

  render() {
    return (
      <form className="MsgForm-form" onSubmit={this.handleSubmit}>
        <label className="MsgForm-inputHolder">
        {'>'}
        <div style={{width: '10px'}}/>
        <input
          className="MsgForm-input"
          type="text"
          autofocus="true"
          value={this.state.value}
          onChange={this.handleChange}
        />
        </label>
      </form>
    );
  }
}
