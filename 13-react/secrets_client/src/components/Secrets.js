import React, { Component } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/secrets.json';

class Secrets extends Component {
  constructor() {
    super();
    this.state = {
      secrets: []
    };

    this.saveSecret = this.saveSecret.bind(this);
  }

  // Initial AJAX requests should go in componentDidMount() which is called automatically.
  componentDidMount() {
    const fetchSecrets = () => {
      axios.get(SERVER_URL).then((results) => {
        this.setState({secrets: results.data});
        setTimeout(fetchSecrets, 5000); // recreate setInterval by calling setTimeout recursively.
      });
    };
    fetchSecrets();
  }

  saveSecret(content) {
    const secret = {id: Math.random(), content: content}; // TODO: send this to the server
    this.setState({secrets: [...this.state.secrets, secret]}); // ... spread operator
  }

  render() {
    return (
      <div>
        <h1>Tell me all your secrets</h1>
        <SecretForm onSubmit={ this.saveSecret } />
        <SecretsList secrets={ this.state.secrets } />
      </div>
    );
  }
}

class SecretForm extends Component {
  constructor() {
    super();
    this.state = { content: '' };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.content);
    this.setState({content: ''});
  }

  _handleChange(event) {
    this.setState({content: event.target.value});
  }

  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <textarea onChange={ this._handleChange } value={ this.state.content }></textarea>
        <input type="submit" value="Tell" />
      </form>
    )
  }
}

// Always expect to receive props.
const SecretsList = (props) => {
  return (
    <div>
      { props.secrets.map( (s) => <p key={ s.id }>{ s.content }</p> ) }
    </div>
  )
};

export default Secrets;
