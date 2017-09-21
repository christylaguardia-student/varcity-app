import { connect } from 'react-redux';
import GlobalHeader from './GlobalHeader';
import { signIn, signUp, signOut } from './actions';

function mapDispatchToProps(dispatch) {
  return {
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
    id: state.id,
    authId: state.authId
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(GlobalHeader);
