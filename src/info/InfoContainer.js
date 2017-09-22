import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getInfo, updateInfo } from '../store/athletes/actions';
import InfoEditor from './InfoEditor';
import InfoPresentation from './InfoPresentation';
import { ToggleEditor } from '../app/FormControls';

const defaultInfo = {
  firstName: '',
  lastName: '',
  public: false,
  profileUrl: '',
  primarySport: '',
  primarySportGender: '',
  position: '',
  person: {
    dob: '2017-09-20',
    gender: '', 
    height: 0,
    heightUom: 'in',
    weight: 0,
    weightUom: 'lb'
  },
  organization: '',
  location: {
    city: '',
    state: '',
    country: '',
  },
  socials: {
    facebookUrl: '',
    twitterUrl: '',
    instagramUrl: '',
  }
};

export class InfoContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editAllowed: this.props.authId === this.props.currentId,
      editModeOn: false,
      info: {}
    };
    
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSave = this.handleOnSave.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.checkIfHasProps = this.checkIfHasProps.bind(this);
  }

  componentWillMount() {
    this.props.getInfo(this.props.currentId);
  }

  handleOnChange(event) {
    const { name, value } = event.target;
    this.setState({
      info: { ...this.state.info, [name]: value }
    });
  }
  
  handleOnSave() {
    const newData = { info: this.state.info };
    this.props.updateInfo(this.props.currentId, newData);
  }

  toggleEditMode() {
    if (this.state.editAllowed) {
      const newState = this.state.editModeOn ? false : true;
      this.setState({
        editModeOn: newState
      });
    }
  }

  checkIfHasProps(props) {
    let keys = Object.keys(props);
  
    // has no props
    if (keys.length===0) return defaultInfo;
    
    // has some props
    let defaultKeys = Object.keys(defaultInfo);
    for (let i=0; i<defaultKeys.length; i++) {
      if (!keys.includes(defaultKeys[i])) {
        props[defaultKeys[i]] = defaultInfo[defaultKeys[i]];
      }
    }
    return props;
  }

  render() {
    const athlete = this.props.athletes[this.props.currentId];
    console.log('props in InfoContainer', this.props);

    return (
      <div>
        {this.state.editAllowed
          ? <ToggleEditor text="Info" editModeOn={this.state.editModeOn} toggleFn={this.toggleEditMode} />
          : null }
        
        {(athlete && athlete.info) && (this.state.editModeOn
          ? <InfoEditor props={this.checkIfHasProps(athlete.info)} change={this.handleOnChange} save={this.handleOnSave} />
          : <InfoPresentation info={this.checkIfHasProps(athlete.info)} /> )}
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
    getInfo: (id) => {
      dispatch(getInfo(id));
    },
    updateInfo: (id, data) => {
      dispatch(updateInfo(id, data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  (stateProps, dispatchProps, ownProps) => {
    return {
      ...stateProps,
      ...dispatchProps,
      currentId: ownProps.location.pathname.split('/athletes/')[1],
    };
  })(InfoContainer);
