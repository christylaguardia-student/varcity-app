import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from './actions';
import Pagination from '../search/Pagination';
import Card from '../search/Card';
import GlobalHeader from '../app/GlobalHeader'

export function Search({searcher}) {
//   console.log(searcher[0])

// let resultsArray = [];
// for (let i = 0; i < 9; i++) {
  // console.log(searcher[i].info)
  // let result = resultsArray.push(searcher[i])

// }

// console.log(resultsArray)

return (
      <div>


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
        <div>
          <Pagination />
        </div>
      </div>
    );
  }




const mapStateToProps = state => {
  return {
    searcher: state.searcher
  };
};

export default connect(
  mapStateToProps,
null


)(Search);
