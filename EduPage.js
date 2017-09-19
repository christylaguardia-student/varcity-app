import React, { PropTypes } from  'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import EduList from './EduList';


class EduPages extends React.Component {
  render() {
    const educations = this.props.educations;
    return(
      <div className="thelist">
        <h1>Educations</h1>
      <div className="everylist">
        <EduList educations={this.props.educations} />
      </div>
      <div className="childrenprop" >
        {this.props.children}
        </div>
      </div> 
    );
  }
}

EduPages.PropTypes = {
 educations: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  let education = {
    institution: '', 
    year: '',
    address: '',
    degree: '',
    testScores: '' 
  }
  const catId = ownProps.params.id;
  if(state.educations.length > 0) {
    education = Object.assign({}, state.educations.find(education => education.id))
  }
  return {
      // education: education,
    educations: state.educations
  };
}

export default connect(mapStateToProps)(EduPage);


