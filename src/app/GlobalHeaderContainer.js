import { connect } from 'react-redux';
import GlobalHeader from './GlobalHeader';
<<<<<<< HEAD
import { signIn, signUp, httpCallback } from './actions';
=======
import { signIn, signUp } from './actions';
>>>>>>> 447a4353b7ee1f675ec35c57051c364d24e91820

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
<<<<<<< HEAD
    };
};
=======

  }
}
>>>>>>> 447a4353b7ee1f675ec35c57051c364d24e91820

export default connect(mapStateToProps, mapDispatchToProps)(GlobalHeader);
