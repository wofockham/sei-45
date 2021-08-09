import React, { Component } from 'react';
import axios from 'axios';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {query: '', images: []};
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(event) {
    this.setState({query: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault();

    const flickrURL = 'https://api.flickr.com/services/rest/';
    const flickrParams = {
      method: 'flickr.photos.search',
      api_key: '2f5ac274ecfac5a455f38745704ad084',
      text: this.state.query,
      format: 'json',
      nojsoncallback: 1 // why? read the Flickr docs if you're terribly bored.
    };

    axios(flickrURL, { params: flickrParams }).then((response) => {
      this.setState({images: response.data});
    });
  }

  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <input type="search" required onChange={ this._handleInput } />
        <input type="submit" value={ `Search for ${ this.state.query }` } />
      </form>
    );
  }
}

export default SearchForm;
