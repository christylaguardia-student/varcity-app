import React from 'react';
import { connect } from 'react-redux';
import Pagination from '../search/Pagination';
import Card from '../search/Card';

export function Search({ search, currentId }) {
  if (search && search.length > 0 && !search.error) {
    return (
      <div>
        <div className="flexrow">
          {search.map(person => {
            return (
              <div key={person._id} className="flexcol">
                <Card user={person} />
              </div>
            );
          })}
        </div>
        <Pagination users={search} />
      </div>
    );
  } else {
    return null;
  }
}

const mapStateToProps = state => {
  console.log(565656, state)
  return {
    search: state.search
  };
};

export default connect(mapStateToProps, null)(Search);
