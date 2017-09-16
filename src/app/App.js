import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import GlobalNav from './GlobalNav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Varcity Network</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <GlobalNav />
      </div>
    );
  }
}

export default App;
