import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEdu, updateSchools, updateTestScores } from './actions';
import EduForm from './EduForm';
import EduPresentation from './EduPresentation';
import { ToggleEditor } from '../app/FormControls';

export class EduPages extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editModeOn: false,
      editAllowed: this.props.authId === this.props.currentId,
      school: {
        institution: '',
        year: 2017,
        country: '',
        city: '',
        state: '',
        degree: ''
      },
      testScores: {
        satReading: '',
        satWriting: '',
        satMath: '',
        actMath: '',
        actReading: '',
        actScience: '',
        actWriting: '',
        ibHistory: '',
        ibLanguage: '',
        ibMath: '',
        ibScience: ''
      }
    }
    this.handleNewSchoolAddition = this.handleNewSchoolAddition.bind(this);
    this.handleNewSchoolSubmit = this.handleNewSchoolSubmit.bind(this);
    this.handleTestsUpdate = this.handleTestsUpdate.bind(this);
    this.handleTestsSubmit = this.handleTestsSubmit.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
  }
  
  componentDidMount() {
    this.props.getEdu(this.props.currentId);
  }

  handleNewSchoolAddition(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      school: { ...this.state.school, [name]: value }
    });
  }

  handleNewSchoolSubmit(e) {
    e.preventDefault();
    this.props.updateSchools(this.props.currentId, this.state.school);
  }

  handleTestsUpdate(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      testScores: { ...this.state.testScores, [name]: value }
    });
  }

  handleTestsSubmit(e) {
    e.preventDefault();
    this.props.updateTestScores(this.props.currentId, this.state.testScores);
  }

  toggleEditMode() {
    const newState = this.state.editModeOn ? false : true;
    this.setState({
      editModeOn: newState
    });
  }

  render() {
    const athlete = this.props.athletes[this.props.currentId];

    return (
      <div>
        {!athlete &&
          <a className="button is-loading">Loading</a>
        }
        {athlete && athlete.edu &&
          <div>
            {this.state.editAllowed
              ? <ToggleEditor text="Education" editModeOn={this.state.editModeOn} toggleFn={this.toggleEditMode} />
              : null}
            {this.state.editModeOn
              ? <EduForm onSchoolChange={this.handleNewSchoolAddition} onSchoolSubmit={this.handleSchoolSubmit} onTestChange={this.handleTestsUpdate} onTestSubmit={this.handleTestsSubmit} school={this.state.school} tests={this.state.testScores} />
              : <EduPresentation schools={athlete.edu.schools} testScores={athlete.edu.testScores} />}
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authId: state.authId,
    athletes: state.athletes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEdu: (id) => {
      dispatch(getEdu(id));
    },
    updateSchools: (id, data) => {
      dispatch(updateSchools(id, data));
    },
    updateTestScores: (id, data) => {
      dispatch(updateTestScores(id, data));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  (stateProps, dispatchProps, ownProps) => {
    return {
      ...stateProps,
      ...dispatchProps,
      currentId: ownProps.location.pathname.split('/athletes/')[1].split('/edu')[0],
    };
  })(EduPages);
