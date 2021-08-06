import React, { Component } from 'react';

// React is obsessed with state.

class Clickr extends Component {
  constructor() {
    super(); // You must call super().
    this.state = {
      clicks: 0 // Put information that will inside state so React can monitor.
    };

    // Event handlers need to be bound (for extremely boring technical reasons).
    this._incrementCount = this._incrementCount.bind(this); // WTF? You need this, trust me.
  }

  // Event handlers start with an _ (by convention)
  _incrementCount() {
    this.setState({clicks: this.state.clicks + 1}); // No mutation.
  }

  // render() runs automatically whenever the state changes (via setState).
  render() {
    return (
      <button onClick={ this._incrementCount }>
        { this.state.clicks } clicks so far
      </button>
    )
  }
}

export default Clickr;
