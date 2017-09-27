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
  profileUrl: '/images/default-profile.png',
  primarySport: '',
  primarySportGender: '',
  position: '',
  person: {
    dob: new Date('2017-09-22'),
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
    country: ''
  },
  socials: {
    facebookUrl: 'https://www.facebook.com/',
    twitterUrl: 'https://www.twitter.com/',
    instagramUrl: 'https://www.instagram.com/'
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
    this.setState({ editModeOn: false });
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
    if (keys.length === 0) return defaultInfo;

    if (!props.firstName) props.firstName = defaultInfo.firstName;
    if (!props.lastName) props.lastName = defaultInfo.lastName;
    if (!props.public) props.public = defaultInfo.public;
    if (!props.profileUrl) props.profileUrl = defaultInfo.profileUrl;
    if (!props.primarySport) props.primarySport = defaultInfo.primarySport;
    if (!props.primarySportGender)
      props.primarySportGender = defaultInfo.primarySportGender;
    if (!props.position) props.position = defaultInfo.position;
    if (!props.person) props.person = defaultInfo.person;
    if (!props.person.dob) props.person.dob = defaultInfo.person.dob;
    if (!props.person.gender) props.person.gender = defaultInfo.person.gender;
    if (!props.person.height) props.person.height = defaultInfo.person.height;
    if (!props.person.heightUom)
      props.person.heightUom = defaultInfo.person.heightUom;
    if (!props.person.weight) props.person.weight = defaultInfo.person.weight;
    if (!props.person.weightUom)
      props.person.weightUom = defaultInfo.person.weightUom;
    if (!props.organization) props.organization = defaultInfo.organization;
    if (!props.location) props.location = defaultInfo.location;
    if (!props.location.city) props.location.city = defaultInfo.location.city;
    if (!props.location.state)
      props.location.state = defaultInfo.location.state;
    if (!props.location.country)
      props.location.country = defaultInfo.location.country;
    if (!props.socials) props.socials = defaultInfo.socials;
    if (!props.socials.facebookUrl)
      props.socials.facebookUrl = defaultInfo.socials.facebookUrl;
    if (!props.socials.twitterUrl)
      props.socials.twitterUrl = defaultInfo.socials.twitterUrl;
    if (!props.socials.instagramUrl)
      props.socials.instagramUrl = defaultInfo.socials.instagramUrl;

    return props;
  }

  render() {

    const athlete = this.props.athletes[this.props.currentId];

    return (
      <div>
        {this.state.editAllowed ? (
          <ToggleEditor
            text="Info"
            editModeOn={this.state.editModeOn}
            toggleFn={this.toggleEditMode}
          />
        ) : null}

        {athlete &&
          athlete.info &&
          (this.state.editModeOn ? (
            <InfoEditor
              props={this.checkIfHasProps(athlete.info)}
              change={this.handleOnChange}
              save={this.handleOnSave}
            />
          ) : (
            <InfoPresentation info={this.checkIfHasProps(athlete.info)} />
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authId: state.authId,
    athletes: state.athletes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getInfo: id => {
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
      currentId: ownProps.location.pathname.split('/athletes/')[1]
    };
  }
)(InfoContainer);
