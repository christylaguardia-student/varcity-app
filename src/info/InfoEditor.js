import React from 'react';

// import { TextInput, Checkbox, DateInput, Dropdown, NumberInput, TextArea, UrlInput } from '../app/FormControls';

export default function InfoEditor({ props, save, change }) {
  const heightUOM = ['in', 'cm'];
  const weightUOM = ['lb', 'kg'];
  const sportList = [ 'Basketball', 'Baseball', 'Football', 'Soccer', 'Volleyball' ];
  const genderList = [ 'Boy\'s', 'Girl\'s', 'Men\'s', 'Women\'s' ];

  return (
    <div className="columns">
      <div className="column">
        <form onSubmit={e => {
          e.preventDefault();
          const form = e.target;
          save(form.elements); }}>

          <input className="button" type="submit" value="Save" />

          <TextInput value={props.firstName} prop="firstName" label="First Name" change={change} />
          <TextInput value={props.lastName} prop="lastName" label="Last Name" change={change} />
          <Checkbox value={props.public} prop="public" label="Public Profile?" change={change} />

          <DateInput value={props.person.dob} prop="person.dob" label="Birthday" change={change} />

          <Dropdown value={props.primarySport} prop="primarySport" label="Primary Sport" options={sportList} change={change} />
          <Dropdown value={props.primarySportGender} prop="primarySportGender" label="Sport Gender" options={genderList} change={change} />
          <TextInput value={props.position} prop="position" label="Position" change={change} />
          <TextInput value={props.organization} prop="organization" label="School/Organization" change={change} />

          <TextInput value={props.location.city} prop="location.city" label="City" change={change} />
          <TextInput value={props.location.region} prop="location.region" label="State/Region" change={change} />
          <TextInput value={props.location.country} prop="location.country" label="Country" change={change} />

          <TextInput value={props.gender} prop="gender" label="Gender" change={change} />
          <NumberInput value={props.person.height} prop="person.height" label="Height" change={change} />
          <Dropdown value={props.person.heightUom} prop="person.heightUom" label="Unit" options={heightUOM} change={change} />
          <NumberInput value={props.person.weight} prop="person.weight" label="Weight" change={change} />
          <Dropdown value={props.person.weightUom} prop="person.weightUom" label="Unit" options={weightUOM} change={change} />

          <UrlInput value={props.profileUrl} prop="profileUrl" label="Profile Image URL" change={change} />
          <UrlInput value={props.socials.facebookUrl} prop="socials.facebookUrl" label="Facebook URL" change={change} />
          <UrlInput value={props.socials.twitterUrl} prop="socials.twitterUrl" label="Twitter URL" change={change} />
          <UrlInput value={props.socials.instagramUrl} prop="socials.instagramUrl" label="Instagram URL" change={change} />

          <TextArea value={props.about} prop="about" label="About" change={change} />
          <TextArea value={props.awards} prop="awards" label="Awards" change={change} />
        </form>
      </div>
    </div>
  );
}
