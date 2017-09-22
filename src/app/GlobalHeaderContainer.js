import { connect } from 'react-redux';
import GlobalHeader from './GlobalHeader';
import GlobalHeaderBulma from './GlobalHeaderBulma'
import { signIn, signUp, signOut } from './actions';
import { search } from '../search/actions';


function mapDispatchToProps(dispatch) {
  return {
    search: ({payload}) => {
      dispatch(search({payload}));
    },
    signUp: ({payload}) => {
      dispatch(signUp({payload}));
    },
    signIn: ({payload}) => {
      dispatch(signIn({payload}));
    },
    signOut: () => {
      dispatch(signOut());
    }
  };
}

const mapStateToProps = (state) => {
  return {
    authId: state.authId
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(GlobalHeader);
