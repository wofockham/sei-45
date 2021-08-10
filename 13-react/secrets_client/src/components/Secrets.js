import React, { Component } from 'react';

class Secrets extends Component {
  render() {
    return (
      <div>
        <h1>Tell me all your secrets</h1>
        <SecretForm sponsor="Touch N Go" />
        <SecretsList />
      </div>
    );
  }
}

class SecretForm extends Component {
  constructor() {
    super();
    this.state = { content: '' };
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(event) {
    this.setState({content: event.target.value});
  }

  render() {
    return (
      <form>
        <textarea onChange={ this._handleChange }></textarea>
        <input type="submit" value="Tell" />
      </form>
    )
  }
}

// Always expect to receive props.
const SecretsList = (props) => {
  return (
    <div>
      secrets list coming soon
    </div>
  )
};

export default Secrets;
