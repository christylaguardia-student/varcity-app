import React from 'react';
import { connect } from 'react-redux';
// import {bindActionCreators} from 'redux';
import { getSport, updateSport } from './actions';
// import { browserHistory } from 'react-router';
// import SportList from './SportList';
import SportForm from './SportForm';
import SportPresentation from './SportPresentation';
import { ToggleEditor } from '../app/FormControls';


export default class SportPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editModeOn: false,
      sports: {
        sport: '',
        organization: '',
        position: '',
        statTitle: '',
        statScore: '',
      seasonDates: ''
    }
  }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
  }
  // componentWillMount() {
  //   if (this.props.sports[0].id == '') {
  //     this.props.actions.loadSport();
  //   }
  // }

  handleChange(event) {
    this.setState({
      sports: {
        [event.target.name]: event.target.value
      }
    });
  }

  handleSubmit (){

  }

  toggleEditMode() {
    const newState = this.state.editModeOn ? false : true;
    this.setState({
      editModeOn: newState
    });
  }


  render() {
    // const sports = this.props.sports;
    return (
      <div className="">

        <ToggleEditor text="Info" editModeOn={this.state.editModeOn} toggleFn={this.toggleEditMode} />

        {this.state.editModeOn
          ? <SportForm onSubmit={this.handleSubmit} onChange={this.handleChange} props={this.state.sports} id= {this.props.authId}/>
          : <SportPresentation />
        }

        {/* <SportPresent />  */}
        {/* <h1>Sports<Link to={'/sport/new'} className="">Sport ++</Link></h1>
        <div className="">
          <SportList sports={sports} />
        </div>
        <div className="">
          {this.props.children}
        </div> */}
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   if (state.sports.length > 0) {
//     return {
//       sports: state.sports,
//       authId: state.authId
//     };
//   } else {
//     return {
//       sports: [{
//         sport: '',
//         organization: '',
//         position: '',
//         statTitle: '',
//         statScore: '',
//         seasonDates: ''
//       }],
//       authId: state.authId
//     }
//   }
// }


//   const mapDispatchToProps = { getSport, updateSport };


  // function mapDispatchToProps(dispatch) {
  //   return {actions: bindActionCreators(actions, dispatch)}
  // }

  // export default connect(mapStateToProps, mapDispatchToProps)(SportPage);