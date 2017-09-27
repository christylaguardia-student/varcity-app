import React from 'react';
import { connect } from 'react-redux';
import Pagination from '../search/Pagination';
import Card from '../search/Card';

export function Search({ search }) {
  if (search && search.length > 0 && !search.error) {
    return (
      <div>
        <div className="flexrow">
          {search.map((person, index) => {
            return (
              <div key={index} className="flexcol">
                <Card user={person.info} />
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
  return {
    search: state.search
  };
};

export default connect(mapStateToProps, null)(Search);
