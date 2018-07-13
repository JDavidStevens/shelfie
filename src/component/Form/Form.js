import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      Image: '',
      Name: '',
      Price: ''
    };
  }

  updateImage(val) {
    this.setState({ Image: val });
  }

  updateName(val) {
    this.setState({ Name: val });
  }

  updatePrice(val) {
    this.setState({ Price: val });
  }

  render() {
    return (
      <div>
        <input onChange={e => this.updateImage(e.target.value)} />
        <input onChange={e => this.updateName(e.target.value)} />
        <input onChange={e => this.updatePrice(e.target.value)} />
        <button>Cancel</button>
        <button>Add To Inventory</button>
      </div>
    );
  }
}
