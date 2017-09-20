import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions';
import { browserHistory } from 'react-router';

class EduPages extends React.Component {
  componentWillMount() {
    if (this.props.educations[0].id == '') {
      this.props.actions.loadEducation();
    }
  }
  render() {
    const educations = this.props.educations;
    return (
      <div className="">
        <h1>Education<Link to={'/edu/new'} className="">Education ++</Link></h1>
        <div className="">
          <EduList educations={educations} />
        </div>
        <div className="">
          {this.props.children}
        </div>
      </div>
    );
  }
}

EduPages.propTypes = {
  educations: PropTypes.array.isRequired,
  children: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  if (state.cats.length > 0) {
    return {
      cats: state.educations
    };
  } else {
    return {
      cats: [{id: '', instutition: '', year: '', address: '', }]
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(EduPages);