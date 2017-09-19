import React, { Component } from 'react';
import GlobalHeader from './GlobalHeader';
import GlobalFooter from './GlobalFooter';
import Home from './Home';
import Education from './Education';


import { PropTypes } from 'react';
import Header from './Header'

class App extends Component {
  render() {
    return (
      // <div>
      //   <GlobalHeader />
      //   <GlobalFooter />
      // </div>

      <div className="container-fluid">
      <Header />
      {this.props.children}
    </div>
    );
  }
}

export default App;
