import React from 'react';
import Card from '../search/Card';
import Pagination from '../search/Pagination';

export default function Search() {
  return (
    <div className="columns is-mobile is-3">
      <div className="column">
      <div className="field is-grouped">
        <p className="control is-expanded">
          <input className="input" type="text" placeholder="Find an athlete" />
        </p>
        <p className="control">
          <a className="button is-info">
            Search
          </a>
        </p>
      </div>
      <div>
        <h1 className="title">Search Results</h1>
        <div className="columns">
          <div className="column">
            <Card />
            <Card />
            <Card />
          </div>
          <div className="column">
            <Card />
            <Card />
            <Card />
          </div>
          <div className="column">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <Pagination />
    </div>
    </div>
  );
}
