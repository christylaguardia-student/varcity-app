import React, { Component } from 'react';
import GlobalHeader from './GlobalHeader';
// import GlobalHeaderContainer from './GlobalHeaderContainer';
import GlobalFooter from './GlobalFooter';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalHeader />
        {/* <GlobalHeaderContainer /> */}
        <GlobalFooter />
      </div>
    );
  }
}

export default App;
