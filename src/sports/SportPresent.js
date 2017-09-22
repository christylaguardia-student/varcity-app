import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSport, makeUpdateSport } from './actions';
import { browserHistory } from 'react-router';
import { TextInput, TextArea, NumberInput, DateInput, Toggle, TextSelect, UrlInput } from '../app/FormControls';
import SportForm from './SportForm';

 class SportPresent extends Component{
    constructor(props) {
      super(props);
      this.state = {
        sport: {
          sport: '',
          organization: '',
          position: '',
          statTitle: '',
          statScore: '',
        seasonDates: ''        }
      }
      this.saveSport = this.saveSport.bind(this);
      this.updateSportState = this.updateSportState.bind(this);
    }

    saveSport(event) {
      event.preventDefault();
      this.props.actions.updateSport(this.state.sport)
    }
    
    updateSportState(event) {
      const field = event.target.name;
      const sport = this.state.sport;
      sport[field] = event.target.value;
      return this.setState({sport: sport});
    }



   render() { 
     return (
       <div className="column">
         <div>
           <p>
             <span><icon className="fa fa-check fa-lg" /></span>
             <span><icon className="fa fa-pencil fa-lg" /></span>
           </p>
         </div>
         <SportForm
          sport={this.state.sport}
          onSubmit={this.save.sport}
          onChange={this.updateSportState} />
       </div>
     );
   }
 }

function mapStateToProps(state) {
  if (state.sports.length > 0) {
    return {
      sports: state.sports,
      authId: state.authId
    };
  } else {
    return {
      sports: [{
        sport: '',
        organization: '',
        position: '',
        statTitle: '',
        statScore: '',
        seasonDates: ''
      }],
      authId: state.authId
    }
  }
}
 const mapDispatchToProps = { getSport, updateSport};

 export default connect(mapStateToProps, mapDispatchToProps)(SportPresent);
