import React, { Component } from 'react';
import GlobalHeaderContainer from './GlobalHeaderContainer';
import GlobalFooter from './GlobalFooter';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalHeaderContainer />
        <GlobalFooter />
      </div>
    );
  }
}

export default App;
