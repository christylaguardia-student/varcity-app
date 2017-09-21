import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInfo, updateInfo } from '../store/athletes/actions';
import { getCountries, getRegions, getCities } from './address/actions';
import InfoEditor from './InfoEditor';
import InfoPresentation from './InfoPresentation';

// TODO: how to get the exiting/initial values populated correctly?
// numbers inputs are not updating correctly
// location dropdowns need to be wired up with the api
// may need to merge FormControls with Stephanie's

export class InfoContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      info: {
        firstName: '',
        lastName: '',
        public: false,
        dob: '',
        primarySport: '',
        organization: '',
        location: {
          country: '',
          region: '',
          state: '',
        },
        person: {
          gender: '',
          height: 0,
          heightUom: '',
          weight: 0,
          weightUom: '',
        },
        about: '',
        awards: '',
        socials: {
          facebookUrl: '',
          twitterUrl: '',
          instagramUrl: '',
        }
      }
    };
    
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSave = this.handleOnSave.bind(this);
    this.updateInitialState = this.updateInitialState.bind(this);
  }

  componentWillMount() {
    this.props.getInfo(this.props.currentId);
  }

  updateInitialState() {
    const { info } = this.props.athletes[this.props.currentId];
    this.setState({ info });
  }

  handleOnChange(event) {
    const { name, value } = event.target;
    this.setState({
      info: { ...this.state.info, [name]: value }
    });
  }
  
  handleOnSave() {
    this.props.updateInfo(this.props.currentId, this.state);
  }

  render() {
    const { currentId, authId } = this.props;
    const editModeOn = (authId === currentId);
    // this.updateInitialState();

    return (
      <div>
        {editModeOn
          ? <InfoEditor id={this.props.currentId} props={this.state.info} change={this.handleOnChange} save={this.handleOnSave} />
          : <InfoPresentation info={this.state.info} /> }
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
    },
    getCountries: () => {
      dispatch(getCountries());
    },
    getRegions: (country) => {
      dispatch(getRegions(country));
    },
    getCities: (country, region) => {
      dispatch(getCities(country, region));
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
