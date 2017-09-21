import React from 'react';
import { sportList } from '../utils/sports';
import { TextInput, Checkbox, DateInput, Dropdown, NumberInput, TextArea } from './FormControls';

export default function InfoEditor({ id, props, init, save, change }) {
  const heightUOM = ['in', 'cm'];
  const weightUOM = ['lb', 'kg'];

  return (
    <div className="column">

      <form onSubmit={e => {
        e.preventDefault();
        const form = e.target;
        save(form.elements); }}>

        <TextInput value={props.firstName} prop="firstName" label="First Name" change={change} />
        <TextInput value={props.lastName} prop="lastName" label="Last Name" change={change} />
        <Checkbox value={props.public} prop="public" label="Public Profile?" change={change} />
        <DateInput value={props.dob} prop="dob" label="Birthday" change={change} />
        
        <Dropdown value={props.primarySport} prop="primarySport" label="Primary Sport" options={sportList} change={change} />
        <TextInput value={props.position} prop="position" label="Position" change={change} />
        <TextInput value={props.organization} prop="organization" label="School/Organization" change={change} />
        
        <Dropdown value={props.location.country} prop="country" label="Country" options={sportList} change={change} />
        <Dropdown value={props.location.region} prop="region" label="State/Region" options={sportList} change={change} />
        <Dropdown value={props.location.city} prop="city" label="City" options={sportList} change={change} />
        
        <NumberInput value={props.person.height} prop="height" label="Height" change={change} />
        <Dropdown value={props.person.heightUom} prop="heightUom" label="Unit" options={heightUOM} change={change} />
        <NumberInput value={props.person.weight} prop="weight" label="Weight" change={change} />
        <Dropdown value={props.person.weightUom} prop="weightUom" label="Unit" options={weightUOM} change={change} />
        
        <TextArea value={props.about} prop="about" label="About" change={change} />
        <TextArea value={props.awards} prop="awards" label="Awards" change={change} />
        
        <input className="button" type="submit" value="Save" />
      </form>
    </div>
  );
}
