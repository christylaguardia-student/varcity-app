import { connect } from 'react-redux';
import GlobalHeader from './GlobalHeader';
import { signIn, signUp, signOut } from './actions';
import { searchDb } from '../search/actions';
import {withRouter} from 'react-router-dom'


function mapDispatchToProps(dispatch) {
  return {
    searchDb: ({payload}) => {
      dispatch(searchDb({payload}));
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GlobalHeader));
