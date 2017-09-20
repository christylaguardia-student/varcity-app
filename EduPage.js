import React, { PropTypes } from  'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import EduList from './EduList';
import { browserHistory } from 'react-router';


class EduPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      education: this.props.education,
      saving: false
    };
    this.saveEducation = this.saveEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    // this.updateEducationState = this.updateEducationState(this);
    // this.redirect = this.redirect.bind(this);
  };

componentWillReceiveProps(nextProps) {
  if (this.props.education.id !== nextProps.cat.id) {
  }
  this.setState({saving: false});
}  

updateEducationState(event) {
  const field = event.target.name;
  const education = this.state.education;
  education[field] = event.target.value;
  return this.setState({education: education})
}

saveEducation(event) {
  event.preventDefault();
  this.setState({saving: true});
  this.props.actions.updateEducation(this.state.education);
}

deleteEducation(event) {
  this.props.actions.deleteEducation(this.state.education)
}



  render(props, context) {
    const educations = this.props.educations;
    return(
      <div>
        <CatForm 
          cat={this.state.cat} 
          onSave={this.saveCat} 
          onChange={this.updateCatState} 
          onHobbyChange={this.updateCatHobbies}
          saving={this.state.saving}/> 
      </div>
      )
    }
    return (
      <div className="">
        <h1>{this.state.education.name}</h1>
        <p>breed: {this.state.education.breed}</p>
        <p>weight: {this.state.education.weight}</p>
        <p>temperament: {this.state.education.temperament}</p>
        <button onClick={this.deleteCat} className="btn btn-default  ">delete</button>
      </div> 
    );
  }
}

EduPage.PropTypes = {
 educations: PropTypes.array.isRequired
};

function getEducationById(educations, id) {
  let education = educations.find(education => edu.id == id)
  return Object.assign({}, education)
}

function mapStateToProps(state, ownProps) {
  let education = {
    institution: '', 
    year: '',
    address: '',
    degree: '',
    testScores: '' 
  }

  

  const eduId = ownProps.params.id;
  if(state.educations.length > 0) {
    education = getEducationById(state.cats, ownProps.params.id);
  }
  return {
      // education: education,
    educations: state.educations
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps)(EduPage);


