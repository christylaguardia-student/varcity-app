import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import {getEducation, updateEducation} from './actions';
import { browserHistory } from 'react-router';
import EduList from './EduList';
import EduForm from './EduForm';


class EduPages extends React.Component {
  // componentWillMount() {
  //   if (this.props.educations[0].id == '') {
  //     this.props.actions.loadEducation();
  //   }
  // }
  render() {
    // const educations = this.props.educations;
    return (
      <div className="">
        <EduForm/>
        {/* <h1>Education<Link to={'/edu/new'} className="">Education ++</Link></h1>
        <div className="">
          <EduList educations={educations} />
        </div>
        <div className="">
          {this.props.children}
        </div> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  if (state.educations.length > 0) {
    return {
      educations: state.educations, 
      authId: state.authId
    };
  } else {
    return {
      educations: [{id: '', institution: '', year: '', address: '', degree: '', testScores: '' }]
    }
  }
}

const mapDispatchToProps = { getEducation, updateEducation };


// function mapDispatchToProps(dispatch) {
//   return {actions: bindActionCreators(actions, dispatch)}
// }

export default connect(mapStateToProps, mapDispatchToProps)(EduPages);