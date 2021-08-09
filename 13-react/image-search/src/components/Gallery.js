import React, { Component } from 'react';

class Gallery extends Component {
  render() {
    return (
      <div>
        { this.props.images.map((url) => <img src={url} />)}
      </div>
    )
  }
}

export default Gallery;
