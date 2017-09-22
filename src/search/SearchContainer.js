import { connect } from 'react-redux';
// import GlobalHeader from './GlobalHeader';
// import GlobalHeaderBulma from './GlobalHeaderBulma'
import { search } from '../search/actions';
import Search from './Search'


function mapDispatchToProps(dispatch) {
  return {
    search: ({payload}) => {
      dispatch(search({payload}));
    }
  };
}

const mapStateToProps = (state) => {
  return {
    authId: state.authId
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Search);
