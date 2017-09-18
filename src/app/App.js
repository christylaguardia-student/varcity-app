import React, { Component } from 'react';
import GlobalHeader from './GlobalHeader';
import GlobalFooter from './GlobalFooter';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalHeader />
        <GlobalFooter />
      </div>
    );
  }
}

export default App;
