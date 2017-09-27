import React from 'react';
import { TextInput, NumberInput, DateInput, Dropdown } from '../app/FormControls';

const defaultSports = [
  {
    sport: '',
    sportGender: '',
    organization: '',
    position: '',
    stats: [
      { abbr: '', value: 0 },
      { abbr: '', value: 0 },
      { abbr: '', value: 0 },
    ],
    seasonStart: '2016-10-01',
    seasonEnd: '2017-01-01'
  }
];

export default function SportEditor({ props, save, change }) {

  const { sport, sportGender, organization, position, stats, seasonStart, seasonEnd } = props;
  const sportList = [ 'Basketball', 'Baseball', 'Football', 'Soccer', 'Volleyball' ];
  const genderList = [ 'Boy\'s', 'Girl\'s', 'Men\'s', 'Women\'s' ];

  return (
    <div className="columns">
      <div className="column">
        Sports Editor
        <form onSubmit={ e => {
          e.preventDefault();
          const form = e.target;
          save(form.elements); }}>

          <input className="button" type="submit" value="Save" />
          
          <h3>Sports</h3>
          <Dropdown value={props.sport} prop="sport" label="Sport" options={sportList} change={change} />
          <Dropdown value={props.sportGender} prop="sportGender" label="Gender" options={genderList} change={change} />
          <TextInput value={props.organization} prop="organization" label="Organization" change={change} />
          <TextInput value={props.position} prop="position" label="Position" change={change} />

          <h3>Statistics</h3>
          {/* <TextInput value={props.position} prop="position" label="Position" change={change} />
          <TextInput prop={'statTitle'} label="Title" change={change} value={statTitle} />
          <NumberInput prop={'statScore'}label="Score" change={change} value={statScore}/>
          <DateInput prop="seasonDates" label="Season Played" change={change} value={seasonDates}/> */}
          
        </form>
      </div>
    </div>
  );
}
