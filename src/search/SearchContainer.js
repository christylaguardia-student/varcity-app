import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Search extends Component {

  render() {
    return (
      <div>
        <h1>Search Container</h1>
        <input placeholder="search"/>
        <h3>Results</h3>
        <ul>
          <li><Link to="athletes/:id">Athlete 1</Link></li>
          <li><Link to="athletes/:id">Athlete 2</Link></li>
          <li><Link to="athletes/:id">Athlete 3</Link></li>
        </ul>
      </div>
    )
  }
}

export default Search;
