import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: []
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard />
        <Form />
      </div>
    );
  }
}

export default App;
