import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateInfo } from '../store/athletes/actions';
import { getCountries, getRegions, getCities } from './address/actions';
import { sportList } from '../utils/sports';
import defaultValues from '../store/athletes/defaultValues';
import { TextInput, Checkbox, DateInput, Dropdown, NumberInput, TextArea } from './FormControls';

export default function InfoEditor({ id, props, save, change }) {
  const heightUOM = ['in', 'cm'];
  const weightUOM = ['lb', 'kg'];

  return (
    <div className="column">

      <form onSubmit={e => {
        e.preventDefault();
        const form = e.target;
        save(form.elements); }}>

        <TextInput value={props.firstName} prop="firstName" label="First Name" change={change} />
        {/* <TextInput prop={info.lastName} label="Last Name" change={({target}) => change({ lastName: target.value })} />
        <Checkbox prop={info.public} label="Public Profile?" change={({target}) => change({ public: target.value })} />
        <DateInput prop={info.dob} label="Birthday" change={({target}) => change({ dob: target.value })} /> */}
        
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
