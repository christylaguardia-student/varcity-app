import React, { Component } from 'react';
import GlobalNav from './GlobalNav';
import GlobalFooter from './GlobalFooter';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalNav />
        <GlobalFooter />
      </div>
    );
  }
}

export default App;
