import { connect } from 'react-redux';
import GlobalHeader from './GlobalHeader';
import { signIn, signUp, signOut } from './actions';
import { searchDb } from '../search/actions';
import { getInfo } from '../store/athletes/actions';
import { withRouter } from 'react-router-dom';

function mapDispatchToProps(dispatch) {
  return {
    getInfo: id => {
      dispatch(getInfo(id));
    },
    searchDb: ({ payload }) => {
      dispatch(searchDb({ payload }));
    },
    signUp: ({ payload }) => {
      dispatch(signUp({ payload }));
    },
    signIn: ({ payload }) => {
      dispatch(signIn({ payload }));
    },
    signOut: () => {
      dispatch(signOut());
    }
  };
}

const mapStateToProps = state => {

  return {
    authId: state.authId,
    id: state.id
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    (stateProps, dispatchProps, ownProps) => {
      return {
        ...stateProps,
        ...dispatchProps,
        currentId: ownProps.location.pathname.split('/athletes/')[1]
      };
    }
  )(GlobalHeader)
);
