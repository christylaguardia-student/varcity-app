import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from './actions';
import Pagination from '../search/Pagination';
import Card from '../search/Card';
import GlobalHeader from '../app/GlobalHeader';

export function Search({ search }) {

  if (search && !search.error) {
    return (
    <div>
      {search.map((person, index) => {
      return <Card key={index} user={person.info} />
      })}
      </div>
      )
    } return null;
  }

const mapStateToProps = state => {
  return {
    search: state.search
  };
};


export default connect(mapStateToProps, null)(Search);



// let divString = '';
// if (index === 0 || index % 3 === 0) {
//   divString = '<div className="column">';
// } else if (index === 1 || index % 3 === 1) {
//   divString = '';
// } else if (index === 2 || index % 3 === 2) {
//   divString = '</div>';
// }
