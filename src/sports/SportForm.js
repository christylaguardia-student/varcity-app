import React, { Component, PropTypes } from 'react';
import { TextInput, NumberInput, Dropdown, DateInput } from '../app/FormControls';

// export function SportForm(onSubmit, onChange, onDelete) 


export default function SportForm({ onSubmit, onChange, props }) {
  
    const { sport, organization, position, stat, seasonDates} = props;
      return (
        <div className="column">
          <div>
            <p>
              <span><icon className="fa fa-check fa-lg" /></span>
              <span><icon className="fa fa-pencil fa-lg" /></span>
            </p>
          </div>
          <form onSubmit={onSubmit}>
            <div className="field">
            <TextInput prop='sport' label="Sport" change={onChange} value={sport}/>
            <TextInput prop='organization' label="Organization" change={onChange} value={organization}/>
            <TextInput prop='position' label="Position" change={onChange} value={position}/>
            <NumberInput prop='stat' label="Statistics" change={onChange} value={stat}/>
            <DateInput prop='seasonDates' label="Season Played" change={onChange} value={seasonDates}/>
            </div> 
            <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }