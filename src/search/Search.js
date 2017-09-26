import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from './actions';
import Pagination from '../search/Pagination';
import Card from '../search/Card';
import GlobalHeader from '../app/GlobalHeader';

export function Search({ search }) {

  if (search.length > 0 && !search.error) {
    return (
      <div className="flexrow">
        {search.map((person, index) => {
          return (
            <div key={index} className="flexcol">
          <Card user={person.info} />
          </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

const mapStateToProps = state => {
  return {
    search: state.search
  };
};

export default connect(mapStateToProps, null)(Search);
