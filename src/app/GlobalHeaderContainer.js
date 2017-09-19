import { connect } from 'react-redux';
import GlobalHeader from './GlobalHeader';

import { signIn, signUp } from './actions';

function mapDispatchToProps(dispatch) {
  return {
    signUp: (email, password) => {
      dispatch(signUp(email, password));
    },
    signIn: (email, password) => {
      dispatch(signIn(email, password));
    }
  };
}

const mapStateToProps = (state) => {
  return {
    id: state.id,
    authorized: state.authorized
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(GlobalHeader);
