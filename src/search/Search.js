import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from './actions';
import Pagination from '../search/Pagination';
import Card from '../search/Card';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gotUsers: []
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  async handleSearch(searchTerm) {
    const { authId } = this.props;
    const payload = {searchTerm: searchTerm, id: authId }
    console.log(45,{payload });
    const found = await this.props.search({payload });
    console.log(105, found);

    return this.setState({ gotUsers: found });
  }

  render() {
    const { search, authId } = this.props;
    const { handleSearch, gotUsers } = this.state;
    console.log(99, this.props, 100, this.state, 101, this);
    return (
      <div>
        <div className="columns is-mobile is-3">
          <div className="column">
            <form
              onSubmit={e => {
                e.preventDefault();
                const form = e.target;
                const { searchTerm } = form.elements;
                this.handleSearch(searchTerm.value);
              }}>
              <div className="field is-grouped">
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="searchTerm"
                    placeholder="Find an athlete"
                  />
                </div>
              </div>
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-primary">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div>
          <h1 className="title">Search Results</h1>
          {gotUsers}
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
}

function mapDispatchToProps(dispatch) {
  return {
    search: ({ payload }) => {
      dispatch(search({ payload }));
    }
  };
}

const mapStateToProps = state => {
  return {
    authId: state.authId
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  (stateProps, dispatchProps, ownProps) => {
    return {
      ...stateProps,
      ...dispatchProps,
      searchTerm: ownProps.searchTerm,
      gotUsers: ownProps.gotUsers
    };
  }
)(Search);
