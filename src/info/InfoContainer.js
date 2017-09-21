import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInfo, updateInfo } from '../store/athletes/actions';
import { getCountries, getRegions, getCities } from './address/actions';
import InfoEditor from './InfoEditor';
import { InfoPresentation } from './InfoPresentation';
import defaultValues from '../store/athletes/defaultValues';

export class InfoContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentWillMount() {
    this.props.getInfo(this.props.currentId);
  }

  // componentDidMount() {
  //   const { info } = this.props.athletes[this.props.currentId] || defaultValues[123];
  //   this.setState({ info });
  // }

  handleOnChange(prop) {
    console.log('prop',prop);
    this.setState(prop);
  }

  handleOnSave(prop) {
    this.props.updateInfo(this.props.currentId, prop);
  }


  // }
  
  render() {
    console.log('this.state',this.state);
    // const { currentId, authId } = this.props;
    // TODO: determine if edit mode is on, currentId === authId ?
    // TODO: check if public
    const editModeOn = true;
    const { info } = this.props.athletes[this.props.currentId] || defaultValues[123];
    // this.setState({ info });

    return (
      <div>
        {editModeOn
          ? <InfoEditor id={this.props.currentId} info={info} change={this.handleOnChange} save={this.handleOnSave} />
          : <InfoPresentation info={info} /> }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    athletes: state.athletes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getInfo: (id) => {
      dispatch(getInfo(id));
    },
    updateInfo: (id) => {
      dispatch(updateInfo(id));
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
