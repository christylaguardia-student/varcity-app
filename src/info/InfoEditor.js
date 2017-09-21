import React from 'react';
import { sportList } from '../utils/sports';
import { TextInput, Checkbox, DateInput, Dropdown, NumberInput, TextArea, UrlInput } from '../app/FormControls';

export default function InfoEditor({ id, props, save, change }) {
  const heightUOM = ['in', 'cm'];
  const weightUOM = ['lb', 'kg'];

  return (
    <div className="columns">
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
        
          <TextInput value={props.location.city} prop="city" label="City" change={change} />
          <TextInput value={props.location.region} prop="region" label="State/Region" change={change} />
          <TextInput value={props.location.country} prop="country" label="Country" change={change} />
        
          <TextInput value={props.gender} prop="gender" label="Gender" change={change} />
          <NumberInput value={props.person.height} prop="height" label="Height" change={change} />
          <Dropdown value={props.person.heightUom} prop="heightUom" label="Unit" options={heightUOM} change={change} />
          <NumberInput value={props.person.weight} prop="weight" label="Weight" change={change} />
          <Dropdown value={props.person.weightUom} prop="weightUom" label="Unit" options={weightUOM} change={change} />

          <UrlInput value={props.profileUrl} prop="profileUrl" label="Profile Image URL" change={change} />
          <UrlInput value={props.socials.facebookUrl} prop="facebookUrl" label="Facebook URL" change={change} />
          <UrlInput value={props.socials.twitterUrl} prop="twitterUrl" label="Twitter URL" change={change} />
          <UrlInput value={props.socials.instagramUrl} prop="instagramUrl" label="Instagram URL" change={change} />
        
          <TextArea value={props.about} prop="about" label="About" change={change} />
          <TextArea value={props.awards} prop="awards" label="Awards" change={change} />
        
          <input className="button" type="submit" value="Save" />
        </form>
      </div>
    </div>
  );
}
