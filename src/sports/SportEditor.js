import React from 'react';
import { TextInput, DateInput, Dropdown } from '../app/FormControls';

export default function SportEditor({ sports, save, change }) {
  // console.log('SportEditor sports', sports);

  return (
    <div>
      <select className="input">
        {sports.map((sport, index) => {
          return <option key={index}>{sport.sport} {sport.seasonStart} - {sport.seasonEnd}</option>;
        })}
      </select>
      <input className="button" type="submit" value="Edit" />

      <Sport props={sports[0]} save={save} change={change} />
    </div>
  );
}

function Sport({ props, save, change }) {
  const sportList = [ 'Basketball', 'Baseball', 'Football', 'Soccer', 'Volleyball' ];
  const genderList = [ 'Boy\'s', 'Girl\'s', 'Men\'s', 'Women\'s' ];

  return (
    <div className="columns">
      <div className="column content">
        
        <form onSubmit={ e => {
          e.preventDefault();
          const form = e.target;
          save(form.elements); }}>

          <h3>Sport Info.</h3>
          <Dropdown value={props.sport} prop="sport" label="Sport" options={sportList} change={change} />
          <Dropdown value={props.sportGender} prop="sportGender" label="Gender" options={genderList} change={change} />
          <TextInput value={props.organization} prop="organization" label="Organization" change={change} />
          <TextInput value={props.position} prop="position" label="Position" change={change} />
          <DateInput value={props.seasonStart} prop="seasonStart" label="Season Start" change={change} />
          <DateInput value={props.seasonEnd} prop="seasonEnd" label="Season End" change={change} />

          <h3>Stats</h3>
          <form
            className="field is-grouped is-grouped-multiline"
            onSubmit={e => {
              e.preventDefault();
              const form = e.target;
              change(form.elements); }}>

            <input name="abbr"/>
            <input name="value" type="number" />
            <input className="button" type="submit" value="Add" />
          </form>

          <input className="button" type="submit" value="Save" />
          
        </form>
      </div>
    </div>
  );
}
