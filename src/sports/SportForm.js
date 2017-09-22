import React, { Component, PropTypes } from 'react';
import { TextInput, NumberInput, Dropdown, DateInput } from '../app/FormControls';
import {getSport, updateSport} from './actions';
import { connect } from 'react-redux';

// export function SportForm(onSubmit, onChange, onDelete) 


function SportForm({ onSubmit, onChange, props, id, updateSport }) {
  
    const { sport, organization, position, statTitle, statScore, seasonDates} = props;

      return (
        <div className="column">
          <div>
            <p>
              <span><icon className="fa fa-check fa-lg" /></span>
              <span><icon className="fa fa-pencil fa-lg" /></span>
            </p>
          </div>
          <form onSubmit={ e => {e.preventDefault();
            const form = e.target;
            updateSport(id, form.elements)}}>
            <div className="field">
            <TextInput prop="sport" label="Sport" change={onChange} value={sport}/>
            <TextInput prop="organization" label="Organization" change={onChange} value={organization}/>
            <TextInput prop="position" label="Position" change={onChange} value={position}/>
            <label className="label">Statistic</label>
            <TextInput prop={"statTitle"} label="Title" change={onChange} value={statTitle} />
            <NumberInput prop={"statScore"}label="Score" change={onChange} value={statScore}/>
            <DateInput prop="seasonDates" label="Season Played" change={onChange} value={seasonDates}/>
            </div> 
            <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  const mapDispatchToProps = { updateSport };
  export default connect(null, mapDispatchToProps)(SportForm);
  