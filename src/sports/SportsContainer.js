import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSports, updateSports } from './actions';
import SportEditor from './SportEditor';
import SportPresentation from './SportPresentation';
import { ToggleEditor } from '../app/FormControls';
import defaultSports from './defaultSports';

export class SportsContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editAllowed: this.props.authId === this.props.currentId,
      editModeOn: false,
      sports: []
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSave = this.handleOnSave.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.checkIfHasProps = this.checkIfHasProps.bind(this);
  }

  componentWillMount() {
    this.props.getSports(this.props.currentId);
  }

  checkIfHasProps(props) {
    if (!props || props.length === 0) return defaultSports;
    return props;
  }

  handleOnChange(event) {
    const { name, value } = event.target;
    this.setState({
      sports: { ...this.state.sports, [name]: value }
    });
  }

  handleOnSave() {
    const newData = { sports: this.state.sports };
    this.props.updateSports(this.props.currentId, newData);
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

  render() {
    const athlete = this.props.athletes[this.props.currentId];

    return (
      <div>
        {this.state.editAllowed
          ? <ToggleEditor text="Sports" editModeOn={this.state.editModeOn} toggleFn={this.toggleEditMode} />
          : null }

        {(athlete && athlete.sports) && (this.state.editModeOn
          ? <SportEditor props={this.checkIfHasProps(athlete.sports)} change={this.handleOnChange} save={this.handleOnSave} />
          : <SportPresentation sports={this.checkIfHasProps(athlete.sports)} /> )}
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
    getSports: (id) => {
      dispatch(getSports(id));
    },
    updateSports: (id, data) => {
      dispatch(updateSports(id, data));
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
      currentId: ownProps.location.pathname.split('/athletes/')[1].split('/sports')[0],
    };
  })(SportsContainer);
