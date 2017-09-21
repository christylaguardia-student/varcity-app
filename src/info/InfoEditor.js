import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateInfo } from '../store/athletes/actions';
import { getCountries, getRegions, getCities } from './address/actions';
import { sportList } from '../utils/sports';
import defaultValues from '../store/athletes/defaultValues';
import { TextInput, Checkbox, DateInput, Dropdown, NumberInput, TextArea } from './FormControls';

// export class InfoEditor extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       info: {},
//       firstName: 'this.props.firstName',
//       lastName: 'this.props.lastName',
//     };
//   }

  // componentDidMount() {
  // //   this.props.getCountries();
  //   const { info } = this.props.athletes[this.props.currentId] || defaultValues[123];
  //   console.log('info', info);
  //   this.setState({ info });
  // }

  // 

  // handleOnChange(prop, value) {
  //   console.log('changed', prop, value);
  //   this.setState({ info: { prop: value} });
  // }

  // save() { console.log('saved', this.state); }

  // console.log('this.props', this.props);
  // console.log('this.state', this.state);
  // const { info } = this.props.athletes[this.props.currentId] || defaultValues[123];
  
function onChange() { console.log('changed'); }

export default function InfoEditor({ id, info, save, change }) {
  // console.log('InfoEditor',id, info, save, change);

  const heightUOM = ['in', 'cm'];
  const weightUOM = ['lb', 'kg'];

  function onChange() {}

  return (
    <div className="column">

      <form onSubmit={e => {
        e.preventDefault();
        const form = e.target;
        save(form.elements); }}>

        <TextInput prop={info.firstName} label="First Name" change={({target}) => change({ firstName: target.value })} />
        <TextInput prop={info.lastName} label="Last Name" change={onChange} />
        <Checkbox prop={info.public} label="Public Profile?" change={onChange} />
        <DateInput prop={info.dob} label="Birthday" change={onChange} />
        
        {/* <Dropdown prop={info.primarySport} label="Primary Sport" options={sportList} change={onChange} />
        <TextInput prop={info.position} label="Position" change={onChange} />
        <TextInput prop={info.organization} label="School/Organization" change={onChange} /> */}
        
        {/* <Dropdown prop={info.location.country} label="Country" options={sportList} change={onChange} />
        <Dropdown prop={info.location.state} label="State/Region" options={sportList} change={onChange} />
        <Dropdown prop={info.location.city} label="City" options={sportList} change={onChange} /> */}
        
        {/* <NumberInput prop={info.person.height} label="Height" change={onChange} />
        <Dropdown prop={info.person.heightUom} label="Unit" options={heightUOM} change={onChange} />
        <NumberInput prop={info.person.weight} label="Weight" change={onChange} />
        <Dropdown prop={info.person.weightUom} label="Unit" options={weightUOM} change={onChange} /> */}
        
        {/* <TextArea prop={info.about} label="About" change={onChange} />
        <TextArea prop={info.awards} label="Awards" change={onChange} /> */}
        
        <input className="button" type="submit" value="Save" />
      </form>
    </div>
  );
}


// const mapStateToProps = (state) => {
//   return {
//     currentId: state.currentId,
//     info: state.info
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateInfo: (id) => {
//       dispatch(updateInfo(id));
//     },
//     getCountries: () => {
//       dispatch(getCountries());
//     },
//     getRegions: (country) => {
//       dispatch(getRegions(country));
//     },
//     getCities: (country, region) => {
//       dispatch(getCities(country, region));
//     }
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
//   (stateProps, dispatchProps, ownProps) => {
//     return {
//       ...stateProps,
//       ...dispatchProps,
//       currentId: ownProps.location.pathname.split('/athletes/')[1],
//     };
//   })(InfoEditor);


// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
//   (stateProps, dispatchProps, ownProps) => {
//     return {
//       ...stateProps,
//       ...dispatchProps,
//       currentId: ownProps.currentId,
//       info: ownProps.currentId
//     };
//   })(InfoEditor);